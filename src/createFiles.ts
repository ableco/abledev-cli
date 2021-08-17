import fs from "fs/promises";
import makeDir from "make-dir";
import path from "path";

type CreateFilesConfig = {
  rootPath: string;
  templatesRoot: string;
  variables: object;
};

type FilesMap = {
  [location: string]: string | true;
};

async function createFiles(
  { rootPath, templatesRoot, variables }: CreateFilesConfig,
  filesMap: FilesMap,
) {
  for await (const [location, templatePathOrTrue] of Object.entries(filesMap)) {
    let templatePath =
      typeof templatePathOrTrue === "string" ? templatePathOrTrue : location;
    let templateContent = await importFromTemplate(templatesRoot, templatePath);

    const noTsCheckLine = "// @ts-nocheck\n";
    if (templateContent.includes(noTsCheckLine)) {
      templateContent = templateContent.replace(noTsCheckLine, "");
    }

    const fullLocation = path.join(rootPath, location);
    const fullLocationDirectory = path.dirname(fullLocation);

    await makeDir(fullLocationDirectory);
    await fs.writeFile(
      fullLocation,
      applyVariables(templateContent, variables),
    );
  }
}

function applyVariables(templateContent: string, variables: object) {
  let finalContent = templateContent;
  Object.entries(variables).forEach(([key, value]) => {
    finalContent = finalContent.replaceAll(`__${key}__`, value);
  });
  return finalContent;
}

async function importFromTemplate(templatesRoot: string, templatePath: string) {
  const module = await import(`${templatesRoot}/${templatePath}?raw-file`);
  return module.default as string;
}

export default createFiles;
