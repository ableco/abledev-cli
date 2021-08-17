#!/usr/bin/env node
"use strict";
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 979:
/***/ ((module) => {

module.exports = "import { RequestHostContext } from \"../HostContext\";\nexport default function updateDueDate({ id, date }: {\n    id: number;\n    date: Date;\n}, { db }: RequestHostContext): Promise<import(\".prisma/client\").Task>;\n";

/***/ })

};
;