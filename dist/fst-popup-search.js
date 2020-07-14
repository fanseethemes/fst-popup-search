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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: plugin, icons, classNames, txt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "txt", function() { return txt; });
var prefix = 'fst';
var plugin = "".concat(prefix, "-popup-search");
var icons = {
  enterIcon: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n                <svg version=\"1.1\" width=\"25\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n                <path d=\"M1,74.23l32.55-24.28l0.17,16.18c0,0,36.27-0.09,39.97-0.09c8.04,0.01,8.82-3.34,8.96-8.52c0.02-0.82,0.04-56.76,0.04-56.76\n                    H99l-0.05,63.36c0.69,11.67-5.07,17.48-16.38,18.24l-48.9,0v16.61L1,74.23z\"/>\n                </svg",
  clearIcon: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n                <!-- Generator: Adobe Illustrator 24.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                <svg version=\"1.1\" width=\"18\"  id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\">\n                <path d=\"M26.46,56.04C25.28,72.65,17.23,86.61,7.19,99.2h24.96c4.81-4.61,7.86-10.71,9.38-17.17c0.59,6.74-0.94,12.46-4.32,17.17\n                    l21.38-0.11c2.54-2.26,4.31-4.75,5.17-7.53c0.27,2.77-0.69,5.43-2.42,7.64l15.56-0.11c10.71-0.44,13.51-10.34,14.4-28.8V56.04H26.46\n                    z\"/>\n                <path d=\"M26.74,52.34l64.56-0.07l-0.5-17.24c-0.42-3.14-1.84-5.87-6.34-6.43l-18.36,0.04l1.87-20.68\n                    C67.27-0.28,54.33-2.1,52.35,7.42L52.3,28.59l-16.52-0.01c-4.3,0.31-6.65,2.94-7.11,6.7L26.74,52.34z\"/>\n                </svg>",
  closeIcon: '<svg version="1.1" width="18" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve"><path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285L284.286,256.002z"></path></svg>'
};
var classNames = {
  wrapper: "".concat(plugin, "-wrapper"),
  firstTab: "".concat(plugin, "-first-tabindex"),
  lastTab: "".concat(plugin, "-last-tabindex"),
  close: "".concat(plugin, "-close"),
  clear: "".concat(plugin, "-clear"),
  form: "".concat(plugin, "-form"),
  label: "".concat(plugin, "-label"),
  overlay: "".concat(plugin, "-overlay"),
  btnSubmit: "".concat(plugin, "-submit"),
  btnWrapper: "".concat(plugin, "-btns"),
  active: "".concat(plugin, "-active")
};
var txt = {
  placeholderText: 'Search...',
  labelText: 'What are you looking for?',
  elementNotExit: 'provided element not exist on DOM'
};

/***/ }),

/***/ "./src/js/fst-popup-search.js":
/*!************************************!*\
  !*** ./src/js/fst-popup-search.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/js/options.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/*!
 * fst popup search
 * http://fanseethemes.com/
 *
 * Copyright (c) fanseethemes
 *
 * License: GPL
 * https://www.gnu.org/licenses/gpl-3.0.html
 */




(function ($) {
  'use strick';

  if ($) {
    /******************************
     *  Main function
      ******************************/
    $.fn.fstPopupSearch = function (options) {
      //Ensure that provided element is exist on DOM
      if (0 === $(this).length) {
        console.info(_constants__WEBPACK_IMPORTED_MODULE_1__["txt"].elementNotExist);
        return this;
      }

      ; // Ensure that provided only one fst popup search exist

      if (!$.data(document.body, _constants__WEBPACK_IMPORTED_MODULE_1__["plugin"])) {
        $.data(document.body, _constants__WEBPACK_IMPORTED_MODULE_1__["plugin"], true);
        $.fn.fstPopupSearch.settings = $.extend({}, _options__WEBPACK_IMPORTED_MODULE_0__["default"], options);
        $.fn.fstPopupSearch.init(this);
      }

      ;
    };
    /******************************
     * Initialize the plugin
     ******************************/


    $.fn.fstPopupSearch.init = function (ele) {
      var settings = this.settings;
      var $body = $('body'); // console.log(settings, 'settings');

      var action = settings.action,
          method = settings.method,
          placeholderText = settings.placeholderText,
          labelText = settings.labelText;
      appendSearchForm();
      listenClickEvent();
      listenEscKey();
      this.enableAccessibility();
      /**  
       * Append search form on DOM 
       * @returns {void}
       */

      function appendSearchForm() {
        var template = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getSearchFormTemplate"])({
          action: action,
          method: method,
          placeholderText: placeholderText,
          labelText: labelText
        });
        !$(".".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].wrapper)).length && $body.append(template);
      }

      ;
      /** 
       * Check search is open or not
       * @returns {boolean}
       */

      function isSearchOpen() {
        return $('body').hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].active);
      }

      ;
      /**
       * Focus on search input
       * @returns {void}
       */

      function focusOnSearch() {
        setTimeout(function () {
          $(".".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].wrapper, " input")).focus();
        }, 500);
      }

      ;
      /** 
       * Open the popup search
       * @retuns {void}
       */

      function openSearch() {
        $body.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].active);
        focusOnSearch();
      }
      /** 
       * Focus search opener button
       * @returns {void}
       */


      function focusBtnSearchOpener() {
        $(ele).focus();
      }

      ;
      /** 
       * Close the popup search
       * @return {void}
       */

      function closeSearch() {
        $body.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].active);
        focusBtnSearchOpener();
      }
      /** 
       * Clear input
       * @returns {void}
       */


      function clearInput() {
        isSearchOpen() && $(".".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].wrapper, " input")).val('');
      }

      ;
      /** 
       * Close popup search on press esc key
       * @returns {void}
       */

      function listenEscKey() {
        $(document).on('keydown', function (e) {
          if (27 === e.keyCode) closeSearch();
        });
      }
      /** 
       * Listen click events 
       * @return {void}
       */


      function listenClickEvent() {
        $(ele).on('click', openSearch);
        $(".".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].close)).on('click', closeSearch);
        $(".".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].clear)).on('click', function (e) {
          e.preventDefault();
          clearInput();
        });
      }

      ;
    };
    /****************************** 
     * Accessibility tab loop
     ******************************/


    $.fn.fstPopupSearch.enableAccessibility = function () {
      var firstTab = _constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].firstTab,
          lastTab = _constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].lastTab,
          wrapper = _constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].wrapper;
      $(document).on('focus', ".".concat(firstTab), function (e) {
        $(e.target).parents('.' + wrapper).find(".".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].btnSubmit)).focus();
      });
      $(document).on('focus', ".".concat(lastTab), function (e) {
        $(e.target).parents('.' + wrapper).find(".".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["classNames"].close)).focus();
      });
    };
  }

  ;
})(window.jQuery || window.$);

/***/ }),

/***/ "./src/js/options.js":
/*!***************************!*\
  !*** ./src/js/options.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

var enterIcon = _constants__WEBPACK_IMPORTED_MODULE_0__["icons"].enterIcon,
    clearIcon = _constants__WEBPACK_IMPORTED_MODULE_0__["icons"].clearIcon,
    closeIcon = _constants__WEBPACK_IMPORTED_MODULE_0__["icons"].closeIcon;
var placeholderText = _constants__WEBPACK_IMPORTED_MODULE_0__["txt"].placeholderText,
    labelText = _constants__WEBPACK_IMPORTED_MODULE_0__["txt"].labelText;
var defaultOptions = {
  action: '',
  method: 'get',
  closeIcon: closeIcon,
  clearIcon: clearIcon,
  enterIcon: enterIcon,
  placeholderText: placeholderText,
  labelText: labelText
};
/* harmony default export */ __webpack_exports__["default"] = (defaultOptions);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getSearchFormTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchFormTemplate", function() { return getSearchFormTemplate; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

var enterIcon = _constants__WEBPACK_IMPORTED_MODULE_0__["icons"].enterIcon,
    clearIcon = _constants__WEBPACK_IMPORTED_MODULE_0__["icons"].clearIcon,
    closeIcon = _constants__WEBPACK_IMPORTED_MODULE_0__["icons"].closeIcon;
var getSearchFormTemplate = function getSearchFormTemplate(_ref) {
  var action = _ref.action,
      method = _ref.method,
      placeholderText = _ref.placeholderText,
      labelText = _ref.labelText;
  return "  <div class=\"".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["classNames"].wrapper, "\">\n            <span class=\"").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["classNames"].firstTab, "\" tabindex=\"0\"></span>\n            <button class=\"").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["classNames"].close, "\">").concat(closeIcon, "</button>\n            ").concat(labelText ? "<h3>".concat(labelText, "</h3>") : '', "\n            <form role=\"search\" method=\"").concat(method, "\" class=\"").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["classNames"].form, "\" action=\"").concat(action, "\">\t\n                <input type=\"text\" class=\"search-field\" placeholder=\"").concat(placeholderText, "\" value=\"\" name=\"s\" />\n                <div class=\"").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["classNames"].btnWrapper, "\">\n                    <div><a href=\"#\" title=\"Clear text\" class=\"").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["classNames"].clear, "\">").concat(clearIcon, "</a></div>\n                    <button type=\"submit\" title=\"Search\" class=\"").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["classNames"].btnSubmit, "\">").concat(enterIcon, "</button> \n                </div>\n            </form>\n            <span class=\"").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["classNames"].lastTab, "\" tabindex=\"0\"></span>\n        </div>");
};

/***/ }),

/***/ "./src/scss/fst-popup-search.scss":
/*!****************************************!*\
  !*** ./src/scss/fst-popup-search.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./src/js/fst-popup-search.js ./src/scss/fst-popup-search.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/fst-popup-search.js */"./src/js/fst-popup-search.js");
module.exports = __webpack_require__(/*! ./src/scss/fst-popup-search.scss */"./src/scss/fst-popup-search.scss");


/***/ })

/******/ });
//# sourceMappingURL=fst-popup-search.js.map