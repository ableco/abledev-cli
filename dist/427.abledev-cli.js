#!/usr/bin/env node
"use strict";
exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 427:
/***/ ((module) => {

module.exports = "#!/usr/bin/env node\nimport { Command } from \"commander\";\nimport path from \"path\";\nimport createNewComponent from \"./createNewComponent\";\nimport sanitizeComponentName from \"./sanitizeComponentName\";\n\nconst program = new Command(\"abledev\");\n\nprogram\n  .command(\"new <componentName>\")\n  .option(\"-p, --path <path>\")\n  .option(\"-o, --override\", \"Overrides the path if it exists\", false)\n  .action(\n    async (\n      givenComponentName: string,\n      { path: pathDir, override }: { path: string; override: boolean },\n    ) => {\n      const componentName = sanitizeComponentName(givenComponentName);\n      const directoryPath =\n        pathDir ?? path.resolve(__dirname, givenComponentName);\n      await createNewComponent(componentName, directoryPath, override);\n    },\n  );\n\nprogram.parse(process.argv);\n";

/***/ })

};
;