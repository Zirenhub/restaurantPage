/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo-image.jpg */ "./src/img/logo-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n:root {\r\n    --main-font: 'Permanent Marker', cursive;\r\n    --main-font-color: #c9142a;\r\n    --main-background-color: #fddb00;\r\n    --darker-background-color: #d5b02c;\r\n    --text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n    --box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.header-container {\r\n    font-family: var(--main-font);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background-color: var(--main-background-color);\r\n    border: 5px solid var(--main-font-color);\r\n    box-shadow: var(--box-shadow);\r\n}\r\n\r\n.header-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color: var(--main-font-color);\r\n    justify-items: center;\r\n}\r\n\r\n.header-content p:first-of-type {\r\n    text-shadow: var(--text-shadow);\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.header-content p:last-of-type {\r\n    font-style: italic;\r\n    color: #e12120;\r\n}\r\n\r\n.header-logo-button-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n}\r\n\r\n.header-logo-container {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    width: 800px;\r\n    height: 100px;\r\n}\r\n\r\n.header-buttons {\r\n    font-family: var(--main-font);\r\n    color: var(--main-font-color);\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 1.5rem;\r\n    justify-self: center;\r\n    align-self: center;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    user-select: none;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    transition: all .5s ease;\r\n}\r\n\r\n.header-buttons:hover {\r\n    box-shadow: var(--box-shadow);\r\n    border: 1px solid var(--main-font-color);\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.header-buttons:active {\r\n    top: 1px;\r\n}\r\n\r\n.header-buttons:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    transition: all 0.5s;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px 40px var(--main-font-color);\r\n}\r\n\r\n.header-buttons:active::after {\r\n    box-shadow: 0 0 0 0 var(--main-font-color);\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 1;\r\n    transition: 0s;\r\n}\r\n\r\n.main-container {\r\n    flex-grow: 1;\r\n}\r\n\r\n/* main page */\r\n\r\n.main-container > iframe {\r\n    display: block;\r\n    border: none;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/* menu page */\r\n\r\n.menu-content {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    height: 100%;\r\n}\r\n\r\n.menu-content > * {\r\n    background-color:  var(--darker-background-color);\r\n    border: 1px solid var(--main-font-color);\r\n    color: var(--main-font-color);\r\n    font-family: var(--main-font);\r\n    text-align: center;\r\n}\r\n\r\n.menu-header {\r\n    font-size: 2rem;\r\n    margin-bottom: 50px;\r\n    text-shadow: var(--text-shadow);\r\n    border-bottom: 2px solid var(--main-font-color);\r\n    border-radius: 50px;\r\n    box-shadow: var(--box-shadow);\r\n    padding: 10px;\r\n}\r\n\r\n.menu-item-container {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.menu-item-container > p {\r\n    margin-bottom: 70px;\r\n    border-bottom: 2px solid rgba(201, 20, 42, 0.3);\r\n}\r\n\r\n/* about page */\r\n\r\n.about-container {\r\n    height: 100%;\r\n    background-color: var(--main-background-color);\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.about-content {\r\n    align-self: center;\r\n    width: 90%;\r\n    border:1px solid var(--main-font-color);\r\n    background-color: var(--darker-background-color);\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    align-items: center;\r\n}\r\n\r\n.about-content > p  {\r\n    padding: 20px;\r\n    font-size: 1.6rem;\r\n    font-family: var(--main-font);\r\n    color: var(--main-font-color);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;IAGI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,wCAAwC;IACxC,0BAA0B;IAC1B,gCAAgC;IAChC,kCAAkC;IAClC,mEAAmE;IACnE,iFAAiF;AACrF;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,8CAA8C;IAC9C,wCAAwC;IACxC,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,qBAAqB;AACzB;;AAEA;IACI,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,yDAA2C;IAC3C,wBAAwB;IACxB,4BAA4B;IAC5B,2BAA2B;IAC3B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,6BAA6B;IAC7B,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,wBAAwB;AAC5B;;AAEA;IACI,6BAA6B;IAC7B,wCAAwC;IACxC,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,UAAU;IACV,oBAAoB;IACpB,mBAAmB;IACnB,gDAAgD;AACpD;;AAEA;IACI,0CAA0C;IAC1C,mBAAmB;IACnB,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA,cAAc;;AAEd;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,WAAW;AACf;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,iDAAiD;IACjD,wCAAwC;IACxC,6BAA6B;IAC7B,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,+BAA+B;IAC/B,+CAA+C;IAC/C,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,+CAA+C;AACnD;;AAEA,eAAe;;AAEf;IACI,YAAY;IACZ,8CAA8C;IAC9C,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,uCAAuC;IACvC,gDAAgD;IAChD,aAAa;IACb,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,6BAA6B;IAC7B,6BAA6B;AACjC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n:root {\r\n    --main-font: 'Permanent Marker', cursive;\r\n    --main-font-color: #c9142a;\r\n    --main-background-color: #fddb00;\r\n    --darker-background-color: #d5b02c;\r\n    --text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n    --box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.header-container {\r\n    font-family: var(--main-font);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background-color: var(--main-background-color);\r\n    border: 5px solid var(--main-font-color);\r\n    box-shadow: var(--box-shadow);\r\n}\r\n\r\n.header-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color: var(--main-font-color);\r\n    justify-items: center;\r\n}\r\n\r\n.header-content p:first-of-type {\r\n    text-shadow: var(--text-shadow);\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.header-content p:last-of-type {\r\n    font-style: italic;\r\n    color: #e12120;\r\n}\r\n\r\n.header-logo-button-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n}\r\n\r\n.header-logo-container {\r\n    background-image: url(./img/logo-image.jpg);\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    width: 800px;\r\n    height: 100px;\r\n}\r\n\r\n.header-buttons {\r\n    font-family: var(--main-font);\r\n    color: var(--main-font-color);\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 1.5rem;\r\n    justify-self: center;\r\n    align-self: center;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    user-select: none;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    transition: all .5s ease;\r\n}\r\n\r\n.header-buttons:hover {\r\n    box-shadow: var(--box-shadow);\r\n    border: 1px solid var(--main-font-color);\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.header-buttons:active {\r\n    top: 1px;\r\n}\r\n\r\n.header-buttons:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    transition: all 0.5s;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px 40px var(--main-font-color);\r\n}\r\n\r\n.header-buttons:active::after {\r\n    box-shadow: 0 0 0 0 var(--main-font-color);\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    opacity: 1;\r\n    transition: 0s;\r\n}\r\n\r\n.main-container {\r\n    flex-grow: 1;\r\n}\r\n\r\n/* main page */\r\n\r\n.main-container > iframe {\r\n    display: block;\r\n    border: none;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/* menu page */\r\n\r\n.menu-content {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    height: 100%;\r\n}\r\n\r\n.menu-content > * {\r\n    background-color:  var(--darker-background-color);\r\n    border: 1px solid var(--main-font-color);\r\n    color: var(--main-font-color);\r\n    font-family: var(--main-font);\r\n    text-align: center;\r\n}\r\n\r\n.menu-header {\r\n    font-size: 2rem;\r\n    margin-bottom: 50px;\r\n    text-shadow: var(--text-shadow);\r\n    border-bottom: 2px solid var(--main-font-color);\r\n    border-radius: 50px;\r\n    box-shadow: var(--box-shadow);\r\n    padding: 10px;\r\n}\r\n\r\n.menu-item-container {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.menu-item-container > p {\r\n    margin-bottom: 70px;\r\n    border-bottom: 2px solid rgba(201, 20, 42, 0.3);\r\n}\r\n\r\n/* about page */\r\n\r\n.about-container {\r\n    height: 100%;\r\n    background-color: var(--main-background-color);\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.about-content {\r\n    align-self: center;\r\n    width: 90%;\r\n    border:1px solid var(--main-font-color);\r\n    background-color: var(--darker-background-color);\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    align-items: center;\r\n}\r\n\r\n.about-content > p  {\r\n    padding: 20px;\r\n    font-size: 1.6rem;\r\n    font-family: var(--main-font);\r\n    color: var(--main-font-color);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/app/about-page.js":
/*!*******************************!*\
  !*** ./src/app/about-page.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAboutPage)
/* harmony export */ });
function createAboutPage() {
  const mainContainer = document.querySelector('.main-container');
  createAboutPageContent(mainContainer);
}

function createAboutPageContent(mainContainer) {
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  const aboutContent = document.createElement('div');
  aboutContent.classList.add('about-content');

  // first col - first text paragraph

  const aboutFirstCol = document.createElement('p');
  aboutFirstCol.textContent =
    'In the little village where I was born, life moved at a slower pace, yet felt all the richer for it. There, my two uncles were known far and wide for their delicious cooking. They seasoned their zesty chicken using only the freshest herbs and spices. People call them Los Pollos Hermanos: the chicken brothers. Today we carry on their tradition in a manner that would make my uncles proud. The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don’t take my word for it. One taste, and you’ll know.';
  aboutFirstCol.classList.add('about-first-col');

  const aboutSecondCol = document.createElement('div');
  aboutSecondCol.classList.add('about-second-col');

  const aboutThirdCol = document.createElement('p');
  aboutThirdCol.classList.add('about-third-col');
  aboutThirdCol.textContent =
    'In the little village where I was born, life moved at a slower pace, yet felt all the richer for it. There, my two uncles were known far and wide for their delicious cooking. They seasoned their zesty chicken using only the freshest herbs and spices. People call them Los Pollos Hermanos: the chicken brothers. Today we carry on their tradition in a manner that would make my uncles proud. The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don’t take my word for it. One taste, and you’ll know.';

  aboutContent.appendChild(aboutThirdCol);
  aboutContent.appendChild(aboutSecondCol);
  aboutContent.appendChild(aboutFirstCol);
  aboutContainer.appendChild(aboutContent);
  mainContainer.appendChild(aboutContainer);
}


/***/ }),

/***/ "./src/app/menu-page.js":
/*!******************************!*\
  !*** ./src/app/menu-page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
function createMenuPage() {
  const mainContainer = document.querySelector('.main-container');
  createMenuPageContent(mainContainer);
}

function createMenuPageContent(mainContainer) {
  ////////////////////////////
  //          MENU          //
  ////////////////////////////

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  ////////////////////////////
  //    MENU  COL ONE       //
  ////////////////////////////

  const menuColOne = document.createElement('div');
  menuColOne.classList.add('menu-col-one');

  const menuHeaderColOne = document.createElement('p');
  menuHeaderColOne.classList.add('menu-header');
  menuHeaderColOne.textContent = 'BURRITOS';

  const menuItemsDiv = document.createElement('div');
  menuItemsDiv.classList.add('menu-item-container');

  const menuItemOneColOne = document.createElement('p');
  menuItemOneColOne.textContent = 'Carne Adovada';

  const menuItemTwoColOne = document.createElement('p');
  menuItemTwoColOne.textContent = 'Ground Beef';

  const menuItemThreeColOne = document.createElement('p');
  menuItemThreeColOne.textContent = 'Green Chile Chicken';

  const menuItemFourColOne = document.createElement('p');
  menuItemFourColOne.textContent = 'Shredded Beef';

  const menuItemFiveColOne = document.createElement('p');
  menuItemFiveColOne.textContent = 'Rice and Beans';

  const menuItemSixColOne = document.createElement('p');
  menuItemSixColOne.textContent = 'Beans and Cheese';

  menuColOne.appendChild(menuHeaderColOne);
  menuColOne.appendChild(menuItemsDiv);
  menuItemsDiv.appendChild(menuItemOneColOne);
  menuItemsDiv.appendChild(menuItemTwoColOne);
  menuItemsDiv.appendChild(menuItemThreeColOne);
  menuItemsDiv.appendChild(menuItemFourColOne);
  menuItemsDiv.appendChild(menuItemFiveColOne);
  menuItemsDiv.appendChild(menuItemSixColOne);

  ////////////////////////////
  //    MENU  COL TWO       //
  ////////////////////////////

  const menuColTwo = document.createElement('div');
  menuColTwo.classList.add('menu-col-two');

  const menuHeaderColTwo = document.createElement('p');
  menuHeaderColTwo.classList.add('menu-header');
  menuHeaderColTwo.textContent = 'BURGERS';

  const menuItemsDivTwo = document.createElement('div');
  menuItemsDivTwo.classList.add('menu-item-container');

  const menuItemOneColTwo = document.createElement('p');
  menuItemOneColTwo.textContent = 'All American Cheeseburger';

  const menuItemTwoColTwo = document.createElement('p');
  menuItemTwoColTwo.textContent = 'Green Chile Cheeseburger';

  const menuItemThreeColTwo = document.createElement('p');
  menuItemThreeColTwo.textContent = 'Honey BBQ Bacon Cheeseburger';

  const menuItemFourColTwo = document.createElement('p');
  menuItemFourColTwo.textContent = 'Cali Cheeseburger';

  const menuItemFiveColTwo = document.createElement('p');
  menuItemFiveColTwo.textContent = 'Burque Breakfast Burger';

  menuColTwo.appendChild(menuHeaderColTwo);
  menuColTwo.appendChild(menuItemsDivTwo);
  menuItemsDivTwo.appendChild(menuItemOneColTwo);
  menuItemsDivTwo.appendChild(menuItemTwoColTwo);
  menuItemsDivTwo.appendChild(menuItemThreeColTwo);
  menuItemsDivTwo.appendChild(menuItemFourColTwo);
  menuItemsDivTwo.appendChild(menuItemFiveColTwo);

  ////////////////////////////
  //    MENU  COL THREE     //
  ////////////////////////////

  const menuColThree = document.createElement('div');
  menuColThree.classList.add('menu-col-three');

  const menuHeaderColThree = document.createElement('p');
  menuHeaderColThree.classList.add('menu-header');
  menuHeaderColThree.textContent = 'CHICKEN';

  const menuItemsDivThree = document.createElement('div');
  menuItemsDivThree.classList.add('menu-item-container');

  const menuItemOneColThree = document.createElement('p');
  menuItemOneColThree.textContent = 'Honey BBQ Bacon';

  const menuItemTwoColThree = document.createElement('p');
  menuItemTwoColThree.textContent = 'New Mexican';

  const menuItemThreeColThree = document.createElement('p');
  menuItemThreeColThree.textContent = 'Californian';

  const menuItemFourColThree = document.createElement('p');
  menuItemFourColThree.textContent = 'Americano';

  menuColThree.appendChild(menuHeaderColThree);
  menuColThree.appendChild(menuItemsDivThree);
  menuItemsDivThree.appendChild(menuItemOneColThree);
  menuItemsDivThree.appendChild(menuItemTwoColThree);
  menuItemsDivThree.appendChild(menuItemThreeColThree);
  menuItemsDivThree.appendChild(menuItemFourColThree);

  //-----------------------------------//
  menuContent.appendChild(menuColOne);
  menuContent.appendChild(menuColTwo);
  menuContent.appendChild(menuColThree);
  mainContainer.appendChild(menuContent);
}


/***/ }),

/***/ "./src/app/page-load.js":
/*!******************************!*\
  !*** ./src/app/page-load.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMainPage)
/* harmony export */ });
const template = document.querySelector('#content');

const mainContent = document.createElement('div');
mainContent.classList.add('main-container');

function createMainPage() {
  createMainPageContent();
}

(function createHeader() {
  ////////////////////////////
  //          HEADER        //
  ////////////////////////////

  //header
  const header = document.createElement('header');
  header.classList.add('header-container');

  //header, content
  const headerContent = document.createElement('div');
  headerContent.classList.add('header-content');

  //header welcome to text
  const headerText = document.createElement('p');
  headerText.textContent = 'Welcome to';

  //header mini text
  const headerMiniText = document.createElement('p');
  headerMiniText.textContent =
    'Where something good is always cooking.';

  //header logo-buttons container
  const headerLogoButtonContainer = document.createElement('div');
  headerLogoButtonContainer.classList.add(
    'header-logo-button-container'
  );

  //header main button
  const headerMainButton = document.createElement('button');
  headerMainButton.textContent = 'Main';
  headerMainButton.classList.add('header-buttons');

  //header menu button
  const headerMenuButton = document.createElement('button');
  headerMenuButton.textContent = 'Menu';
  headerMenuButton.classList.add('header-buttons');

  //header about button
  const headerAboutButton = document.createElement('button');
  headerAboutButton.textContent = 'About';
  headerAboutButton.classList.add('header-buttons');

  //header about button
  const headerLocationButton = document.createElement('button');
  headerLocationButton.textContent = 'Location';
  headerLocationButton.classList.add('header-buttons');

  //header logo container
  const headerLogo = document.createElement('div');
  headerLogo.classList.add('header-logo-container');

  headerContent.appendChild(headerText);
  headerContent.appendChild(headerLogoButtonContainer);
  headerContent.appendChild(headerMiniText);

  headerLogoButtonContainer.appendChild(headerMainButton);
  headerLogoButtonContainer.appendChild(headerMenuButton);
  headerLogoButtonContainer.appendChild(headerLogo);
  headerLogoButtonContainer.appendChild(headerAboutButton);
  headerLogoButtonContainer.appendChild(headerLocationButton);

  header.appendChild(headerContent);

  template.appendChild(header);
})();

function createMainPageContent() {
  ////////////////////////////
  //          MAIN          //
  ////////////////////////////

  const videoSource = document.createElement('iframe');
  videoSource.setAttribute(
    'src',
    'https://www.youtube.com/embed/FIQ2F3T1ydM?autoplay=1'
  );
  videoSource.setAttribute('frameborder', '0');
  // videoSource.setAttribute('allow', 'autoplay');
  // videoSource.setAttribute('autoplay', '');

  mainContent.appendChild(videoSource);
  template.appendChild(mainContent);
}


/***/ }),

/***/ "./src/img/logo-image.jpg":
/*!********************************!*\
  !*** ./src/img/logo-image.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/9d7302de2445d782d4ea.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/page-load */ "./src/app/page-load.js");
/* harmony import */ var _app_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/menu-page */ "./src/app/menu-page.js");
/* harmony import */ var _app_about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/about-page */ "./src/app/about-page.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_app_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();

const headerTabs = document.querySelectorAll('.header-buttons');

function changeTabs(tabText) {
  const mainContainer = document.querySelector('.main-container');
  while (mainContainer.hasChildNodes()) {
    mainContainer.removeChild(mainContainer.lastChild);
  }
  if (tabText === 'Main') {
    (0,_app_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
  } else if (tabText === 'Menu') {
    (0,_app_menu_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else if (tabText === 'About') {
    (0,_app_about_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}

headerTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    let tabText = tab.textContent;
    changeTabs(tabText);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDQTtBQUNFO0FBQzFCO0FBQ3JCO0FBQ0EsMERBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFjO0FBQ2xCLElBQUk7QUFDSixJQUFJLDBEQUFjO0FBQ2xCLElBQUk7QUFDSixJQUFJLDJEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXBwL2Fib3V0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXBwL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hcHAvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2xvZ28taW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLW1haW4tZm9udDogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xcclxcbiAgICAtLW1haW4tZm9udC1jb2xvcjogI2M5MTQyYTtcXHJcXG4gICAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICNmZGRiMDA7XFxyXFxuICAgIC0tZGFya2VyLWJhY2tncm91bmQtY29sb3I6ICNkNWIwMmM7XFxyXFxuICAgIC0tdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XFxyXFxuICAgIC0tYm94LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDhweCAxMHB4IC02cHggcmdiKDAgMCAwIC8gMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGVudCBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogdmFyKC0tdGV4dC1zaGFkb3cpO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250ZW50IHA6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjogI2UxMjEyMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sb2dvLWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxvZ28tY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b25zIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b25zOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbnM6YWN0aXZlIHtcXHJcXG4gICAgdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9uczphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA0MHB4IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9uczphY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMHM7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbiBwYWdlICovXFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyID4gaWZyYW1lIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudSBwYWdlICovXFxyXFxuXFxyXFxuLm1lbnUtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGVudCA+ICoge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tZGFya2VyLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogdmFyKC0tdGV4dC1zaGFkb3cpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tY29udGFpbmVyID4gcCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDIwMSwgMjAsIDQyLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhYm91dCBwYWdlICovXFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1jb250ZW50IHtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRlbnQgPiBwICB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLG1FQUFtRTtJQUNuRSxpRkFBaUY7QUFDckY7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx5REFBMkM7SUFDM0Msd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCx3Q0FBd0M7SUFDeEMsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQiwrQ0FBK0M7SUFDL0MsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLCtDQUErQztBQUNuRDs7QUFFQSxlQUFlOztBQUVmO0lBQ0ksWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMsZ0RBQWdEO0lBQ2hELGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1tYWluLWZvbnQ6ICdQZXJtYW5lbnQgTWFya2VyJywgY3Vyc2l2ZTtcXHJcXG4gICAgLS1tYWluLWZvbnQtY29sb3I6ICNjOTE0MmE7XFxyXFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmRkYjAwO1xcclxcbiAgICAtLWRhcmtlci1iYWNrZ3JvdW5kLWNvbG9yOiAjZDViMDJjO1xcclxcbiAgICAtLXRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xcclxcbiAgICAtLWJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC01cHggcmdiKDAgMCAwIC8gMC4xKSwgMCA4cHggMTBweCAtNnB4IHJnYigwIDAgMCAvIDAuMSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRlbnQgcDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHQtc2hhZG93KTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGVudCBwOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ICNlMTIxMjA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nby1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9sb2dvLWltYWdlLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYnV0dG9uczpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1idXR0b25zOmFjdGl2ZSB7XFxyXFxuICAgIHRvcDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbnM6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNDBweCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJ1dHRvbnM6YWN0aXZlOjphZnRlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IDBzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gcGFnZSAqL1xcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciA+IGlmcmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIG1lbnUgcGFnZSAqL1xcclxcblxcclxcbi5tZW51LWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRlbnQgPiAqIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWRhcmtlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHQtc2hhZG93KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWNvbnRhaW5lciA+IHAge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyMDEsIDIwLCA0MiwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogYWJvdXQgcGFnZSAqL1xcclxcblxcclxcbi5hYm91dC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGVudCB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1jb250ZW50ID4gcCAge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWJvdXRQYWdlKCkge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcclxuICBjcmVhdGVBYm91dFBhZ2VDb250ZW50KG1haW5Db250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dFBhZ2VDb250ZW50KG1haW5Db250YWluZXIpIHtcclxuICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhYm91dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudCcpO1xyXG5cclxuICAvLyBmaXJzdCBjb2wgLSBmaXJzdCB0ZXh0IHBhcmFncmFwaFxyXG5cclxuICBjb25zdCBhYm91dEZpcnN0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGFib3V0Rmlyc3RDb2wudGV4dENvbnRlbnQgPVxyXG4gICAgJ0luIHRoZSBsaXR0bGUgdmlsbGFnZSB3aGVyZSBJIHdhcyBib3JuLCBsaWZlIG1vdmVkIGF0IGEgc2xvd2VyIHBhY2UsIHlldCBmZWx0IGFsbCB0aGUgcmljaGVyIGZvciBpdC4gVGhlcmUsIG15IHR3byB1bmNsZXMgd2VyZSBrbm93biBmYXIgYW5kIHdpZGUgZm9yIHRoZWlyIGRlbGljaW91cyBjb29raW5nLiBUaGV5IHNlYXNvbmVkIHRoZWlyIHplc3R5IGNoaWNrZW4gdXNpbmcgb25seSB0aGUgZnJlc2hlc3QgaGVyYnMgYW5kIHNwaWNlcy4gUGVvcGxlIGNhbGwgdGhlbSBMb3MgUG9sbG9zIEhlcm1hbm9zOiB0aGUgY2hpY2tlbiBicm90aGVycy4gVG9kYXkgd2UgY2Fycnkgb24gdGhlaXIgdHJhZGl0aW9uIGluIGEgbWFubmVyIHRoYXQgd291bGQgbWFrZSBteSB1bmNsZXMgcHJvdWQuIFRoZSBmaW5lc3QgaW5ncmVkaWVudHMgYXJlIGJyb3VnaHQgdG9nZXRoZXIgd2l0aCBsb3ZlIGFuZCBjYXJlLCB0aGVuIHNsb3cgY29va2VkIHRvIHBlcmZlY3Rpb24uIFllcywgdGhlIG9sZCB3YXlzIGFyZSBzdGlsbCBiZXN0IGF0IExvcyBQb2xsb3MgSGVybWFub3MuIEJ1dCBkb27igJl0IHRha2UgbXkgd29yZCBmb3IgaXQuIE9uZSB0YXN0ZSwgYW5kIHlvdeKAmWxsIGtub3cuJztcclxuICBhYm91dEZpcnN0Q29sLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWZpcnN0LWNvbCcpO1xyXG5cclxuICBjb25zdCBhYm91dFNlY29uZENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFib3V0U2Vjb25kQ29sLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXNlY29uZC1jb2wnKTtcclxuXHJcbiAgY29uc3QgYWJvdXRUaGlyZENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBhYm91dFRoaXJkQ29sLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXRoaXJkLWNvbCcpO1xyXG4gIGFib3V0VGhpcmRDb2wudGV4dENvbnRlbnQgPVxyXG4gICAgJ0luIHRoZSBsaXR0bGUgdmlsbGFnZSB3aGVyZSBJIHdhcyBib3JuLCBsaWZlIG1vdmVkIGF0IGEgc2xvd2VyIHBhY2UsIHlldCBmZWx0IGFsbCB0aGUgcmljaGVyIGZvciBpdC4gVGhlcmUsIG15IHR3byB1bmNsZXMgd2VyZSBrbm93biBmYXIgYW5kIHdpZGUgZm9yIHRoZWlyIGRlbGljaW91cyBjb29raW5nLiBUaGV5IHNlYXNvbmVkIHRoZWlyIHplc3R5IGNoaWNrZW4gdXNpbmcgb25seSB0aGUgZnJlc2hlc3QgaGVyYnMgYW5kIHNwaWNlcy4gUGVvcGxlIGNhbGwgdGhlbSBMb3MgUG9sbG9zIEhlcm1hbm9zOiB0aGUgY2hpY2tlbiBicm90aGVycy4gVG9kYXkgd2UgY2Fycnkgb24gdGhlaXIgdHJhZGl0aW9uIGluIGEgbWFubmVyIHRoYXQgd291bGQgbWFrZSBteSB1bmNsZXMgcHJvdWQuIFRoZSBmaW5lc3QgaW5ncmVkaWVudHMgYXJlIGJyb3VnaHQgdG9nZXRoZXIgd2l0aCBsb3ZlIGFuZCBjYXJlLCB0aGVuIHNsb3cgY29va2VkIHRvIHBlcmZlY3Rpb24uIFllcywgdGhlIG9sZCB3YXlzIGFyZSBzdGlsbCBiZXN0IGF0IExvcyBQb2xsb3MgSGVybWFub3MuIEJ1dCBkb27igJl0IHRha2UgbXkgd29yZCBmb3IgaXQuIE9uZSB0YXN0ZSwgYW5kIHlvdeKAmWxsIGtub3cuJztcclxuXHJcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0VGhpcmRDb2wpO1xyXG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dFNlY29uZENvbCk7XHJcbiAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0Rmlyc3RDb2wpO1xyXG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGVudCk7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xyXG4gIGNyZWF0ZU1lbnVQYWdlQ29udGVudChtYWluQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2VDb250ZW50KG1haW5Db250YWluZXIpIHtcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8gICAgICAgICAgTUVOVSAgICAgICAgICAvL1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRlbnQnKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vICAgIE1FTlUgIENPTCBPTkUgICAgICAgLy9cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIGNvbnN0IG1lbnVDb2xPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51Q29sT25lLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29sLW9uZScpO1xyXG5cclxuICBjb25zdCBtZW51SGVhZGVyQ29sT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG1lbnVIZWFkZXJDb2xPbmUuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcclxuICBtZW51SGVhZGVyQ29sT25lLnRleHRDb250ZW50ID0gJ0JVUlJJVE9TJztcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWVudUl0ZW1zRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1PbmVDb2xPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVudUl0ZW1PbmVDb2xPbmUudGV4dENvbnRlbnQgPSAnQ2FybmUgQWRvdmFkYSc7XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtVHdvQ29sT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG1lbnVJdGVtVHdvQ29sT25lLnRleHRDb250ZW50ID0gJ0dyb3VuZCBCZWVmJztcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1UaHJlZUNvbE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBtZW51SXRlbVRocmVlQ29sT25lLnRleHRDb250ZW50ID0gJ0dyZWVuIENoaWxlIENoaWNrZW4nO1xyXG5cclxuICBjb25zdCBtZW51SXRlbUZvdXJDb2xPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVudUl0ZW1Gb3VyQ29sT25lLnRleHRDb250ZW50ID0gJ1NocmVkZGVkIEJlZWYnO1xyXG5cclxuICBjb25zdCBtZW51SXRlbUZpdmVDb2xPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVudUl0ZW1GaXZlQ29sT25lLnRleHRDb250ZW50ID0gJ1JpY2UgYW5kIEJlYW5zJztcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1TaXhDb2xPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVudUl0ZW1TaXhDb2xPbmUudGV4dENvbnRlbnQgPSAnQmVhbnMgYW5kIENoZWVzZSc7XHJcblxyXG4gIG1lbnVDb2xPbmUuYXBwZW5kQ2hpbGQobWVudUhlYWRlckNvbE9uZSk7XHJcbiAgbWVudUNvbE9uZS5hcHBlbmRDaGlsZChtZW51SXRlbXNEaXYpO1xyXG4gIG1lbnVJdGVtc0Rpdi5hcHBlbmRDaGlsZChtZW51SXRlbU9uZUNvbE9uZSk7XHJcbiAgbWVudUl0ZW1zRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtVHdvQ29sT25lKTtcclxuICBtZW51SXRlbXNEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1UaHJlZUNvbE9uZSk7XHJcbiAgbWVudUl0ZW1zRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRm91ckNvbE9uZSk7XHJcbiAgbWVudUl0ZW1zRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRml2ZUNvbE9uZSk7XHJcbiAgbWVudUl0ZW1zRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtU2l4Q29sT25lKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vICAgIE1FTlUgIENPTCBUV08gICAgICAgLy9cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIGNvbnN0IG1lbnVDb2xUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51Q29sVHdvLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29sLXR3bycpO1xyXG5cclxuICBjb25zdCBtZW51SGVhZGVyQ29sVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG1lbnVIZWFkZXJDb2xUd28uY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcclxuICBtZW51SGVhZGVyQ29sVHdvLnRleHRDb250ZW50ID0gJ0JVUkdFUlMnO1xyXG5cclxuICBjb25zdCBtZW51SXRlbXNEaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51SXRlbXNEaXZUd28uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBtZW51SXRlbU9uZUNvbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBtZW51SXRlbU9uZUNvbFR3by50ZXh0Q29udGVudCA9ICdBbGwgQW1lcmljYW4gQ2hlZXNlYnVyZ2VyJztcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1Ud29Db2xUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVudUl0ZW1Ud29Db2xUd28udGV4dENvbnRlbnQgPSAnR3JlZW4gQ2hpbGUgQ2hlZXNlYnVyZ2VyJztcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1UaHJlZUNvbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBtZW51SXRlbVRocmVlQ29sVHdvLnRleHRDb250ZW50ID0gJ0hvbmV5IEJCUSBCYWNvbiBDaGVlc2VidXJnZXInO1xyXG5cclxuICBjb25zdCBtZW51SXRlbUZvdXJDb2xUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVudUl0ZW1Gb3VyQ29sVHdvLnRleHRDb250ZW50ID0gJ0NhbGkgQ2hlZXNlYnVyZ2VyJztcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1GaXZlQ29sVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG1lbnVJdGVtRml2ZUNvbFR3by50ZXh0Q29udGVudCA9ICdCdXJxdWUgQnJlYWtmYXN0IEJ1cmdlcic7XHJcblxyXG4gIG1lbnVDb2xUd28uYXBwZW5kQ2hpbGQobWVudUhlYWRlckNvbFR3byk7XHJcbiAgbWVudUNvbFR3by5hcHBlbmRDaGlsZChtZW51SXRlbXNEaXZUd28pO1xyXG4gIG1lbnVJdGVtc0RpdlR3by5hcHBlbmRDaGlsZChtZW51SXRlbU9uZUNvbFR3byk7XHJcbiAgbWVudUl0ZW1zRGl2VHdvLmFwcGVuZENoaWxkKG1lbnVJdGVtVHdvQ29sVHdvKTtcclxuICBtZW51SXRlbXNEaXZUd28uYXBwZW5kQ2hpbGQobWVudUl0ZW1UaHJlZUNvbFR3byk7XHJcbiAgbWVudUl0ZW1zRGl2VHdvLmFwcGVuZENoaWxkKG1lbnVJdGVtRm91ckNvbFR3byk7XHJcbiAgbWVudUl0ZW1zRGl2VHdvLmFwcGVuZENoaWxkKG1lbnVJdGVtRml2ZUNvbFR3byk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLyAgICBNRU5VICBDT0wgVEhSRUUgICAgIC8vXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICBjb25zdCBtZW51Q29sVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51Q29sVGhyZWUuY2xhc3NMaXN0LmFkZCgnbWVudS1jb2wtdGhyZWUnKTtcclxuXHJcbiAgY29uc3QgbWVudUhlYWRlckNvbFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG1lbnVIZWFkZXJDb2xUaHJlZS5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xyXG4gIG1lbnVIZWFkZXJDb2xUaHJlZS50ZXh0Q29udGVudCA9ICdDSElDS0VOJztcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1zRGl2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtZW51SXRlbXNEaXZUaHJlZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IG1lbnVJdGVtT25lQ29sVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVudUl0ZW1PbmVDb2xUaHJlZS50ZXh0Q29udGVudCA9ICdIb25leSBCQlEgQmFjb24nO1xyXG5cclxuICBjb25zdCBtZW51SXRlbVR3b0NvbFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG1lbnVJdGVtVHdvQ29sVGhyZWUudGV4dENvbnRlbnQgPSAnTmV3IE1leGljYW4nO1xyXG5cclxuICBjb25zdCBtZW51SXRlbVRocmVlQ29sVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVudUl0ZW1UaHJlZUNvbFRocmVlLnRleHRDb250ZW50ID0gJ0NhbGlmb3JuaWFuJztcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1Gb3VyQ29sVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbWVudUl0ZW1Gb3VyQ29sVGhyZWUudGV4dENvbnRlbnQgPSAnQW1lcmljYW5vJztcclxuXHJcbiAgbWVudUNvbFRocmVlLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJDb2xUaHJlZSk7XHJcbiAgbWVudUNvbFRocmVlLmFwcGVuZENoaWxkKG1lbnVJdGVtc0RpdlRocmVlKTtcclxuICBtZW51SXRlbXNEaXZUaHJlZS5hcHBlbmRDaGlsZChtZW51SXRlbU9uZUNvbFRocmVlKTtcclxuICBtZW51SXRlbXNEaXZUaHJlZS5hcHBlbmRDaGlsZChtZW51SXRlbVR3b0NvbFRocmVlKTtcclxuICBtZW51SXRlbXNEaXZUaHJlZS5hcHBlbmRDaGlsZChtZW51SXRlbVRocmVlQ29sVGhyZWUpO1xyXG4gIG1lbnVJdGVtc0RpdlRocmVlLmFwcGVuZENoaWxkKG1lbnVJdGVtRm91ckNvbFRocmVlKTtcclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbE9uZSk7XHJcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbFR3byk7XHJcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbFRocmVlKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcclxufVxyXG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5tYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpblBhZ2UoKSB7XHJcbiAgY3JlYXRlTWFpblBhZ2VDb250ZW50KCk7XHJcbn1cclxuXHJcbihmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vICAgICAgICAgIEhFQURFUiAgICAgICAgLy9cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIC8vaGVhZGVyXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250YWluZXInKTtcclxuXHJcbiAgLy9oZWFkZXIsIGNvbnRlbnRcclxuICBjb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGVhZGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGVudCcpO1xyXG5cclxuICAvL2hlYWRlciB3ZWxjb21lIHRvIHRleHRcclxuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byc7XHJcblxyXG4gIC8vaGVhZGVyIG1pbmkgdGV4dFxyXG4gIGNvbnN0IGhlYWRlck1pbmlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhlYWRlck1pbmlUZXh0LnRleHRDb250ZW50ID1cclxuICAgICdXaGVyZSBzb21ldGhpbmcgZ29vZCBpcyBhbHdheXMgY29va2luZy4nO1xyXG5cclxuICAvL2hlYWRlciBsb2dvLWJ1dHRvbnMgY29udGFpbmVyXHJcbiAgY29uc3QgaGVhZGVyTG9nb0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhlYWRlckxvZ29CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcclxuICAgICdoZWFkZXItbG9nby1idXR0b24tY29udGFpbmVyJ1xyXG4gICk7XHJcblxyXG4gIC8vaGVhZGVyIG1haW4gYnV0dG9uXHJcbiAgY29uc3QgaGVhZGVyTWFpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhlYWRlck1haW5CdXR0b24udGV4dENvbnRlbnQgPSAnTWFpbic7XHJcbiAgaGVhZGVyTWFpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xyXG5cclxuICAvL2hlYWRlciBtZW51IGJ1dHRvblxyXG4gIGNvbnN0IGhlYWRlck1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBoZWFkZXJNZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gIGhlYWRlck1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcclxuXHJcbiAgLy9oZWFkZXIgYWJvdXQgYnV0dG9uXHJcbiAgY29uc3QgaGVhZGVyQWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBoZWFkZXJBYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcbiAgaGVhZGVyQWJvdXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcclxuXHJcbiAgLy9oZWFkZXIgYWJvdXQgYnV0dG9uXHJcbiAgY29uc3QgaGVhZGVyTG9jYXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBoZWFkZXJMb2NhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XHJcbiAgaGVhZGVyTG9jYXRpb25CdXR0b24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcclxuXHJcbiAgLy9oZWFkZXIgbG9nbyBjb250YWluZXJcclxuICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbG9nby1jb250YWluZXInKTtcclxuXHJcbiAgaGVhZGVyQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcclxuICBoZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckxvZ29CdXR0b25Db250YWluZXIpO1xyXG4gIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyTWluaVRleHQpO1xyXG5cclxuICBoZWFkZXJMb2dvQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlck1haW5CdXR0b24pO1xyXG4gIGhlYWRlckxvZ29CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTWVudUJ1dHRvbik7XHJcbiAgaGVhZGVyTG9nb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcclxuICBoZWFkZXJMb2dvQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckFib3V0QnV0dG9uKTtcclxuICBoZWFkZXJMb2dvQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckxvY2F0aW9uQnV0dG9uKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xyXG5cclxuICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpblBhZ2VDb250ZW50KCkge1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvLyAgICAgICAgICBNQUlOICAgICAgICAgIC8vXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICBjb25zdCB2aWRlb1NvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gIHZpZGVvU291cmNlLnNldEF0dHJpYnV0ZShcclxuICAgICdzcmMnLFxyXG4gICAgJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0ZJUTJGM1QxeWRNP2F1dG9wbGF5PTEnXHJcbiAgKTtcclxuICB2aWRlb1NvdXJjZS5zZXRBdHRyaWJ1dGUoJ2ZyYW1lYm9yZGVyJywgJzAnKTtcclxuICAvLyB2aWRlb1NvdXJjZS5zZXRBdHRyaWJ1dGUoJ2FsbG93JywgJ2F1dG9wbGF5Jyk7XHJcbiAgLy8gdmlkZW9Tb3VyY2Uuc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICcnKTtcclxuXHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodmlkZW9Tb3VyY2UpO1xyXG4gIHRlbXBsYXRlLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNyZWF0ZU1haW5QYWdlIGZyb20gJy4vYXBwL3BhZ2UtbG9hZCc7XHJcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tICcuL2FwcC9tZW51LXBhZ2UnO1xyXG5pbXBvcnQgY3JlYXRlQWJvdXRQYWdlIGZyb20gJy4vYXBwL2Fib3V0LXBhZ2UnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNyZWF0ZU1haW5QYWdlKCk7XHJcblxyXG5jb25zdCBoZWFkZXJUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1idXR0b25zJyk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUYWJzKHRhYlRleHQpIHtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XHJcbiAgd2hpbGUgKG1haW5Db250YWluZXIuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIubGFzdENoaWxkKTtcclxuICB9XHJcbiAgaWYgKHRhYlRleHQgPT09ICdNYWluJykge1xyXG4gICAgY3JlYXRlTWFpblBhZ2UoKTtcclxuICB9IGVsc2UgaWYgKHRhYlRleHQgPT09ICdNZW51Jykge1xyXG4gICAgY3JlYXRlTWVudVBhZ2UoKTtcclxuICB9IGVsc2UgaWYgKHRhYlRleHQgPT09ICdBYm91dCcpIHtcclxuICAgIGNyZWF0ZUFib3V0UGFnZSgpO1xyXG4gIH1cclxufVxyXG5cclxuaGVhZGVyVGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgdGFiVGV4dCA9IHRhYi50ZXh0Q29udGVudDtcclxuICAgIGNoYW5nZVRhYnModGFiVGV4dCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=