#!/usr/bin/env node
"use strict";
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 170:
/***/ ((module) => {

module.exports = "const SANITIZATION_REGEXP = /^[a-zA-Z$]{1}[a-zA-Z0-9-_$]+$/;\n\n// Only allows -, _, a-z, A-Z and numbers after the second character\n// If it contains - (e.g. due-date), it becomes capitalized (e.g. dueDate)\nfunction sanitizeComponentName(componentName: string) {\n  if (SANITIZATION_REGEXP.test(componentName)) {\n    if (componentName.includes(\"-\")) {\n      return capitalizeDashedString(componentName);\n    } else {\n      return componentName;\n    }\n  } else {\n    throw new Error(`Invalid component name: ${componentName}`);\n  }\n}\n\nfunction capitalizeDashedString(dashedString: string): string {\n  const dashPosition = dashedString.indexOf(\"-\");\n  const hasDash = dashPosition > -1;\n\n  if (hasDash) {\n    const nextCharacter = dashedString[dashPosition + 1];\n    if (nextCharacter) {\n      const beforeDash = dashedString.slice(0, dashPosition);\n      const capitalizedNextCharacter = nextCharacter.toUpperCase();\n      const afterNextCharacter = capitalizeDashedString(\n        dashedString.slice(dashPosition + 2),\n      );\n      return `${beforeDash}${capitalizedNextCharacter}${afterNextCharacter}`;\n    } else {\n      return dashedString.slice(0, -1);\n    }\n  } else {\n    return dashedString;\n  }\n}\n\nexport default sanitizeComponentName;\n";

/***/ })

};
;