#!/usr/bin/env node
"use strict";
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 405:
/***/ ((module) => {

module.exports = "import sanitizeComponentName from \"./sanitizeComponentName\";\n\ndescribe(\"sanitizeComponentName\", () => {\n  it(\"forbids straneous values\", () => {\n    expect(() => sanitizeComponentName(\"hello/world\")).toThrow();\n    expect(() =>\n      sanitizeComponentName(\"hello; drop database postgres;\"),\n    ).toThrow();\n    expect(() => sanitizeComponentName(\"hello; rm -rf /;\")).toThrow();\n    expect(() => sanitizeComponentName(\"@helloworld\")).toThrow();\n  });\n\n  it(\"Allows names that look like variable names\", () => {\n    expect(sanitizeComponentName(\"DueDate\")).toEqual(\"DueDate\");\n    expect(sanitizeComponentName(\"due_date\")).toEqual(\"due_date\");\n    expect(sanitizeComponentName(\"DashboardView\")).toEqual(\"DashboardView\");\n    expect(sanitizeComponentName(\"Dashboard_View\")).toEqual(\"Dashboard_View\");\n    expect(sanitizeComponentName(\"Dashboard$View\")).toEqual(\"Dashboard$View\");\n  });\n\n  it(\"Renames values that have dashes\", () => {\n    expect(sanitizeComponentName(\"due-date\")).toEqual(\"dueDate\");\n    expect(sanitizeComponentName(\"super-due-date\")).toEqual(\"superDueDate\");\n    expect(sanitizeComponentName(\"super-due-\")).toEqual(\"superDue\");\n    expect(sanitizeComponentName(\"Due-date\")).toEqual(\"DueDate\");\n    expect(sanitizeComponentName(\"dashboard-view\")).toEqual(\"dashboardView\");\n    expect(sanitizeComponentName(\"Dashboard-View\")).toEqual(\"DashboardView\");\n    expect(sanitizeComponentName(\"Dashboard-view\")).toEqual(\"DashboardView\");\n  });\n});\n";

/***/ })

};
;