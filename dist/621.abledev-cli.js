#!/usr/bin/env node
"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 621:
/***/ ((module) => {

module.exports = "import { PrismaClient } from \"@prisma/client\";\nimport express from \"express\";\nexport interface HostContext {\n    db: PrismaClient;\n}\nexport declare type RequestHostContext = HostContext & {\n    request: express.Request;\n    response: express.Response;\n};\n";

/***/ })

};
;