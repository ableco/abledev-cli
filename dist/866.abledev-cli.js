#!/usr/bin/env node
"use strict";
exports.id = 866;
exports.ids = [866];
exports.modules = {

/***/ 866:
/***/ ((module) => {

module.exports = "{\n  \"name\": \"__componentName__\",\n  \"version\": \"0.0.1\",\n  \"author\": \"Abledev\",\n  \"main\": \"dist/__componentName__.web\",\n  \"license\": \"MIT\",\n  \"types\": \"dist/src/index.d.ts\",\n  \"files\": [\n    \"dist\",\n    \"lib\"\n  ],\n  \"exports\": {\n    \".\": \"./dist/__componentName__.web.js\",\n    \"./server-functions\": \"./dist/__componentName__.node.js\",\n    \"./styles.css\": \"./dist/main.css\"\n  },\n  \"engines\": {\n    \"node\": \">=10\"\n  },\n  \"scripts\": {\n    \"dev\": \"ts-node ./abledev/devServer.ts\",\n    \"build-backend-functions\": \"build-backend-functions --source-folder-path=${PWD}/src --backend-functions-path=${PWD}/abledev/backend-functions\",\n    \"build\": \"npm run build-backend-functions && webpack -c webpack.config.build.ts\"\n  },\n  \"peerDependencies\": {\n    \"react\": \">=16\"\n  },\n  \"dependencies\": {},\n  \"devDependencies\": {}\n}\n";

/***/ })

};
;