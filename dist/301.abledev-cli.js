#!/usr/bin/env node
"use strict";
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 301:
/***/ ((module) => {

module.exports = "// @ts-nocheck\nimport { startDevServer } from \"@ableco/abledev-dev-environment\";\nimport { PrismaClient } from \"@prisma/client\";\nimport path from \"path\";\nimport getPreviewData from \"../preview/getPreviewData\";\nimport { HostContext } from \"../src/HostContext\";\nimport webpackConfig from \"../webpack.config.dev\";\nimport { createHandleRequest } from \"./createHandleRequest\";\n\nconst db = new PrismaClient();\nconst hostContext = { db };\n\nconst handleRequest = createHandleRequest<HostContext>({\n  mode: \"development\",\n  srcPath: path.resolve(__dirname, \"../src\"),\n  webpackConfig,\n  hostContext,\n});\n\nstartDevServer({\n  preferredPort: 5000,\n  handleRequest,\n  getPreviewData: async () => {\n    return await getPreviewData(hostContext);\n  },\n});\n";

/***/ })

};
;