import { execSync } from "child_process";
import fs from "fs";
import makeDir from "make-dir";
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
  await runPostInstallTasks(rootPath);
  // TODO: Add and install dependencies
  // TODO: Add Prisma
}

async function runPostInstallTasks(rootPath: string) {
  const originalCwd = process.cwd();
  process.chdir(rootPath);
  installDependencies();
  initializePrisma();
  process.chdir(originalCwd);
}

function installDependencies() {
  // TODO: Show the output of these calls
  execSync(
    "npm install -D ts-node typescript webpack-cli webpack ts-loader react react-dom @types/react type-fest @types/react-dom @types/express prisma",
  );
  execSync(
    "npm install --registry=https://registry.able.co @ableco/abledev-dev-environment @ableco/abledev-react express ",
  );
}

function initializePrisma() {
  // TODO: Show the output of these calls
  execSync("npx prisma init");
  // TODO: Add dummy prisma model so prisma generate can generate the prisma client
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
      "abledev/devServer.ts": true,
      "abledev/createHandleRequest.ts": true,
      "abledev/backend-functions/index.ts": true,
    },
  );
}

export default createNewComponent;
