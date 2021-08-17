#!/usr/bin/env node
"use strict";
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 889:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport { createServerHandler } from \"@ableco/abledev-dev-environment\";\nimport mappings from \"./backend-functions\";\n\nexport const createHandleRequest = createServerHandler({\n  mappings,\n  componentModuleSystem: {\n    importPath: (path) => import(path),\n    requireCache: require.cache,\n  },\n});\n";

/***/ })

};
;