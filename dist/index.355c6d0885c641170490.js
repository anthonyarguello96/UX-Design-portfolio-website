/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_pexels_picjumbocom_196646_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pexels-picjumbocom-196646.jpg */ "./src/assets/pexels-picjumbocom-196646.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,700;1,600;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_pexels_picjumbocom_196646_jpg__WEBPACK_IMPORTED_MODULE_2__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* VARIABLES CSS */\n:root{\n  --header-height: 3rem;\n  --font-medium: 500;\n}\n\n\n/* COLORES */\n:root{\n  --first-color:#62B6CB;/* FALTAAAAAAAA */\n  --white-color:#FAFAFF;\n  --dark-color:#1B4965;\n  --text-color:#697477;/* FALTAAAAAAAA */\n}\n\n\n/* FONTS & TYPOGRAPHY */\n:root{\n  --body-font:'Montserrat', sans-serif;\n  --big-font-size: 5.25rem;\n  --h2-font-size: 1.25rem;\n  --normal-font-size: 0.938rem;\n  --small-font-size: .813rem;\n}\n\n\n@media screen and (min-width: 1124px){\n  :root{\n    --body-font:'Montserrat', sans-serif;\n    --big-font-size: 10.5rem;\n    --h2-font-size: 2rem;\n    --normal-font-size: 1.3rem;\n    --small-font-size: .875rem;\n    --title-font: 'Montserrat', sans-serif;\n  }\n}\n\n@media screen and (min-width: 1733px){\n  :root{\n    --big-font-size: 15.5rem;\n  }\n}\n\n\n/* MARGINS */\n :root{\n   --mb-1: .5rem;\n   --mb-2: 1rem;\n   --mb-3: 1.5rem;\n   --mb-4: 2rem;\n }\n\n\n/* Z INDEX */\n:root{\n  --z-fixed:100;\n}\n\n\n/* BASE */\n*, ::before, ::after{\n  box-sizing: border-box;\n}\n\n\nhtml{\n  scroll-behavior: smooth;\n}\n\n\nbody{\n  margin: var(--header-height) 0 0 0;\n  font-family: var(--body-font);\n  font-size: var(--normal-font-size);\n  color: var(--text-color);\n  line-height: 1.6;\n  /* background-color: var(--text-color); */\n}\n\n\nh1,h2,p{\n  margin: 0;\n}\n\n\nul{\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n\na{\n  text-decoration: none;\n  color: var(--text-color);\n}\n\n\nimg{\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n\n/* CLASS SELECTOR */\n.section{\n  padding: 3rem 0;\n}\n\n\n.section-title{\n  /* por que relative? */\n  position: relative;\n  font-size: var(--h2-font-size);\n  color: var(--dark-color);\n  margin: var(--mb-4) 0;\n  text-align: center;\n}\n\n\n.section-title::after{\n  /* por que absolute */\n  position: absolute;\n  content: \"\";\n  width: 32px;\n  height: 0.18rem;\n  left:0;\n  right: 0;\n  margin: auto;\n  top: 2rem;\n  background-color: var(--first-color);\n}\n\n\n/* LAYOUT */\n\n.bd-grid{\n  max-width: 1024px;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-column-gap: 2rem;\n  width: calc(100% - 2rem);\n  margin-left: var(--mb-2);\n  margin-right: var(--mb-2);\n}\n\n\n.l-header{\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--z-fixed);\n  background-color: var(--first-color);\n}\n\n\n\n\n/* NAV */\n.nav{\n  height: var(--header-height);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n\n@media screen and (max-width: 1124px){\n  .nav__menu{\n    position: fixed;\n    top: var(--header-height);\n    right: -100%;\n    width: 80%;\n    height: 100%;\n    padding: 2rem;\n    backdrop-filter: blur(10px);\n    background-color: rgb(255,255,255,.3);\n    transition: 0.5s;\n\n  }\n}\n   .nav__item{\n     margin-bottom: var(--mb-4);\n   }\n\n   .nav__link{\n     position: relative;\n     color: var(--dark-color);\n   }\n\n   .nav__logo{\n     color: var(--white-color);\n   }\n\n   .nav__toggle{\n     color: var(--white-color);\n     font-size: 1.5rem;\n     cursor: pointer;\n   }\n\n  .show{\n  right: 0;\n}\n\n\n/* Active links */\n.active::after{\n  position: absolute;\n    content: \"\";\n    width: 100%;\n    height: 0.18rem;\n    top: 2rem;\n    right: 0;\n    background-color:var(--first-color);\n  }\n\n\n  /* home */\n.home{\n  position: relative;\n  background-color:var(--first-color);\n  overflow: hidden;\n  min-height: 700px;\n}\n\n\n.home__container{\n  height: calc(100vh - var(--header-height));\n  row-gap: 4rem;\n  /* background-color: var(--first-color); */\n}\n\n.home__img{\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 795px;\n}\n\n\n.home__title{\n  align-self: flex-end;\n  font-size: var(--big-font-size);\n  color: var(--white-color);\n  line-height: .8;\n}\n\n\n.home__title span{\n  text-shadow: 0 20px 25px rgba(0, 0, 0, 0.2);\n}\n\n\n.home__scroll{\n  align-self: flex-end;\n  padding-bottom: var(--mb-4);\n}\n\n\n.home__scroll-link{\n  writing-mode: vertical-lr;\n  transform: rotate(-180deg);\n  color: var(--white-color);\n}\n\n\n.about__container{\n  display: flex;\n  flex-direction: column;\n  /* justify-content: center; */\n  align-items: center;\n  row-gap: 2rem;\n  text-align: center;\n}\n\n\n.about__img{\n  display: flex;\n  justify-content: center;\n  padding-top: 1rem;\n  width: 240px;\n  height: 240px;\n  background-color: var(--first-color);\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 4rem 0 0 0;\n}\n\n\n\n.about__text-social{\n  padding: 4rem 0 4rem 0;\n}\n\n.about__img img{\n  width: 200px;\n}\n\n\n.about__subtitle{\n  font-size: var(--h2-font-size);\n  color: var(--first-color);\n  margin-bottom: var(--mb-1);\n}\n\n\n.about__text{\nmargin: var(--mb-4) var(--mb-3) var(--mb-4) var(--mb-3);\n}\n\n\n.about__profession{\n  display: block;\n  margin-bottom: var(--mb-4);\n}\n\n\n.about__social-icon{\n  font-size: 1.3rem;\n  margin: 0 var(--mb-1);\n}\n\n\n.about__question{\n  font-size:  var(--normal-font-size);\n  margin-left: 1.4rem;\n}\n\n.about__social-icon i:hover{\n  animation-name: transformSocialButtons;\n  animation-duration: 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes transformSocialButtons {\n  0%{\n    text-decoration: none; color:var(--text-color);\n  }\n  100%{\n    transform: scale(1.2);\n   color:var(--first-color);\n  }\n\n}\n\n\n  /* Skills */\n\n  .skills__container{\n    row-gap: 2rem;\n  }\n\n\n  .subtitle{\n    color: var(--first-color);\n    margin-top: var(--mb-4);\n    margin-bottom: var(--mb-3);\n    margin-left: var(--mb-4);\n    margin-right: var(--mb-4);\n  }\n\n\n  .skills__name{\n    color: var(--small-font-size);\n    margin-right: var(--mb-2);\n    margin-bottom: var(--mb-3);\n    padding: .25rem .5rem;\n    background-color: var(--white-color);\n    border-radius: .25rem;\n  }\n\n\n  .skills__box-2{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin: 0 2rem 0 2rem;\n  }\n\n.skills__container h3{\n  margin-left: 2rem;\n}\n  .skills__main-title{\n    color: var(--small-font-size);\n    margin-bottom: var(--mb-3);\n    margin-left: var(--mb-2);\n    margin-right: var(--mb-2);\n    padding: .25rem .5rem;\n    display: flex;\n    justify-content: center;\n    width: calc(100% - 2rem);\n  }\n\n\n  .skills__name:hover{\n    animation-name: transformButtons;\n    animation-duration: 1.5s;\n    animation-fill-mode: forwards;\n    /* background-color: var(--first-color); */\n  }\n\n  @keyframes transformButtons {\n    0%{\n      text-decoration: none;\n    }\n    50%{\n      color:var(--white-color);\n      background-color: var(--first-color);\n    }\n    100%{\n      transform: scale(1.1);\n      color:var(--white-color);\n      background-color: var(--first-color);\n    }\n\n  }\n\n  .skills__img{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: var(--mb-4);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    min-height: 50vh;\n    min-width: 100vw;\n    background-size: cover;\n    background-attachment: fixed;\n    background-size:cover;\n\n  }\n\n\n\n\n.education__box{\nmargin: var(--mb-4);\n}\n\n.title{\n  font-weight: 700;\n  font-style: italic;\n}\n\n\n.skills__text{\n  margin: var(--mb-4);\n  text-align: center;\n}\n\n\n/* Portfolio section */\n\n\n.portfolio{\n  background-color: var(--white-color);\n}\n\n\n.portfolio__container{\n  justify-items: center;\n  row-gap: 2rem;\n}\n\n\n.portfolio__img{\n  position: relative;\n  overflow: hidden;\n}\n\n\n.portfolio__img img{\n  border-radius: .5rem;\n}\n\n\n.portfolio__link{\n  position: absolute;\n  bottom: -100%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 0.5rem;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: 0.3s;\n}\n\n\n.portfolio__img:hover .portfolio__link{\n  bottom: 0;\n}\n\n\n.portfolio__link-name{\n  color: var(--dark-color)\n}\n\n@media screen and (max-width: 726px){\n  .experience__container{\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .home__scroll-link{\n    display: none;\n  }\n\n\n\n}\n\n\n@media screen and (min-width: 726px){\n  .experience__container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .education__container{\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n  }\n\n}\n\n\n/* contact */\n.contact__container{\n  row-gap: 2rem;\n}\n\n\n.contact__subtitle{\n  font-size: var(--normal-font-size);\n  color: var(--first-color);\n}\n\n\n.contact__text{\n  display: inline-block;\n  margin-bottom: var(--mb-2);\n}\n\n\n.contact__inputs{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 1rem;\n}\n\n\n.contact__input{\n  width: 100%;\n  padding: 1rem;\n  outline: none;\n  border: 1.5px solid var(--dark-color);\n  font-size: var(--normal-size-font);\n  margin-bottom: var(--mb-4);\n  border-radius: .5rem;\n}\n\n\n.contact__button{\n  display: block;\n  background-color: var(--first-color);\n  color: var(--white-color);\n  padding: .75rem 2.5rem;\n  margin-left: auto;\n  border-radius: .5rem;\n  border: none;\n  outline: none;\n  font-size: var(--normal-font-size);\n  cursor: pointer;\n}\n\n\n/* Footer */\n.footer{\n  background-color: var(--dark-color);\n  margin-top: var(--mb-4);\n}\n\n\n.footer__container{\n  row-gap: 2rem;\n}\n\n\n.footer__title{\n  font-size: var(--normal-font-size);\n  color: var(--white-color);\n  margin-bottom: var(--mb-2);\n}\n\n\n.footer__link{\n  padding: 0.25rem 0;\n}\n\n\n.footer__link:hover{\n  color: var(--first-color);\n}\n\n\n.footer__social{\n  font-size: 1.5rem;\n  margin-right: var(--mb-1);\n}\n\n\n.footer__social-icon i:hover{\n  animation-name: transformFooterSocialButtons;\n  animation-duration: 1.5s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes transformFooterSocialButtons {\n  0%{\n    text-decoration: none; color:var(--text-color);\n  }\n  100%{\n    transform: scale(1.2);\n   color:var(--first-color);\n  }\n\n}\n\n\n\n\n/* Desktop Mecia queries */\n@media screen and (min-width: 1124px){\nbody{\n  margin:0;\n}\n\n\n.experience__container{\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n\n.section{\n  padding-top: 4rem;\n}\n\n.section-title{\n  margin-bottom: 3rem;\n}\n\n.section-title::after{\n  width: 54px;\n  top: 3rem;\n}\n\n.nav{\n  height: calc(var(--header-height) + 1rem);\n}\n\n\n.nav__menu{\n  margin-right: 6rem;\n}\n\n\n.nav__list{\n  display: flex;\n  /* flex-direction: row; */\n}\n\n\n.nav__item{\n  margin-left: var(--mb-4);\n  margin-bottom: 0;\n}\n\n\n.nav__toggle{\n  display: none;\n}\n\n\n.nav__link{\n  color: var(--white-color);\n}\n\n.nav__link:hover{\n  color:var(--white-color);\n}\n\n\n.active::after{\n  background-color: var(--white-color);\n}\n\n\n.home__container{\n  height: 100vh;\n  grid-template-rows: 1.7fr 1fr;\n  row-gap: 0;\n}\n\n.bd-grid{\n  max-width: 100vw;\n}\n\n\n.home__img{\n  width: 824px;\n  right: -7%;\n}\n\n\n.about__container{\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  text-align: initial;\n  padding: 4rem 0;\n  display: grid;\n  /* justify-items: center; */\n}\n\n\n.about__text-box{\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n  box-sizing: border-box;\n  font-size: var(--normal-font-size);\n}\n\n/* .about__text-social{\n  display: block;\n  margin-right: 6rem;\n} */\n\n.about__img{\n  width: 385px;\n  height: 400px;\n  align-self: center;\n  margin-bottom: 2.50rem;\n}\n\n\n.about__img-box{\ndisplay: flex;\njustify-content: center;\n\n}\n\n\n.about__img img{\n  width: 340px;\n}\n\n.skills__main-title{\nmargin-top: 8rem;\n}\n\n\n.about__social{\n  margin-left: 1rem;\n}\n\n.skills__text{\n  margin-right: 10rem;\n  margin-left: 10rem;\n  margin-bottom: 8rem;\n  display: block;\n}\n\n.skills__img img{\n  max-height: 80vh;\n  min-width: 100vw;\n  margin: 4rem 0;\n\n}\n\n\n.education__container{\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  margin-bottom: 4rem;\n}\n\n\n.portfolio__container{\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(1, 1fr);\n  column-gap: 2rem;\n}\n\n\n.portfolio h3{\n  margin-top: 6rem;\n}\n\n\n.experience__container{\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(1, 1fr);\n  column-gap: 2rem;\n  margin: 3rem;\n}\n\n\n.contact__container{\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n}\n\n\n.contact__form{\n  width: 30rem;\n}\n\n\n.footer__container{\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n}\n\n\n@media screen and (min-width:1733px){\n  .bd-grid{\n    /* background-color: red; */\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  img.home__img{\n    width: 1224px;\n    margin-right: 2rem;\n  }\n}\n\n}\n", ""]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
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
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/pexels-picjumbocom-196646.jpg":
/*!**************************************************!*\
  !*** ./src/assets/pexels-picjumbocom-196646.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f9664d154449869c0805.jpg";

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItsWorking": () => (/* binding */ ItsWorking),
/* harmony export */   "displayMenu": () => (/* binding */ displayMenu),
/* harmony export */   "linkAction": () => (/* binding */ linkAction)
/* harmony export */ });
const ItsWorking = () =>{
  alert("Hello world!");
}

//Toggles nav bar in and out of the viewport
const displayMenu =(toggleId, navId)=>{
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav){
    console.log("I'm working");

    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show');
    })
  }
}


//Hides navigation menu after an element is clicked
const linkAction = () =>{
const navMenu = document.getElementById('nav-menu');
navMenu.classList.remove('show');
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'boxicons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const parallax = document.getElementsByClassName('skills__img');
const spread = [...parallax];



//Diplays nav-menu
_functions_js__WEBPACK_IMPORTED_MODULE_0__.displayMenu('nav-toggle', 'nav-menu');

//Hide navigration menu after click
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(x => x.addEventListener('click', _functions_js__WEBPACK_IMPORTED_MODULE_0__.linkAction))


//scroll sections active link
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

//GOTTA MOVE THIS TO THE FUCNTIONS FILE
function scrollActive(){
  //GET VIEPORT VERTICAL POSITION
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    let sectionId= current.getAttribute('id')

    // console.log(sectionId);

    if(scrollY>sectionTop && scrollY <= sectionTop +sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
    // console.log(sectionTop);
  })
}


//Scroll Reveal Animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})


//scroll home
sr.reveal('.home__title',{})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin: 'right', delay: 400})


//scroll about
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession',{delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__question', {delay: 600})
sr.reveal('.about__social-icon',{delay: 700, interval: 200})


//skills scroll
sr.reveal('.subtitle', {})
sr.reveal('.skills__name', {distance: '40px', delay:50, interval: 100 })
sr.reveal('.skills__img', {delay: 400})
sr.reveal('.skills__main-title', {delay: 500})
sr.reveal('.skills__text', {delay: 600})


//education scroll
sr.reveal('.education__box', {delay: 700, interval: 200})


//scroll portfolio
sr.reveal('.portfolio__img', {interval: 200})


//scroll contact
sr.reveal('.contact__subtitle', {})
sr.reveal('contact__subtitle', {interval: 200})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

})();

/******/ })()
;