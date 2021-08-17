#!/usr/bin/env node
"use strict";
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 788:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport { useQuery, wrapRootComponent } from \"@ableco/abledev-react\";\nimport * as React from \"react\";\nimport getData from \"./queries/getData\";\n\nfunction __componentName__() {\n  const { data } = useQuery(getData);\n\n  if (data) {\n    return (\n      <div>\n        __componentName__ says:{\" \"}\n        <pre>\n          <code>Hello {data.hello}</code>\n        </pre>\n      </div>\n    );\n  } else {\n    return <div>Loading...</div>;\n  }\n}\n\nexport default wrapRootComponent(__componentName__);\n";

/***/ })

};
;