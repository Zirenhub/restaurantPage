/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/grill-background.jpg */ "./src/img/grill-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Figtree&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n:root {\r\n    --main-font: 'Figtree', sans-serif;\r\n}\r\n\r\n.header-container {\r\n    font-family: var(--main-font);\r\n    display: flex;\r\n    justify-content: center;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\r\n}\r\n\r\n.header-container > p {\r\n    color: #ffffff;\r\n    padding-top: 50px;\r\n    font-size: 2.5rem;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;IAGI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB;AACJ;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,iBAAiB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Figtree&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n:root {\r\n    --main-font: 'Figtree', sans-serif;\r\n}\r\n\r\n.header-container {\r\n    font-family: var(--main-font);\r\n    display: flex;\r\n    justify-content: center;\r\n    background-image: url(./img/grill-background.jpg)\r\n}\r\n\r\n.header-container > p {\r\n    color: #ffffff;\r\n    padding-top: 50px;\r\n    font-size: 2.5rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/page-load.js":
/*!******************************!*\
  !*** ./src/app/page-load.js ***!
  \******************************/
/***/ (() => {

const template = document.querySelector('#content');

const header = document.createElement('header');
header.classList.add('header-container');
const headerText = document.createElement('p');
const headerMiniText = document.createElement('p');

headerText.textContent = 'Welcome to JigaChad Restaurant.';
headerMiniText.textContent =
  'Where something good is always cooking.';

header.appendChild(headerText);
template.appendChild(header);


/***/ }),

/***/ "./src/img/grill-background.jpg":
/*!**************************************!*\
  !*** ./src/img/grill-background.jpg ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gNzUK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBoALkAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8AooooAKKKKACkNLSGgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACilpQCelACUU8Rmgxn0pXL5GMpKcVI60lMhqwlFFFABRRRQAtFIKWgYUUUUCEoFLRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUhpaQ0AFFFFABRRRQAUUUUAFFGKMUAFFGKMUAFFGKBQAYoxS0UAJijFLRQAmKMUtFACYoxS0UAJijFLRQAoGTU0SZqEHBqxFyeKmTNqKTZajiBpzxAKaliQ7elEoIU1z82p6qprkvYzpgBVY9ammJ3EVDXRHY8iq05BRRRVGYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFIaWkxQAUUYoxQAUYoxS0AJijFLRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABV60QswqkBk1r2MfANZVHZHZg6fNMtpGAtMnTCGrgXAqC4GFxXInqe9OmlA5+cfOaiqe5GHNQV3x2PmaqtNhRRRTMwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopDQAtFJmjNABmjNFFABmjNFFABmiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigB0Yy4robGP5RWJaxF5R9a6e2iCoBjHHWuXEytoe1lVJybkKQAKq3JyD7VclIUGs2d+tc8Nz1sS1FGPdffqvUs5zIair0Y7HydV3mwoooNMzCigc0pFAWEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikooAKKKKACiiigAooooAKKKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKmjiL80yOMswGK2rS0+VcjOazqTUUdeFwzqyJNLsCzA7a2jF5S81paVp4S18wjnFU74gOQBzXlyq+0nY+ww+HjQpWRl3LjBxWTPJ1q9ct1rJmbrXVSiePjqurKch3OTTKU8kmkruR863dhSgEmk61NHH3pN2KhHmYBOKRhgVMFxUMhxxUp3ZtKKiiI9aKKKs5gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiigdaADFFTxQl1J7VG6FT7Urlum0rjKKKKZAUUUUAFFFFABRRRQAUUUUAFJRmigAooooAKKKKACiiigAooooAKKKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAp8S7mplXrGEs/TOambsrm1Cm5zSRZtbYs68V1WmaYXdfk60uhaK87K5TIrt7LSxEMhMAd68TF4tLS59bg8PGjG7KMkS29rtxjArjL+X9+3Pc12Oty+QpHTtXAahNmUnPU1OEi3qdWJqqNO5SuX4PNZcz8EVauJCRWe5ya9inE+UxdXmYzNBopyqSa2ueck2KgyatgYXFMiQDmpOBUSdztpw5Vcjc7Vyaqk5OalmbPFQ1UUc9aV3YKKKKoxCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopRk/jVmKxuJvuRnH0pNpblwpym7RVyrT40LNitGPRrlzyh/KtvTPDTu4Mg4rCpiacFds7qGW16kkmrGfa2TfZGcrwO9UruEBciu+1XT0sdHwFwSetcZOgMR47Vy4fEe095Hs4zAxp01BdEYZGDSU9xhzTK9I+WejsFFFFAgopM0ZoAWikzRmgBaKTNGaACiiigAooooAKKKKACiiigAooooAKKKKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBR1rqfD1gbidABnkE1zEQ3OFHUmvV/AmlGTZIV64/KuLH1VTpXPWyqmpTcnsjrNK0sQwqAgHArde1WGzZiMEitC2sMBQBwKi1siC229MDmvk5uUndnruvzzUInlfiuYIxHevPrucOx5711Xiu7zNIc8AkVwTzFmJr6XA0v3aZjmuJVNqCJnO5agYU5GDUpA7V6C0PDk+fUiC81MqEClRCTkipgvahyKhSEUHFMkbAqcLgVUnPWpWrLqe7EgY5NJSd6WtjgbuFFFFAgooooAKKKKACiiigAooooAKKKKACiiig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";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/page-load */ "./src/app/page-load.js");
/* harmony import */ var _app_page_load__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_page_load__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2FwcC9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2dyaWxsLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaWd0cmVlJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLW1haW4tZm9udDogJ0ZpZ3RyZWUnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciA+IHAge1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaWd0cmVlJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tbWFpbi1mb250OiAnRmlndHJlZScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvZ3JpbGwtYmFja2dyb3VuZC5qcGcpXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyID4gcCB7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250YWluZXInKTtcclxuY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgaGVhZGVyTWluaVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG5oZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gSmlnYUNoYWQgUmVzdGF1cmFudC4nO1xyXG5oZWFkZXJNaW5pVGV4dC50ZXh0Q29udGVudCA9XHJcbiAgJ1doZXJlIHNvbWV0aGluZyBnb29kIGlzIGFsd2F5cyBjb29raW5nLic7XHJcblxyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XHJcbnRlbXBsYXRlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlTG9hZCBmcm9tICcuL2FwcC9wYWdlLWxvYWQnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9