#!/usr/bin/env node
"use strict";
exports.id = 653;
exports.ids = [653];
exports.modules = {

/***/ 653:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport * as React from \"react\";\nimport * as ReactDOM from \"react-dom\";\nimport superjson from \"superjson\";\nimport { PreviewData } from \"./getPreviewData\";\nimport Preview from \"./Preview\";\n\nfunction PreviewApp() {\n  const [isLoading, setIsLoading] = React.useState(true);\n  const [data, setData] = React.useState<PreviewData>();\n\n  const loadData = React.useCallback(async () => {\n    const response = await fetch(\"/dev/preview-data\");\n    const responseData = await response.text();\n    setData(superjson.parse(responseData));\n    setIsLoading(false);\n  }, [setData, setIsLoading]);\n\n  React.useEffect(() => {\n    loadData();\n  }, []);\n\n  if (isLoading || data === undefined) {\n    return <div>Loading...</div>;\n  } else {\n    return <Preview data={data} reloadData={loadData} />;\n  }\n}\n\nReactDOM.render(<PreviewApp />, document.getElementById(\"root\"));\n";

/***/ })

};
;