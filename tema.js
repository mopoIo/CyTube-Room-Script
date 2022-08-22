/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/index.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/index.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, \".hidden {
  display: none !important;
}

.queue_entry > span:first-of-type {
  margin-left: 5px;
}

.media-container {
  display: inline-block;
  overflow: hidden;
}

.media-msg {
  max-width: 200px;
  max-height: 200px;
}

.image-msg {
  transition: 0.2s all;
  cursor: zoom-in;
}
.image-msg:hover {
  transform: scale(1.01);
}

.big-emote {
  max-width: 300px !important;
  max-height: 300px !important;
}

.gif-dialog {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 250px;
}
.gif-dialog .gif-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border: 1px dotted white;
}
.gif-dialog button {
  border-style: solid;
  border-width: 1px;
  border-right: 3px;
  background-color: #ffffff;
  transition: border-width 0.1s;
  color: #000000;
}
.gif-dialog button:hover {
  border-width: 3px;
}
.gif-dialog .next-button {
  width: 100%;
  height: 25px;
  border-color: #fbff00;
  margin-bottom: 2px;
}
.gif-dialog .btn-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 25px;
}
.gif-dialog .btn-container button {
  width: 50%;
}
.gif-dialog .btn-container .cancel-button {
  border-color: #f36666;
  margin-right: 2px;
}
.gif-dialog .btn-container .confirm-button {
  border-color: #02fc00;
}

.image-preview {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}
.image-preview img {
  max-width: 80%;
  max-height: 80%;
}

.gif-results-container {
  position: relative;
  width: 100%;
  margin-top: 5px;
  padding-top: 30px;
}
.gif-results-container button {
  position: absolute;
  right: 0;
  top: 0;
  width: 25px;
  height: 25px;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #ff7777;
  border-radius: 4px;
  transition: background-color, color 0.1s;
}
.gif-results-container button:hover {
  background-color: #ff7777;
  color: #ffffff;
}
.gif-results-container .gif-error-msg {
  border: 1px solid #ff7777;
  display: inline-block;
  padding: 5px 5px 5px 5px;
}
.gif-results-container .results {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 200px;
  overflow-y: scroll;
}
.gif-results-container .results .gif-search-result {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
  border: 2px solid #ffffff;
  border-radius: 4px;
}
.gif-results-container .results .gif-search-result:hover {
  cursor: pointer;
  border-color: #35d035;
}
.gif-results-container .results .gif-search-result img {
  max-width: 100%;
  max-height: 100%;
}\", \"\"]);
// Exports
module.exports = exports;


//# sourceURL=webpack:///./style/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('
');
  }

  return [content].join('
');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);
  return \"/*# \".concat(data, \" */\");
}

//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/to-string-loader/src/to-string.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/index.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/to-string-loader/src/to-string.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/index.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("
        var result = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/index.scss\");

        if (typeof result === \"string\") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

//# sourceURL=webpack:///./style/index.scss?./node_modules/to-string-loader/src/to-string.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: userConfig, getCurrentUsername, roomName, getCustomCSSNode, newMessageEventString, msgBuffer, videoBuffer, userList, msgInput, gifSearchResultsClass, gifErrorMsgClass, getGifSearchNode, getGifErrorMsgNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userConfig\", function() { return userConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentUsername\", function() { return getCurrentUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"roomName\", function() { return roomName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCustomCSSNode\", function() { return getCustomCSSNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newMessageEventString\", function() { return newMessageEventString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"msgBuffer\", function() { return msgBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoBuffer\", function() { return videoBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userList\", function() { return userList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"msgInput\", function() { return msgInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gifSearchResultsClass\", function() { return gifSearchResultsClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gifErrorMsgClass\", function() { return gifErrorMsgClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGifSearchNode\", function() { return getGifSearchNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGifErrorMsgNode\", function() { return getGifErrorMsgNode; });
const userConfig = [
    {
        username: \"geoffkeighley\",
        colour: \"#71b3ff\",
    },
    {
        username: \"mopolo\",
        colour: \"linear-gradient(90deg, rgba(255, 164, 182, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(255, 164, 182, 1) 40%, rgba(255, 255, 255, 1) 60%, rgba(255, 164, 182, 1) 80%, rgba(255, 255, 255, 1) 100%);\",
    },
    {
        username: \"Fitzthistlewits\",
        colour: \"#a83fff\",
    },
    {
        username: \"Eshnuz\",
        colour: \"#f7ff00\",
    },
];

const getCurrentUsername = () => {
    const usernameNode = document.querySelector(\"#welcome\");
    return usernameNode !== null
        ? usernameNode.innerText.split(\" \").getLastItem()
        : undefined;
};

const roomName = \"offline chat tv\";

const getCustomCSSNode = () => {
    return document.head.querySelector(\".custom-css\");
};

const newMessageEventString = \"NewMessage\";

const msgBuffer = document.querySelector(\"#messagebuffer\");
const videoBuffer = document.querySelector(\".videolist#queue\");
const userList = document.querySelector(\"#userlist\");

const msgInput = document.querySelector(\"#chatline\");

const gifSearchResultsClass = \"gif-results-container\";
const gifErrorMsgClass = \"gif-error-msg\";

const getGifSearchNode = () => {
    return document.querySelector(`.${gifSearchResultsClass}`);
};
const getGifErrorMsgNode = () => {
    return getGifSearchNode().querySelector(`.${gifErrorMsgClass}`);
};


//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");
/* harmony import */ var _processors_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processors/utility */ \"./src/processors/utility.js\");
/* harmony import */ var _processors_messages_processors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processors/messages/processors */ \"./src/processors/messages/processors.js\");
/* harmony import */ var _processors_videos_processors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processors/videos/processors */ \"./src/processors/videos/processors.js\");
/* harmony import */ var _processors_users_processors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processors/users/processors */ \"./src/processors/users/processors.js\");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");
// Create way to send \"server\" messages (used for everything)
// /video
// -> pauses / play video with lead (admin/mod only)
// /spin
// -> spin whatever shows to the right
// /scroll
// -> scroll whatever shows to the right
// /gif improvements
// -> pagination (scroll to bottom, load next page)
// -> add query to gifNode.title (not sure how, don't want to send JSON again)








const orderedMsgProcessors = [
    _processors_messages_processors__WEBPACK_IMPORTED_MODULE_2__[\"addUsernameToMsgProcessor\"],
    _processors_messages_processors__WEBPACK_IMPORTED_MODULE_2__[\"manageInlineEmbedsProcessor\"],
    _processors_messages_processors__WEBPACK_IMPORTED_MODULE_2__[\"newMsgTabAlertProcessor\"],
    _processors_messages_processors__WEBPACK_IMPORTED_MODULE_2__[\"addImgOrVideoProcessor\"],
    _processors_messages_processors__WEBPACK_IMPORTED_MODULE_2__[\"scrollBufferOnMsgSentProcessor\"],
    _processors_messages_processors__WEBPACK_IMPORTED_MODULE_2__[\"modifyStandardMsgCmdProcessor\"],
];

const orderedVideoProcessors = [_processors_videos_processors__WEBPACK_IMPORTED_MODULE_3__[\"addUsernameToVideoProcessor\"]];

const orderedUserlistProcessors = [
    _processors_users_processors__WEBPACK_IMPORTED_MODULE_4__[\"addClassToUserlistProcessor\"],
    _processors_users_processors__WEBPACK_IMPORTED_MODULE_4__[\"addObserverToUserProcessor\"],
];

// eslint-disable-next-line no-unused-vars
const initScript = (() => {
    Object(_setup__WEBPACK_IMPORTED_MODULE_0__[\"runSetup\"])();

    Object(_processors_utility__WEBPACK_IMPORTED_MODULE_1__[\"initRunProcessors\"])({
        messages: orderedMsgProcessors,
        videos: orderedVideoProcessors,
        users: orderedUserlistProcessors,
    });

    const msgObserver = new MutationObserver(
        Object(_processors_utility__WEBPACK_IMPORTED_MODULE_1__[\"createProcessorsFromList\"])(orderedMsgProcessors)
    );
    const videoObserver = new MutationObserver(
        Object(_processors_utility__WEBPACK_IMPORTED_MODULE_1__[\"createProcessorsFromList\"])(orderedVideoProcessors)
    );
    const userlistObserver = new MutationObserver(
        Object(_processors_utility__WEBPACK_IMPORTED_MODULE_1__[\"createProcessorsFromList\"])(orderedUserlistProcessors)
    );

    msgObserver.observe(_constants__WEBPACK_IMPORTED_MODULE_5__[\"msgBuffer\"], { childList: true });
    videoObserver.observe(_constants__WEBPACK_IMPORTED_MODULE_5__[\"videoBuffer\"], { childList: true });
    userlistObserver.observe(_constants__WEBPACK_IMPORTED_MODULE_5__[\"userList\"], { childList: true });
})();


//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/processors/messages/constants.js":
/*!**********************************************!*\
  !*** ./src/processors/messages/constants.js ***!
  \**********************************************/
/*! exports provided: whitelistedActions, largeEmotes, apiConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whitelistedActions\", function() { return whitelistedActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"largeEmotes\", function() { return largeEmotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiConfig\", function() { return apiConfig; });
const whitelistedActions = [
    \"/gif\",
    \"/spin\",
    \"/scroll\",
    \"/video\",
    \"/rave\", // maybe? idk
];

const largeEmotes = [\"/waifu\", \"/forher\"];

const apiConfig = {
    baseURL: \"api.giphy.com/v1/gifs/search\",
    apiKey: \"fo4xOJtcZuXE1t6JSoof674hHercv45G\",
    limit: 25,
};


//# sourceURL=webpack:///./src/processors/messages/constants.js?");

/***/ }),

/***/ "./src/processors/messages/processors.js":
/*!***********************************************!*\
  !*** ./src/processors/messages/processors.js ***!
  \***********************************************/
/*! exports provided: addUsernameToMsgProcessor, manageInlineEmbedsProcessor, addImgOrVideoProcessor, scrollBufferOnMsgSentProcessor, newMsgTabAlertProcessor, modifyStandardMsgCmdProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addUsernameToMsgProcessor\", function() { return addUsernameToMsgProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"manageInlineEmbedsProcessor\", function() { return manageInlineEmbedsProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addImgOrVideoProcessor\", function() { return addImgOrVideoProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollBufferOnMsgSentProcessor\", function() { return scrollBufferOnMsgSentProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newMsgTabAlertProcessor\", function() { return newMsgTabAlertProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modifyStandardMsgCmdProcessor\", function() { return modifyStandardMsgCmdProcessor; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility */ \"./src/utility.js\");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ \"./src/constants.js\");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility */ \"./src/processors/messages/utility.js\");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/processors/messages/constants.js\");





const addUsernameToMsgProcessor = node => {
    if (!Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"isNodeServerMsg\"])(node) && node.querySelector(\".username\") === null) {
        const username = node.className.split(\"-\").getLastItem();
        const usernameNode = document.createElement(\"span\");
        usernameNode.innerHTML = `<strong class=\"username\">${username}: </strong>`;
        node.insertBefore(usernameNode, node.querySelector(\"span:last-child\"));
    }
};

const manageInlineEmbedsProcessor = (node, isInitRun = false) => {
    const msgNode = node.querySelector(\":scope > span:last-of-type\");
    const msgUsername = node.className.split(\"-\").getLastItem();

    // NOTE: temporary binder twine to prevent other users from using experimental features
    if (!Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"isNodeServerMsg\"])(node)) {
        const message = msgNode.innerText;
        const action = message.split(\" \")[0];

        if (_constants__WEBPACK_IMPORTED_MODULE_3__[\"whitelistedActions\"].includes(action)) {
            const startParse = message.lastIndexOf(action);
            const param = message.slice(startParse + action.length).trim();

            switch (action) {
                case \"/gif\":
                    if (!isInitRun && msgUsername === Object(_constants__WEBPACK_IMPORTED_MODULE_1__[\"getCurrentUsername\"])()) {
                        Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"makeGifSearchRequest\"])(param)
                            .then(gifListData => {
                                Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"updateGifSearchResults\"])(gifListData);
                            })
                            .catch(({ err }) => {
                                Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"addErrorMsgToGifArea\"])(err);
                            });
                    }

                    node.classList.add(\"hidden\");

                    break;
                default:
                    Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"addFeatureNotImplementedNode\"])(action);
            }
        }
    }
};

const addImgOrVideoProcessor = node => {
    const msgNode = node.querySelector(\":scope > span:last-of-type\");
    if (msgNode !== null && !Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"isNodeServerMsg\"])(node)) {
        const message = msgNode.innerText;

        // Simple Regex Check
        if (Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"doesMsgContainVideo\"])(message)) {
            const container = Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"getMediaNode\"])();
            container.appendChild(Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"getVideoNode\"])(message));
            Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"replaceMsgWithNode\"])(msgNode, container);
        } else {
            // Regex + preload attempt (if needed)
            // Requires callback
            Object(_utility__WEBPACK_IMPORTED_MODULE_2__[\"doesMsgContainImg\"])(message, () => {
                const container = Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"getMediaNode\"])();
                container.appendChild(Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"getImgNode\"])(message));
                Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"replaceMsgWithNode\"])(msgNode, container);
            });
        }
    }
};

const scrollBufferOnMsgSentProcessor = () => {
    // Tagging for feature improvement consideration
    // Eg. you can \"break free\" of new message scroll lock
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"scrollMsgBufferToBottom\"])();
};

const newMsgTabAlertProcessor = () => {
    window.dispatchEvent(new Event(_constants__WEBPACK_IMPORTED_MODULE_1__[\"newMessageEventString\"]));
};

const modifyStandardMsgCmdProcessor = node => {
    node.querySelectorAll(\"img\").forEach(imgNode => {
        if (imgNode !== null && _constants__WEBPACK_IMPORTED_MODULE_3__[\"largeEmotes\"].includes(imgNode.title)) {
            const container = Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"getMediaNode\"])();
            const newImgNode = Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"getImgNode\"])(imgNode.src);

            newImgNode.classList.add(\"image-msg\", \"big-emote\");

            container.appendChild(newImgNode);
            imgNode.parentNode.replaceChild(container, imgNode);
        }
    });
};


//# sourceURL=webpack:///./src/processors/messages/processors.js?");

/***/ }),

/***/ "./src/processors/messages/utility.js":
/*!********************************************!*\
  !*** ./src/processors/messages/utility.js ***!
  \********************************************/
/*! exports provided: updateGifSearchResults, addErrorMsgToGifArea, makeGifSearchRequest, addFeatureNotImplementedNode, doesMsgContainImg, doesMsgContainVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateGifSearchResults\", function() { return updateGifSearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addErrorMsgToGifArea\", function() { return addErrorMsgToGifArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeGifSearchRequest\", function() { return makeGifSearchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFeatureNotImplementedNode\", function() { return addFeatureNotImplementedNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doesMsgContainImg\", function() { return doesMsgContainImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doesMsgContainVideo\", function() { return doesMsgContainVideo; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/processors/messages/constants.js\");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility */ \"./src/utility.js\");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ \"./src/constants.js\");




// const doesMsgContainWhitelistedAction = msg => {
//   const msgSplit = msg.split(' ');
//   for (let i = 0; i < msgSplit.length; i++) {
//     if (whitelistedActions.includes(msgSplit[i])) {
//       return true;
//     }
//   }
//
//   return false;
// };

const shuffleList = list => {
    let currentIndex = list.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = list[currentIndex];
        list[currentIndex] = list[randomIndex];
        list[randomIndex] = temporaryValue;
    }

    return list;
};

const sendMsgViaChat = msg => {
    _constants__WEBPACK_IMPORTED_MODULE_2__[\"msgInput\"].value = msg;
    const enterKeyEvent = new Event(\"keydown\");
    enterKeyEvent.keyCode = 13;

    _constants__WEBPACK_IMPORTED_MODULE_2__[\"msgInput\"].dispatchEvent(enterKeyEvent);
};

const getGifResultNode = gif => {
    const container = document.createElement(\"div\");
    container.classList.add(\"gif-search-result\");

    const gifNode = document.createElement(\"img\");
    gifNode.src = gif.images.original.url;
    container.addEventListener(\"click\", () => {
        sendMsgViaChat(gifNode.src);
        Object(_utility__WEBPACK_IMPORTED_MODULE_1__[\"hideGifSearchResults\"])();
        _constants__WEBPACK_IMPORTED_MODULE_2__[\"msgInput\"].focus();
    });

    container.appendChild(gifNode);
    return container;
};

const updateGifSearchResults = gifList => {
    const resultsContainer = Object(_constants__WEBPACK_IMPORTED_MODULE_2__[\"getGifSearchNode\"])().querySelector(\".results\");

    Object(_utility__WEBPACK_IMPORTED_MODULE_1__[\"clearGifSearchResults\"])();

    for (let i = 0; i < gifList.length; i++) {
        resultsContainer.appendChild(getGifResultNode(gifList[i]));
    }

    Object(_utility__WEBPACK_IMPORTED_MODULE_1__[\"hideGifError\"])();
    Object(_utility__WEBPACK_IMPORTED_MODULE_1__[\"showGifSearchResults\"])();
    resultsContainer.scrollTop = 0;
};

const addErrorMsgToGifArea = errMsg => {
    const errorMsgNode = Object(_constants__WEBPACK_IMPORTED_MODULE_2__[\"getGifErrorMsgNode\"])();
    errorMsgNode.innerText = errMsg;
    if (errorMsgNode.classList.contains(\"hidden\")) {
        errorMsgNode.classList.remove(\"hidden\");
    }

    Object(_utility__WEBPACK_IMPORTED_MODULE_1__[\"clearGifSearchResults\"])();
    Object(_utility__WEBPACK_IMPORTED_MODULE_1__[\"showGifError\"])();
    Object(_utility__WEBPACK_IMPORTED_MODULE_1__[\"showGifSearchResults\"])();
};

const makeGifSearchRequest = term => {
    return new Promise((resolve, reject) => {
        if (term.length > 0) {
            fetch(
                `https://${_constants__WEBPACK_IMPORTED_MODULE_0__[\"apiConfig\"].baseURL}?api_key=${
                    _constants__WEBPACK_IMPORTED_MODULE_0__[\"apiConfig\"].apiKey
                }&q=${encodeURIComponent(term)}`
            )
                .then(res => {
                    if (res.status !== 200) {
                        reject({
                            err: \"Server error: \" + res.status,
                        });
                    } else {
                        res.json()
                            .then(({ data }) => {
                                if (data.length > 0) {
                                    resolve(shuffleList(data));
                                } else {
                                    reject({
                                        err: \"No results for given search term\",
                                    });
                                }
                            })
                            .catch(err => {
                                reject({ err });
                            });
                    }
                })
                .catch(err => {
                    reject({
                        err: \"API call was not sent correctly: \" + err,
                    });
                });
        } else {
            reject({
                err: \"Param length is 0\",
            });
        }
    });
};

const addFeatureNotImplementedNode = action => {
    const testNode = document.createElement(\"div\");
    testNode.classList.add(\"gif\");
    testNode.innerText = \"HELLO \" + action;
    return testNode;
};

const doesMsgContainImg = (msg, onSuccess) => {
    const protocolMatch = msg.match(/^https:\\/\\/\\S*/i);
    if (
        protocolMatch !== null &&
        protocolMatch.length === 1 &&
        protocolMatch[0] === msg
    ) {
        const image = new Image();
        image.onload = onSuccess;
        image.src = msg;
    }
};

const doesMsgContainVideo = msg => {
    const urls = msg.match(/.*\\.(?:webm|mp4)/i);
    return urls !== null && urls.length === 1 && urls[0] === msg;
};


//# sourceURL=webpack:///./src/processors/messages/utility.js?");

/***/ }),

/***/ "./src/processors/users/processors.js":
/*!********************************************!*\
  !*** ./src/processors/users/processors.js ***!
  \********************************************/
/*! exports provided: addClassToUserlistProcessor, addObserverToUserProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClassToUserlistProcessor\", function() { return addClassToUserlistProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addObserverToUserProcessor\", function() { return addObserverToUserProcessor; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ \"./src/processors/utility.js\");


const addClassToUserlistProcessor = node => {
    if (node.querySelector('[class*=\"username-\"]') === null) {
        const userNode = node.querySelector(\":scope > span:last-of-type\");
        userNode.className = `username-${userNode.innerText}`;
    }
};

const addObserverToUserProcessor = outerNode => {
    const userChangeProcessor = innerNode => {
        const parent = innerNode.parentNode.parentNode;
        const userNode = parent.querySelector(\":scope > span:last-of-type\");
        if (parent.querySelector('[class*=\"username-\"]') === null) {
            userNode.className = `username-${userNode.innerText}`;
        }
    };

    const userObserver = new MutationObserver(
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"createProcessorsFromList\"])([userChangeProcessor])
    );

    outerNode = outerNode.querySelector(\"span\");
    userObserver.observe(outerNode, { childList: true });
};


//# sourceURL=webpack:///./src/processors/users/processors.js?");

/***/ }),

/***/ "./src/processors/utility.js":
/*!***********************************!*\
  !*** ./src/processors/utility.js ***!
  \***********************************/
/*! exports provided: createProcessorsFromList, initRunProcessors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProcessorsFromList\", function() { return createProcessorsFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRunProcessors\", function() { return initRunProcessors; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");


const createProcessorsFromList = listOfProcessors => {
    return mutationsList => {
        for (let mutation of mutationsList) {
            mutation.addedNodes.forEach(n => {
                for (let i = 0; i < listOfProcessors.length; i++) {
                    listOfProcessors[i](n);
                }
            });
        }
    };
};

/**
 *
 * @param {Object} processors A config of processors
 *** @key {messages[]} Required. Ordered list of \"new message\" processors.
 *** @key {videos[]} Required. Ordered list of \"new video\" processors.
 *** @key {users[]} Required. Ordered list of \"new user in userlist\" processors.
 */
const initRunProcessors = processors => {
    _constants__WEBPACK_IMPORTED_MODULE_0__[\"msgBuffer\"].childNodes.forEach(n => {
        for (let i = 0; i < processors.messages.length; i++) {
            processors.messages[i](n, true);
        }
    });

    _constants__WEBPACK_IMPORTED_MODULE_0__[\"videoBuffer\"].childNodes.forEach(n => {
        for (let i = 0; i < processors.videos.length; i++) {
            processors.videos[i](n, true);
        }
    });

    _constants__WEBPACK_IMPORTED_MODULE_0__[\"userList\"].childNodes.forEach(n => {
        for (let i = 0; i < processors.users.length; i++) {
            processors.users[i](n, true);
        }
    });
};


//# sourceURL=webpack:///./src/processors/utility.js?");

/***/ }),

/***/ "./src/processors/videos/processors.js":
/*!*********************************************!*\
  !*** ./src/processors/videos/processors.js ***!
  \*********************************************/
/*! exports provided: addUsernameToVideoProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addUsernameToVideoProcessor\", function() { return addUsernameToVideoProcessor; });
const addUsernameToVideoProcessor = node => {
    if (node.querySelector('span[class*=\"video-added-by\"]') === null) {
        const username = node.title.split(\" \").getLastItem();
        const nameSpan = document.createElement(\"span\");
        nameSpan.className = `video-added-by-${username}`;
        nameSpan.innerHTML = `Added by <strong>${username}</strong>`;
        node.insertBefore(nameSpan, node.querySelector(\"span\"));
    }
};


//# sourceURL=webpack:///./src/processors/videos/processors.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/*! exports provided: runSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runSetup\", function() { return runSetup; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");
/* harmony import */ var to_string_loader_css_loader_sass_loader_style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! to-string-loader!css-loader!sass-loader!../style/index.scss */ \"./node_modules/to-string-loader/src/to-string.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/index.scss\");
/* harmony import */ var to_string_loader_css_loader_sass_loader_style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(to_string_loader_css_loader_sass_loader_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);




const initLargeImageArea = () => {
    const imgPreviewClass = \"image-preview\";
    if (document.querySelector(`.${imgPreviewClass}`) === null) {
        const imgPreviewContainer = document.createElement(\"div\");
        imgPreviewContainer.classList.add(imgPreviewClass);
        imgPreviewContainer.classList.add(\"hidden\");
        imgPreviewContainer.onclick = () => {
            imgPreviewContainer.classList.add(\"hidden\");
        };

        const previewImage = document.createElement(\"img\");
        imgPreviewContainer.appendChild(previewImage);

        document.addEventListener(\"keydown\", e => {
            if (
                e.key === \"Escape\" &&
                !imgPreviewContainer.classList.contains(\"hidden\")
            ) {
                imgPreviewContainer.classList.add(\"hidden\");
            }
        });

        document.body.appendChild(imgPreviewContainer);
    }
};

const initCustomCSS = () => {
    const customCssInHead = Object(_constants__WEBPACK_IMPORTED_MODULE_1__[\"getCustomCSSNode\"])();
    if (customCssInHead === null) {
        const customStyleTag = document.createElement(\"style\");
        customStyleTag.classList.add(\"custom-css\");
        document.head.appendChild(customStyleTag);
    } else {
        customCssInHead.innerText = \"\";
    }
};

const initCustomUserSettings = () => {
    const getCustomUserCss = userConfig => {
        return `
    .chat-msg-${userConfig.username} .username {
      background-image: ${userConfig.colour};
	  background-size: cover;
	  background-clip: text;
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	  background-color: currentColor;
	  filter: drop-shadow(0px 0px 8px rgba(221, 90, 160, 1)); !important;}
    }
    .video-added-by-${userConfig.username} strong {
      background-image: ${userConfig.colour};
    }
    .username-${userConfig.username} {
      background-image: ${userConfig.colour};
    }
    `;
    };

    for (let i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_1__[\"userConfig\"].length; i++) {
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"addCSS\"])(getCustomUserCss(_constants__WEBPACK_IMPORTED_MODULE_1__[\"userConfig\"][i]));
    }

    Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"addCSS\"])(to_string_loader_css_loader_sass_loader_style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
};

const initVisibilityListener = () => {
    let newMsgInterval = undefined;
    const visiblityData = Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"getVisibilityData\"])();
    if (visiblityData !== undefined) {
        window.addEventListener(_constants__WEBPACK_IMPORTED_MODULE_1__[\"newMessageEventString\"], () => {
            if (
                document[visiblityData.hidden] &&
                newMsgInterval === undefined
            ) {
                newMsgInterval = setInterval(() => {
                    if (document.title === _constants__WEBPACK_IMPORTED_MODULE_1__[\"roomName\"]) {
                        document.title = \"New Message!\";
                    } else {
                        document.title = _constants__WEBPACK_IMPORTED_MODULE_1__[\"roomName\"];
                    }
                }, 500);
            }
        });

        window.addEventListener(visiblityData.visibilityEvent, () => {
            if (!document[visiblityData.hidden]) {
                clearInterval(newMsgInterval);
                newMsgInterval = undefined;
                document.title = _constants__WEBPACK_IMPORTED_MODULE_1__[\"roomName\"];
            }
        });
    }
};

const initGifResultsArea = () => {
    const container = document.querySelector(\"#leftpane-inner\");
    container.classList.remove(\"row\");

    const gifContainer = document.createElement(\"div\");
    gifContainer.classList.add(_constants__WEBPACK_IMPORTED_MODULE_1__[\"gifSearchResultsClass\"], \"hidden\");

    const resultsContainer = document.createElement(\"div\");
    resultsContainer.classList.add(\"results\");

    const closeButton = document.createElement(\"button\");
    closeButton.innerText = \"X\";
    closeButton.addEventListener(\"click\", () => {
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"hideGifSearchResults\"])();
    });

    const errorMsgNode = document.createElement(\"div\");
    errorMsgNode.classList.add(_constants__WEBPACK_IMPORTED_MODULE_1__[\"gifErrorMsgClass\"], \"hidden\");

    gifContainer.appendChild(closeButton);
    gifContainer.appendChild(errorMsgNode);
    gifContainer.appendChild(resultsContainer);

    container.insertBefore(
        gifContainer,
        container.querySelector(\":scope > *:first-child\")
    );
};

const initMisc = () => {
    Array.prototype.getLastItem = function () {
        return this[this.length - 1];
    };
};

const runSetup = () => {
    initMisc();
    initLargeImageArea();
    initCustomCSS();
    initCustomUserSettings();
    initVisibilityListener();
    initGifResultsArea();
};


//# sourceURL=webpack:///./src/setup.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/*! exports provided: addCSS, isNodeServerMsg, scrollMsgBufferToBottom, getServerMsgNode, getMediaNode, getImgNode, getVideoNode, appendMsgNodeToBuffer, getVisibilityData, replaceMsgWithNode, clearGifSearchResults, showGifError, hideGifError, showGifSearchResults, hideGifSearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCSS\", function() { return addCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNodeServerMsg\", function() { return isNodeServerMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollMsgBufferToBottom\", function() { return scrollMsgBufferToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerMsgNode\", function() { return getServerMsgNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMediaNode\", function() { return getMediaNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImgNode\", function() { return getImgNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getVideoNode\", function() { return getVideoNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendMsgNodeToBuffer\", function() { return appendMsgNodeToBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getVisibilityData\", function() { return getVisibilityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceMsgWithNode\", function() { return replaceMsgWithNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearGifSearchResults\", function() { return clearGifSearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showGifError\", function() { return showGifError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideGifError\", function() { return hideGifError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showGifSearchResults\", function() { return showGifSearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideGifSearchResults\", function() { return hideGifSearchResults; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");


const addCSS = cssString => {
    Object(_constants__WEBPACK_IMPORTED_MODULE_0__[\"getCustomCSSNode\"])().innerText =
        Object(_constants__WEBPACK_IMPORTED_MODULE_0__[\"getCustomCSSNode\"])().innerText + \" \" + cssString;
};

const isNodeServerMsg = node => {
    return node.className.includes(\"server-msg\");
};

const scrollMsgBufferToBottom = () => {
    _constants__WEBPACK_IMPORTED_MODULE_0__[\"msgBuffer\"].scrollTop = _constants__WEBPACK_IMPORTED_MODULE_0__[\"msgBuffer\"].scrollHeight;
};

const getServerMsgNode = (msgText, colour) => {
    const container = document.createElement(\"div\");
    container.classList.add(\"server-msg-reconnect\");
    container.innerText = msgText;
    container.style.color = colour;

    return container;
};

const getMediaNode = () => {
    const container = document.createElement(\"div\");
    container.classList.add(\"media-container\");

    return container;
};

const getImgNode = imgSrc => {
    const newNode = document.createElement(\"img\");
    newNode.src = imgSrc;
    newNode.classList.add(\"image-msg\");
    newNode.classList.add(\"media-msg\");

    newNode.onclick = () => {
        document.querySelector(\".image-preview img\").src = newNode.src;
        document.querySelector(\".image-preview\").classList.remove(\"hidden\");
    };
    newNode.onload = scrollMsgBufferToBottom;

    return newNode;
};

const getVideoNode = videoSrc => {
    const newNode = document.createElement(\"video\");
    newNode.autoplay = true;
    newNode.controls = true;
    newNode.poster = true;
    newNode.loop = true;
    newNode.muted = true;

    newNode.onloadedmetadata = scrollMsgBufferToBottom;
    newNode.addEventListener(\"error\", scrollMsgBufferToBottom);

    const srcElement = document.createElement(\"source\");
    srcElement.src = videoSrc;
    const fileExt = videoSrc.match(/(?=.)\\w*$/i);
    srcElement.type = \"video/\" + fileExt;

    newNode.appendChild(srcElement);
    newNode.classList.add(\"video-msg\");
    newNode.classList.add(\"media-msg\");

    return newNode;
};

/**
 * @param {object | string} msg Can be a DOM element or text string. Will be appended to message buffer.
 * @returns {null} returns null if msg isn't a node or text string, otherwise does not explicitly return
 **/
const appendMsgNodeToBuffer = msg => {
    const msgSpan = document.createElement(\"span\");
    msgSpan.style.display = \"inline-block\";
    if (typeof msg === \"object\" && msg.innerHTML !== undefined) {
        msgSpan.appendChild(msg);
    } else if (typeof msg === \"string\") {
        msgSpan.innerText = msg;
    } else {
        return null;
    }

    const container = document.createElement(\"div\");
    container.classList.add(`chat-msg-${Object(_constants__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentUsername\"])()}`);

    const timestamp = document.createElement(\"span\");
    timestamp.classList.add(\"timestamp\");
    const dateTime = new Date();
    // Whitespace on end is expected
    timestamp.innerText = `[${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}] `;

    const usernameSpan = document.createElement(\"span\");
    const usernameStrong = document.createElement(\"strong\");
    // Whitespace on end is expected
    usernameStrong.innerText = `${Object(_constants__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentUsername\"])()}: `;
    usernameStrong.classList.add(\"username\");

    usernameSpan.appendChild(usernameStrong);

    container.appendChild(timestamp);
    container.appendChild(usernameSpan);
    container.appendChild(msgSpan);

    _constants__WEBPACK_IMPORTED_MODULE_0__[\"msgBuffer\"].appendChild(container);
};

const getVisibilityData = () => {
    if (typeof document.hidden !== \"undefined\") {
        return {
            hidden: \"hidden\",
            visibilityEvent: \"visibilitychange\",
        };
    } else if (typeof document.msHidden !== \"undefined\") {
        return {
            hidden: \"msHidden\",
            visibilityEvent: \"msvisibilitychange\",
        };
    } else if (typeof document.webkitHidden !== \"undefined\") {
        return {
            hidden: \"webkitHidden\",
            visibilityEvent: \"webkitvisibilitychange\",
        };
    }

    return undefined;
};

const replaceMsgWithNode = (msgNode, newNode) => {
    msgNode.parentNode.replaceChild(newNode, msgNode);
};

const clearGifSearchResults = () => {
    Object(_constants__WEBPACK_IMPORTED_MODULE_0__[\"getGifSearchNode\"])().querySelector(\".results\").innerHTML = \"\";
};

const showGifError = () => {
    const errorMsgNode = Object(_constants__WEBPACK_IMPORTED_MODULE_0__[\"getGifErrorMsgNode\"])();
    if (errorMsgNode.classList.contains(\"hidden\")) {
        errorMsgNode.classList.remove(\"hidden\");
    }
};

const hideGifError = () => {
    const errorMsgNode = Object(_constants__WEBPACK_IMPORTED_MODULE_0__[\"getGifErrorMsgNode\"])();
    if (!errorMsgNode.classList.contains(\"hidden\")) {
        errorMsgNode.classList.add(\"hidden\");
    }
};

const showGifSearchResults = () => {
    const container = Object(_constants__WEBPACK_IMPORTED_MODULE_0__[\"getGifSearchNode\"])();
    if (container.classList.contains(\"hidden\")) {
        container.classList.remove(\"hidden\");
    }
};

const hideGifSearchResults = () => {
    const container = Object(_constants__WEBPACK_IMPORTED_MODULE_0__[\"getGifSearchNode\"])();
    if (!container.classList.contains(\"hidden\")) {
        container.classList.add(\"hidden\");
    }

    clearGifSearchResults();
    hideGifError();
};


//# sourceURL=webpack:///./src/utility.js?");

/***/ })

/******/ });

/* Adds Element BEFORE NeighborElement */
Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
}, false;

/* Adds Element AFTER NeighborElement */
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}, false;

if ($(window).width() < 769) {
   /*  Add NewElement BEFORE -OR- AFTER Using the Aforementioned Prototypes */
chatwrap.appendAfter(document.getElementById('videowrap'));


		var my_elem = document.getElementById('controlsrow');

var span = document.createElement('span');
    span.innerHTML = 'Queue˅';
    span.className = 'settingss';
span.setAttribute("id", "Div1");

my_elem.parentNode.insertBefore(span, my_elem);

document.getElementById("Div1").onclick = function() {
fun()
};
function fun() {
var para = document.getElementById("controlsrow");
        para.classList.toggle("toogleclass");
}
}

