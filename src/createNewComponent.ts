import { execSync } from "child_process";
import fs from "fs";
import fsPromises from "fs/promises";
import makeDir from "make-dir";
import path from "path";
import createFiles from "./createFiles";

async function createNewComponent(
  componentName: string,
  rootPath: string,
  override: boolean,
) {
  if (fs.existsSync(rootPath) && !override) {
    throw new Error(`This folder already exists: ${rootPath}`);
  }
  await createNewComponentFiles(componentName, rootPath);
  await runPostInstallTasks(componentName, rootPath);
}

async function runPostInstallTasks(componentName: string, rootPath: string) {
  installDependencies(rootPath);
  initializePrisma(rootPath, componentName);
}

const DEPENDENCIES = [
  "@ableco/abledev-dev-environment",
  "@ableco/abledev-react",
  "express",
].join(" ");

const DEV_DEPENDENCIES = [
  "webpack",
  "webpack-cli",
  "ts-loader",
  "ts-node",
  "typescript",
  "type-fest",
  "react",
  "@types/react",
  "react-dom",
  "@types/react-dom",
  "prisma",
  "@types/express",
].join(" ");

function installDependencies(rootPath: string) {
  const npmFlags = "--registry=https://registry.able.co";

  execCommand(rootPath, `npm install ${DEPENDENCIES} ${npmFlags}`);
  execCommand(rootPath, `npm install -D ${DEV_DEPENDENCIES} ${npmFlags}`);
}

function execCommand(rootPath: string, command: string) {
  execSync(command, {
    stdio: ["inherit", "inherit", "inherit"],
    cwd: rootPath,
  });
}

async function initializePrisma(rootPath: string, componentName: string) {
  execCommand(rootPath, "npx prisma init");
  await updateDatabaseUrl(rootPath, componentName);
  await createDummyModel(rootPath);
  execCommand(rootPath, "npx prisma migrate dev --name initial");
}

async function updateDatabaseUrl(rootPath: string, componentName: string) {
  const databaseName = `abledev_${componentName}`;
  const user = execSync("whoami").toString().trim();
  const code = `DATABASE_URL="postgresql://${user}@localhost:5432/${databaseName}"\n`;

  createDatabase(rootPath, user, databaseName);
  await fsPromises.writeFile(path.join(rootPath, ".env"), code);
}

function createDatabase(rootPath: string, user: string, databaseName: string) {
  const command = `psql -U ${user} -tc "SELECT 1 FROM pg_database WHERE datname = '${databaseName}';" | grep -q 1 || psql -U ${user} -c "CREATE DATABASE ${databaseName};"`;
  execCommand(rootPath, command);
}

async function createDummyModel(rootPath: string) {
  const code = `model Dummy {
  id Int @id @default(autoincrement())
}`;
  await fsPromises.appendFile(
    path.join(rootPath, "prisma", "schema.prisma"),
    code,
  );
}

async function createNewComponentFiles(
  componentName: string,
  rootPath: string,
) {
  await createFiles(
    {
      rootPath: await makeDir(rootPath),
      templatesRoot: "./templates/new",
      variables: { componentName },
    },
    {
      "package.json": true,
      "webpack.config.dev.ts": true,
      "webpack.config.build.ts": true,
      ".npmrc": "npmrc",
      ".prettierrc.json": "prettierrc.json", // dotfiles fail to import,
      "tsconfig.json": "tsconfig.jsonc", // TS will try to use this file if it's named tsconfig.json
      "preview/index.html": true,
      "preview/index.tsx": true,
      "preview/getPreviewData.ts": true,
      "preview/Preview.tsx": true,
      "src/index.tsx": true,
      [`src/${componentName}.tsx`]: "src/Component.tsx",
      "src/HostContext.ts": true,
      "src/queries/getData.ts": true,
      "abledev/devServer.ts": true,
      "abledev/createHandleRequest.ts": true,
      "abledev/backend-functions/index.ts": true,
    },
  );
}

export default createNewComponent;
