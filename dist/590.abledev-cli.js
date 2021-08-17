#!/usr/bin/env node
"use strict";
exports.id = 590;
exports.ids = [590];
exports.modules = {

/***/ 590:
/***/ ((module) => {

module.exports = "import fs from \"fs/promises\";\nimport makeDir from \"make-dir\";\nimport path from \"path\";\n\ntype CreateFilesConfig = {\n  rootPath: string;\n  templatesRoot: string;\n  variables: object;\n};\n\ntype FilesMap = {\n  [location: string]: string | true;\n};\n\nasync function createFiles(\n  { rootPath, templatesRoot, variables }: CreateFilesConfig,\n  filesMap: FilesMap,\n) {\n  for await (const [location, templatePathOrTrue] of Object.entries(filesMap)) {\n    let templatePath =\n      typeof templatePathOrTrue === \"string\" ? templatePathOrTrue : location;\n    let templateContent = await importFromTemplate(templatesRoot, templatePath);\n\n    const noTsCheckLine = \"// @ts-nocheck\\n\";\n    if (templateContent.includes(noTsCheckLine)) {\n      templateContent = templateContent.replace(noTsCheckLine, \"\");\n    }\n\n    const fullLocation = path.join(rootPath, location);\n    const fullLocationDirectory = path.dirname(fullLocation);\n\n    await makeDir(fullLocationDirectory);\n    await fs.writeFile(\n      fullLocation,\n      applyVariables(templateContent, variables),\n    );\n  }\n}\n\nfunction applyVariables(templateContent: string, variables: object) {\n  let finalContent = templateContent;\n  Object.entries(variables).forEach(([key, value]) => {\n    finalContent = finalContent.replaceAll(`__${key}__`, value);\n  });\n  return finalContent;\n}\n\nasync function importFromTemplate(templatesRoot: string, templatePath: string) {\n  const module = await import(`${templatesRoot}/${templatePath}?raw-file`);\n  return module.default as string;\n}\n\nexport default createFiles;\n";

/***/ })

};
;