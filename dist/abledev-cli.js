#!/usr/bin/env node
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["abledev-cli"] = factory();
	else
		root["abledev-cli"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	".": [
		427,
		427
	],
	"./": [
		427,
		427
	],
	"./createFiles": [
		590,
		590
	],
	"./createFiles.ts": [
		590,
		590
	],
	"./createNewComponent": [
		767,
		767
	],
	"./createNewComponent.ts": [
		767,
		767
	],
	"./index": [
		427,
		427
	],
	"./index.ts": [
		427,
		427
	],
	"./sanitizeComponentName": [
		170,
		170
	],
	"./sanitizeComponentName.test": [
		405,
		405
	],
	"./sanitizeComponentName.test.ts": [
		405,
		405
	],
	"./sanitizeComponentName.ts": [
		170,
		170
	],
	"./templates/new/abledev/backend-functions": [
		852,
		852
	],
	"./templates/new/abledev/backend-functions/": [
		852,
		852
	],
	"./templates/new/abledev/backend-functions/index": [
		852,
		852
	],
	"./templates/new/abledev/backend-functions/index.ts": [
		852,
		852
	],
	"./templates/new/abledev/createHandleRequest": [
		889,
		889
	],
	"./templates/new/abledev/createHandleRequest.ts": [
		889,
		889
	],
	"./templates/new/abledev/devServer": [
		301,
		301
	],
	"./templates/new/abledev/devServer.ts": [
		301,
		301
	],
	"./templates/new/npmrc": [
		428,
		428
	],
	"./templates/new/package.json": [
		866,
		866
	],
	"./templates/new/prettierrc.json": [
		176,
		176
	],
	"./templates/new/preview": [
		653,
		653
	],
	"./templates/new/preview/": [
		653,
		653
	],
	"./templates/new/preview/Preview": [
		383,
		383
	],
	"./templates/new/preview/Preview.tsx": [
		383,
		383
	],
	"./templates/new/preview/getPreviewData": [
		310,
		310
	],
	"./templates/new/preview/getPreviewData.ts": [
		310,
		310
	],
	"./templates/new/preview/index": [
		653,
		653
	],
	"./templates/new/preview/index.html": [
		537,
		537
	],
	"./templates/new/preview/index.tsx": [
		653,
		653
	],
	"./templates/new/src": [
		880,
		880
	],
	"./templates/new/src/": [
		880,
		880
	],
	"./templates/new/src/Component": [
		788,
		788
	],
	"./templates/new/src/Component.tsx": [
		788,
		788
	],
	"./templates/new/src/HostContext": [
		688,
		688
	],
	"./templates/new/src/HostContext.ts": [
		688,
		688
	],
	"./templates/new/src/index": [
		880,
		880
	],
	"./templates/new/src/index.tsx": [
		880,
		880
	],
	"./templates/new/src/queries/getData": [
		722,
		722
	],
	"./templates/new/src/queries/getData.ts": [
		722,
		722
	],
	"./templates/new/tsconfig.jsonc": [
		307,
		307
	],
	"./templates/new/webpack.config.build": [
		887,
		887
	],
	"./templates/new/webpack.config.build.ts": [
		887,
		887
	],
	"./templates/new/webpack.config.dev": [
		985,
		985
	],
	"./templates/new/webpack.config.dev.ts": [
		985,
		985
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 298;
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".abledev-cli.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "tslib"
const external_tslib_namespaceObject = require("tslib");
;// CONCATENATED MODULE: external "commander"
const external_commander_namespaceObject = require("commander");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: external "make-dir"
const external_make_dir_namespaceObject = require("make-dir");
var external_make_dir_default = /*#__PURE__*/__webpack_require__.n(external_make_dir_namespaceObject);
;// CONCATENATED MODULE: ./src/createFiles.ts




function createFiles(_a, filesMap) {
    var e_1, _b;
    var rootPath = _a.rootPath, templatesRoot = _a.templatesRoot, variables = _a.variables;
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function () {
        var _c, _d, _e, location_1, templatePathOrTrue, templatePath, templateContent, noTsCheckLine, fullLocation, fullLocationDirectory, e_1_1;
        return (0,external_tslib_namespaceObject.__generator)(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 8, 9, 14]);
                    _c = (0,external_tslib_namespaceObject.__asyncValues)(Object.entries(filesMap));
                    _f.label = 1;
                case 1: return [4 /*yield*/, _c.next()];
                case 2:
                    if (!(_d = _f.sent(), !_d.done)) return [3 /*break*/, 7];
                    _e = _d.value, location_1 = _e[0], templatePathOrTrue = _e[1];
                    templatePath = typeof templatePathOrTrue === "string" ? templatePathOrTrue : location_1;
                    return [4 /*yield*/, importFromTemplate(templatesRoot, templatePath)];
                case 3:
                    templateContent = _f.sent();
                    noTsCheckLine = "// @ts-nocheck\n";
                    if (templateContent.includes(noTsCheckLine)) {
                        templateContent = templateContent.replace(noTsCheckLine, "");
                    }
                    fullLocation = external_path_default().join(rootPath, location_1);
                    fullLocationDirectory = external_path_default().dirname(fullLocation);
                    return [4 /*yield*/, external_make_dir_default()(fullLocationDirectory)];
                case 4:
                    _f.sent();
                    return [4 /*yield*/, promises_default().writeFile(fullLocation, applyVariables(templateContent, variables))];
                case 5:
                    _f.sent();
                    _f.label = 6;
                case 6: return [3 /*break*/, 1];
                case 7: return [3 /*break*/, 14];
                case 8:
                    e_1_1 = _f.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 14];
                case 9:
                    _f.trys.push([9, , 12, 13]);
                    if (!(_d && !_d.done && (_b = _c["return"]))) return [3 /*break*/, 11];
                    return [4 /*yield*/, _b.call(_c)];
                case 10:
                    _f.sent();
                    _f.label = 11;
                case 11: return [3 /*break*/, 13];
                case 12:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 13: return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    });
}
function applyVariables(templateContent, variables) {
    var finalContent = templateContent;
    Object.entries(variables).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        finalContent = finalContent.replaceAll("__" + key + "__", value);
    });
    return finalContent;
}
function importFromTemplate(templatesRoot, templatePath) {
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function () {
        var module;
        return (0,external_tslib_namespaceObject.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __webpack_require__(298)(templatesRoot + "/" + templatePath + "")];
                case 1:
                    module = _a.sent();
                    return [2 /*return*/, module["default"]];
            }
        });
    });
}
/* harmony default export */ const src_createFiles = (createFiles);

;// CONCATENATED MODULE: ./src/createNewComponent.ts







function createNewComponent(componentName, rootPath, override) {
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function () {
        return (0,external_tslib_namespaceObject.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (external_fs_default().existsSync(rootPath) && !override) {
                        throw new Error("This folder already exists: " + rootPath);
                    }
                    return [4 /*yield*/, createNewComponentFiles(componentName, rootPath)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, runPostInstallTasks(componentName, rootPath)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function runPostInstallTasks(componentName, rootPath) {
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function () {
        return (0,external_tslib_namespaceObject.__generator)(this, function (_a) {
            installDependencies(rootPath);
            initializePrisma(rootPath, componentName);
            return [2 /*return*/];
        });
    });
}
var DEPENDENCIES = [
    "@ableco/abledev-dev-environment",
    "@ableco/abledev-react",
    "express",
].join(" ");
var DEV_DEPENDENCIES = [
    "webpack",
    "webpack-cli",
    "ts-loader",
    "ts-node",
    "typescript",
    "type-fest",
    "react",
    "@types/react",
    "react-dom",
    "@types/react-dom",
    "prisma",
    "@types/express",
].join(" ");
function installDependencies(rootPath) {
    var npmFlags = "--registry=https://registry.able.co";
    execCommand(rootPath, "npm install " + DEPENDENCIES + " " + npmFlags);
    execCommand(rootPath, "npm install -D " + DEV_DEPENDENCIES + " " + npmFlags);
}
function execCommand(rootPath, command) {
    (0,external_child_process_namespaceObject.execSync)(command, {
        stdio: ["inherit", "inherit", "inherit"],
        cwd: rootPath,
    });
}
function initializePrisma(rootPath, componentName) {
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function () {
        return (0,external_tslib_namespaceObject.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    execCommand(rootPath, "npx prisma init");
                    return [4 /*yield*/, updateDatabaseUrl(rootPath, componentName)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, createDummyModel(rootPath)];
                case 2:
                    _a.sent();
                    execCommand(rootPath, "npx prisma migrate dev --name initial");
                    return [2 /*return*/];
            }
        });
    });
}
function updateDatabaseUrl(rootPath, componentName) {
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function () {
        var databaseName, user, code;
        return (0,external_tslib_namespaceObject.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    databaseName = "abledev_" + componentName;
                    user = (0,external_child_process_namespaceObject.execSync)("whoami").toString().trim();
                    code = "DATABASE_URL=\"postgresql://" + user + "@localhost:5432/" + databaseName + "\"\n";
                    createDatabase(rootPath, user, databaseName);
                    return [4 /*yield*/, promises_default().writeFile(external_path_default().join(rootPath, ".env"), code)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createDatabase(rootPath, user, databaseName) {
    var command = "psql -U " + user + " -tc \"SELECT 1 FROM pg_database WHERE datname = '" + databaseName + "';\" | grep -q 1 || psql -U " + user + " -c \"CREATE DATABASE " + databaseName + ";\"";
    execCommand(rootPath, command);
}
function createDummyModel(rootPath) {
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function () {
        var code;
        return (0,external_tslib_namespaceObject.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = "model Dummy {\n  id Int @id @default(autoincrement())\n}";
                    return [4 /*yield*/, promises_default().appendFile(external_path_default().join(rootPath, "prisma", "schema.prisma"), code)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createNewComponentFiles(componentName, rootPath) {
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function () {
        var _a;
        var _b, _c;
        return (0,external_tslib_namespaceObject.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = src_createFiles;
                    _b = {};
                    return [4 /*yield*/, external_make_dir_default()(rootPath)];
                case 1: return [4 /*yield*/, _a.apply(void 0, [(_b.rootPath = _d.sent(),
                            _b.templatesRoot = "./templates/new",
                            _b.variables = { componentName: componentName },
                            _b), (_c = {
                                "package.json": true,
                                "webpack.config.dev.ts": true,
                                "webpack.config.build.ts": true,
                                ".npmrc": "npmrc",
                                ".prettierrc.json": "prettierrc.json",
                                "tsconfig.json": "tsconfig.jsonc",
                                "preview/index.html": true,
                                "preview/index.tsx": true,
                                "preview/getPreviewData.ts": true,
                                "preview/Preview.tsx": true,
                                "src/index.tsx": true
                            },
                            _c["src/" + componentName + ".tsx"] = "src/Component.tsx",
                            _c["src/HostContext.ts"] = true,
                            _c["src/queries/getData.ts"] = true,
                            _c["abledev/devServer.ts"] = true,
                            _c["abledev/createHandleRequest.ts"] = true,
                            _c["abledev/backend-functions/index.ts"] = true,
                            _c)])];
                case 2:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ const src_createNewComponent = (createNewComponent);

;// CONCATENATED MODULE: ./src/sanitizeComponentName.ts
var SANITIZATION_REGEXP = /^[a-zA-Z$]{1}[a-zA-Z0-9-_$]+$/;
// Only allows -, _, a-z, A-Z and numbers after the second character
// If it contains - (e.g. due-date), it becomes capitalized (e.g. dueDate)
function sanitizeComponentName(componentName) {
    if (SANITIZATION_REGEXP.test(componentName)) {
        if (componentName.includes("-")) {
            return capitalizeDashedString(componentName);
        }
        else {
            return componentName;
        }
    }
    else {
        throw new Error("Invalid component name: " + componentName);
    }
}
function capitalizeDashedString(dashedString) {
    var dashPosition = dashedString.indexOf("-");
    var hasDash = dashPosition > -1;
    if (hasDash) {
        var nextCharacter = dashedString[dashPosition + 1];
        if (nextCharacter) {
            var beforeDash = dashedString.slice(0, dashPosition);
            var capitalizedNextCharacter = nextCharacter.toUpperCase();
            var afterNextCharacter = capitalizeDashedString(dashedString.slice(dashPosition + 2));
            return "" + beforeDash + capitalizedNextCharacter + afterNextCharacter;
        }
        else {
            return dashedString.slice(0, -1);
        }
    }
    else {
        return dashedString;
    }
}
/* harmony default export */ const src_sanitizeComponentName = (sanitizeComponentName);

;// CONCATENATED MODULE: ./src/index.ts





var program = new external_commander_namespaceObject.Command("abledev");
program
    .command("new <componentName>")
    .option("-p, --path <path>")
    .option("-o, --override", "Overrides the path if it exists", false)
    .action(function (givenComponentName, _a) {
    var pathDir = _a.path, override = _a.override;
    return (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function () {
        var componentName, directoryPath;
        return (0,external_tslib_namespaceObject.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    componentName = src_sanitizeComponentName(givenComponentName);
                    directoryPath = pathDir !== null && pathDir !== void 0 ? pathDir : external_path_default().resolve(__dirname, givenComponentName);
                    return [4 /*yield*/, src_createNewComponent(componentName, directoryPath, override)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
program.parse(process.argv);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});