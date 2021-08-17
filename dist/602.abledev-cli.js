#!/usr/bin/env node
"use strict";
exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 602:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport * as React from \"react\";\nimport { __componentName__ } from \"../src\";\nimport { PreviewData } from \"./getPreviewData\";\n\nexport default function Preview({\n  data,\n  reloadData,\n}: {\n  data: PreviewData;\n  reloadData: () => void;\n}) {\n  return (\n    <div>\n      <__componentName__ />\n    </div>\n  );\n}\n";

/***/ })

};
;