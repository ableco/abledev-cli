#!/usr/bin/env node
"use strict";
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 602:
/***/ ((module) => {

module.exports = "// @ts-nocheck\n// This assumes the host project already has @ableco/abledev-components loaded\nimport \"@ableco/abledev-components/dist/style.css\";\nimport * as React from \"react\";\nimport { __componentName__ } from \"../src\";\nimport { PreviewData } from \"./getPreviewData\";\n\nexport default function Preview({\n  data,\n  reloadData,\n}: {\n  data: PreviewData;\n  reloadData: () => void;\n}) {\n  return (\n    <div className=\"p-8 inline-flex flex-col gap-4\">\n      <pre>Number of Tasks: {data.allTasks.length}</pre>\n      {data.allTasks.map((task) => {\n        return <DueDate key={task.id} task={task} onSuccess={reloadData} />;\n      })}\n    </div>\n  );\n}\n";

/***/ })

};
;