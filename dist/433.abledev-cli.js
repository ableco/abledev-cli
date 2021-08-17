#!/usr/bin/env node
"use strict";
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 310:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport { AsyncReturnType } from \"type-fest\";\nimport { HostContext } from \"../src/HostContext\";\n\nasync function getPreviewData({ db }: HostContext) {\n  const allTasks = await db.task.findMany({});\n  return { allTasks };\n}\n\nexport type PreviewData = AsyncReturnType<typeof getPreviewData>;\nexport default getPreviewData;\n";

/***/ })

};
;