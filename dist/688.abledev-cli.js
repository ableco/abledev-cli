#!/usr/bin/env node
"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 688:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport { PrismaClient } from \"@prisma/client\";\nimport express from \"express\";\n\nexport interface HostContext {\n  db: PrismaClient;\n}\n\nexport type RequestHostContext = HostContext & {\n  request: express.Request;\n  response: express.Response;\n};\n";

/***/ })

};
;