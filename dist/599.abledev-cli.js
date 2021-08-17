#!/usr/bin/env node
"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 599:
/***/ ((module) => {

module.exports = "// Only allows -, _, a-z, A-Z and numbers after the second character\n// If it contains - (e.g. due-date), it becomes capitalized (e.g. dueDate)\nfunction sanitizeComponentName(componentName: string) {\n  return componentName;\n}\n\nexport default sanitizeComponentName;\n";

/***/ })

};
;