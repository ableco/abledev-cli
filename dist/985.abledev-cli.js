#!/usr/bin/env node
"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 985:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport path from \"path\";\nimport { createWebpackDevConfig } from \"@ableco/abledev-dev-environment\";\n\nexport default createWebpackDevConfig({\n  previewFolderPath: path.resolve(__dirname, \"./preview\"),\n});\n";

/***/ })

};
;