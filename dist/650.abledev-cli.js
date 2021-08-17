#!/usr/bin/env node
"use strict";
exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 887:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport path from \"path\";\nimport { createWebpackBuildConfigs } from \"@ableco/abledev-dev-environment\";\n\nexport default createWebpackBuildConfigs({\n  entries: {\n    web: \"./src/index.tsx\",\n    node: \"./abledev/createHandleRequest.ts\",\n  },\n  distPath: path.resolve(__dirname, \"dist\"),\n});\n";

/***/ })

};
;