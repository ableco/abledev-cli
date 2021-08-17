import makeDir from "make-dir";
import createFiles from "./createFiles";

async function createNewComponent(componentName: string) {
  // TODO: Make rootPath configurable
  // TODO: If folder exists, abort mission
  await createNewComponentFiles(componentName);
  // TODO: Add and install dependencies
  // TODO: Add Prisma
}

async function createNewComponentFiles(componentName: string) {
  await createFiles(
    {
      rootPath: await makeDir(componentName),
      templatesRoot: "./templates/new",
      variables: { componentName },
    },
    {
      "package.json": true,
      "webpack.config.dev.ts": true,
      "webpack.config.build.ts": true,
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
