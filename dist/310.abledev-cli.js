#!/usr/bin/env node
"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 310:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport { AsyncReturnType } from \"type-fest\";\nimport { HostContext } from \"../src/HostContext\";\n\nasync function getPreviewData({ db: _db }: HostContext) {\n  return {};\n}\n\nexport type PreviewData = AsyncReturnType<typeof getPreviewData>;\nexport default getPreviewData;\n";

/***/ })

};
;