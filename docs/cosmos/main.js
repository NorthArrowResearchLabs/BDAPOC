(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./cosmos.proxies.js":
/*!***************************!*\
  !*** ./cosmos.proxies.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_cosmos_wrapper_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cosmos-wrapper-proxy */ "./node_modules/react-cosmos-wrapper-proxy/lib/index.js");
/* harmony import */ var react_cosmos_wrapper_proxy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cosmos_wrapper_proxy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_BDAMobile_FormWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/BDAMobile/FormWrapper */ "./src/components/BDAMobile/FormWrapper.jsx");
/* harmony import */ var react_cosmos_redux_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cosmos-redux-proxy */ "./node_modules/react-cosmos-redux-proxy/index.js");
/* harmony import */ var react_cosmos_redux_proxy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cosmos_redux_proxy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_redux_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/redux/reducers */ "./src/redux/reducers.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_5__);
// cosmos.proxies.js







var configureStore = function configureStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_src_redux_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_5__["devToolsEnhancer"])());
};

var ReduxProxy = react_cosmos_redux_proxy__WEBPACK_IMPORTED_MODULE_2___default()({
  createStore: function createStore(state) {
    return configureStore(state);
  }
});
var muiProxy = react_cosmos_wrapper_proxy__WEBPACK_IMPORTED_MODULE_0___default()({
  // Required
  component: _src_components_BDAMobile_FormWrapper__WEBPACK_IMPORTED_MODULE_1__["default"],
  // The wrapper component
  fixtureKey: 'wrapForm',
  // Key
  // Optional
  // Props to pass to the wrapper component
  // Note: can be passed from the fixture as well
  props: {
    someOtherProp: 'hello'
  }
});
/* harmony default export */ __webpack_exports__["default"] = ([ReduxProxy, muiProxy]);

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMainApp/style.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/BDAMainApp/style.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".PageWrap {\n  height: 100%;\n}\n.PageWrap .ui.container {\n  margin-top: 40px;\n}\n\n.PageWrap .mapWrapper,\n.PageWrap .tabWrap {\n  height: 100%;\n  margin-top: 40px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/CardListPicker.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/BDAMobile/questions/CardListPicker.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#cardListModal .ui.card.active{\n  border: 2px solid teal;\n  box-shadow: 0 0 5px teal;\n}\n\n#cardListModal .ui.card.active .ui.image:before{\n  content: ' ';\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: block;\n  background-color: teal;\n  z-index: 100;\n  opacity: 0.3;\n}\n\n#cardListModal .ui.card.active .content .header, \n#cardListModal .ui.card.active .content .description {\n  color: teal;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/FloodBehavior.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/BDAMobile/questions/FloodBehavior.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.ui.segment.floodBehavior .ui.toggle.buttons.behave.set .ui.button{\n  opacity: 0.5;\n}\n\n.ui.segment.floodBehavior .ui.toggle.buttons.behave.set .ui.button.active{\n  opacity: 1.0;\n}\n\n\n.ui.segment.floodBehavior .ui.toggle.buttons .ui.button.active{\n  color: white!important;\n  background-color: black!important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/Note.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/BDAMobile/questions/Note.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notesVal{\n  font-style: italic;\n  color: #666;\n  word-wrap: normal;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/PercentSliders/PercentSlider.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/BDAMobile/questions/PercentSliders/PercentSlider.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sliderWrapper{\n  height: 42px;\n  position: relative;\n}\n\n.sliderRail h4.ui.header{\n  position: absolute;\n  margin-top: -14px;\n  margin-left: 0%;\n  height: 25px;\n  z-index: 200;\n  /* opacity: 0.8; */\n  font-size: 0.8rem;\n  /* right: 0; */\n  /* text-shadow: 0px 0px 3px #000000;\n  color: white; */\n  text-shadow: 0px 0px 2px #FFFFFF;\n}\n\n.sliderHandle { \n  position: absolute;\n  margin-left: -14px;\n  margin-top: -1px;\n  z-index: 2;\n  width: 27px;\n  height: 27px;\n  cursor: pointer;\n  border-radius: 50%;\n  box-shadow: 1px 1px 1px 1px rgba(121, 121, 121, 0.2);\n  border: 1px solid #a0a0a0;\n  background-color: #e9e9e9;\n}\n\n.sliderHandle.disabled {\n  display: none;\n  background-color: #AAAAAA;\n}\n\n.sliderRail {\n  position: absolute;\n  width: 100%;\n  height: 25px;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: #eeeeee;\n}\n\n.sliderTick {\n  position: absolute;\n  margin-top: 0px;\n  width: 1px;\n  height: 25px;\n  background-color: #dbdbdb;\n}\n\n.sliderTickNum {\n  display: none;\n  position: absolute;\n  margin-top: 20px;\n  font-size: 0.6rem;\n  font-family: Arial;\n  text-align: center;\n  color: #cccccc;\n}\n\n.sliderTrack {\n  position: absolute;\n  height: 25px;\n  z-index: 1;\n  /* opacity: 0.2; */\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.sliderTrack.limiter {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n  border-left: 1px solid rgb(180, 180, 180);\n  background:   \n    /* On \"top\" */\n    -webkit-repeating-linear-gradient(\n      45deg,\n      transparent,\n      transparent 10px,\n      rgba(200, 200, 200, 1) 10px,\n      rgba(200, 200, 200, 1) 20px\n    ),\n    /* on \"bottom\" */\n    -webkit-linear-gradient(\n      top,\n      rgba(190, 190, 190, 1),\n      rgba(200, 200, 200, 1)\n    );\n  background:   \n    /* On \"top\" */\n    repeating-linear-gradient(\n      45deg,\n      transparent,\n      transparent 10px,\n      rgba(200, 200, 200, 1) 10px,\n      rgba(200, 200, 200, 1) 20px\n    ),\n    /* on \"bottom\" */\n    linear-gradient(\n      to bottom,\n      rgba(190, 190, 190, 1),\n      rgba(200, 200, 200, 1)\n    );\n}\n\n.sliderTrack.progress {\n  border: 1px solid rgba(12, 93, 243, 0.1);\n  background:  \n    /* On \"top\" */\n    -webkit-repeating-linear-gradient(\n      45deg,\n      transparent,\n      transparent 10px,\n      rgba(12, 93, 243, 0.1) 10px,\n      rgba(12, 93, 243, 0.1) 20px\n    ),\n    /* on \"bottom\" */\n    -webkit-linear-gradient(\n      top,\n      rgba(12, 93, 243, 0.2),\n      rgba(12, 93, 243, 0.2)\n    );\n  background:  \n    /* On \"top\" */\n    repeating-linear-gradient(\n      45deg,\n      transparent,\n      transparent 10px,\n      rgba(12, 93, 243, 0.1) 10px,\n      rgba(12, 93, 243, 0.1) 20px\n    ),\n    /* on \"bottom\" */\n    linear-gradient(\n      to bottom,\n      rgba(12, 93, 243, 0.2),\n      rgba(12, 93, 243, 0.2)\n    );\n}\n\n/* .sliderTrack.limiter::after {\n  width:10px;\n  background: #4264E8;\n  height: 25px;\n  content: \"\";\n  display: block;\n  position: absolute;\n} */", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/sections/TheFormComplex.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/BDAMobile/sections/TheFormComplex.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theFormComplexMenu {\n  border: 1px solid red;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/views/Homepage.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/BDAMobile/views/Homepage.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#root, .awsappsync, .awsappsync>div {\n  height: 100%;\n}\n\n.appContainer{\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.appContainer>.menu{\n  flex: 0 0;\n}\n\n.appContainer>.tabContainer{\n  flex: 1 1;\n  display: flex;\n  flex-direction: column;\n}\n.appContainer>.tabContainer>.menu{\n  flex: 0 0;\n}\n.appContainer>.tabContainer>.ui.segment{\n  flex: 1 1;\n  overflow: hidden;\n  padding: 0;\n}\n.appContainer>.tabContainer>.ui.segment>.structureList{\n  overflow: scroll;\n  overflow-x: hidden;\n  height: 100%;\n}\n\n.homeIcons {\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n}\n\n.homepageListItem{\n  position: relative;\n}\n\n.presentForm .item .content .header{\n  margin-bottom: 0.5rem;\n  border-bottom: 1px solid #AAAAAA;\n}\n\n.presentForm .item .content .description{\n  margin-bottom: 1rem;\n}\n\n.ui.addButton.button {\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n  font-size: 2.0rem;\n  box-shadow: 1px 1px 5px rgba(0,0,0, 0.5)!important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CitizenBeaver/Home/style.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/CitizenBeaver/Home/style.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i.icon.lost { \n  width: 100%;\n  color: #EEEEEE;\n  font-size: 20rem!important;\n}\na.mapboxgl-ctrl-logo, .mapboxgl-ctrl-attrib {\n  display: none!important;\n}\n\n.ui.label.addButton {\n  position: absolute;\n  bottom: 2rem;\n  right: 2rem;\n  font-size: 2rem;\n  box-shadow: 2px 2px 2px #00000099;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CitizenBeaver/InputForm/style.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/CitizenBeaver/InputForm/style.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#InputForm {\n\n}\n\n/* #InputForm .ui.menu .ui.label{\n  width: 100%;\n  text-align: center;\n  margin: 0;\n}\n\n#InputForm .ui.menu .item{\n  display: block;\n  padding: 0;\n}\n\n#InputForm .bIconContainer{\n  height: 40px;\n}\n\n#InputForm .ui.image.bIcon{\n  width: 40px;\n  margin: 0;\n}\n */\n\n .ui.buttons.inputFormMenu .ui.button{ \n   text-align: center;\n   padding: 0.1rem 0.25rem;\n }\n\n .ui.buttons.inputFormMenu .ui.button img{\n   margin: 0 auto;\n } \n\n .ui.inverted.menu.cameraMenu  .item:before{\n  background: none;\n }\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Experiments/ProjList.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Experiments/ProjList.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".projListButtons {\n  float: right;\n}\n.projListDownloadLabels {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.projListDownloadLabels .ui.label{\n  margin: 0;\n  border-radius: 0 0 0 10px;\n}\n\n.projList .ui.yellow.segment {\n  background: rgb(255, 246, 219);\n}\n\n.projList .ui.red.segment {\n  background: rgb(255, 223, 223);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/common/maps/BaseMap.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/common/maps/BaseMap.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/misc/Placeholder.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/misc/Placeholder.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui.image.myPlaceholder{\n  position: relative;\n  text-align: center;\n  background: rgb(240, 240, 240);\n  border: 2px solid rgb(235, 235, 235);\n  padding: 5px;\n  color: rgb(235, 235, 235);\n  /* May want to do this if there is risk the container may be narrower than the element inside */\n  white-space: nowrap; \n}\n\n.ui.image.myPlaceholder>i.icon{\n  position: absolute;\n  line-height: normal;\n  text-align: center;\n  display: table;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  color: rgb(0,0,0, 0.05);\n}\n\n.ui.image.myPlaceholder>i:before{\n  display: table-cell;\n  height: 100%;\n  vertical-align: middle;\n}\n\n/* This is from https://css-tricks.com/centering-in-the-unknown/ */\n.ui.image.myPlaceholder:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n   /*  margin-right: -0.25em;  /* Adjusts for spacing */\n}\n\n.ui.image.myPlaceholder>.centered{\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ui.image.myPlaceholder .ui.header{\n  color: #BBBBBB;\n  margin: 0;\n  padding: 0;\n}\n\n.ui.image.myPlaceholder .description{\n  color: #999;\n  font-size: 0.75rem;\n  font-weight: normal;\n  font-style: italic;\n  margin: 0; padding: 0;\n  display: block;\n}\n\n.ui.image.myPlaceholder div.json{\n  color: black;\n  text-align: left;\n  margin: 0 20%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/cosmos.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/cosmos.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n  This file exists ONLY to import other files. Please don't put any CSS or SCSS here\n*/\nbody, #root {\n  height: 100%; }\n\n#AppContent {\n  padding-top: 5rem; }\n\nhtml {\n  overflow: hidden;\n  height: 100%; }\n\nbody {\n  -ms-scroll-chaining: none;\n      overscroll-behavior: none;\n  /* In Chrome 63+, Firefox 59+ and Opera 50+  */\n  /* background: inherit !important; */\n  height: 100%;\n  overflow: auto; \n}\n\n#root {\n  height: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/BDAMainApp/BDAMainApp.fixture.js":
/*!*********************************************************!*\
  !*** ./src/components/BDAMainApp/BDAMainApp.fixture.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _HomeFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeFeed */ "./src/components/BDAMainApp/HomeFeed.jsx");
/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectList */ "./src/components/BDAMainApp/ProjectList.jsx");
/* harmony import */ var _ProjectMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectMap */ "./src/components/BDAMainApp/ProjectMap.jsx");
/* harmony import */ var _ProjectsMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectsMap */ "./src/components/BDAMainApp/ProjectsMap.jsx");
/* harmony import */ var _StructureHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StructureHome */ "./src/components/BDAMainApp/StructureHome.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/util */ "./src/lib/util.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _projects_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects.json */ "./src/components/BDAMainApp/projects.json");
var _projects_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./projects.json */ "./src/components/BDAMainApp/projects.json", 1);











_HomeFeed__WEBPACK_IMPORTED_MODULE_1__["default"].displayName = 'Projects/Home';
_ProjectsMap__WEBPACK_IMPORTED_MODULE_4__["default"].displayName = 'Projects/Map';
_ProjectList__WEBPACK_IMPORTED_MODULE_2__["default"].displayName = 'Project/List';
_ProjectMap__WEBPACK_IMPORTED_MODULE_3__["default"].displayName = 'Project/Map';
_StructureHome__WEBPACK_IMPORTED_MODULE_5__["default"].displayName = 'Structure/Home';
var images = ['/images/bdas/1/DJI_0137.jpg', '/images/bdas/2/Structure08_04.jpg', '/images/bdas/3/DJI_0767.jpg', '/images/bdas/4/IMG_0117.jpg', '/images/bdas/5/Juniper_BDA_Sep_21_2016.jpg', '/images/bdas/7/DJI_0004.jpg', '/images/bdas/6/Myers_Creek_Before-during-after-from-road.jpg'];
/**
 * Make us a random user profile
 */

var getFill = function getFill() {
  var size = lodash__WEBPACK_IMPORTED_MODULE_9___default.a.random(100, 200);

  return "https://fillmurray.com/".concat(size, "/").concat(size);
};

var users = [];

lodash__WEBPACK_IMPORTED_MODULE_9___default.a.times(lodash__WEBPACK_IMPORTED_MODULE_9___default.a.random(10, 20), function () {
  return users.push({
    name: "".concat(faker__WEBPACK_IMPORTED_MODULE_7__["name"].firstName(), " ").concat(faker__WEBPACK_IMPORTED_MODULE_7__["name"].lastName()),
    avatar: getFill(),
    bdas: Object(_lib_util__WEBPACK_IMPORTED_MODULE_8__["randomMap"])(1, 5, function () {
      return Object(_lib_util__WEBPACK_IMPORTED_MODULE_8__["randomArrayEl"])(images);
    })
  });
});

var fixtures = [{
  name: 'HomeFeed',
  component: _HomeFeed__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    users: users
  }
}, {
  name: 'Project List',
  component: _ProjectList__WEBPACK_IMPORTED_MODULE_2__["default"],
  props: {
    projects: _projects_json__WEBPACK_IMPORTED_MODULE_10__["data"].Projects
  }
}, {
  name: 'Project Map',
  component: _ProjectMap__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: 'Projects Map',
  component: _ProjectsMap__WEBPACK_IMPORTED_MODULE_4__["default"],
  props: {
    projects: _projects_json__WEBPACK_IMPORTED_MODULE_10__["data"].Projects
  }
}, {
  name: 'Structure Home',
  component: _StructureHome__WEBPACK_IMPORTED_MODULE_5__["default"]
}];
var devFixtures = [];
var finalFixes = fixtures.concat(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_6__["default"].env === 'development' ? devFixtures : [])).map(function (fix) {
  fix.component.displayName = "BDA Main App/Questions/".concat(fix.component.name);
  return fix;
});
/* harmony default export */ __webpack_exports__["default"] = (finalFixes);

/***/ }),

/***/ "./src/components/BDAMainApp/HomeFeed.jsx":
/*!************************************************!*\
  !*** ./src/components/BDAMainApp/HomeFeed.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Topbar */ "./src/components/BDAMainApp/Topbar.jsx");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/util */ "./src/lib/util.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/components/BDAMainApp/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);








var HomeFeed = function HomeFeed(_ref) {
  var users = _ref.users;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PageWrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tabWrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    menu: {
      secondary: true,
      pointing: true
    },
    panes: [{
      menuItem: 'Feed',
      render: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tab"].Pane, {
          attached: false
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], null, Object(_lib_util__WEBPACK_IMPORTED_MODULE_4__["randomMap"])(10, 20, function () {
          var Comp = Object(_lib_util__WEBPACK_IMPORTED_MODULE_4__["randomArrayEl"])([FeedItemAddBDA, FeedItemAddFriend, FeedItemPost]);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, {
            profile: Object(_lib_util__WEBPACK_IMPORTED_MODULE_4__["randomArrayEl"])(users)
          });
        })));
      }
    }, {
      menuItem: 'Near Me',
      render: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tab"].Pane, {
          attached: false
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], null, Object(_lib_util__WEBPACK_IMPORTED_MODULE_4__["randomMap"])(10, 20, function () {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeedItemAddBDA, {
            profile: Object(_lib_util__WEBPACK_IMPORTED_MODULE_4__["randomArrayEl"])(users)
          });
        })));
      }
    }]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeFeed);

var FeedItemPost = function FeedItemPost(_ref2) {
  var profile = _ref2.profile;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    image: profile.avatar
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, profile.name), " posted on their page", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, null, lodash__WEBPACK_IMPORTED_MODULE_5___default.a.random(1, 10), " days ago")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true
  }, faker__WEBPACK_IMPORTED_MODULE_3__["lorem"].paragraph()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RandomLikes, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null)));
};

var FeedItemAddFriend = function FeedItemAddFriend(_ref3) {
  var profile = _ref3.profile;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    image: profile.avatar
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].User, null, profile.name), " added you as a friend", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, null, lodash__WEBPACK_IMPORTED_MODULE_5___default.a.random(1, 10), " Hour Ago")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RandomLikes, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null)));
};

var FeedItemAddBDA = function FeedItemAddBDA(_ref4) {
  var profile = _ref4.profile;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    image: profile.avatar
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, profile.name), " discovered ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, profile.bdas.length, " new dams"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, null, lodash__WEBPACK_IMPORTED_MODULE_5___default.a.random(1, 10), " days ago")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    images: true
  }, profile.bdas.map(function (bda, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: "".concat(profile.name).concat(idx)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: bda
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RandomLikes, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null)));
};

var RandomLikes = function RandomLikes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Meta, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Like, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "like"
  }), lodash__WEBPACK_IMPORTED_MODULE_5___default.a.random(10, 20000), " Likes"));
};

/***/ }),

/***/ "./src/components/BDAMainApp/ProjectList.jsx":
/*!***************************************************!*\
  !*** ./src/components/BDAMainApp/ProjectList.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Topbar */ "./src/components/BDAMainApp/Topbar.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/BDAMainApp/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);





var ProjectList = function ProjectList(_ref) {
  var projects = _ref.projects;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PageWrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    divided: true,
    selection: true,
    style: {
      cursor: 'pointer'
    }
  }, projects.map(function (project, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      key: "ProjectItem".concat(idx),
      style: {
        minHeight: 120
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      size: "medium",
      src: project.Banner
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
      as: "h2"
    }, project.Title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, project.Title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
      floated: "right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, project.Watershed), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, null, project.Stream)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectList);

/***/ }),

/***/ "./src/components/BDAMainApp/ProjectMap.jsx":
/*!**************************************************!*\
  !*** ./src/components/BDAMainApp/ProjectMap.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Topbar */ "./src/components/BDAMainApp/Topbar.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/BDAMainApp/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
 // import PropTypes from 'prop-types'





var ProjectMap = function ProjectMap() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PageWrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, "Aute sit reprehenderit elit occaecat deserunt id labore adipisicing. Pariatur nostrud culpa magna commodo culpa deserunt consequat est. Laboris culpa quis reprehenderit voluptate est officia pariatur labore proident ipsum. Id labore fugiat magna quis nulla est veniam. Ipsum deserunt laboris incididunt amet enim adipisicing voluptate Lorem pariatur velit nisi est. Ullamco nisi qui exercitation ullamco in non."));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectMap);

/***/ }),

/***/ "./src/components/BDAMainApp/ProjectsMap.jsx":
/*!***************************************************!*\
  !*** ./src/components/BDAMainApp/ProjectsMap.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_maps_BaseMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/maps/BaseMap */ "./src/components/common/maps/BaseMap.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _lib_mapUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/mapUtil */ "./src/lib/mapUtil.js");
/* harmony import */ var _common_maps_MarkerIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/maps/MarkerIcon */ "./src/components/common/maps/MarkerIcon.jsx");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Topbar */ "./src/components/BDAMainApp/Topbar.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./src/components/BDAMainApp/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);












var ProjectsMap = function ProjectsMap(_ref) {
  var projects = _ref.projects,
      center = _ref.center,
      pts = _ref.pts;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PageWrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Topbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mapWrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_3__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_maps_BaseMap__WEBPACK_IMPORTED_MODULE_1__["default"], {
      longitude: center[0],
      latitude: center[1],
      mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_2__["mapBoxToken"],
      maxBounds: Object(_lib_mapUtil__WEBPACK_IMPORTED_MODULE_5__["findBounds"])(pts),
      size: {
        height: height < 500 ? 500 : height,
        width: width
      },
      maxZoom: 18,
      minZoom: 2
    }, // Render props here
    function (viewport) {
      return projects.map(function (project, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_4__["Marker"], {
          viewport: viewport,
          key: "mapmarker".concat(idx),
          longitude: project.Longitude,
          latitude: project.Latitude,
          offsetLeft: 0,
          offsetTop: 0
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_maps_MarkerIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
          project: project
        }));
      });
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
      text: "Filter",
      icon: "filter",
      color: "blue",
      floating: true,
      labeled: true,
      button: true,
      className: "icon"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Header, {
      icon: "tags",
      content: "Filter by tag"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, null, "Important"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, null, "Announcement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].Item, null, "Discussion"))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_9__["withProps"])(function (_ref3) {
  var projects = _ref3.projects;
  var pts = projects.filter(function (p) {
    return p.Latitude && p.Longitude;
  }).map(function (p) {
    return [p.Longitude, p.Latitude];
  });
  var center = Object(_lib_mapUtil__WEBPACK_IMPORTED_MODULE_5__["findCenter"])(pts);
  return {
    pts: pts,
    center: center
  };
}))(ProjectsMap));

/***/ }),

/***/ "./src/components/BDAMainApp/StructureHome.jsx":
/*!*****************************************************!*\
  !*** ./src/components/BDAMainApp/StructureHome.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Topbar */ "./src/components/BDAMainApp/Topbar.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/BDAMainApp/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
 // import PropTypes from 'prop-types'





var ProjectsMap = function ProjectsMap() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PageWrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, "Aute sit reprehenderit elit occaecat deserunt id labore adipisicing. Pariatur nostrud culpa magna commodo culpa deserunt consequat est. Laboris culpa quis reprehenderit voluptate est officia pariatur labore proident ipsum. Id labore fugiat magna quis nulla est veniam. Ipsum deserunt laboris incididunt amet enim adipisicing voluptate Lorem pariatur velit nisi est. Ullamco nisi qui exercitation ullamco in non."));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectsMap);

/***/ }),

/***/ "./src/components/BDAMainApp/Topbar.jsx":
/*!**********************************************!*\
  !*** ./src/components/BDAMainApp/Topbar.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
 // import PropTypes from 'prop-types'



var Topbar = function Topbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    inverted: true,
    color: "orange",
    style: style,
    fixed: "top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "home"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "messages"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "friends"
  }));
};

var style = {
  borderRadius: 0,
  marginBottom: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./src/components/BDAMainApp/projects.json":
/*!*************************************************!*\
  !*** ./src/components/BDAMainApp/projects.json ***!
  \*************************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"Projects":[{"ProjectID":"7","Title":"Lower Fox Creek Habitat Enhancement","Organization":"CTWSRO","Latitude":44.651377,"Longitude":-119.195708,"Watershed":"John Day","Stream":"Fox Creek","ImplementationDate":"2018-08-30","TreatmentLength":2000,"Structures":7,"Banner":"/images/bdas/7/DJI_0004.jpg","Goals":"The goal of this project is to reconnect Fox Creek with its floodplain.","StructureElements":"Structures were placed strategically throughout the project reach in areas that would maximize floodplain activation during high-flows. BDA's within this project consisted of 10-30 six-inch posts driven into to streambed. Willow and juniper slash from the wood structures placed throughout the project site were used to weave/fill between posts."},{"ProjectID":"3","Title":"Bridge Creek Intensively Monitored Watershed","Organization":"NOAA Fisheries","Latitude":44.59193,"Longitude":-120.201594,"Watershed":"John Day","Stream":"Bridge Creek","ImplementationDate":"2009-09-01","TreatmentLength":4000,"Structures":120,"Banner":"/images/bdas/3/DJI_0767.jpg","Goals":"The BDA treatments were designed to promote channel aggradation in order to reconnect incised stream reaches to adjacent floodplains. Long-term outcomes of the project included increased surface-groundwater connectivity, moderation of high summer temperatures, increased fish habitat quantity and quality, and increased productivity of steelhead populations.","StructureElements":"BDA structures were composed of post lines driven across the channel and on to adjacent floodplain surfaces. Fill material relied on abundant local willow, cobbles, and gravels. During the project many of the BDA structures were enhance by natural beaver activity which increased the effectiveness of the treatments in the process of incision recovery."},{"ProjectID":"2","Title":"Bear Creek Surface Flow Enhancement","Organization":"Wheeler County Soil and Water Conservation District","Latitude":44.630221,"Longitude":-120.332477,"Watershed":"John Day","Stream":"Bear Creek","ImplementationDate":"2017-07-15","TreatmentLength":2000,"Structures":90,"Banner":"/images/bdas/2/Structure08_04.jpg","Goals":"The primary goal for the project is to increase the abundance of surface flow on intermittent sections Bear Creek during summer. This will provide increased quantity and quality of rearing habitat for juvenile steelhead.","StructureElements":"BDA structures were largely built by installing post lines across the active channel and applying locally sourced willow with cobble and gravel at the base of each dam. Roughly 20 postless BDAs were also built within a ephemeral tributary near the treatment reaches."},{"ProjectID":"4","Title":"Parrish Creek Riparian and Hydrologic Enhancement","Organization":"Mid John Day - Bridge Creek Watershed Council","Latitude":44.831002,"Longitude":-119.8153,"Watershed":"John Day","Stream":"Parrish Creek","ImplementationDate":"2018-07-01","TreatmentLength":800,"Structures":30,"Banner":"/images/bdas/4/IMG_0117.jpg","Goals":"The BDA design is intended to increase the duration and extent of surface flow in a section of stream that routinely is dry during summer. Ideally, changes to the hydrology of the reach will result in an increase in fish habitat quantity and quality, and increase the success rate of riparian vegetation plantings fall of 2019.","StructureElements":"BDA structures were largely constructed of downed juniper from nearby juniper thinning actions taking place within the watershed. Juniper and local sediment and cobble were added to post lines staggered across the channel. In general, post elevations and fill material were kept to the elevation of adjacent bank features (~ 0.2 - 0.35 m)."},{"ProjectID":"6","Title":"Triple Creek Restoration Project","Organization":"Okanogan Highlands Alliance, US Fish and Wildlife Service, Trout Unlimited","Latitude":48.965231,"Longitude":-119.03737,"Watershed":"Kettle River","Stream":"Myers Creek","ImplementationDate":"2016-08-22","TreatmentLength":580,"Structures":33,"Banner":"/images/bdas/6/Myers_Creek_Before-during-after-from-road.jpg","Goals":"Long-term goal: Reestablish connectivity between stream and floodplain, with a healthy riparian plant community and beaver maintaining grade control onsite. Short-term goal: Improve ecological function and complexity within the Triple Creek project reach. Objectives: • Increase channel length • Raise streambed elevation • Increase sub-surface water elevation • Reestablish native riparian vegetation within the wetland complex • Reestablish favorable geomorphic and vegetative conditions for beaver.","StructureElements":"We installed two different BDA structure types at Triple Creek: Deflector dams and channel-spanning BDAs. Deflector dams are straight post-line structures that span approximately 80% of the channel, leaving an aperture at the end through which water can flow. The intent of the deflector dams is to deflect flows into the opposing bank to recruit sediment and to elongate the channel locally. Deflector dams are oriented diagonally to direct flow toward an eroding bank on the outside of a meander. Structure locations were chosen based on existing channel geometry, and to push water in specific directions to create the desired future planform for the stream. Channel-spanning BDAs, on the other hand, are post-lines installed in an arc that span 100% of the channel. These are generally built in tandem with deflector dams, to capture the sediment recruited from the banks just upstream. The channel-spanning BDAs impound water, which raises the water surface elevation and slows velocities to induce deposition. It can be ideal to locate channel-spanners near inset floodplains and where the channel is wide, since sediment will aggrade on these surfaces and the structure is more likely to be stable. We also installed 10 pieces of large wood upstream of all the BDAs with the objective of habitat enhancement, although significant aggradation also occurred upstream of one of the large wood installments."},{"ProjectID":"1","Title":"South Fork John Day Rapid Riparian Restoration","Organization":"South Fork John Day Watershed Council","Latitude":44.066661,"Longitude":-119.385447,"Watershed":"John Day","Stream":"South Fork John Day River","ImplementationDate":"2017-08-15","TreatmentLength":6437,"Structures":18,"Banner":"/images/bdas/1/DJI_0137.jpg","Goals":"Expand riparian vegetation, stop channel incision, reconnect to floodplain.","StructureElements":"We used 3 inch diameter un-treated wooden posts, and pound them using a gas powered post pounder. We used Juniper limbs, sagebrush, and willow to fill the structures, along with 5 gallon buckets of gravel/silt. We hired contractors to pound the posts, then used a youth crew to fill them."},{"ProjectID":"5","Title":"South Fork Crooked River Jake Place","Organization":"OSU-Cascades","Latitude":44.0419,"Longitude":-120.0283,"Watershed":"Deschutes","Stream":"South Fork Crooked River","ImplementationDate":"2016-07-15","TreatmentLength":2000,"Structures":5,"Banner":"/images/bdas/5/Juniper_BDA_Sep_21_2016.jpg","Goals":"Increase channel complexity, lower water temperatures, support restoration of woody riparian vegetation.","StructureElements":"4\" posts woven with willow, juniper, or a combination of both."}]}};

/***/ }),

/***/ "./src/components/BDAMainApp/style.css":
/*!*********************************************!*\
  !*** ./src/components/BDAMainApp/style.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMainApp/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMainApp/style.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMainApp/style.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/BDAMobile/FormWrapper.jsx":
/*!**************************************************!*\
  !*** ./src/components/BDAMobile/FormWrapper.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



/**
 * This is mainly for cosmos.
 */



var FormWrapper = function FormWrapper(_ref) {
  var children = _ref.children,
      restProps = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(children, function (child) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps));
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], null, childrenWithProps));
};

FormWrapper.displayName = 'Form';
/* harmony default export */ __webpack_exports__["default"] = (FormWrapper);

/***/ }),

/***/ "./src/components/BDAMobile/Topbar.jsx":
/*!*********************************************!*\
  !*** ./src/components/BDAMobile/Topbar.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/withRedux */ "./src/redux/withRedux.js");





var Topbar = function Topbar(_ref) {
  var editing = _ref.editing,
      backToHome = _ref.backToHome;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    icon: true,
    inverted: true,
    style: {
      borderRadius: 0
    }
  }, editing && editing.guid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    name: "bars",
    onClick: function onClick() {
      return backToHome();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "arrow left"
  })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    header: true
  }, "Project Homepage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "yellow",
    icon: "lock open",
    inverted: true,
    content: "Log out",
    onClick: function onClick() {
      aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].signOut(); // This is a hack to force the page to refresh

      window.location.replace(window.location);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./src/components/BDAMobile/misc/AddButton.jsx":
/*!*****************************************************!*\
  !*** ./src/components/BDAMobile/misc/AddButton.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../graphql/queries */ "./src/graphql/queries.js");




var AddButton = function AddButton(_ref) {
  var createStructure = _ref.createStructure;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "addButton",
    icon: "plus",
    circular: true,
    color: "green",
    onClick: function onClick(e) {
      e.preventDefault();
      createStructure({
        body: '{}'
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["withCreateStructure"])(AddButton));

/***/ }),

/***/ "./src/components/BDAMobile/misc/RefreshStockButton.jsx":
/*!**************************************************************!*\
  !*** ./src/components/BDAMobile/misc/RefreshStockButton.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../graphql/queries */ "./src/graphql/queries.js");




var RefreshStockButton = function RefreshStockButton(_ref) {
  var createStructure = _ref.createStructure;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "refreshButton",
    icon: "refresh",
    content: "Clear and refresh stock structures",
    fluid: true,
    color: "red",
    onClick: function onClick(e) {
      // READ THE STOCK ENTRIES FROM A JSON FILE
      var data = __webpack_require__(/*! ../views/data.json */ "./src/components/BDAMobile/views/data.json");

      Object.values(data.structures).forEach(function (_ref2) {
        var fields = _ref2.fields;
        createStructure({
          body: JSON.stringify(fields)
        });
      });
      console.log('refresh', {
        data: data,
        createStructure: createStructure
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["withCreateStructure"])(RefreshStockButton));

/***/ }),

/***/ "./src/components/BDAMobile/misc/Structures/StructureList.jsx":
/*!********************************************************************!*\
  !*** ./src/components/BDAMobile/misc/Structures/StructureList.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _StructureListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StructureListItem */ "./src/components/BDAMobile/misc/Structures/StructureListItem.jsx");
/* harmony import */ var _misc_Placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../misc/Placeholder */ "./src/components/misc/Placeholder.jsx");





var StructureList = function StructureList(_ref) {
  var structures = _ref.structures;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "structureList"
  }, !structures || Object.keys(structures).length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Placeholder__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: 400,
    icon: "list",
    title: "No Structures Found"
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    divided: true,
    selection: true
  }, structures.map(function (structure, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StructureListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      structure: structure,
      key: "structItem".concat(structure.id)
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StructureList);

/***/ }),

/***/ "./src/components/BDAMobile/misc/Structures/StructureListItem.jsx":
/*!************************************************************************!*\
  !*** ./src/components/BDAMobile/misc/Structures/StructureListItem.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/lib/Swipeable.js");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../graphql/queries */ "./src/graphql/queries.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");







var StructureListItem = function StructureListItem(_ref) {
  var _ref$structure = _ref.structure,
      id = _ref$structure.id,
      lastedit = _ref$structure.lastedit,
      body = _ref$structure.body,
      color = _ref.color,
      sidebarVisible = _ref.sidebarVisible,
      openMenu = _ref.openMenu,
      closeMenu = _ref.closeMenu,
      itemClick = _ref.itemClick,
      localOnly = _ref.localOnly,
      deleteConfirmVisible = _ref.deleteConfirmVisible,
      deleteClick = _ref.deleteClick,
      deleteCancel = _ref.deleteCancel,
      deleteConfirm = _ref.deleteConfirm;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Sidebar"].Pushable, {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {
    animation: "push",
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"],
    icon: "labeled",
    inverted: true,
    direction: "right",
    color: "red",
    width: "thin",
    visible: sidebarVisible
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    onClick: deleteClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: "trash"
  }), " Delete")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Sidebar"].Pusher, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_swipeable__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onSwipedLeft: openMenu,
    onSwipedRight: closeMenu
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    style: {
      minHeight: 85
    },
    onClick: itemClick,
    basic: true
  }, localOnly === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    icon: "refresh",
    as: "a",
    color: "yellow",
    corner: true
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    inverted: true,
    onClick: function onClick() {}
  }, getHeader(JSON.parse(body))), getMeta(JSON.parse(body)), console.log(localOnly)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Confirm"], {
    header: "Delete Structure?",
    open: deleteConfirmVisible,
    onCancel: deleteCancel,
    onConfirm: deleteConfirm,
    size: "large"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_5__["withProps"])(function (_ref2) {
  var id = _ref2.structure.id;
  var localOnly = id.indexOf('pending') === 0;
  var color = null;
  if (localOnly === true) color = 'yellow'; // else if (!uploading && !uploaded && uploadFailed) color = 'red'

  return {
    color: color,
    localOnly: localOnly
  };
}), _graphql_queries__WEBPACK_IMPORTED_MODULE_3__["withDeleteStructure"], Object(recompose__WEBPACK_IMPORTED_MODULE_5__["withStateHandlers"])({
  sidebarVisible: false,
  deleteConfirmVisible: false
}, {
  itemClick: function itemClick(_ref3) {
    var sidebarVisible = _ref3.sidebarVisible;
    return function (e) {
      console.log('click', e, sidebarVisible);
      if (sidebarVisible === true) return {
        sidebarVisible: false
      };else {
        console.log('NAVIGATE');
      }
    };
  },
  openMenu: function openMenu() {
    return function () {
      return {
        sidebarVisible: true
      };
    };
  },
  closeMenu: function closeMenu() {
    return function (e) {
      e.stopPropagation(); // Make sure we don't accidentally trigger  click

      return {
        sidebarVisible: false
      };
    };
  },
  deleteClick: function deleteClick() {
    return function () {
      return {
        deleteConfirmVisible: true
      };
    };
  },
  deleteCancel: function deleteCancel() {
    return function () {
      return {
        deleteConfirmVisible: false
      };
    };
  },
  deleteConfirm: function deleteConfirm(state, _ref4) {
    var deleteStructure = _ref4.deleteStructure,
        structure = _ref4.structure;
    return function () {
      deleteStructure({
        id: structure.id
      });
      return {
        deleteConfirmVisible: false,
        sidebarVisible: false
      };
    };
  }
}))(StructureListItem)); // <Label.Group className='projListDownloadLabels'>
//   {/* { !uploaded && !uploadFailed && !uploading ? <Popup header='Not Uploaded' content='This structure has not been Uploaded'
//     trigger={<Label icon='upload' as='a' color='yellow' content='Click to sync' onClick={() => uploadStructure(guid)} />}
//   /> : null } */}
//   { uploaded ? <Popup header='Uploaded!' content='This structure has been Uploaded'
//     trigger={<Label color='green' icon='check' content='Synced' />}
//   /> : null }
//   { !uploading && !uploaded && uploadFailed ? <Popup header='Upload Error' content='Try uploading again!'
//     trigger={<Label color='red' icon='bug' as='a' content='Sync error' onClick={() => { }} />}
//   /> : null }
//   { uploading ? <Popup header='Uploading...' content='Fingers crossed!'
//     trigger={<Label icon={{ name: 'circle notch', loading: true }} content='Uploading...' />}
//   /> : null }
// </Label.Group>

/**
 * Heler function to make the header nice
 */

function getHeader(fields) {
  try {
    return fields.structureID.value;
  } catch (e) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: 'red'
      }
    }, "NO NAME");
  }
}
/**
 * Helper function to style the meta fields and date and stuff
 */


function getMeta(fields) {
  var observationDate;
  var designerName;

  try {
    observationDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date(fields.observationDate.value));
  } catch (e) {}

  try {
    designerName = fields.designerName.value;
  } catch (e) {}

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, designerName ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Designed by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, designerName), " ") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '0.9rem',
      color: '#888'
    }
  }, observationDate ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, observationDate.format('dddd, MMMM Do')), " ") : null));
}

/***/ }),

/***/ "./src/components/BDAMobile/misc/Structures/index.js":
/*!***********************************************************!*\
  !*** ./src/components/BDAMobile/misc/Structures/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StructureList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructureList */ "./src/components/BDAMobile/misc/Structures/StructureList.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_StructureList__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/BDAMobile/questions/CardListPicker.css":
/*!***************************************************************!*\
  !*** ./src/components/BDAMobile/questions/CardListPicker.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./CardListPicker.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/CardListPicker.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./CardListPicker.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/CardListPicker.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./CardListPicker.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/CardListPicker.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/BDAMobile/questions/CardListPicker.jsx":
/*!***************************************************************!*\
  !*** ./src/components/BDAMobile/questions/CardListPicker.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Note */ "./src/components/BDAMobile/questions/Note.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");
/* harmony import */ var _misc_Placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../misc/Placeholder */ "./src/components/misc/Placeholder.jsx");
/* harmony import */ var _CardListPicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardListPicker.css */ "./src/components/BDAMobile/questions/CardListPicker.css");
/* harmony import */ var _CardListPicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CardListPicker_css__WEBPACK_IMPORTED_MODULE_7__);









var CardListPicker = function CardListPicker(_ref) {
  var title = _ref.title,
      options = _ref.options,
      hasNote = _ref.hasNote,
      note = _ref.note,
      notePrompt = _ref.notePrompt,
      placeholder = _ref.placeholder,
      value = _ref.value,
      setNote = _ref.setNote,
      toggleValue = _ref.toggleValue,
      modalOpen = _ref.modalOpen,
      setModal = _ref.setModal;
  var items = options.map(function (op, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardListPickerItem, Object.assign({
      key: idx,
      toggleValue: toggleValue,
      selected: value && Array.isArray(value) && value.indexOf(op.value) > -1,
      placeholder: placeholder
    }, op));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h3"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    closeIcon: true,
    id: "cardListModal",
    open: modalOpen,
    onClose: function onClose() {
      return setModal(false);
    },
    centered: false
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Header, null, "Select a Photo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: "div",
    maxWidth: 499
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
    itemsPerRow: 2,
    centered: true
  }, items)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: "div",
    minWidth: 500
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Group, {
    itemsPerRow: 4,
    centered: true
  }, items))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "green",
    onClick: function onClick() {
      return setModal(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "checkmark"
  }), " Ok"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return setModal(true);
    }
  }, "Choose..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
    onClick: function onClick() {
      return setModal(true);
    }
  }, options.filter(function (op) {
    return value.indexOf(op.value) === 0;
  }).map(function (op, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardListListItem, Object.assign({
      key: idx,
      selected: value.indexOf(op.value) === 0,
      placeholder: placeholder
    }, op));
  })), !hasNote ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Note__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: notePrompt,
    value: note,
    setValue: setNote,
    modalTitle: "".concat(title, ": ").concat(notePrompt)
  }));
};

var CardListListItem = function CardListListItem(_ref2) {
  var image = _ref2.image,
      text = _ref2.text,
      subText = _ref2.subText,
      placeholder = _ref2.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, placeholder ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_misc_Placeholder__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, placeholder, {
    height: 50
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: image,
    width: "100"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Header, null, text), subText && subText.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Description, null, subText) : null));
};

var CardListPickerItem = function CardListPickerItem(_ref3) {
  var image = _ref3.image,
      text = _ref3.text,
      value = _ref3.value,
      subText = _ref3.subText,
      selected = _ref3.selected,
      placeholder = _ref3.placeholder,
      toggleValue = _ref3.toggleValue;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    link: true,
    onClick: function onClick() {
      return toggleValue(value);
    },
    className: selected ? 'active' : ''
  }, placeholder ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_misc_Placeholder__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, placeholder, {
    minHeight: 200
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: image,
    width: 200
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, null, text), subText && subText.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Description, null, subText) : null));
};

var Present = function Present(_ref4) {
  var title = _ref4.title,
      options = _ref4.options,
      value = _ref4.value,
      placeholder = _ref4.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Header, {
    as: "h4"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Item"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], null, options.filter(function (op) {
    return value.indexOf(op.value) === 0;
  }).map(function (op, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardListListItem, Object.assign({
      key: idx,
      selected: value.indexOf(op.value) === 0,
      placeholder: placeholder
    }, op));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_4__["withStateHandlers"])({
  modalOpen: false
}, {
  toggleModal: function toggleModal(_ref5) {
    var modalOpen = _ref5.modalOpen;
    return function () {
      return {
        modalOpen: !modalOpen
      };
    };
  },
  setModal: function setModal() {
    return function (val) {
      return {
        modalOpen: val
      };
    };
  },
  toggleValue: function toggleValue(state, _ref6) {
    var value = _ref6.value,
        multiple = _ref6.multiple,
        setValue = _ref6.setValue;
    return function (val) {
      if (multiple) {
        var newValues = [];
        if (Array.isArray(value)) newValues = value.slice(0);
        var index = newValues.indexOf(val);
        if (index < 0) newValues.push(val);else newValues.splice(index, 1);
        setValue(newValues);
      } else {
        setValue(val);
        return {
          modalOpen: false
        };
      }
    };
  }
}), Object(recompose__WEBPACK_IMPORTED_MODULE_4__["mapProps"])(function (props) {
  return Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    value: props.value || []
  });
}), Object(recompose__WEBPACK_IMPORTED_MODULE_4__["branch"])(function (_ref7) {
  var present = _ref7.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_4__["renderComponent"])(Present)))(CardListPicker));

/***/ }),

/***/ "./src/components/BDAMobile/questions/Checkboxes.jsx":
/*!***********************************************************!*\
  !*** ./src/components/BDAMobile/questions/Checkboxes.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Note */ "./src/components/BDAMobile/questions/Note.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");






var CheckboxQuestion = function CheckboxQuestion(_ref) {
  var title = _ref.title,
      options = _ref.options,
      hasNote = _ref.hasNote,
      note = _ref.note,
      notePrompt = _ref.notePrompt,
      setNote = _ref.setNote,
      setValue = _ref.setValue;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    basic: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, title), options.map(function (_ref2, idx) {
    var label = _ref2.label,
        value = _ref2.value;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      label: label,
      value: value,
      onChange: function onChange() {
        return setValue(value);
      }
    }));
  }), !hasNote ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Note__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: notePrompt,
    value: note,
    setValue: setNote,
    modalTitle: "".concat(title, ": ").concat(notePrompt)
  }));
};

var Present = function Present(_ref3) {
  var title = _ref3.title,
      value = _ref3.value,
      options = _ref3.options,
      note = _ref3.note;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Header, {
    as: "h4"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Description, null, value && Array.isArray(value) && value.length > 0 ? printValues(value, options) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      color: 'red'
    }
  }, "Not Entered")), note ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Extra, null, "Note: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, note)) : null));
};

function printValues(value, options) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, value.map(function (val, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "item-".concat(idx)
    }, options.find(function (op) {
      return op.value === val;
    }).label);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_4__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_3__["branch"])(function (_ref4) {
  var present = _ref4.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_3__["renderComponent"])(Present)), // Wrap setvalue because it can be multiples
Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withHandlers"])({
  setValue: function setValue(_ref5) {
    var value = _ref5.value,
        _setValue = _ref5.setValue;
    return function (newVal) {
      var newValues = [];
      if (Array.isArray(value)) newValues = value.slice(0);
      if (newValues.indexOf(newVal) < 0) newValues.push(newVal);else newValues = newValues.splice(newValues.indexOf(newVal), 1);

      _setValue(newValues);
    };
  }
}))(CheckboxQuestion));

/***/ }),

/***/ "./src/components/BDAMobile/questions/DatePicker.jsx":
/*!***********************************************************!*\
  !*** ./src/components/BDAMobile/questions/DatePicker.jsx ***!
  \***********************************************************/
/*! exports provided: DatePicker, DateTimePicker, TimePicker, DateRangePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return DateTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return TimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangePicker", function() { return DateRangePicker; });
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-calendar-react */ "./node_modules/semantic-ui-calendar-react/dist/index.js");
/* harmony import */ var semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");







var withFormWrapper = function withFormWrapper(WrappedComponent) {
  var InnerComponent = function InnerComponent(_ref) {
    var selectorType = _ref.selectorType,
        present = _ref.present,
        formGuid = _ref.formGuid,
        title = _ref.title,
        value = _ref.value,
        setNote = _ref.setNote,
        setValue = _ref.setValue,
        props = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["selectorType", "present", "formGuid", "title", "value", "setNote", "setValue"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      basic: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      as: "h3"
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, Object.assign({}, props, {
      value: value || '',
      onChange: function onChange(e, _ref2) {
        var value = _ref2.value;
        return setValue(value);
      }
    }))));
  };

  InnerComponent.displayName = "/components/DatePicker";
  InnerComponent.defaultProps = {
    name: 'DATEPICKER',
    iconPosition: 'left',
    popupPosition: 'bottom left',
    closable: true,
    value: ''
  };
  return InnerComponent;
};

var Present = function Present(_ref3) {
  var title = _ref3.title,
      value = _ref3.value;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Header, {
    as: "h4"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Description, null, value || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    style: {
      color: 'red'
    }
  }, "Not Entered"))));
};

var DatePicker = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_2__["branch"])(function (_ref4) {
  var present = _ref4.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_2__["renderComponent"])(Present)), withFormWrapper)(semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_3__["DateInput"]);
var DateTimePicker = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_2__["branch"])(function (_ref5) {
  var present = _ref5.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_2__["renderComponent"])(Present)), withFormWrapper)(semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_3__["DateTimeInput"]);
var TimePicker = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_2__["branch"])(function (_ref6) {
  var present = _ref6.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_2__["renderComponent"])(Present)), withFormWrapper)(semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_3__["TimeInput"]);
var DateRangePicker = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_2__["branch"])(function (_ref7) {
  var present = _ref7.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_2__["renderComponent"])(Present)), withFormWrapper)(semantic_ui_calendar_react__WEBPACK_IMPORTED_MODULE_3__["DatesRangeInput"]);

/***/ }),

/***/ "./src/components/BDAMobile/questions/DropDownQuestion.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/BDAMobile/questions/DropDownQuestion.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Note */ "./src/components/BDAMobile/questions/Note.jsx");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");




// import _ from 'lodash'





var DropDownQuestion = function DropDownQuestion(_ref) {
  var title = _ref.title,
      formGuid = _ref.formGuid,
      hasNote = _ref.hasNote,
      dispatch = _ref.dispatch,
      note = _ref.note,
      notePrompt = _ref.notePrompt,
      present = _ref.present,
      setValue = _ref.setValue,
      setNote = _ref.setNote,
      dropdownProps = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["title", "formGuid", "hasNote", "dispatch", "note", "notePrompt", "present", "setValue", "setNote"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    basic: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    as: "h3"
  }, title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], Object.assign({}, dropdownProps, {
    onChange: function onChange(e, _ref2) {
      var value = _ref2.value;
      return setValue(value);
    }
  })), !hasNote ? null : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Note__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: notePrompt,
    value: note,
    setValue: setNote,
    modalTitle: "".concat(title, ": ").concat(notePrompt)
  }));
};

var Present = function Present(_ref3) {
  var title = _ref3.title,
      value = _ref3.value,
      options = _ref3.options,
      note = _ref3.note;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Header, {
    as: "h4"
  }, title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Description, null, printValues(value, options)), note ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Extra, null, "Note: ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("em", null, note)) : null));
};

function printValues(value, options) {
  if (Array.isArray(value) && value.length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", null, value.map(function (val, idx) {
      var text = val;

      try {
        text = options.find(function (op) {
          return op.value === val;
        }).text;
      } catch (e) {}

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        key: "item-".concat(idx)
      }, text);
    }));
  } else if (value && !Array.isArray(value)) {
    return options.find(function (op) {
      return op.value === value;
    }).text;
  } else {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      style: {
        color: 'red'
      }
    }, "Not Entered");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_7__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_6__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_7__["branch"])(function (_ref4) {
  var present = _ref4.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_7__["renderComponent"])(Present)), // Wrap setvalue because it can be multiples
Object(recompose__WEBPACK_IMPORTED_MODULE_7__["mapProps"])(function (_ref5) {
  var options = _ref5.options,
      multiple = _ref5.multiple,
      value = _ref5.value,
      otherProps = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, ["options", "multiple", "value"]);

  var newVal;
  var newOptions = []; // dropdowns need a default state

  if (multiple) {
    newVal = Array.isArray(value) ? value : [];
    var optionvals = options.map(function (op) {
      return op.value;
    });
    var extraVals = newVal.filter(function (val) {
      return optionvals.indexOf(val) === -1;
    });
    newOptions = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(options).concat(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(extraVals.map(function (v) {
      return {
        text: v,
        value: v
      };
    })));
  } else {
    newVal = value || '';
    newOptions = options;
  }

  return Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    multiple: multiple,
    options: newOptions,
    value: newVal
  });
}))(DropDownQuestion));

/***/ }),

/***/ "./src/components/BDAMobile/questions/FloodBehavior.css":
/*!**************************************************************!*\
  !*** ./src/components/BDAMobile/questions/FloodBehavior.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./FloodBehavior.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/FloodBehavior.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./FloodBehavior.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/FloodBehavior.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./FloodBehavior.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/FloodBehavior.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/BDAMobile/questions/FloodBehavior.jsx":
/*!**************************************************************!*\
  !*** ./src/components/BDAMobile/questions/FloodBehavior.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _FloodBehavior_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FloodBehavior.css */ "./src/components/BDAMobile/questions/FloodBehavior.css");
/* harmony import */ var _FloodBehavior_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FloodBehavior_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");






var GRADIENT = ['green', 'yellow', 'orange', 'red'];

var FloodBehavior = function FloodBehavior(_ref) {
  var label = _ref.label,
      _ref$value = _ref.value,
      loc = _ref$value.location,
      behavior = _ref$value.behavior,
      setLoc = _ref.setLoc,
      setBehavior = _ref.setBehavior;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    basic: true,
    className: "floodBehavior"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h3"
  }, label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    fluid: true,
    toggle: true,
    className: 'behave ' + (behavior && behavior.length > 0 ? 'set' : '')
  }, ['Intact', 'Minor', 'Major', 'Blowout'].map(function (bText, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "behav".concat(idx),
      onClick: function onClick() {
        if (bText === 'Intact' || bText === 'Blowout') setLoc([]);
        setBehavior(bText);
      },
      active: behavior && behavior === bText,
      color: GRADIENT[idx]
    }, bText);
  })), !behavior || behavior === 'Intact' || behavior === 'Blowout' ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LocationGroup, {
    loc: loc,
    behavior: behavior,
    setLoc: setLoc
  }));
};

var LocationGroup = function LocationGroup(_ref2) {
  var loc = _ref2.loc,
      setLoc = _ref2.setLoc;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: '2em'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h4"
  }, "Location: (select all that apply)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    fluid: true,
    toggle: true
  }, ['Left', 'Center', 'Basal', 'Right'].map(function (bText, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "loca".concat(idx),
      size: "large",
      onClick: function onClick() {
        var newLoc = [];
        if (loc && Array.isArray(loc)) newLoc = loc.splice(0);
        if (newLoc.indexOf(bText) === -1) newLoc.push(bText);else newLoc.splice(newLoc.indexOf(bText), 1);
        setLoc(newLoc);
      },
      active: loc && loc.indexOf(bText) > -1
    }, bText);
  })));
};

var Present = function Present(_ref3) {
  var label = _ref3.label,
      _ref3$value = _ref3.value,
      loc = _ref3$value.location,
      behavior = _ref3$value.behavior;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
    as: "h4"
  }, label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, behavior || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    style: {
      color: 'red'
    }
  }, "Behavior Not Entered")), !behavior || behavior === 'Intact' || behavior === 'Blowout' ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, loc ? loc.join(', ') : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    style: {
      color: 'red'
    }
  }, "Location Not Entered"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxField"], // Wrap setvalue because it can be multiples
Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withHandlers"])({
  setLoc: function setLoc(_ref4) {
    var value = _ref4.value,
        setValue = _ref4.setValue;
    return function (newVal) {
      if (!value) setValue({
        behavior: null,
        location: newVal
      });else setValue(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, value, {
        location: newVal
      }));
    };
  },
  setBehavior: function setBehavior(_ref5) {
    var value = _ref5.value,
        setValue = _ref5.setValue;
    return function (newVal) {
      if (!value) setValue({
        behavior: newVal,
        location: null
      });else setValue(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, value, {
        behavior: newVal
      }));
    };
  }
}), Object(recompose__WEBPACK_IMPORTED_MODULE_3__["mapProps"])(function (props) {
  return Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    value: props.value ? props.value : {
      behavior: null,
      location: null
    }
  });
}), Object(recompose__WEBPACK_IMPORTED_MODULE_3__["branch"])(function (_ref6) {
  var present = _ref6.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_3__["renderComponent"])(Present)))(FloodBehavior));

/***/ }),

/***/ "./src/components/BDAMobile/questions/ImageListPicker.jsx":
/*!****************************************************************!*\
  !*** ./src/components/BDAMobile/questions/ImageListPicker.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Note */ "./src/components/BDAMobile/questions/Note.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _misc_Placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/Placeholder */ "./src/components/misc/Placeholder.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");







var ImageListPicker = function ImageListPicker(_ref) {
  var title = _ref.title,
      options = _ref.options,
      placeholder = _ref.placeholder,
      multiple = _ref.multiple,
      value = _ref.value,
      hasNote = _ref.hasNote,
      note = _ref.note,
      notePrompt = _ref.notePrompt,
      setValue = _ref.setValue,
      setNote = _ref.setNote;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h3"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
    selection: true
  }, options.map(function (op, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageListPickerItem, Object.assign({
      setValue: setValue,
      active: value && (multiple ? value.indexOf(op.value) > -1 : value === op.value),
      placeholder: placeholder,
      key: idx
    }, op));
  })), !hasNote ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Note__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: notePrompt,
    value: note,
    setValue: setNote,
    modalTitle: "".concat(title, ": ").concat(notePrompt)
  }));
};

var ImageListPickerItem = function ImageListPickerItem(_ref2) {
  var image = _ref2.image,
      text = _ref2.text,
      active = _ref2.active,
      value = _ref2.value,
      setValue = _ref2.setValue,
      subText = _ref2.subText,
      placeholder = _ref2.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
    active: active,
    onClick: function onClick() {
      return setValue(value);
    }
  }, placeholder ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Placeholder__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, placeholder, {
    minHeight: 200
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: image,
    width: 200
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, {
    as: "a"
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, subText)));
};

var Present = function Present(_ref3) {
  var title = _ref3.title,
      value = _ref3.value,
      options = _ref3.options,
      note = _ref3.note;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
    as: "h4"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Description, null, printValues(value, options)), note ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Extra, null, "Note: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, note)) : null));
};

function printValues(value, options) {
  console.log('VALUE', value);

  if (Array.isArray(value) && value.length > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, value.map(function (val, idx) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: "item-".concat(idx)
      }, options.find(function (op) {
        return op.value === val;
      }).label);
    }));
  } else if (value && !Array.isArray(value)) {
    return options.find(function (op) {
      return op.value === value;
    }).text;
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      style: {
        color: 'red'
      }
    }, "Not Entered");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxField"], // Wrap setvalue because it can be multiples
Object(recompose__WEBPACK_IMPORTED_MODULE_4__["withHandlers"])({
  setValue: function setValue(_ref4) {
    var value = _ref4.value,
        _setValue = _ref4.setValue,
        multiple = _ref4.multiple;
    return function (newVal) {
      if (!multiple) {
        _setValue(newVal);
      } else {
        var newValues = [];
        if (Array.isArray(value)) newValues = value.slice(0);
        if (newValues.indexOf(newVal) < 0) newValues.push(newVal);else newValues = newValues.splice(newValues.indexOf(newVal), 1);

        _setValue(newValues);
      }
    };
  }
}))(ImageListPicker));

/***/ }),

/***/ "./src/components/BDAMobile/questions/LocationPicker.jsx":
/*!***************************************************************!*\
  !*** ./src/components/BDAMobile/questions/LocationPicker.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _LocationPicker_style_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LocationPicker.style.json */ "./src/components/BDAMobile/questions/LocationPicker.style.json");
var _LocationPicker_style_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./LocationPicker.style.json */ "./src/components/BDAMobile/questions/LocationPicker.style.json", 1);
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_15__);

















var LocationPicker = function LocationPicker(_ref) {
  var title = _ref.title,
      loading = _ref.loading,
      message = _ref.message,
      error = _ref.error,
      viewport = _ref.viewport,
      mapboxApiAccessToken = _ref.mapboxApiAccessToken,
      onViewportChange = _ref.onViewportChange;
  var icon = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
    name: "circle notched",
    loading: true
  });
  if (!loading) icon = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
    name: error ? 'check times' : 'check circle'
  }); // console.log('RENDER', viewport)

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
    as: "h3"
  }, title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    columns: 2
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
    fluid: true,
    label: "Lat:",
    placeholder: "49.29949",
    value: viewport.latitude
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
    fluid: true,
    label: "Lng:",
    placeholder: "-123.34234",
    value: viewport.longitude
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: {
      height: 400
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Dimmer"], {
    active: loading
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Loader"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_10__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return loading ? null : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({
      height: height,
      width: width,
      mapStyle: _LocationPicker_style_json__WEBPACK_IMPORTED_MODULE_14__
    }, viewport, {
      onViewportChange: onViewportChange,
      mapboxApiAccessToken: mapboxApiAccessToken
    }), console.log('HERE', {
      loading: loading,
      height: height,
      width: width
    }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_9__["Marker"], {
      key: "marker-1",
      longitude: viewport.longitude,
      latitude: viewport.latitude,
      offsetLeft: -20,
      offsetTop: -10
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
      style: {
        color: '#FFFFFF',
        textShadow: '0px 0px 2px #000000'
      },
      name: "map marker alternate",
      size: "huge"
    })));
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
    positive: !loading && !error,
    negative: error,
    icon: true
  }, icon, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"].Content, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, error || message))));
};

var withGeolocation = function withGeolocation(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Geolocation, _React$Component);

      function Geolocation() {
        var _getPrototypeOf2;

        var _this;

        Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Geolocation);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Geolocation)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.state = {
          loading: true,
          message: 'Retrieving location data...'
        };
        return _this;
      }

      Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Geolocation, [{
        key: "componentWillMount",
        value: function () {
          var _componentWillMount = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          /*#__PURE__*/
          _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
            var _this2 = this;

            var geolocation, location;
            return _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    geolocation = navigator.geolocation;
                    _context.next = 3;
                    return new Promise(function (resolve) {
                      if (!geolocation) {
                        resolve({
                          state: {
                            error: 'Not Supported'
                          }
                        });
                      }

                      geolocation.getCurrentPosition(function (_ref3) {
                        var _ref3$coords = _ref3.coords,
                            latitude = _ref3$coords.latitude,
                            longitude = _ref3$coords.longitude;
                        resolve({
                          viewport: Object.assign({}, _this2.props.viewport, {
                            latitude: latitude,
                            longitude: longitude
                          }),
                          state: {
                            loading: false,
                            message: 'Retrieved Location Data'
                          }
                        });
                      }, function () {
                        resolve({
                          state: {
                            loading: false,
                            error: 'Error retrieving location data from device.'
                          }
                        });
                      });
                    });

                  case 3:
                    location = _context.sent;
                    // console.log('SETSTATE', { ...location })
                    if (location.viewport) this.props.onViewportChange(location.viewport);
                    this.setState(location.state);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentWillMount() {
            return _componentWillMount.apply(this, arguments);
          }

          return componentWillMount;
        }()
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(WrappedComponent, Object.assign({}, this.props, this.state));
        }
      }]);

      return Geolocation;
    }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)
  );
};

var Present = function Present(_ref4) {
  var title = _ref4.title,
      value = _ref4.value;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Item"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Item"].Header, {
    as: "h4"
  }, title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Item"].Description, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("code", null, JSON.stringify(value, null, 2))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_13__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_12__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_13__["withHandlers"])({
  onViewportChange: function onViewportChange(_ref5) {
    var value = _ref5.value,
        setValue = _ref5.setValue;
    return function (newVal) {
      return setValue(newVal);
    };
  }
}), Object(recompose__WEBPACK_IMPORTED_MODULE_13__["mapProps"])(function (props) {
  return Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    viewport: props.value || {
      latitude: 49.29949,
      longitude: -123.1528795,
      zoom: 17
    }
  });
}), Object(recompose__WEBPACK_IMPORTED_MODULE_13__["branch"])(function (_ref6) {
  var present = _ref6.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_13__["renderComponent"])(Present)), withGeolocation)(LocationPicker));

/***/ }),

/***/ "./src/components/BDAMobile/questions/LocationPicker.style.json":
/*!**********************************************************************!*\
  !*** ./src/components/BDAMobile/questions/LocationPicker.style.json ***!
  \**********************************************************************/
/*! exports provided: version, name, metadata, center, zoom, bearing, pitch, sources, sprite, glyphs, layers, default */
/***/ (function(module) {

module.exports = {"version":8,"name":"Satellite","metadata":{"mapbox:autocomposite":true,"mapbox:type":"default"},"center":[-118.4106,33.750013],"zoom":13,"bearing":0,"pitch":0,"sources":{"mapbox":{"url":"mapbox://mapbox.satellite","type":"raster","tileSize":256}},"sprite":"mapbox://sprites/raychaser/cjdujpc125asd2snqe3zpayef","glyphs":"mapbox://fonts/raychaser/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","paint":{"background-color":"rgb(4,7,14)"}},{"id":"satellite","type":"raster","source":"mapbox","source-layer":"mapbox_satellite_full","paint":{"raster-opacity":1}}]};

/***/ }),

/***/ "./src/components/BDAMobile/questions/Note.css":
/*!*****************************************************!*\
  !*** ./src/components/BDAMobile/questions/Note.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Note.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/Note.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Note.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/Note.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Note.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/Note.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/BDAMobile/questions/Note.jsx":
/*!*****************************************************!*\
  !*** ./src/components/BDAMobile/questions/Note.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _Note_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Note.css */ "./src/components/BDAMobile/questions/Note.css");
/* harmony import */ var _Note_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Note_css__WEBPACK_IMPORTED_MODULE_3__);





var Note = function Note(_ref) {
  var name = _ref.name,
      value = _ref.value,
      open = _ref.open,
      setOpen = _ref.setOpen,
      setValue = _ref.setValue,
      setTempVal = _ref.setTempVal,
      label = _ref.label,
      placeholder = _ref.placeholder,
      modalTitle = _ref.modalTitle,
      modalDescription = _ref.modalDescription;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Trigger, {
    label: label,
    value: value,
    onClick: function onClick() {
      return setOpen(true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Confirm"], {
    header: modalTitle,
    open: open,
    onCancel: function onCancel() {
      return setOpen(false);
    },
    onConfirm: setValue,
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      basic: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, modalDescription), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["TextArea"], {
      name: name,
      placeholder: placeholder,
      rows: 10,
      defaultValue: value,
      onChange: setTempVal
    })))
  }));
};

Note.defaultProps = {
  name: 'NOTES',
  label: 'Add a note...',
  modalTtle: 'Add a note:'
};

var Trigger = function Trigger(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      onClick = _ref2.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    className: "notesMessage",
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil"
  }), label), value && value.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "notesVal"
  }, getShortString(value, 66)) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withStateHandlers"])({
  tempVal: '',
  // The value as it's changing
  open: false
}, {
  toggleOpen: function toggleOpen(_ref3) {
    var open = _ref3.open;
    return {
      open: !open
    };
  },
  setOpen: function setOpen() {
    return function (open) {
      return {
        open: open
      };
    };
  },
  setTempVal: function setTempVal() {
    return function (e, _ref4) {
      var value = _ref4.value;
      return {
        tempVal: value
      };
    };
  },
  setValue: function setValue(_ref5, _ref6) {
    var tempVal = _ref5.tempVal;
    var _setValue = _ref6.setValue;
    return function () {
      _setValue(tempVal); // this goes to redux


      return {
        open: false
      };
    };
  }
}))(Note));
/**
 * Helper function to truncate a string
 */

function getShortString(theStr, len) {
  return theStr.length > len ? theStr.substring(0, len) + '...' : theStr;
}

/***/ }),

/***/ "./src/components/BDAMobile/questions/PercentSliders/Handle.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/BDAMobile/questions/PercentSliders/Handle.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// *******************************************************
// HANDLE COMPONENT
// *******************************************************
var Handle = function Handle(_ref) {
  var disabled = _ref.disabled,
      _ref$domain = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref.domain, 2),
      min = _ref$domain[0],
      max = _ref$domain[1],
      _ref$handle = _ref.handle,
      id = _ref$handle.id,
      value = _ref$handle.value,
      percent = _ref$handle.percent,
      getHandleProps = _ref.getHandleProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({
    className: "sliderHandle".concat(disabled ? ' disabled' : ''),
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    style: {
      left: "".concat(percent, "%")
    }
  }, getHandleProps(id), {
    onMouseDown: disabled ? null : getHandleProps(id).onMouseDown,
    onTouchStart: disabled ? null : getHandleProps(id).onTouchStart
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Handle);

/***/ }),

/***/ "./src/components/BDAMobile/questions/PercentSliders/PercentSlider.css":
/*!*****************************************************************************!*\
  !*** ./src/components/BDAMobile/questions/PercentSliders/PercentSlider.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/src??postcss!./PercentSlider.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/PercentSliders/PercentSlider.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/src??postcss!./PercentSlider.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/PercentSliders/PercentSlider.css", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/src??postcss!./PercentSlider.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/questions/PercentSliders/PercentSlider.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/BDAMobile/questions/PercentSliders/PercentSliders.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/BDAMobile/questions/PercentSliders/PercentSliders.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_compound_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-compound-slider */ "./node_modules/react-compound-slider/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../redux/withRedux */ "./src/redux/withRedux.js");
/* harmony import */ var _Track__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Track */ "./src/components/BDAMobile/questions/PercentSliders/Track.jsx");
/* harmony import */ var _Tick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tick */ "./src/components/BDAMobile/questions/PercentSliders/Tick.jsx");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Handle */ "./src/components/BDAMobile/questions/PercentSliders/Handle.jsx");
/* harmony import */ var _PercentSlider_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PercentSlider.css */ "./src/components/BDAMobile/questions/PercentSliders/PercentSlider.css");
/* harmony import */ var _PercentSlider_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_PercentSlider_css__WEBPACK_IMPORTED_MODULE_9__);










var STEP = 5;

var PercentSliders = function PercentSliders(_ref) {
  var title = _ref.title,
      mustAddUp = _ref.mustAddUp,
      options = _ref.options,
      _onUpdate = _ref.onUpdate,
      onChange = _ref.onChange,
      sliderValues = _ref.sliderValues;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h3"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    basic: true
  }, mustAddUp ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "(Must add to 100%)")) : null, options.map(function (_ref2, idx) {
    var label = _ref2.label,
        name = _ref2.name;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomSlider, {
      name: name,
      label: label,
      onUpdate: function onUpdate(values) {
        return _onUpdate({
          name: name,
          values: values
        });
      } // onChange={(values) => onUpdate({  })}
      ,
      key: idx,
      step: STEP,
      domain: [0, 100 + STEP],
      value: sliderValues[name] ? sliderValues[name] : [0, 100 + STEP]
    });
  })));
};

var sliderStyle = {
  position: 'relative',
  width: '100%'
};

var CustomSlider = function CustomSlider(_ref3) {
  var label = _ref3.label,
      name = _ref3.name,
      step = _ref3.step,
      domain = _ref3.domain,
      value = _ref3.value,
      onUpdate = _ref3.onUpdate,
      onChange = _ref3.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_slider__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    className: "sliderWrapper",
    step: step,
    mode: 2,
    domain: domain,
    rootStyle: sliderStyle,
    onUpdate: onUpdate,
    onChange: onChange,
    values: value
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_slider__WEBPACK_IMPORTED_MODULE_3__["Rail"], null, function (_ref4) {
    var getRailProps = _ref4.getRailProps;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
      className: "sliderRail"
    }, getRailProps()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      as: "h4"
    }, "".concat(label, ": ").concat(value[0], "%")));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_slider__WEBPACK_IMPORTED_MODULE_3__["Handles"], null, function (_ref5) {
    var handles = _ref5.handles,
        getHandleProps = _ref5.getHandleProps;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-handles"
    }, handles.map(function (handle, idx) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        disabled: idx !== 0,
        key: handle.id,
        handle: handle,
        domain: domain,
        getHandleProps: getHandleProps
      });
    }));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_slider__WEBPACK_IMPORTED_MODULE_3__["Tracks"], null, function (_ref6) {
    var tracks = _ref6.tracks,
        getTrackProps = _ref6.getTrackProps;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-tracks"
    }, tracks.map(function (_ref7, idx) {
      var id = _ref7.id,
          source = _ref7.source,
          target = _ref7.target;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Track__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: id,
        trackNum: idx,
        step: step,
        source: source,
        target: target,
        getTrackProps: getTrackProps
      });
    }));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_slider__WEBPACK_IMPORTED_MODULE_3__["Ticks"], {
    values: tickVals
  }, function (_ref8) {
    var ticks = _ref8.ticks;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-ticks"
    }, ticks.map(function (tick) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tick__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: tick.id,
        tick: tick,
        count: ticks.length
      });
    }));
  }));
};

var tickVals = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
/**
 * This is where the meat of the function lives
 * @param {*} param0
 */

var handleValues = function handleValues(_ref9, _ref10) {
  var sliderValues = _ref9.sliderValues;
  var setValue = _ref10.setValue;
  return function (_ref11) {
    var name = _ref11.name,
        values = _ref11.values;
    // Add everything together and figure out how much we have left
    var max = Object.keys(sliderValues).map(function (slKey) {
      return sliderValues[slKey][0];
    }).reduce(function (acc, x) {
      return acc + x;
    }, 0);
    var newLevel = 100 - max + STEP;
    var maxNotThis = Object.keys(sliderValues).filter(function (x) {
      return x !== name;
    }).map(function (slKey) {
      return sliderValues[slKey][0];
    }).reduce(function (acc, x) {
      return acc + x;
    }, 0);
    var newLimiterThis = 100 - maxNotThis + STEP;

    var newSliderValues = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(sliderValues);

    if (!newSliderValues[name]) newSliderValues[name] = values;
    Object.keys(newSliderValues).forEach(function (objKey) {
      if (name !== objKey) {
        if (newLevel > newSliderValues[objKey][0] + STEP) newSliderValues[objKey][1] = newLevel;else {
          newSliderValues[objKey][1] = newSliderValues[objKey][0] + STEP;
        }
      } else if (name === objKey) {
        newSliderValues[objKey] = [values[0], newLimiterThis];
      } // if (objKey === 'OVER_TOP') console.log('WEIRD:', newSliderValues[objKey], newLevel)

    }); // console.log('PROPS', name, values, newSliderValues[name])

    setValue(Object.keys(newSliderValues).reduce(function (acc, key) {
      acc[key] = newSliderValues[key][0];
      return acc;
    }, {}));
    return {
      sliderValues: newSliderValues
    };
  };
};

var Present = function Present(_ref12) {
  var title = _ref12.title,
      value = _ref12.value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
    as: "h4"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Description, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, JSON.stringify(value, null, 2))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_4__["branch"])(function (_ref13) {
  var present = _ref13.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_4__["renderComponent"])(Present)), Object(recompose__WEBPACK_IMPORTED_MODULE_4__["withStateHandlers"])(function (_ref14) {
  var options = _ref14.options;
  return {
    sliderValues: options.reduce(function (acc, val) {
      acc[val.name] = [0, 100 + STEP];
      return acc;
    }, {})
  };
}, {
  onUpdate: handleValues // onChange: () => ({ values, name }) => ({ values: Object.assign({}, values, { [name]: values }) })

}))(PercentSliders));

/***/ }),

/***/ "./src/components/BDAMobile/questions/PercentSliders/Tick.jsx":
/*!********************************************************************!*\
  !*** ./src/components/BDAMobile/questions/PercentSliders/Tick.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// *******************************************************
// TICK COMPONENT
// *******************************************************
var Tick = function Tick(_ref) {
  var tick = _ref.tick,
      count = _ref.count,
      format = _ref.format;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sliderTick",
    style: {
      left: "".concat(tick.percent, "%")
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sliderTickNum",
    style: {
      marginLeft: "".concat(-(100 / count) / 2, "%"),
      width: "".concat(100 / count, "%"),
      left: "".concat(tick.percent, "%")
    }
  }, format(tick.value)));
};

Tick.defaultProps = {
  format: function format(d) {
    return d;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Tick);

/***/ }),

/***/ "./src/components/BDAMobile/questions/PercentSliders/Track.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/BDAMobile/questions/PercentSliders/Track.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Track = function Track(_ref) {
  var trackNum = _ref.trackNum,
      step = _ref.step,
      source = _ref.source,
      target = _ref.target,
      getTrackProps = _ref.getTrackProps;
  var classes = ['sliderTrack'];
  var dynamicStyle = {
    left: "".concat(source.percent, "%"),
    width: "".concat(target.percent - source.percent, "%")
  };

  if (trackNum === 2) {
    classes.push('limiter'); // console.log('YOWZA', target.percent, source.percent)

    if (target.percent < 100 + step) {
      dynamicStyle.left = "".concat(source.percent - step, "%");
      dynamicStyle.width = "".concat(target.percent - source.percent + step, "%");
    }
  } else if (trackNum === 0) {
    classes.push('progress');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.join(' '),
    style: dynamicStyle // {...getTrackProps()}

  });
};

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ }),

/***/ "./src/components/BDAMobile/questions/RadioQuestion.jsx":
/*!**************************************************************!*\
  !*** ./src/components/BDAMobile/questions/RadioQuestion.jsx ***!
  \**************************************************************/
/*! exports provided: RadioQuestion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioQuestion", function() { return RadioQuestion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Note */ "./src/components/BDAMobile/questions/Note.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");





var RadioQuestion = function RadioQuestion(_ref) {
  var title = _ref.title,
      name = _ref.name,
      options = _ref.options,
      value = _ref.value,
      hasNote = _ref.hasNote,
      note = _ref.note,
      notePrompt = _ref.notePrompt,
      setValue = _ref.setValue,
      setNote = _ref.setNote;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    basic: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, title), options.map(function (_ref2, idx) {
    var label = _ref2.label,
        rVal = _ref2.value;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      label: label,
      name: name,
      value: rVal,
      defaultChecked: value && rVal === value,
      onChange: function onChange() {
        return setValue(rVal);
      }
    }));
  }), !hasNote ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Note__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: notePrompt,
    value: note,
    setValue: setNote,
    modalTitle: "".concat(title, ": ").concat(notePrompt)
  }));
};

var Present = function Present(_ref3) {
  var title = _ref3.title,
      value = _ref3.value,
      options = _ref3.options,
      note = _ref3.note;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Header, {
    as: "h4"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Description, null, value ? options.find(function (op) {
    return op.value === value;
  }).label : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      color: 'red'
    }
  }, "Not Entered")), note ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Extra, null, "Note: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, note)) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_4__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_3__["branch"])(function (_ref4) {
  var present = _ref4.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_3__["renderComponent"])(Present)))(RadioQuestion));

/***/ }),

/***/ "./src/components/BDAMobile/questions/TextField.jsx":
/*!**********************************************************!*\
  !*** ./src/components/BDAMobile/questions/TextField.jsx ***!
  \**********************************************************/
/*! exports provided: TextField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");




var TextField = function TextField(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      type = _ref.type,
      value = _ref.value,
      setValue = _ref.setValue;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    basic: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3"
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: type,
    defaultValue: value,
    placeholder: placeholder,
    onChange: function onChange(e, _ref2) {
      var newval = _ref2.value;
      return setValue(newval);
    }
  })));
};

var Present = function Present(_ref3) {
  var label = _ref3.label,
      value = _ref3.value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Header, {
    as: "h4"
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Description, null, value || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      color: 'red'
    }
  }, "Not Entered"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(_redux_withRedux__WEBPACK_IMPORTED_MODULE_3__["withReduxField"], Object(recompose__WEBPACK_IMPORTED_MODULE_2__["branch"])(function (_ref4) {
  var present = _ref4.present;
  return !!present;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_2__["renderComponent"])(Present)))(TextField));

/***/ }),

/***/ "./src/components/BDAMobile/questions/questions.fixture.js":
/*!*****************************************************************!*\
  !*** ./src/components/BDAMobile/questions/questions.fixture.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _RadioQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RadioQuestion */ "./src/components/BDAMobile/questions/RadioQuestion.jsx");
/* harmony import */ var _Checkboxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkboxes */ "./src/components/BDAMobile/questions/Checkboxes.jsx");
/* harmony import */ var _DropDownQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownQuestion */ "./src/components/BDAMobile/questions/DropDownQuestion.jsx");
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextField */ "./src/components/BDAMobile/questions/TextField.jsx");
/* harmony import */ var _PercentSliders_PercentSliders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PercentSliders/PercentSliders */ "./src/components/BDAMobile/questions/PercentSliders/PercentSliders.jsx");
/* harmony import */ var _FloodBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FloodBehavior */ "./src/components/BDAMobile/questions/FloodBehavior.jsx");
/* harmony import */ var _ImageListPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageListPicker */ "./src/components/BDAMobile/questions/ImageListPicker.jsx");
/* harmony import */ var _CardListPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CardListPicker */ "./src/components/BDAMobile/questions/CardListPicker.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _LocationPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LocationPicker */ "./src/components/BDAMobile/questions/LocationPicker.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../config */ "./src/config.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Note */ "./src/components/BDAMobile/questions/Note.jsx");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DatePicker */ "./src/components/BDAMobile/questions/DatePicker.jsx");

















function fillMurray(size) {
  var rand = size + lodash__WEBPACK_IMPORTED_MODULE_10___default.a.random(-10, 10);

  return "https://www.fillmurray.com/".concat(rand, "/").concat(rand);
} // Just set us up with a dummy redux state so we can test things


var reduxHelper = function reduxHelper(valObj) {
  return {
    editing: {
      guid: 'GUID_222',
      edit: true
    },
    structures: {
      'GUID_222': {
        fields: {
          TESTNAME: valObj,
          OTHERNAME: {
            value: 23,
            section: 3,
            notes: 'stupid note'
          }
        }
      }
    }
  };
};

var devInitFixtures = [{
  name: 'Radio',
  component: _RadioQuestion__WEBPACK_IMPORTED_MODULE_2__["default"],
  reduxState: reduxHelper({
    value: 3,
    section: 0,
    note: 'just some initial thoughts'
  }),
  props: {
    title: 'My Question:',
    name: 'TESTNAME',
    hasNote: true,
    notePrompt: 'Tell us how you feel about that...',
    section: 23,
    options: [{
      label: 'Option 1',
      value: 1
    }, {
      label: 'Option 2',
      value: 2,
      isDefault: true
    }, {
      label: 'Option 3',
      value: 3
    }, {
      label: 'Option 4',
      value: 4
    }]
  }
}, {
  name: 'Checkboxes',
  component: _Checkboxes__WEBPACK_IMPORTED_MODULE_3__["default"],
  props: {
    title: 'My Question:',
    name: 'TESTNAME',
    hasNote: true,
    notePrompt: 'Tell us how you feel about that...',
    section: 23,
    options: [{
      label: 'Option 1',
      value: 1
    }, {
      label: 'Option 2',
      value: 2
    }, {
      label: 'Option 3',
      value: 3
    }, {
      label: 'Option 4',
      value: 4
    }]
  }
}, {
  name: 'Dropdown Question',
  component: _DropDownQuestion__WEBPACK_IMPORTED_MODULE_4__["default"],
  props: {
    title: 'Question Title:',
    name: 'TESTNAME',
    hasNote: true,
    notePrompt: 'Tell us how you feel about that...',
    fluid: true,
    allowAdditions: false,
    selection: true,
    search: true,
    multiple: false,
    placeholder: 'Some placeholder...',
    options: [{
      text: 'Option 1',
      value: 'OPTION1'
    }, {
      text: 'Option 2',
      value: 'OPTION2'
    }, {
      text: 'Option 3',
      value: 'OPTION3'
    }, {
      text: 'Option 4',
      value: 'OPTION4'
    }]
  }
}, {
  name: 'Text Field',
  component: _TextField__WEBPACK_IMPORTED_MODULE_5__["default"],
  wrapForm: true,
  reduxState: reduxHelper(),
  props: {
    label: 'My Label',
    name: 'TESTNAME',
    placeholder: 'Some placeholder...'
  }
}, {
  name: 'Date Picker',
  component: _DatePicker__WEBPACK_IMPORTED_MODULE_15__["DatePicker"],
  props: {
    title: 'My Title date',
    name: 'TESTNAME',
    placeholder: 'Please choose a date...'
  }
}, {
  name: 'Time Picker',
  component: _DatePicker__WEBPACK_IMPORTED_MODULE_15__["TimePicker"],
  props: {
    title: 'My Title',
    name: 'TESTNAME',
    placeholder: 'Please choose a time...'
  }
}, {
  name: 'DateTimePicker',
  component: _DatePicker__WEBPACK_IMPORTED_MODULE_15__["DateTimePicker"],
  wrapForm: true,
  reduxState: reduxHelper(),
  props: {
    title: 'My Title',
    name: 'TESTNAME',
    placeholder: 'Please choose a datetime...'
  }
}, {
  name: 'DateRangePicker',
  component: _DatePicker__WEBPACK_IMPORTED_MODULE_15__["DateRangePicker"],
  props: {
    title: 'My Title',
    name: 'TESTNAME',
    placeholder: 'Please choose a date range...'
  }
}, {
  name: 'Notes',
  component: Object(_redux_withRedux__WEBPACK_IMPORTED_MODULE_14__["withReduxField"])(_Note__WEBPACK_IMPORTED_MODULE_13__["default"]),
  props: {
    label: 'Add note...',
    name: 'TESTNAME',
    modalTitle: 'More notes about...',
    modalDescription: 'Some extra notes. Tell me how you feel.',
    placeholder: 'Some placeholder...'
  }
}, {
  name: 'ImageListPicker',
  component: _ImageListPicker__WEBPACK_IMPORTED_MODULE_8__["default"],
  props: {
    title: 'My Question',
    name: 'TESTNAME',
    multiple: true,
    hasNotes: true,
    options: [1, 2, 3, 4, 5].map(function (it) {
      return {
        image: fillMurray(100),
        value: "Option".concat(it),
        text: "Option ".concat(it),
        subText: "Option ".concat(it, " is a thing")
      };
    })
  }
}, {
  name: 'Flood Behavior',
  component: _FloodBehavior__WEBPACK_IMPORTED_MODULE_7__["default"],
  props: {
    label: 'Flood Behavior',
    name: 'TESTNAME'
  }
}, {
  name: 'CardListPicker',
  component: _CardListPicker__WEBPACK_IMPORTED_MODULE_9__["default"],
  props: {
    title: 'My Question',
    name: 'TESTNAME',
    multiple: true,
    hasNotes: true,
    options: [1, 2, 3, 4, 5].map(function (it) {
      return {
        value: "Option".concat(it),
        text: "Option ".concat(it),
        image: fillMurray(300),
        subText: "Option ".concat(it, " is a thing")
      };
    })
  }
}, {
  name: 'Percent Slider',
  component: _PercentSliders_PercentSliders__WEBPACK_IMPORTED_MODULE_6__["default"],
  props: {
    title: 'Low flow behaviour',
    name: 'TESTNAME',
    options: [{
      label: 'Flow Over Top',
      name: 'OVER_TOP'
    }, {
      label: 'Basal Flow',
      name: 'BASAL'
    }, {
      label: 'Throughflow',
      name: 'THROUGHFLOW'
    }, {
      label: 'Flow Around Left',
      name: 'AROUND_LEFT'
    }, {
      label: 'Flow Around Right',
      name: 'AROUND_RIGHT'
    }]
  }
}, {
  name: 'Location Picker',
  component: _LocationPicker__WEBPACK_IMPORTED_MODULE_11__["default"],
  props: {
    title: 'My Question:',
    name: 'TESTNAME',
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_12__["mapBoxToken"]
  }
}];
var devFixtures = devInitFixtures.reduce(function (acc, fix) {
  acc.push(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    wrapForm: true,
    reduxState: reduxHelper()
  }, fix, {
    props: Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      present: false
    }, fix.props)
  }));
  acc.push(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    wrapForm: true,
    reduxState: reduxHelper()
  }, fix, {
    name: fix.name + ' (Present)',
    props: Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      present: true
    }, fix.props)
  }));
  return acc;
}, []);

var finalFixes = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_12__["default"].env === 'development' ? devFixtures : []).map(function (fix) {
  fix.component.displayName = "BDA Mobile App/Questions/".concat(fix.name);
  return fix;
});

/* harmony default export */ __webpack_exports__["default"] = (finalFixes);

/***/ }),

/***/ "./src/components/BDAMobile/sections/DesignInfo.jsx":
/*!**********************************************************!*\
  !*** ./src/components/BDAMobile/sections/DesignInfo.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions/RadioQuestion */ "./src/components/BDAMobile/questions/RadioQuestion.jsx");
/* harmony import */ var _questions_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions/TextField */ "./src/components/BDAMobile/questions/TextField.jsx");
/* harmony import */ var _questions_DropDownQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions/DropDownQuestion */ "./src/components/BDAMobile/questions/DropDownQuestion.jsx");
/* harmony import */ var _questions_DatePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../questions/DatePicker */ "./src/components/BDAMobile/questions/DatePicker.jsx");



 // import { Segment } from 'semantic-ui-react'



var DesignInfo = function DesignInfo(_ref) {
  var id = _ref.id,
      present = _ref.present;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "designerName",
    present: present,
    label: "Designer Name(s):",
    placeholder: "Susan Andersen"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "structureID",
    present: present,
    label: "Structure ID:",
    placeholder: "COMPLEX_323123 ... 1233"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_DatePicker__WEBPACK_IMPORTED_MODULE_4__["DateTimePicker"], {
    name: "observationDate",
    present: present,
    title: "Observation Date:"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "designVideo",
    present: present,
    label: "Design Video:",
    type: "url",
    placeholder: "https://youtu.be/SB-qEYVdvXA"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_DropDownQuestion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "designFlowCondition",
    present: present,
    title: 'Design Flow Conditions',
    fluid: true,
    selection: true,
    options: [{
      text: 'Baseflow',
      value: 'BASEFLOW'
    }, {
      text: 'Spring runoff',
      value: 'SPRING_RUNOFF'
    }, {
      text: 'Flood',
      value: 'FLOOD'
    }, {
      text: 'Post Flood',
      value: 'POST_FLOOW'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "designType",
    present: present,
    title: 'Design Type',
    options: [{
      label: 'Beaver Dam Analogue',
      value: 'BDA'
    }, {
      label: 'Post Assisted Log Structure',
      value: 'PALS'
    }, {
      label: 'Unanchored/Pinned Wood Addition',
      value: 'UNANCHORED_WOOD'
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignInfo);

/***/ }),

/***/ "./src/components/BDAMobile/sections/ExistingFeatures.jsx":
/*!****************************************************************!*\
  !*** ./src/components/BDAMobile/sections/ExistingFeatures.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questions_CardListPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions/CardListPicker */ "./src/components/BDAMobile/questions/CardListPicker.jsx");



var ExistingFeatures = function ExistingFeatures(_ref) {
  var id = _ref.id,
      present = _ref.present;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_CardListPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Expected Geomorphic Units at Structure Location",
    name: "expectedUnits",
    present: present,
    hasNote: true,
    allowMultiple: true,
    options: [{
      image: '/images/gut/planar_plane.png',
      value: 'Planar',
      text: 'Planar'
    }, {
      image: '/images/gut/convexity_mound.png',
      value: 'Convexity',
      text: 'Convexity (bar)'
    }, {
      image: '/images/gut/convexity_saddle.png',
      value: 'Saddle',
      text: 'Saddle (riffle)'
    }, {
      image: '/images/gut/concavity_bowl.png',
      value: 'Concavity',
      text: 'Concavity (true pool)'
    }, {
      image: '/images/gut/concavity_trough.png',
      value: 'Trough',
      text: 'Trough (shallow thalweg or chute)'
    }, {
      image: '/images/gut/planar_wall.png',
      value: 'WallEdge',
      text: 'Wall: Bank'
    }, {
      image: '/images/gut/planar_wall.png',
      value: 'WallBank',
      text: 'Wall: Edge'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_CardListPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Structural Elements at Structure Location",
    name: "elementsAtLocation",
    present: present,
    hasNote: true,
    allowMultiple: true,
    placeholder: {
      icon: 'image outline',
      aspect: 1
    },
    options: [{
      value: "Roots",
      text: "Roots",
      subText: "some explanation"
    }, {
      value: "Live Trees/Shrubs",
      text: "Live Trees/Shrubs",
      subText: "some explanation"
    }, {
      value: "Aquatic Vegetation",
      text: "Aquatic Vegetation",
      subText: "some explanation"
    }, {
      value: "Boulder(s)",
      text: "Boulder(s)",
      subText: "some explanation"
    }, {
      value: "Woody Debris",
      text: "Woody Debris",
      subText: "some explanation"
    }, {
      value: "Wall: Bank",
      text: "Wall: Bank",
      subText: "some explanation"
    }, {
      value: "Wall: Bar Edge",
      text: "Wall: Bar Edge",
      subText: "some explanation"
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ExistingFeatures);

/***/ }),

/***/ "./src/components/BDAMobile/sections/GeomorphicResponses.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/BDAMobile/sections/GeomorphicResponses.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questions_CardListPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions/CardListPicker */ "./src/components/BDAMobile/questions/CardListPicker.jsx");
/* harmony import */ var _questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions/RadioQuestion */ "./src/components/BDAMobile/questions/RadioQuestion.jsx");




var GeomorphicResponses = function GeomorphicResponses(_ref) {
  var id = _ref.id,
      present = _ref.present;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Pond Capacity (First Year Floods)",
    name: "pondCapacityFirstYear",
    present: present,
    options: [{
      label: 'Clean',
      value: 'CLEAN'
    }, {
      label: 'Minor Sedimentation',
      value: 'MINOR'
    }, {
      label: 'Partial Filling (up to 50% of original pond capacity)',
      value: 'PARTIAL'
    }, {
      label: 'Major Filling (up to 50% of original pond capacity)',
      value: 'MAJOR'
    }, {
      label: 'Full Sediment',
      value: 'FULL'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Pond Capacity (If Big Floods)",
    name: "pondCapacityBigFlood",
    present: present,
    options: [{
      label: 'Clean',
      value: 'CLEAN'
    }, {
      label: 'Minor Sedimentation',
      value: 'MINOR'
    }, {
      label: 'Partial Filling (up to 50% of original pond capacity)',
      value: 'PARTIAL'
    }, {
      label: 'Major Filling (up to 50% of original pond capacity)',
      value: 'MAJOR'
    }, {
      label: 'Full Sediment',
      value: 'FULL'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_CardListPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Expected Dominant Substrate Upstream of Structure",
    name: "upstreamSubstrate",
    present: present,
    options: [{
      image: '/images/substrate/fines.png',
      value: 'Fines',
      text: 'Fines'
    }, {
      image: '/images/substrate/sand.png',
      value: 'Sands',
      text: 'Sands'
    }, {
      image: '/images/substrate/gravel.png',
      value: 'Gravels',
      text: 'Gravels'
    }, {
      image: '/images/substrate/cobble.png',
      value: 'Cobble',
      text: 'Cobble'
    }, {
      image: '/images/substrate/food_cache.png',
      value: 'Food Cache & Fines',
      text: 'Food Cache & Fines'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_CardListPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Expected Dominant Substrate Downstream of Structure",
    name: "downstreamSubstrate",
    present: present,
    options: [{
      image: '/images/substrate/fines.png',
      value: 'Fines',
      text: 'Fines'
    }, {
      image: '/images/substrate/sand.png',
      value: 'Sands',
      text: 'Sands'
    }, {
      image: '/images/substrate/gravel.png',
      value: 'Gravels',
      text: 'Gravels'
    }, {
      image: '/images/substrate/cobble.png',
      value: 'Cobble',
      text: 'Cobble'
    }, {
      image: '/images/substrate/food_cache.png',
      value: 'Food Cache & Fines',
      text: 'Food Cache & Fines'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_CardListPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Expected Geomorphic Units at Structure Location",
    name: "expectedUnitsAtStruct",
    present: present,
    hasNotes: true,
    options: [{
      image: '/images/gut/planar_plane.png',
      value: 'Planar',
      text: 'Planar'
    }, {
      image: '/images/gut/convexity_mound.png',
      value: 'Convexity',
      text: 'Convexity (bar)'
    }, {
      image: '/images/gut/convexity_saddle.png',
      value: 'Saddle',
      text: 'Saddle (riffle)'
    }, {
      image: '/images/gut/concavity_bowl.png',
      value: 'Concavity',
      text: 'Concavity (true pool)'
    }, {
      image: '/images/gut/concavity_trough.png',
      value: 'Trough',
      text: 'Trough (shallow thalweg or chute)'
    }, {
      image: '/images/gut/planar_wall.png',
      value: 'WallEdge',
      text: 'Wall: Bank'
    }, {
      image: '/images/gut/planar_wall.png',
      value: 'WallBank',
      text: 'Wall: Edge'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Expected Structural Elements at Structure Location",
    name: "expectedElementsAtStruct",
    present: present,
    hasNotes: true,
    options: [{
      label: 'Roots',
      value: 'CLEAN'
    }, {
      label: 'Live Trees / Shrubs',
      value: 'MINOR'
    }, {
      label: 'Aquatic Vegetation',
      value: 'PARTIAL'
    }, {
      label: 'Boulder(s)',
      value: 'MAJOR'
    }, {
      label: 'Woody Debris',
      value: 'FULL'
    }, {
      label: 'Wall: Bank',
      value: 'FULL'
    }, {
      label: 'Wall: Bar Edge',
      value: 'FULL'
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GeomorphicResponses);

/***/ }),

/***/ "./src/components/BDAMobile/sections/HydraulicResponses.jsx":
/*!******************************************************************!*\
  !*** ./src/components/BDAMobile/sections/HydraulicResponses.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questions_PercentSliders_PercentSliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions/PercentSliders/PercentSliders */ "./src/components/BDAMobile/questions/PercentSliders/PercentSliders.jsx");
/* harmony import */ var _questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions/RadioQuestion */ "./src/components/BDAMobile/questions/RadioQuestion.jsx");
/* harmony import */ var _questions_Checkboxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions/Checkboxes */ "./src/components/BDAMobile/questions/Checkboxes.jsx");
/* harmony import */ var _questions_FloodBehavior__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../questions/FloodBehavior */ "./src/components/BDAMobile/questions/FloodBehavior.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");







var HydraulicResponses = function HydraulicResponses(_ref) {
  var id = _ref.id,
      present = _ref.present;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    as: "h3"
  }, "Low Flow Behavior"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_PercentSliders_PercentSliders__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Channel Spanners:",
    mustAddUp: true,
    name: "channelSpanners",
    present: present,
    options: [{
      label: 'Flow Over Top',
      name: 'OVER_TOP'
    }, {
      label: 'Basal Flow',
      name: 'BASAL'
    }, {
      label: 'Throughflow',
      name: 'THROUGHFLOW'
    }, {
      label: 'Flow Around Left',
      name: 'AROUND_LEFT'
    }, {
      label: 'Flow Around Right',
      name: 'AROUND_RIGHT'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_PercentSliders_PercentSliders__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Non-Channel Spanners:",
    mustAddUp: true,
    name: "nonChannelSpanners",
    present: present,
    options: [{
      label: 'Shunted Flow Left',
      name: 'SHUNT_LEFT'
    }, {
      label: 'Shunted Flow Right',
      name: 'SHUNT_RIGHT'
    }, {
      label: 'Flow Through (sieve)',
      name: 'THROUGH'
    }, {
      label: 'Flow Over Top',
      name: 'OVER'
    }, {
      label: 'Flow Under Bottom',
      name: 'UNDER'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_FloodBehavior__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Typical Flood Behavior",
    name: "TypicalFlood",
    present: present
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_FloodBehavior__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Big Flood Behavior",
    name: "BigFlood",
    present: present
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Estimated Upstream Zone of Hydraulic Influence",
    name: "upstreamHydraulicInfluence",
    present: present,
    options: [{
      label: '< 1 BFW',
      value: '1'
    }, {
      label: '1-2 BFW',
      value: '1-2'
    }, {
      label: '2-5 BFW',
      value: '2-5'
    }, {
      label: '5-10 BFW',
      value: '5-10'
    }, {
      label: '> 10 BFW',
      value: '10-INF'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Estimated Downstream Zone of Hydraulic Influence",
    name: "downstreamHydraulicInfluence",
    present: present,
    options: [{
      label: '< 1 BFW',
      value: '1'
    }, {
      label: '1-2 BFW',
      value: '1-2'
    }, {
      label: '2-5 BFW',
      value: '2-5'
    }, {
      label: '5-10 BFW',
      value: '5-10'
    }, {
      label: '> 10 BFW',
      value: '10-INF'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_Checkboxes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Side Channel Forced",
    name: "sideChannelForced",
    present: present,
    options: [{
      label: 'None',
      value: 'None'
    }, {
      label: 'Single Left',
      value: 'Single Left'
    }, {
      label: 'Multiple Left',
      value: 'Multiple Left'
    }, {
      label: 'Single Right',
      value: 'Single Right'
    }, {
      label: 'Multiple Right',
      value: 'Multiple Right'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Pond Extend",
    name: "pondExtend",
    present: present,
    options: [{
      label: 'Contained within bankfull channel',
      value: 'Contained'
    }, {
      label: 'Expanding out onto floodplain',
      value: 'Expanding'
    }, {
      label: 'Drained',
      value: 'Drained'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_Checkboxes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Floodplain Inundation",
    name: "floodplainInundation",
    present: present,
    options: [{
      label: 'During Extreme Floods River Left',
      value: 'EXTREME_LEFT'
    }, {
      label: 'During Extreme Floods River Right',
      value: 'EXTREME_RIGHT'
    }, {
      label: 'During Seasonal Floods River Left',
      value: 'SEASONAL_LEFT'
    }, {
      label: 'During Seasonal Floods River Right',
      value: 'SEASONAL_RIGHT'
    }, {
      label: 'Year Round Inundation River Left',
      value: 'ALLYEAR_LEFT'
    }, {
      label: 'Year Round Inundation River Right',
      value: 'ALLYEAR_RIGHT'
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HydraulicResponses);

/***/ }),

/***/ "./src/components/BDAMobile/sections/PositionAttrib.jsx":
/*!**************************************************************!*\
  !*** ./src/components/BDAMobile/sections/PositionAttrib.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questions_LocationPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions/LocationPicker */ "./src/components/BDAMobile/questions/LocationPicker.jsx");
/* harmony import */ var _questions_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions/TextField */ "./src/components/BDAMobile/questions/TextField.jsx");
/* harmony import */ var _questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions/RadioQuestion */ "./src/components/BDAMobile/questions/RadioQuestion.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.js");






var PositionAttrib = function PositionAttrib(_ref) {
  var id = _ref.id,
      present = _ref.present;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_LocationPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    present: present,
    name: "location",
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_4__["mapBoxToken"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "structureChannelLocation",
    present: present,
    title: "Structure Location Relative to Channel(s)",
    options: [{
      label: 'On Main Channel',
      value: 'MAIN_CHANNEL'
    }, {
      label: 'On Right Side Channel(s)',
      value: 'RIGHT_SIDE_CHANNEL'
    }, {
      label: 'On Left Side Channel(s)',
      value: 'LEFT_SIDE_CHANNEL'
    }, {
      label: 'On Right Floodplain',
      value: 'FLOODPLAIN_L'
    }, {
      label: 'On Left Floodplain',
      value: 'FLOODPLAIN_R'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "complex",
    present: present,
    label: "Complex:",
    placeholder: "COMPLEX_323123 ... 1233"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "complexExtended",
    present: present,
    options: [{
      label: 'Part of new dam complex',
      value: 'NEW_DAM_COMPLEX'
    }, {
      label: 'Expansion of existing dam complex',
      value: 'EXPANSION'
    }, {
      label: 'NA - Isolated Dam',
      value: 'NA_ISOLATED_DAM'
    }, {
      label: 'NA - Non-Dam',
      value: 'NA_NON_DAM'
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PositionAttrib);

/***/ }),

/***/ "./src/components/BDAMobile/sections/StructureDesign.jsx":
/*!***************************************************************!*\
  !*** ./src/components/BDAMobile/sections/StructureDesign.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _questions_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions/TextField */ "./src/components/BDAMobile/questions/TextField.jsx");
/* harmony import */ var _questions_DropDownQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions/DropDownQuestion */ "./src/components/BDAMobile/questions/DropDownQuestion.jsx");
/* harmony import */ var _questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions/RadioQuestion */ "./src/components/BDAMobile/questions/RadioQuestion.jsx");





var StructureDesign = function StructureDesign(_ref) {
  var id = _ref.id,
      present = _ref.present;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Structure Position",
    name: "structurePosition",
    present: present,
    options: [{
      label: 'River Right Margin Attached',
      value: 'RIVER_RIGHT_MARGIN_ATTACHED'
    }, {
      label: 'River Left Margin Attached',
      value: 'RIVER_LEFT_MARGIN_ATTACHED'
    }, {
      label: 'Channel Spanning (i.e. BDA or Debris Jam)',
      value: 'SPANNING'
    }, {
      label: 'Mid Channel',
      value: 'MID_CHANNEL'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Structure Orientation",
    name: "structureOrientation",
    present: present,
    options: [{
      label: 'Perpendicular to Flow',
      value: 'PERPENDICULAR'
    }, {
      label: 'Angled Flow Downstream',
      value: 'ANGLED_DOWN'
    }, {
      label: 'Angled Flow Upstream',
      value: 'ANGLED_UP'
    }, {
      label: 'Diamond',
      value: 'DIAMOND'
    }, {
      label: 'Triangle Pointing Upstream',
      value: 'TRIANGLE_UP'
    }, {
      label: 'Triangle Pointing DownStrream',
      value: 'TRIANGLE_DOWN'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Channel Constriction (% of Bankfull Width)",
    name: "channelConstriction",
    present: present,
    options: [{
      label: '100% BFW',
      value: '100'
    }, {
      label: '95-99%',
      value: '95T99'
    }, {
      label: '85-95%',
      value: '85T95'
    }, {
      label: '75-85%',
      value: '75T85'
    }, {
      label: '50-75%',
      value: '50T75'
    }, {
      label: '< 25%',
      value: 'LT25'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "numPosts",
    present: present,
    label: "Number of Posts",
    placeholder: "1,2,3",
    type: "number"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_DropDownQuestion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Structure Materials",
    name: "structureMaterials",
    present: present,
    fluid: true,
    multiple: true,
    search: true,
    selection: true,
    allowAdditions: true,
    placeholder: "Choose all that apply...",
    options: [{
      text: 'Willow Weave',
      value: 'Willow Weave'
    }, {
      text: 'Key piece (completely limbed)',
      value: 'Key piece (completely limbed)'
    }, {
      text: 'Key piece (limbed on bottom side only)',
      value: 'Key piece (limbed on bottom side only)'
    }, {
      text: 'Root wad',
      value: 'Root wad'
    }, {
      text: 'Small Woody Debris',
      value: 'Small Woody Debris'
    }, {
      text: 'Woody branches (single limbed) > 15cm diameter',
      value: 'Woody branches (single limbed) > 15cm diameter'
    }, {
      text: 'Woody branches (single limbed) < 15cm diameter',
      value: 'Woody branches (single limbed) < 15cm diameter'
    }, {
      text: 'Mud',
      value: 'Mud'
    }, {
      text: 'Grass / Reeds',
      value: 'Grass / Reeds'
    }, {
      text: 'Other organic',
      value: 'Other organic'
    }, {
      text: 'Cobble or Boulders',
      value: 'Cobble or Boulders'
    }, {
      text: '203 Guy Woddy Debris',
      value: '203 Guy Woddy Debris'
    }, {
      text: 'Turf',
      value: 'Turf'
    }, {
      text: 'Dowelled or Twine tied Simple Logs',
      value: 'Dowelled or Twine tied Simple Logs'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_RadioQuestion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "materialSources",
    present: present,
    options: [{
      label: 'Material Sourced on site',
      value: 'ONSITE'
    }, {
      label: 'Materials Imported',
      value: 'IMPORTED'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "maxStrucHeight",
    present: present,
    label: "Max dam/structure height (m) \xB10.1m",
    placeholder: "2.4",
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "maxPondDepth",
    present: present,
    label: "Max pond depth (m if applicable) \xB10.1m",
    placeholder: "2.4",
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "waterSurfDiff",
    present: present,
    label: "Water surface difference (m if applicable) \xB10.1m",
    placeholder: "2.4",
    type: "text"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_questions_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "structLength",
    present: present,
    label: "Structure Length (m) \xB11.0m",
    placeholder: "3.0",
    type: "text"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StructureDesign);

/***/ }),

/***/ "./src/components/BDAMobile/sections/TheForm.jsx":
/*!*******************************************************!*\
  !*** ./src/components/BDAMobile/sections/TheForm.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");




var TheForm = function TheForm(_ref) {
  var activeStep = _ref.activeStep,
      steps = _ref.steps,
      stepHeaders = _ref.stepHeaders;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Step"].Group, {
    attached: "top",
    ordered: true,
    size: "mini",
    unstackable: true,
    fluid: true
  }, stepHeaders, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Step"], {
    link: true,
    disabled: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    minWidth: "800"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Step"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Step"].Title, null, "Confirmation"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    attached: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    maxWidth: "800"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], null, "Step ", activeStep + 1, ": ", steps[activeStep].title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, steps[activeStep].description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null)), steps[activeStep || 0].content));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withState"])('activeStep', 'setActiveStep', 0), Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withProps"])(function (props) {
  return Object.assign({}, props, {
    stepHeaders: props.steps.map(function (_ref2, idx) {
      var title = _ref2.title,
          description = _ref2.description,
          complete = _ref2.complete;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Step"], {
        link: true,
        key: idx,
        active: idx === props.activeStep,
        completed: !!complete,
        onClick: function onClick() {
          return props.setActiveStep(idx);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
        minWidth: "800"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Step"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Step"].Title, null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Step"].Description, null, description))));
    })
  });
}))(TheForm));

/***/ }),

/***/ "./src/components/BDAMobile/sections/TheFormComplex.css":
/*!**************************************************************!*\
  !*** ./src/components/BDAMobile/sections/TheFormComplex.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./TheFormComplex.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/sections/TheFormComplex.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./TheFormComplex.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/sections/TheFormComplex.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./TheFormComplex.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/sections/TheFormComplex.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/BDAMobile/sections/TheFormComplex.jsx":
/*!**************************************************************!*\
  !*** ./src/components/BDAMobile/sections/TheFormComplex.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");
/* harmony import */ var _TheFormComplex_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TheFormComplex.css */ "./src/components/BDAMobile/sections/TheFormComplex.css");
/* harmony import */ var _TheFormComplex_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TheFormComplex_css__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined;







var TheFormComplex = function TheFormComplex(_ref) {
  var activeStep = _ref.activeStep,
      steps = _ref.steps,
      stepHeaders = _ref.stepHeaders,
      sidebarVisible = _ref.sidebarVisible,
      setSidebarVisible = _ref.setSidebarVisible,
      setActiveStep = _ref.setActiveStep;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      height: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TopbarEditing, {
    activeStep: activeStep,
    sidebarVisible: sidebarVisible,
    steps: steps,
    setSidebarVisible: setSidebarVisible,
    setActiveStep: setActiveStep
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"].Pushable, {
    as: "div"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"],
    animation: "overlay",
    icon: "labeled",
    inverted: true,
    onHide: _this.handleSidebarHide,
    vertical: true,
    visible: sidebarVisible,
    width: "wide"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Step"].Group, {
    attached: "top",
    style: {
      marginTop: '40px'
    },
    vertical: true,
    ordered: true,
    size: "mini",
    fluid: true
  }, stepHeaders)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Sidebar"].Pusher, {
    style: {
      marginTop: '40px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"].Dimmable, {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"],
    attached: true,
    blurring: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
    active: sidebarVisible,
    onClick: function onClick() {
      return setSidebarVisible(false);
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    maxWidth: "800"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, steps[activeStep] && steps[activeStep].description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], null, steps.map(function (_ref2, idx) {
    var Component = _ref2.Component;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: "stepComp".concat(idx),
      style: {
        display: activeStep === idx || !activeStep && idx === 0 ? '' : 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, null));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    icon: true,
    style: {
      borderRadius: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Menu, {
    position: "right"
  }, activeStep < 1 ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      setActiveStep(activeStep - 1);
      setSidebarVisible(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "arrow circle left"
  }), "Previous Step"), activeStep >= steps.length - 1 ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      setActiveStep(activeStep + 1);
      setSidebarVisible(false);
    }
  }, "Next Step", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "arrow circle right"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_4__["withState"])('activeStep', 'setActiveStep', 0), Object(recompose__WEBPACK_IMPORTED_MODULE_4__["withState"])('sidebarVisible', 'setSidebarVisible', false), Object(recompose__WEBPACK_IMPORTED_MODULE_4__["mapProps"])(function (initProps) {
  var confirmStep = {
    title: 'Confirmation',
    description: 'Make sure everything is right',
    Component: function Component() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "presentForm"
      }, initProps.steps.map(function (_ref3, idx) {
        var Component = _ref3.Component;
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, {
          present: true,
          key: "presentComponent".concat(idx)
        });
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ConfirmMenu, null));
    }
  };

  var newSteps = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(initProps.steps).concat([confirmStep]); //


  var stepHeaders = newSteps.map(function (_ref4, idx) {
    var title = _ref4.title,
        description = _ref4.description,
        complete = _ref4.complete;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Step"], {
      link: true,
      key: idx,
      active: idx === initProps.activeStep,
      completed: !!complete,
      onClick: function onClick() {
        initProps.setActiveStep(idx);
        initProps.setSidebarVisible(false);
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Step"].Content, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Step"].Title, null, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Step"].Description, null, description)));
  });
  return Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initProps, {
    steps: Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(newSteps),
    stepHeaders: Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(stepHeaders) // confirmHeader

  });
}))(TheFormComplex));
var ConfirmMenu = Object(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxHome"])(function (_ref5) {
  var guid = _ref5.editing.guid,
      deleteStructure = _ref5.deleteStructure,
      backToHome = _ref5.backToHome;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    icon: true,
    style: {
      borderRadius: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    content: "Cancel",
    color: "red",
    icon: "ban",
    onClick: function onClick() {
      // deleteStructure(guid)
      backToHome();
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    content: "Save",
    color: "green",
    icon: "save",
    onClick: backToHome
  }))));
});
var TopbarEditing = Object(_redux_withRedux__WEBPACK_IMPORTED_MODULE_5__["withReduxHome"])(function (_ref6) {
  var backToHome = _ref6.backToHome,
      activeStep = _ref6.activeStep,
      sidebarVisible = _ref6.sidebarVisible,
      steps = _ref6.steps,
      setSidebarVisible = _ref6.setSidebarVisible,
      setActiveStep = _ref6.setActiveStep;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    className: "theFormComplexMenu",
    fixed: "top",
    icon: true,
    inverted: true,
    style: {
      borderRadius: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: backToHome
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "home"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    name: "bars",
    onClick: function onClick() {
      return setSidebarVisible(!sidebarVisible);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "bars"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    style: {
      maxWidth: '48%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "div",
    style: {
      fontSize: '0.8rem'
    },
    inverted: true
  }, "Step ", activeStep + 1, ": ", steps[activeStep].title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Menu, {
    position: "right"
  }, activeStep < 1 ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      setActiveStep(activeStep - 1);
      setSidebarVisible(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "arrow circle left"
  })), activeStep >= steps.length - 1 ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      setActiveStep(activeStep + 1);
      setSidebarVisible(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "arrow circle right"
  }))));
});

/***/ }),

/***/ "./src/components/BDAMobile/sections/sections.fixture.js":
/*!***************************************************************!*\
  !*** ./src/components/BDAMobile/sections/sections.fixture.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DesignInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesignInfo */ "./src/components/BDAMobile/sections/DesignInfo.jsx");
/* harmony import */ var _PositionAttrib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PositionAttrib */ "./src/components/BDAMobile/sections/PositionAttrib.jsx");
/* harmony import */ var _StructureDesign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StructureDesign */ "./src/components/BDAMobile/sections/StructureDesign.jsx");
/* harmony import */ var _ExistingFeatures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExistingFeatures */ "./src/components/BDAMobile/sections/ExistingFeatures.jsx");
/* harmony import */ var _HydraulicResponses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HydraulicResponses */ "./src/components/BDAMobile/sections/HydraulicResponses.jsx");
/* harmony import */ var _GeomorphicResponses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GeomorphicResponses */ "./src/components/BDAMobile/sections/GeomorphicResponses.jsx");
/* harmony import */ var _TheForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TheForm */ "./src/components/BDAMobile/sections/TheForm.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../config */ "./src/config.js");
/* harmony import */ var _TheFormComplex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TheFormComplex */ "./src/components/BDAMobile/sections/TheFormComplex.jsx");










 // Just set us up with a dummy redux state so we can test things

var reduxHelper = function reduxHelper(valObj) {
  return {
    editing: {
      guid: 'GUID_222'
    },
    structures: {
      'GUID_222': {
        fields: {}
      }
    }
  };
};

var fixtures = [];
var devFixtures = [{
  name: 'Design Info',
  component: _DesignInfo__WEBPACK_IMPORTED_MODULE_2__["default"],
  wrapForm: true,
  reduxState: reduxHelper(),
  props: {
    present: false
  }
}, {
  name: 'Position Attrib',
  component: _PositionAttrib__WEBPACK_IMPORTED_MODULE_3__["default"],
  wrapForm: true,
  reduxState: reduxHelper(),
  props: {
    present: false
  }
}, {
  name: 'ExistingFeatures',
  component: _ExistingFeatures__WEBPACK_IMPORTED_MODULE_5__["default"],
  wrapForm: true,
  reduxState: reduxHelper(),
  props: {
    present: false
  }
}, {
  name: 'HydraulicResponses',
  component: _HydraulicResponses__WEBPACK_IMPORTED_MODULE_6__["default"],
  wrapForm: true,
  reduxState: reduxHelper(),
  props: {
    present: false
  }
}, {
  name: 'Structure Design',
  component: _StructureDesign__WEBPACK_IMPORTED_MODULE_4__["default"],
  wrapForm: true,
  reduxState: reduxHelper(),
  props: {
    present: false
  }
}, {
  name: 'Geomorphic Responses',
  component: _GeomorphicResponses__WEBPACK_IMPORTED_MODULE_7__["default"],
  wrapForm: true,
  props: {
    present: false
  }
}, {
  name: 'The Form',
  component: _TheForm__WEBPACK_IMPORTED_MODULE_8__["default"],
  props: {
    steps: [{
      title: 'Overview',
      description: 'do a thing',
      complete: true,
      content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DesignInfo__WEBPACK_IMPORTED_MODULE_2__["default"], null)
    }, {
      title: 'River',
      description: 'do a thing',
      content: 'Step 2. Laboris irure deserunt eu ad nulla adipisicing minim tempor minim magna. Minim ipsum cupidatat quis aliqua et officia deserunt Lorem laboris ex ad qui Lorem minim. Ipsum consequat eu magna esse.'
    }, {
      title: 'Design',
      description: 'do a thing',
      content: 'Step 3. Dolore cillum reprehenderit quis laborum do esse sint non velit mollit ipsum. Aliquip laboris ad dolor magna nostrud sint. Id consectetur dolore incididunt sint. Do officia deserunt reprehenderit velit do quis sunt.'
    }]
  }
}, {
  name: 'The Form Complex',
  component: _TheFormComplex__WEBPACK_IMPORTED_MODULE_10__["default"],
  reduxState: reduxHelper(),
  props: {
    steps: [{
      title: 'Design Info',
      description: 'do a thing',
      complete: true,
      Component: _DesignInfo__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, {
      title: 'Positional Attributes',
      description: 'do a thing',
      complete: false,
      Component: _PositionAttrib__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, {
      title: 'Structure Design',
      description: 'do a thing',
      complete: false,
      Component: _StructureDesign__WEBPACK_IMPORTED_MODULE_4__["default"]
    }, {
      title: 'Existing Features',
      description: 'do a thing',
      complete: false,
      Component: _ExistingFeatures__WEBPACK_IMPORTED_MODULE_5__["default"]
    }, {
      title: 'Anticipated Hydraulic Response',
      description: 'do a thing',
      complete: false,
      Component: _HydraulicResponses__WEBPACK_IMPORTED_MODULE_6__["default"]
    }, {
      title: 'Anticipated Geomorphic Responses',
      description: 'do a thing',
      complete: false,
      Component: _GeomorphicResponses__WEBPACK_IMPORTED_MODULE_7__["default"]
    }]
  }
}];
var finalFixes = fixtures.concat(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_9__["default"].env === 'development' ? devFixtures : [])).map(function (fix) {
  fix.component.displayName = "BDA Mobile App/Sections/".concat(fix.component.name);
  return fix;
});
/* harmony default export */ __webpack_exports__["default"] = (finalFixes);

/***/ }),

/***/ "./src/components/BDAMobile/views/Homepage.css":
/*!*****************************************************!*\
  !*** ./src/components/BDAMobile/views/Homepage.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Homepage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/views/Homepage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Homepage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/views/Homepage.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Homepage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/BDAMobile/views/Homepage.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/BDAMobile/views/Homepage.jsx":
/*!*****************************************************!*\
  !*** ./src/components/BDAMobile/views/Homepage.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../graphql/queries */ "./src/graphql/queries.js");
/* harmony import */ var _misc_Structures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../misc/Structures */ "./src/components/BDAMobile/misc/Structures/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Topbar */ "./src/components/BDAMobile/Topbar.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _StructureViewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StructureViewer */ "./src/components/BDAMobile/views/StructureViewer.jsx");
/* harmony import */ var _TheBDAForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TheBDAForm */ "./src/components/BDAMobile/views/TheBDAForm.jsx");
/* harmony import */ var _misc_Placeholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../misc/Placeholder */ "./src/components/misc/Placeholder.jsx");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../redux/withRedux */ "./src/redux/withRedux.js");
/* harmony import */ var _misc_AddButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../misc/AddButton */ "./src/components/BDAMobile/misc/AddButton.jsx");
/* harmony import */ var _misc_RefreshStockButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../misc/RefreshStockButton */ "./src/components/BDAMobile/misc/RefreshStockButton.jsx");
/* harmony import */ var _Homepage_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Homepage.css */ "./src/components/BDAMobile/views/Homepage.css");
/* harmony import */ var _Homepage_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Homepage_css__WEBPACK_IMPORTED_MODULE_12__);

 // Now some graphql stuff













var Homepage = function Homepage(_ref) {
  var structures = _ref.structures;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "appContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Topbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Tab"], {
    className: "tabContainer",
    panes: [{
      menuItem: {
        key: 'users',
        icon: 'list',
        content: 'List'
      },
      render: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Structures__WEBPACK_IMPORTED_MODULE_3__["default"], {
          structures: structures
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_AddButton__WEBPACK_IMPORTED_MODULE_10__["default"], null));
      }
    }, {
      menuItem: {
        key: 'map',
        icon: 'map',
        content: 'Map'
      },
      render: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Placeholder__WEBPACK_IMPORTED_MODULE_8__["default"], {
          minHeight: 400,
          icon: "map",
          title: "Fancy Pants Map"
        }));
      }
    }, {
      menuItem: {
        key: 'settings',
        icon: 'settings',
        content: 'Settings'
      },
      render: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Tab"].Pane, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_RefreshStockButton__WEBPACK_IMPORTED_MODULE_11__["default"], null));
      }
    }]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__["withStructuresList"], _redux_withRedux__WEBPACK_IMPORTED_MODULE_9__["withReduxHome"], Object(recompose__WEBPACK_IMPORTED_MODULE_1__["branch"])(function (_ref2) {
  var editing = _ref2.editing;
  return editing && editing.guid && editing.edit;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(_TheBDAForm__WEBPACK_IMPORTED_MODULE_7__["default"])), Object(recompose__WEBPACK_IMPORTED_MODULE_1__["branch"])(function (_ref3) {
  var editing = _ref3.editing;
  return editing && editing.guid && !editing.edit;
}, Object(recompose__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(_StructureViewer__WEBPACK_IMPORTED_MODULE_6__["default"])))(Homepage));

/***/ }),

/***/ "./src/components/BDAMobile/views/StructureViewer.jsx":
/*!************************************************************!*\
  !*** ./src/components/BDAMobile/views/StructureViewer.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Topbar */ "./src/components/BDAMobile/Topbar.jsx");
/* harmony import */ var _sections_DesignInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/DesignInfo */ "./src/components/BDAMobile/sections/DesignInfo.jsx");
/* harmony import */ var _sections_PositionAttrib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/PositionAttrib */ "./src/components/BDAMobile/sections/PositionAttrib.jsx");
/* harmony import */ var _sections_StructureDesign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/StructureDesign */ "./src/components/BDAMobile/sections/StructureDesign.jsx");
 // import PropTypes from 'prop-types'


 // Now import our form sections



 // import ExistingFeatures from '../sections/ExistingFeatures'
// import HydraulicResponses from '../sections/HydraulicResponses'
// import GeomorphicResponses from '../sections/GeomorphicResponses'

/**
   * Same goes for the viewer
   */

var StructureViewer = function StructureViewer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "appContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      marginTop: '40px'
    },
    className: "presentForm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_DesignInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    present: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_PositionAttrib__WEBPACK_IMPORTED_MODULE_4__["default"], {
    present: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_StructureDesign__WEBPACK_IMPORTED_MODULE_5__["default"], {
    present: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_StructureDesign__WEBPACK_IMPORTED_MODULE_5__["default"], {
    present: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_StructureDesign__WEBPACK_IMPORTED_MODULE_5__["default"], {
    present: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_StructureDesign__WEBPACK_IMPORTED_MODULE_5__["default"], {
    present: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null)));
}; // StructureViewer.propTypes = {
//   thing: PropTypes.string
// }


/* harmony default export */ __webpack_exports__["default"] = (StructureViewer);

/***/ }),

/***/ "./src/components/BDAMobile/views/TheBDAForm.jsx":
/*!*******************************************************!*\
  !*** ./src/components/BDAMobile/views/TheBDAForm.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_TheFormComplex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/TheFormComplex */ "./src/components/BDAMobile/sections/TheFormComplex.jsx");
/* harmony import */ var _sections_DesignInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/DesignInfo */ "./src/components/BDAMobile/sections/DesignInfo.jsx");
/* harmony import */ var _sections_PositionAttrib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/PositionAttrib */ "./src/components/BDAMobile/sections/PositionAttrib.jsx");
/* harmony import */ var _sections_StructureDesign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/StructureDesign */ "./src/components/BDAMobile/sections/StructureDesign.jsx");
/* harmony import */ var _sections_ExistingFeatures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/ExistingFeatures */ "./src/components/BDAMobile/sections/ExistingFeatures.jsx");
/* harmony import */ var _sections_HydraulicResponses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/HydraulicResponses */ "./src/components/BDAMobile/sections/HydraulicResponses.jsx");
/* harmony import */ var _sections_GeomorphicResponses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/GeomorphicResponses */ "./src/components/BDAMobile/sections/GeomorphicResponses.jsx");
 // import PropTypes from 'prop-types'

 // Now import our form sections







/**
 * The form is a really simple component so I'm lazy and just defining it here
 */

var TheBDAForm = function TheBDAForm() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_TheFormComplex__WEBPACK_IMPORTED_MODULE_1__["default"], {
    steps: [{
      title: 'Design Info',
      description: 'Tell us something about your design',
      complete: false,
      Component: _sections_DesignInfo__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, {
      title: 'Positional Attributes',
      description: 'The position of your structure',
      complete: false,
      Component: _sections_PositionAttrib__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, {
      title: 'Structure Design',
      description: 'The structure of your design',
      complete: false,
      Component: _sections_StructureDesign__WEBPACK_IMPORTED_MODULE_4__["default"]
    }, {
      title: 'Existing Features',
      description: 'are there any existing features?',
      complete: false,
      Component: _sections_ExistingFeatures__WEBPACK_IMPORTED_MODULE_5__["default"]
    }, {
      title: 'Anticipated Hydraulic Response',
      description: 'What do you expect to happen?',
      complete: false,
      Component: _sections_HydraulicResponses__WEBPACK_IMPORTED_MODULE_6__["default"]
    }, {
      title: 'Anticipated Geomorphic Responses',
      description: 'What geomorphic response do you anticipate?',
      complete: false,
      Component: _sections_GeomorphicResponses__WEBPACK_IMPORTED_MODULE_7__["default"]
    }]
  });
}; // TheBDAForm.propTypes = {
//   thing: PropTypes.string
// }


/* harmony default export */ __webpack_exports__["default"] = (TheBDAForm);

/***/ }),

/***/ "./src/components/BDAMobile/views/data.json":
/*!**************************************************!*\
  !*** ./src/components/BDAMobile/views/data.json ***!
  \**************************************************/
/*! exports provided: structures, default */
/***/ (function(module) {

module.exports = {"structures":{"GUID_222":{"uploaded":false,"uploading":false,"uploadFailed":false,"fields":{"designerName":{"value":"Bill Pickel"},"structureID":{"value":"Structure 12312-c"},"observationDate":{"value":"12-09-2018 07:00"},"designVideo":{"value":"https://youtu.be/asdfasdfas"},"designFlowCondition":{"value":"BASEFLOW"},"designType":{"value":"BDA"},"location":{"value":{"width":408,"height":400,"latitude":49.271167612636,"longitude":-123.07160983624571,"zoom":17,"bearing":0,"pitch":0,"altitude":1.5,"maxZoom":20,"minZoom":0,"maxPitch":60,"minPitch":0,"transitionDuration":0,"transitionInterpolator":{"propNames":["longitude","latitude","zoom","bearing","pitch"]},"transitionInterruption":1}},"structureChannelLocation":{"value":"MAIN_CHANNEL"},"complex":{"value":"COMPLEX_342"},"complexExtended":{"value":"NEW_DAM_COMPLEX"},"structurePosition":{"value":"RIVER_LEFT_MARGIN_ATTACHED"},"structureOrientation":{"value":"ANGLED_DOWN"},"channelConstriction":{"value":"95T99"},"numPosts":{"value":"34"},"structureMaterials":{"value":["Key piece (completely limbed)","Key piece (limbed on bottom side only)"]},"materialSources":{"value":"ONSITE"},"maxStrucHeight":{"value":"2.4"},"maxPondDepth":{"value":"1.3"},"waterSurfDiff":{"value":"0.7"},"structLength":{"value":"3"},"expectedUnits":{"value":"Convexity","note":"thenote is good"},"elementsAtLocation":{"value":"Roots","note":"The other note is good"},"channelSpanners":{"value":{"OVER_TOP":65,"BASAL":35,"THROUGHFLOW":0,"AROUND_LEFT":0,"AROUND_RIGHT":0}},"nonChannelSpanners":{"value":{"SHUNT_LEFT":75,"SHUNT_RIGHT":25,"THROUGH":0,"OVER":0,"UNDER":0}},"TypicalFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"BigFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"upstreamHydraulicInfluence":{"value":"1-2"},"downstreamHydraulicInfluence":{"value":"1"},"sideChannelForced":{"value":["None","Single Left"]},"pondExtend":{"value":"Contained"},"floodplainInundation":{"value":["EXTREME_LEFT","EXTREME_RIGHT","SEASONAL_LEFT"]},"pondCapacityFirstYear":{"value":"CLEAN"},"pondCapacityBigFlood":{"value":"CLEAN"},"upstreamSubstrate":{"value":"Fines"},"downstreamSubstrate":{"value":"Gravels"},"expectedUnitsAtStruct":{"value":"Convexity"},"expectedElementsAtStruct":{"value":"MINOR"}}},"GUID_845":{"uploaded":true,"uploading":false,"uploadFailed":false,"fields":{"designerName":{"value":"Gabby Derkins"},"structureID":{"value":"Structure 42342"},"observationDate":{"value":"12-09-2018 09:00"},"designVideo":{"value":"https://youtu.be/asdfasdfas"},"designFlowCondition":{"value":"BASEFLOW"},"designType":{"value":"BDA"},"location":{"value":{"width":408,"height":400,"latitude":49.271167612636,"longitude":-123.07160983624571,"zoom":17,"bearing":0,"pitch":0,"altitude":1.5,"maxZoom":20,"minZoom":0,"maxPitch":60,"minPitch":0,"transitionDuration":0,"transitionInterpolator":{"propNames":["longitude","latitude","zoom","bearing","pitch"]},"transitionInterruption":1}},"structureChannelLocation":{"value":"MAIN_CHANNEL"},"complex":{"value":"COMPLEX_342"},"complexExtended":{"value":"NEW_DAM_COMPLEX"},"structurePosition":{"value":"RIVER_LEFT_MARGIN_ATTACHED"},"structureOrientation":{"value":"ANGLED_DOWN"},"channelConstriction":{"value":"95T99"},"numPosts":{"value":"34"},"structureMaterials":{"value":["Key piece (completely limbed)","Key piece (limbed on bottom side only)"]},"materialSources":{"value":"ONSITE"},"maxStrucHeight":{"value":"2.4"},"maxPondDepth":{"value":"1.3"},"waterSurfDiff":{"value":"0.7"},"structLength":{"value":"3"},"expectedUnits":{"value":"Convexity","note":"thenote is good"},"elementsAtLocation":{"value":"Roots","note":"The other note is good"},"channelSpanners":{"value":{"OVER_TOP":65,"BASAL":35,"THROUGHFLOW":0,"AROUND_LEFT":0,"AROUND_RIGHT":0}},"nonChannelSpanners":{"value":{"SHUNT_LEFT":75,"SHUNT_RIGHT":25,"THROUGH":0,"OVER":0,"UNDER":0}},"TypicalFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"BigFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"upstreamHydraulicInfluence":{"value":"1-2"},"downstreamHydraulicInfluence":{"value":"1"},"sideChannelForced":{"value":["None","Single Left"]},"pondExtend":{"value":"Contained"},"floodplainInundation":{"value":["EXTREME_LEFT","EXTREME_RIGHT","SEASONAL_LEFT"]},"pondCapacityFirstYear":{"value":"CLEAN"},"pondCapacityBigFlood":{"value":"CLEAN"},"upstreamSubstrate":{"value":"Fines"},"downstreamSubstrate":{"value":"Gravels"},"expectedUnitsAtStruct":{"value":"Convexity"},"expectedElementsAtStruct":{"value":"MINOR"}}},"GUID_724":{"uploaded":false,"uploading":false,"uploadFailed":true,"fields":{"designerName":{"value":"Jane Doe"},"structureID":{"value":"Structure 63452-c"},"observationDate":{"value":"12-09-2018 09:00"},"designVideo":{"value":"https://youtu.be/asdfasdfas"},"designFlowCondition":{"value":"BASEFLOW"},"designType":{"value":"BDA"},"location":{"value":{"width":408,"height":400,"latitude":49.271167612636,"longitude":-123.07160983624571,"zoom":17,"bearing":0,"pitch":0,"altitude":1.5,"maxZoom":20,"minZoom":0,"maxPitch":60,"minPitch":0,"transitionDuration":0,"transitionInterpolator":{"propNames":["longitude","latitude","zoom","bearing","pitch"]},"transitionInterruption":1}},"structureChannelLocation":{"value":"MAIN_CHANNEL"},"complex":{"value":"COMPLEX_342"},"complexExtended":{"value":"NEW_DAM_COMPLEX"},"structurePosition":{"value":"RIVER_LEFT_MARGIN_ATTACHED"},"structureOrientation":{"value":"ANGLED_DOWN"},"channelConstriction":{"value":"95T99"},"numPosts":{"value":"34"},"structureMaterials":{"value":["Key piece (completely limbed)","Key piece (limbed on bottom side only)"]},"materialSources":{"value":"ONSITE"},"maxStrucHeight":{"value":"2.4"},"maxPondDepth":{"value":"1.3"},"waterSurfDiff":{"value":"0.7"},"structLength":{"value":"3"},"expectedUnits":{"value":"Convexity","note":"thenote is good"},"elementsAtLocation":{"value":"Roots","note":"The other note is good"},"channelSpanners":{"value":{"OVER_TOP":65,"BASAL":35,"THROUGHFLOW":0,"AROUND_LEFT":0,"AROUND_RIGHT":0}},"nonChannelSpanners":{"value":{"SHUNT_LEFT":75,"SHUNT_RIGHT":25,"THROUGH":0,"OVER":0,"UNDER":0}},"TypicalFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"BigFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"upstreamHydraulicInfluence":{"value":"1-2"},"downstreamHydraulicInfluence":{"value":"1"},"sideChannelForced":{"value":["None","Single Left"]},"pondExtend":{"value":"Contained"},"floodplainInundation":{"value":["EXTREME_LEFT","EXTREME_RIGHT","SEASONAL_LEFT"]},"pondCapacityFirstYear":{"value":"CLEAN"},"pondCapacityBigFlood":{"value":"CLEAN"},"upstreamSubstrate":{"value":"Fines"},"downstreamSubstrate":{"value":"Gravels"},"expectedUnitsAtStruct":{"value":"Convexity"},"expectedElementsAtStruct":{"value":"MINOR"}}},"GUID_623":{"uploaded":false,"uploading":false,"uploadFailed":false,"fields":{"designerName":{"value":"Russell Sprout"},"structureID":{"value":"Structure 234234 (Mile 232)"},"observationDate":{"value":"12-09-2018 09:00"},"designVideo":{"value":"https://youtu.be/asdfasdfas"},"designFlowCondition":{"value":"BASEFLOW"},"designType":{"value":"BDA"},"location":{"value":{"width":408,"height":400,"latitude":49.271167612636,"longitude":-123.07160983624571,"zoom":17,"bearing":0,"pitch":0,"altitude":1.5,"maxZoom":20,"minZoom":0,"maxPitch":60,"minPitch":0,"transitionDuration":0,"transitionInterpolator":{"propNames":["longitude","latitude","zoom","bearing","pitch"]},"transitionInterruption":1}},"structureChannelLocation":{"value":"MAIN_CHANNEL"},"complex":{"value":"COMPLEX_342"},"complexExtended":{"value":"NEW_DAM_COMPLEX"},"structurePosition":{"value":"RIVER_LEFT_MARGIN_ATTACHED"},"structureOrientation":{"value":"ANGLED_DOWN"},"channelConstriction":{"value":"95T99"},"numPosts":{"value":"34"},"structureMaterials":{"value":["Key piece (completely limbed)","Key piece (limbed on bottom side only)"]},"materialSources":{"value":"ONSITE"},"maxStrucHeight":{"value":"2.4"},"maxPondDepth":{"value":"1.3"},"waterSurfDiff":{"value":"0.7"},"structLength":{"value":"3"},"expectedUnits":{"value":"Convexity","note":"thenote is good"},"elementsAtLocation":{"value":"Roots","note":"The other note is good"},"channelSpanners":{"value":{"OVER_TOP":65,"BASAL":35,"THROUGHFLOW":0,"AROUND_LEFT":0,"AROUND_RIGHT":0}},"nonChannelSpanners":{"value":{"SHUNT_LEFT":75,"SHUNT_RIGHT":25,"THROUGH":0,"OVER":0,"UNDER":0}},"TypicalFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"BigFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"upstreamHydraulicInfluence":{"value":"1-2"},"downstreamHydraulicInfluence":{"value":"1"},"sideChannelForced":{"value":["None","Single Left"]},"pondExtend":{"value":"Contained"},"floodplainInundation":{"value":["EXTREME_LEFT","EXTREME_RIGHT","SEASONAL_LEFT"]},"pondCapacityFirstYear":{"value":"CLEAN"},"pondCapacityBigFlood":{"value":"CLEAN"},"upstreamSubstrate":{"value":"Fines"},"downstreamSubstrate":{"value":"Gravels"},"expectedUnitsAtStruct":{"value":"Convexity"},"expectedElementsAtStruct":{"value":"MINOR"}}}}};

/***/ }),

/***/ "./src/components/BDAMobile/views/views.fixture.js":
/*!*********************************************************!*\
  !*** ./src/components/BDAMobile/views/views.fixture.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Homepage */ "./src/components/BDAMobile/views/Homepage.jsx");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.json */ "./src/components/BDAMobile/views/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/components/BDAMobile/views/data.json", 1);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./src/config.js");




var fixtures = [{
  name: 'Home',
  reduxState: _data_json__WEBPACK_IMPORTED_MODULE_2__,
  component: _Homepage__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
var devFixtures = [];
var finalFixes = fixtures.concat(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_3__["default"].env === 'development' ? devFixtures : [])).map(function (fix) {
  fix.component.displayName = "BDA Mobile App/".concat(fix.component.displayName);
  return fix;
});
/* harmony default export */ __webpack_exports__["default"] = (finalFixes);

/***/ }),

/***/ "./src/components/CitizenBeaver/Account.jsx":
/*!**************************************************!*\
  !*** ./src/components/CitizenBeaver/Account.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gravatar */ "./node_modules/react-gravatar/dist/index.js");
/* harmony import */ var react_gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gravatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");





var Account = function Account(_ref) {
  var email = _ref.email,
      name = _ref.name,
      confirmOpen = _ref.confirmOpen,
      setConfirmOpen = _ref.setConfirmOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: '4rem'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    inverted: true,
    fixed: "top",
    style: menuStyle,
    color: "orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true,
    as: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "caret left"
  }), "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user"
  }), "Account"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Group, {
    unstackable: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Image, {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_gravatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    email: email,
    size: 75
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Header, {
    as: "a"
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Meta, null, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Extra, null, "Additional Details"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"].Group, {
    size: "tiny"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"].Value, null, "22"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"].Label, null, "Visits")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"].Value, null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"].Label, null, "Discoveries")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"].Value, null, "14"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Statistic"].Label, null, "Posts")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Meta, null, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Item"].Description, null, "Esse quis cupidatat elit laborum fugiat aliquip cupidatat velit. Esse pariatur quis aliquip id. Aliqua incididunt officia voluptate ipsum magna eu officia duis mollit. Et mollit fugiat dolore anim nostrud. Occaecat adipisicing deserunt sint officia esse consectetur.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    inverted: true,
    fixed: "bottom",
    style: menuStyle,
    color: "black"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
    fluid: true,
    size: "large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    content: "Log Out",
    color: "black",
    icon: "unlock"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    content: "Delete Account",
    color: "red",
    icon: "trash",
    onClick: function onClick() {
      return setConfirmOpen(true);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Confirm"], {
    open: confirmOpen,
    size: "large",
    header: "Delete Account",
    content: "Are you sure? There's no way to reverse this!",
    cancelButton: "Cancel",
    confirmButton: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      content: "Delete my account",
      negative: true
    }),
    onCancel: function onCancel() {
      return setConfirmOpen(false);
    },
    onConfirm: function onConfirm() {
      return setConfirmOpen(false);
    }
  })))));
};

var menuStyle = {
  borderRadius: 0,
  marginBottom: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withState"])('confirmOpen', 'setConfirmOpen', false))(Account));

/***/ }),

/***/ "./src/components/CitizenBeaver/CitizenBeaver.fixture.js":
/*!***************************************************************!*\
  !*** ./src/components/CitizenBeaver/CitizenBeaver.fixture.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _InputForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputForm */ "./src/components/CitizenBeaver/InputForm/index.jsx");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings */ "./src/components/CitizenBeaver/Settings.jsx");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./src/components/CitizenBeaver/Home/index.jsx");
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Account */ "./src/components/CitizenBeaver/Account.jsx");
/* harmony import */ var _InputForm_Topbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputForm/Topbar */ "./src/components/CitizenBeaver/InputForm/Topbar.jsx");
/* harmony import */ var _InputForm_TheForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputForm/TheForm */ "./src/components/CitizenBeaver/InputForm/TheForm.jsx");
/* harmony import */ var _InputForm_MapChooser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InputForm/MapChooser */ "./src/components/CitizenBeaver/InputForm/MapChooser.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _Home_fixtures_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home/fixtures.json */ "./src/components/CitizenBeaver/Home/fixtures.json");
var _Home_fixtures_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Home/fixtures.json */ "./src/components/CitizenBeaver/Home/fixtures.json", 1);




 // The form has subcomponents






_InputForm_TheForm__WEBPACK_IMPORTED_MODULE_6__["default"].specialName = 'TheForm';
_Account__WEBPACK_IMPORTED_MODULE_4__["default"].specialName = 'Account';
var fixtures = [{
  name: 'Home',
  component: _Home__WEBPACK_IMPORTED_MODULE_3__["default"],
  props: {
    projects: _Home_fixtures_json__WEBPACK_IMPORTED_MODULE_9__["data"].Projects
  }
}, {
  name: 'User Input (Home)',
  component: _InputForm__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_8__["mapBoxToken"],
    latitude: 49.3050394,
    longitude: -123.1398254
  }
}, {
  name: 'Settings',
  component: _Settings__WEBPACK_IMPORTED_MODULE_2__["default"] // props: { }

}, {
  name: 'Account',
  component: _Account__WEBPACK_IMPORTED_MODULE_4__["default"],
  props: {
    email: 'pipbailey@gmail.com',
    name: 'Philip Bailey'
  }
}]; // These are private fixtures. They only appear on DEV

var devFixtures = [{
  name: 'User Input Topbar',
  component: _InputForm_Topbar__WEBPACK_IMPORTED_MODULE_5__["default"] // props: { }

}, {
  name: 'Map Chooser',
  component: _InputForm_MapChooser__WEBPACK_IMPORTED_MODULE_7__["default"],
  props: {
    // maxBounds,
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_8__["mapBoxToken"],
    maxZoom: 18,
    minZoom: 2,
    latitude: 49.3050394,
    longitude: -123.1398254
  }
}, {
  name: 'User Input TheForm',
  component: _InputForm_TheForm__WEBPACK_IMPORTED_MODULE_6__["default"] // props: { }

}];
var finalFixes = fixtures.concat(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_8__["default"].env === 'development' ? devFixtures : [])).map(function (fix) {
  fix.component.displayName = "Citizen Beaver/".concat(fix.component.specialName || fix.component.name);
  return fix;
});
/* harmony default export */ __webpack_exports__["default"] = (finalFixes);

/***/ }),

/***/ "./src/components/CitizenBeaver/Home/fixtures.json":
/*!*********************************************************!*\
  !*** ./src/components/CitizenBeaver/Home/fixtures.json ***!
  \*********************************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"Projects":[{"ProjectID":"7","Title":"Lower Fox Creek Habitat Enhancement","Organization":"CTWSRO","Latitude":44.651377,"Longitude":-119.195708,"Watershed":"John Day","Stream":"Fox Creek","ImplementationDate":"2018-08-30","TreatmentLength":2000,"Structures":7,"Banner":"/images/bdas/7/DJI_0004.jpg","Goals":"The goal of this project is to reconnect Fox Creek with its floodplain.","StructureElements":"Structures were placed strategically throughout the project reach in areas that would maximize floodplain activation during high-flows. BDA's within this project consisted of 10-30 six-inch posts driven into to streambed. Willow and juniper slash from the wood structures placed throughout the project site were used to weave/fill between posts."},{"ProjectID":"3","Title":"Bridge Creek Intensively Monitored Watershed","Organization":"NOAA Fisheries","Latitude":44.59193,"Longitude":-120.201594,"Watershed":"John Day","Stream":"Bridge Creek","ImplementationDate":"2009-09-01","TreatmentLength":4000,"Structures":120,"Banner":"/images/bdas/3/DJI_0767.jpg","Goals":"The BDA treatments were designed to promote channel aggradation in order to reconnect incised stream reaches to adjacent floodplains. Long-term outcomes of the project included increased surface-groundwater connectivity, moderation of high summer temperatures, increased fish habitat quantity and quality, and increased productivity of steelhead populations.","StructureElements":"BDA structures were composed of post lines driven across the channel and on to adjacent floodplain surfaces. Fill material relied on abundant local willow, cobbles, and gravels. During the project many of the BDA structures were enhance by natural beaver activity which increased the effectiveness of the treatments in the process of incision recovery."},{"ProjectID":"2","Title":"Bear Creek Surface Flow Enhancement","Organization":"Wheeler County Soil and Water Conservation District","Latitude":44.630221,"Longitude":-120.332477,"Watershed":"John Day","Stream":"Bear Creek","ImplementationDate":"2017-07-15","TreatmentLength":2000,"Structures":90,"Banner":"/images/bdas/2/Structure08_04.jpg","Goals":"The primary goal for the project is to increase the abundance of surface flow on intermittent sections Bear Creek during summer. This will provide increased quantity and quality of rearing habitat for juvenile steelhead.","StructureElements":"BDA structures were largely built by installing post lines across the active channel and applying locally sourced willow with cobble and gravel at the base of each dam. Roughly 20 postless BDAs were also built within a ephemeral tributary near the treatment reaches."},{"ProjectID":"4","Title":"Parrish Creek Riparian and Hydrologic Enhancement","Organization":"Mid John Day - Bridge Creek Watershed Council","Latitude":44.831002,"Longitude":-119.8153,"Watershed":"John Day","Stream":"Parrish Creek","ImplementationDate":"2018-07-01","TreatmentLength":800,"Structures":30,"Banner":"/images/bdas/4/IMG_0117.jpg","Goals":"The BDA design is intended to increase the duration and extent of surface flow in a section of stream that routinely is dry during summer. Ideally, changes to the hydrology of the reach will result in an increase in fish habitat quantity and quality, and increase the success rate of riparian vegetation plantings fall of 2019.","StructureElements":"BDA structures were largely constructed of downed juniper from nearby juniper thinning actions taking place within the watershed. Juniper and local sediment and cobble were added to post lines staggered across the channel. In general, post elevations and fill material were kept to the elevation of adjacent bank features (~ 0.2 - 0.35 m)."},{"ProjectID":"6","Title":"Triple Creek Restoration Project","Organization":"Okanogan Highlands Alliance, US Fish and Wildlife Service, Trout Unlimited","Latitude":48.965231,"Longitude":-119.03737,"Watershed":"Kettle River","Stream":"Myers Creek","ImplementationDate":"2016-08-22","TreatmentLength":580,"Structures":33,"Banner":"/images/bdas/6/Myers_Creek_Before-during-after-from-road.jpg","Goals":"Long-term goal: Reestablish connectivity between stream and floodplain, with a healthy riparian plant community and beaver maintaining grade control onsite. Short-term goal: Improve ecological function and complexity within the Triple Creek project reach. Objectives: • Increase channel length • Raise streambed elevation • Increase sub-surface water elevation • Reestablish native riparian vegetation within the wetland complex • Reestablish favorable geomorphic and vegetative conditions for beaver.","StructureElements":"We installed two different BDA structure types at Triple Creek: Deflector dams and channel-spanning BDAs. Deflector dams are straight post-line structures that span approximately 80% of the channel, leaving an aperture at the end through which water can flow. The intent of the deflector dams is to deflect flows into the opposing bank to recruit sediment and to elongate the channel locally. Deflector dams are oriented diagonally to direct flow toward an eroding bank on the outside of a meander. Structure locations were chosen based on existing channel geometry, and to push water in specific directions to create the desired future planform for the stream. Channel-spanning BDAs, on the other hand, are post-lines installed in an arc that span 100% of the channel. These are generally built in tandem with deflector dams, to capture the sediment recruited from the banks just upstream. The channel-spanning BDAs impound water, which raises the water surface elevation and slows velocities to induce deposition. It can be ideal to locate channel-spanners near inset floodplains and where the channel is wide, since sediment will aggrade on these surfaces and the structure is more likely to be stable. We also installed 10 pieces of large wood upstream of all the BDAs with the objective of habitat enhancement, although significant aggradation also occurred upstream of one of the large wood installments."},{"ProjectID":"1","Title":"South Fork John Day Rapid Riparian Restoration","Organization":"South Fork John Day Watershed Council","Latitude":44.066661,"Longitude":-119.385447,"Watershed":"John Day","Stream":"South Fork John Day River","ImplementationDate":"2017-08-15","TreatmentLength":6437,"Structures":18,"Banner":"/images/bdas/1/DJI_0137.jpg","Goals":"Expand riparian vegetation, stop channel incision, reconnect to floodplain.","StructureElements":"We used 3 inch diameter un-treated wooden posts, and pound them using a gas powered post pounder. We used Juniper limbs, sagebrush, and willow to fill the structures, along with 5 gallon buckets of gravel/silt. We hired contractors to pound the posts, then used a youth crew to fill them."},{"ProjectID":"5","Title":"South Fork Crooked River Jake Place","Organization":"OSU-Cascades","Latitude":44.0419,"Longitude":-120.0283,"Watershed":"Deschutes","Stream":"South Fork Crooked River","ImplementationDate":"2016-07-15","TreatmentLength":2000,"Structures":5,"Banner":"/images/bdas/5/Juniper_BDA_Sep_21_2016.jpg","Goals":"Increase channel complexity, lower water temperatures, support restoration of woody riparian vegetation.","StructureElements":"4\" posts woven with willow, juniper, or a combination of both."}]}};

/***/ }),

/***/ "./src/components/CitizenBeaver/Home/index.jsx":
/*!*****************************************************!*\
  !*** ./src/components/CitizenBeaver/Home/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./src/config.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _lib_mapUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/mapUtil */ "./src/lib/mapUtil.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _common_maps_BaseMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/maps/BaseMap */ "./src/components/common/maps/BaseMap.jsx");
/* harmony import */ var _common_maps_MarkerIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/maps/MarkerIcon */ "./src/components/common/maps/MarkerIcon.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./src/components/CitizenBeaver/Home/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);











var Home = function Home(_ref) {
  var center = _ref.center,
      pts = _ref.pts,
      projects = _ref.projects;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '100%',
      paddingTop: '40px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    inverted: true,
    fixed: "top",
    style: menuStyle,
    color: "orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    header: true
  }, "Citizen Beaver"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    header: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    name: "paw"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mapWrapper",
    style: {
      height: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_3__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_maps_BaseMap__WEBPACK_IMPORTED_MODULE_6__["default"], {
      longitude: center[0],
      latitude: center[1],
      mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_1__["mapBoxToken"],
      maxBounds: Object(_lib_mapUtil__WEBPACK_IMPORTED_MODULE_4__["findBounds"])(pts),
      size: {
        height: height < 500 ? 500 : height,
        width: width
      },
      maxZoom: 18,
      minZoom: 2
    }, // Render props here
    function (viewport) {
      return projects.map(function (project, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
          viewport: viewport,
          key: "mapmarker".concat(idx),
          longitude: project.Longitude,
          latitude: project.Latitude,
          offsetLeft: 0,
          offsetTop: 0
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_maps_MarkerIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          project: project
        }));
      });
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Label"], {
      className: "addButton",
      circular: true,
      color: "orange",
      icon: true,
      size: "huge",
      content: "+"
    }));
  })));
};

var menuStyle = {
  borderRadius: 0,
  marginBottom: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_8__["withProps"])(function (_ref3) {
  var projects = _ref3.projects;
  var pts = projects.filter(function (p) {
    return p.Latitude && p.Longitude;
  }).map(function (p) {
    return [p.Longitude, p.Latitude];
  });
  var center = Object(_lib_mapUtil__WEBPACK_IMPORTED_MODULE_4__["findCenter"])(pts);
  return {
    pts: pts,
    center: center
  };
}))(Home));

/***/ }),

/***/ "./src/components/CitizenBeaver/Home/style.css":
/*!*****************************************************!*\
  !*** ./src/components/CitizenBeaver/Home/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CitizenBeaver/Home/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CitizenBeaver/Home/style.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CitizenBeaver/Home/style.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/CitizenBeaver/InputForm/MapChooser.jsx":
/*!***************************************************************!*\
  !*** ./src/components/CitizenBeaver/InputForm/MapChooser.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _common_maps_BaseMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/maps/BaseMap */ "./src/components/common/maps/BaseMap.jsx");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");







var MarkerMap = function MarkerMap(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude,
      props = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["latitude", "longitude"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      minHeight: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    fixed: "bottom",
    inverted: true,
    vertical: true,
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    header: true,
    icon: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "crosshairs"
  }), " Place the crosshairs where you see a structure"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    header: true,
    icon: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    sized: "large",
    icon: "check",
    content: "Capture",
    color: "blue",
    fluid: true
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_4__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_maps_BaseMap__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
      longitude: longitude,
      latitude: latitude,
      size: {
        height: height < 500 ? 500 : height,
        width: width
      }
    }), // Render props here
    function (viewport) {
      return [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        viewport: viewport,
        longitude: longitude,
        latitude: latitude,
        offsetLeft: -20,
        offsetTop: -30
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        style: {
          textShadow: '1px 1px 2px #FFFFFF'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        style: {
          textShadow: '1px 1px 2px #FFFFFF'
        },
        name: "map marker",
        size: "big",
        color: "white"
      }), "You")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        viewport: viewport,
        longitude: viewport.longitude,
        latitude: viewport.latitude,
        offsetLeft: -20,
        offsetTop: -20
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        style: {
          textShadow: '1px 1px 2px #00000099'
        },
        name: "crosshairs",
        size: "big",
        color: "red"
      }))];
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MarkerMap);

/***/ }),

/***/ "./src/components/CitizenBeaver/InputForm/MapPreview.jsx":
/*!***************************************************************!*\
  !*** ./src/components/CitizenBeaver/InputForm/MapPreview.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _common_maps_BaseMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/maps/BaseMap */ "./src/components/common/maps/BaseMap.jsx");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");







var MarkerMap = function MarkerMap(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude,
      height = _ref.height,
      props = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["latitude", "longitude", "height"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: height
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_4__["AutoSizer"], null, function (_ref2) {
    var width = _ref2.width;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_maps_BaseMap__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
      longitude: longitude,
      latitude: latitude,
      size: {
        height: height,
        width: width
      }
    }), // Render props here
    function (viewport) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        viewport: viewport,
        longitude: viewport.longitude,
        latitude: viewport.latitude,
        offsetLeft: -15,
        offsetTop: -15
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        src: "./icons/beaver.png",
        style: {
          height: '30px'
        }
      }));
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      icon: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "hand pointer"
    }), "Tap to place marker"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MarkerMap);

/***/ }),

/***/ "./src/components/CitizenBeaver/InputForm/TheForm.jsx":
/*!************************************************************!*\
  !*** ./src/components/CitizenBeaver/InputForm/TheForm.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");




var types = {
  BEAVER: {
    name: 'Beaver',
    icon: './icons/beaver.png'
  },
  DAM: {
    name: 'Dam',
    icon: './icons/dam.png'
  },
  BDA: {
    name: 'BDA',
    icon: './icons/bda.png'
  },
  LODGE: {
    name: 'Lodge',
    icon: './icons/lodge.png'
  },
  SCENTMOUND: {
    name: 'Scent Mound',
    icon: './icons/scentmound.png'
  }
};

var TheForm = function TheForm(_ref) {
  var value = _ref.value,
      activeType = _ref.activeType,
      handleChange = _ref.handleChange,
      changeType = _ref.changeType;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "InputForm"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    className: "inputFormMenu",
    fluid: true,
    size: "mini"
  }, Object.keys(types).map(function (t) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabMenuItem, {
      name: types[t].name,
      icon: types[t].icon,
      active: types[t].name === activeType,
      onClick: function onClick() {
        return changeType(types[t].name);
      }
    });
  })), activeType === types.BEAVER.name ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TheFormBeaver, null) : null, activeType === types.DAM.name ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TheFormDam, null) : null, activeType === types.BDA.name ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TheFormBDA, null) : null, activeType === types.LODGE.name ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TheFormLodge, null) : null, activeType === types.SCENTMOUND.name ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TheFormScentMound, null) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    color: "blue",
    inverted: true,
    className: "cameraMenu",
    size: "large"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    header: true
  }, "Add a photo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    icon: "file",
    inverted: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    icon: "camera",
    inverted: true
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), activeType ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fluid: true,
    size: "large",
    icon: "check",
    content: "Done",
    positive: true
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withStateHandlers"])({
  activeType: null,
  value: 'sm'
}, {
  handleChange: function handleChange() {
    return function (e, _ref2) {
      var value = _ref2.value;
      return {
        value: value
      };
    };
  },
  changeType: function changeType() {
    return function (activeType) {
      return {
        activeType: activeType
      };
    };
  }
}))(TheForm));

var TabMenuItem = function TabMenuItem(_ref3) {
  var name = _ref3.name,
      icon = _ref3.icon,
      color = _ref3.color,
      props = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["name", "icon", "color"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], Object.assign({
    style: {
      background: color
    }
  }, props), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: icon,
    size: "mini"
  }), name);
};

var TheFormBeaver = function TheFormBeaver() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, {
    floated: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    style: {
      width: '50px'
    },
    value: 2
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Number:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, "How many did you see?"))));
};

var TheFormScentMound = function TheFormScentMound() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, {
    floated: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    style: {
      width: '50px'
    },
    value: 2
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Still Smelly?"))));
};

var TheFormDam = function TheFormDam() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, {
    floated: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    style: {
      width: '50px'
    },
    value: 2
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Length (m):"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, "Best guess"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, {
    floated: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Spans the entire river?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Condition:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, "Best guess"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    size: "tiny",
    fluid: true,
    toggle: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Good"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Fair"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Poor"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Destroyed"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Age:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, "How old is this structure?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    size: "tiny",
    fluid: true,
    toggle: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "New"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Old"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Not sure"
  })))));
};

var TheFormBDA = function TheFormBDA() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, {
    floated: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    style: {
      width: '50px'
    },
    value: 2
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Length (m):"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, "Best guess"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, {
    floated: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Spans the entire river?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Condition:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, "Best guess"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    size: "tiny",
    fluid: true,
    toggle: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Good"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Fair"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Poor"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Destroyed"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Age:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, "How old is this structure?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    size: "tiny",
    fluid: true,
    toggle: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "New"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Old"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Not sure"
  })))));
};

var TheFormLodge = function TheFormLodge() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Condition:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, "Best guess"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    size: "tiny",
    fluid: true,
    toggle: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Good"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Fair"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Poor"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Destroyed"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Header, null, "Age:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Description, null, "How old is this structure?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    size: "tiny",
    fluid: true,
    toggle: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "New"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Old"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    content: "Not sure"
  })))));
};

/***/ }),

/***/ "./src/components/CitizenBeaver/InputForm/Topbar.jsx":
/*!***********************************************************!*\
  !*** ./src/components/CitizenBeaver/InputForm/Topbar.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
 // import PropTypes from 'prop-types'



var Topbar = function Topbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    inverted: true,
    fixed: "top",
    style: style,
    color: "orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "caret left"
  }), "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true
  }, "Add a sighting")));
};

var style = {
  borderRadius: 0,
  marginBottom: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./src/components/CitizenBeaver/InputForm/index.jsx":
/*!**********************************************************!*\
  !*** ./src/components/CitizenBeaver/InputForm/index.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _misc_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/Placeholder */ "./src/components/misc/Placeholder.jsx");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Topbar */ "./src/components/CitizenBeaver/InputForm/Topbar.jsx");
/* harmony import */ var _MapPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapPreview */ "./src/components/CitizenBeaver/InputForm/MapPreview.jsx");
/* harmony import */ var _MapChooser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapChooser */ "./src/components/CitizenBeaver/InputForm/MapChooser.jsx");
/* harmony import */ var _TheForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TheForm */ "./src/components/CitizenBeaver/InputForm/TheForm.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/components/CitizenBeaver/InputForm/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);






 // import {}



var InputForm = function InputForm(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude,
      mapboxApiAccessToken = _ref.mapboxApiAccessToken;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "InputForm",
    style: {
      paddingTop: '40px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Topbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
    latitude: latitude,
    longitude: longitude,
    stylebuttons: false,
    lockPan: true,
    lockZoom: true,
    stylechooser: false,
    mapboxApiAccessToken: mapboxApiAccessToken,
    height: 150
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      paddingTop: '0.5rem'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TheForm__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (InputForm);

/***/ }),

/***/ "./src/components/CitizenBeaver/InputForm/style.css":
/*!**********************************************************!*\
  !*** ./src/components/CitizenBeaver/InputForm/style.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CitizenBeaver/InputForm/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CitizenBeaver/InputForm/style.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CitizenBeaver/InputForm/style.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/CitizenBeaver/Settings.jsx":
/*!***************************************************!*\
  !*** ./src/components/CitizenBeaver/Settings.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var Settings = function Settings() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: '4rem'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    inverted: true,
    fixed: "top",
    style: menuStyle,
    color: "orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "caret left"
  }), "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    header: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "cog"
  }), "Settings"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "cog"
  }), "App Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    divided: true,
    relaxed: true,
    selection: true,
    link: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"].Group, {
    size: "large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "map"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    corner: true,
    name: "download"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
    as: "a"
  }, "Download Maps"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, {
    as: "a"
  }, "Choose an area to download maps for offline use."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "eye",
    size: "large",
    verticalAlign: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
    as: "a"
  }, "Default View > ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Satellite")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, {
    as: "a"
  }, "Choose what kind of map you want to be the default."))))));
};

var menuStyle = {
  borderRadius: 0,
  marginBottom: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./src/components/Experiments/ProjList.css":
/*!*************************************************!*\
  !*** ./src/components/Experiments/ProjList.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ProjList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Experiments/ProjList.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ProjList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Experiments/ProjList.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./ProjList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Experiments/ProjList.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Experiments/ProjList.jsx":
/*!*************************************************!*\
  !*** ./src/components/Experiments/ProjList.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProjList_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjList.css */ "./src/components/Experiments/ProjList.css");
/* harmony import */ var _ProjList_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProjList_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");







var ProjList = function ProjList(_ref) {
  var structures = _ref.structures;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    basic: true,
    className: "projList",
    style: {
      paddingTop: '40px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    fixed: "top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: "upload",
    color: "blue",
    content: "Sync All"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    toggle: true,
    label: "Unsynced Only"
  }))), Object.keys(structures).map(function (guid, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StructureItemProps, Object.assign({
      guid: guid,
      key: "structItem".concat(idx)
    }, structures[guid]));
  }));
};

var StructureItem = function StructureItem(_ref2) {
  var guid = _ref2.guid,
      fields = _ref2.fields,
      uploaded = _ref2.uploaded,
      uploadFailed = _ref2.uploadFailed,
      uploading = _ref2.uploading,
      color = _ref2.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    raised: true,
    color: color
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "a"
  }, getHeader(fields)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, getMeta(fields)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"].Group, {
    className: "projListDownloadLabels"
  }, !uploaded && !uploadFailed && !uploading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    header: "Not Uploaded",
    content: "This structure has not been Uploaded",
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      icon: "upload",
      color: "yellow",
      content: "Click to sync"
    })
  }) : null, uploaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    header: "Uploaded!",
    content: "This structure has been Uploaded",
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      color: "green",
      icon: "check",
      content: "Synced"
    })
  }) : null, !uploading && !uploaded && uploadFailed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    header: "Upload Error",
    content: "Try uploading again!",
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      color: "red",
      icon: "bug",
      content: "Sync error"
    })
  }) : null, uploading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    header: "Uploading...",
    content: "Fingers crossed!",
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      icon: {
        name: 'circle notch',
        loading: true
      },
      content: "Uploading..."
    })
  }) : null));
};

var StructureItemProps = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["withProps"])(function (_ref3) {
  var uploaded = _ref3.uploaded,
      uploadFailed = _ref3.uploadFailed,
      uploading = _ref3.uploading;
  var color = null;
  if (!uploaded && !uploadFailed && !uploading) color = 'yellow';else if (!uploading && !uploaded && uploadFailed) color = 'red';
  return {
    color: color
  };
})(StructureItem);
/* harmony default export */ __webpack_exports__["default"] = (ProjList);

function getHeader(fields) {
  try {
    return fields.structureID.value;
  } catch (e) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: 'red'
      }
    }, "NO NAME");
  }
}

function getMeta(fields) {
  var observationDate;
  var designerName;

  try {
    observationDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(fields.observationDate.value));
  } catch (e) {}

  try {
    designerName = fields.designerName.value;
  } catch (e) {}

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, designerName ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Created by: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, designerName), " ") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '0.9rem',
      color: '#888'
    }
  }, observationDate ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Last Edited: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, observationDate.format('dddd, MMMM Do')), " ") : null));
}

/***/ }),

/***/ "./src/components/Experiments/data.json":
/*!**********************************************!*\
  !*** ./src/components/Experiments/data.json ***!
  \**********************************************/
/*! exports provided: structures, default */
/***/ (function(module) {

module.exports = {"structures":{"GUID_222":{"uploaded":false,"uploading":false,"uploadFailed":false,"fields":{"designerName":{"value":"Bill Pickel"},"structureID":{"value":"John Day Mile 232"},"observationDate":{"value":"12-09-2018 07:00"},"designVideo":{"value":"https://youtu.be/asdfasdfas"},"designFlowCondition":{"value":"BASEFLOW"},"designType":{"value":"BDA"},"location":{"value":{"width":408,"height":400,"latitude":49.271167612636,"longitude":-123.07160983624571,"zoom":17,"bearing":0,"pitch":0,"altitude":1.5,"maxZoom":20,"minZoom":0,"maxPitch":60,"minPitch":0,"transitionDuration":0,"transitionInterpolator":{"propNames":["longitude","latitude","zoom","bearing","pitch"]},"transitionInterruption":1}},"structureChannelLocation":{"value":"MAIN_CHANNEL"},"complex":{"value":"COMPLEX_342"},"complexExtended":{"value":"NEW_DAM_COMPLEX"},"structurePosition":{"value":"RIVER_LEFT_MARGIN_ATTACHED"},"structureOrientation":{"value":"ANGLED_DOWN"},"channelConstriction":{"value":"95T99"},"numPosts":{"value":"34"},"structureMaterials":{"value":["Key piece (completely limbed)","Key piece (limbed on bottom side only)"]},"materialSources":{"value":"ONSITE"},"maxStrucHeight":{"value":"2.4"},"maxPondDepth":{"value":"1.3"},"waterSurfDiff":{"value":"0.7"},"structLength":{"value":"3"},"expectedUnits":{"value":"Convexity","note":"thenote is good"},"elementsAtLocation":{"value":"Roots","note":"The other note is good"},"channelSpanners":{"value":{"OVER_TOP":65,"BASAL":35,"THROUGHFLOW":0,"AROUND_LEFT":0,"AROUND_RIGHT":0}},"nonChannelSpanners":{"value":{"SHUNT_LEFT":75,"SHUNT_RIGHT":25,"THROUGH":0,"OVER":0,"UNDER":0}},"TypicalFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"BigFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"upstreamHydraulicInfluence":{"value":"1-2"},"downstreamHydraulicInfluence":{"value":"1"},"sideChannelForced":{"value":["None","Single Left"]},"pondExtend":{"value":"Contained"},"floodplainInundation":{"value":["EXTREME_LEFT","EXTREME_RIGHT","SEASONAL_LEFT"]},"pondCapacityFirstYear":{"value":"CLEAN"},"pondCapacityBigFlood":{"value":"CLEAN"},"upstreamSubstrate":{"value":"Fines"},"downstreamSubstrate":{"value":"Gravels"},"expectedUnitsAtStruct":{"value":"Convexity"},"expectedElementsAtStruct":{"value":"MINOR"}}},"GUID_845":{"uploaded":true,"uploading":false,"uploadFailed":false,"fields":{"designerName":{"value":"Gabby Derkins"},"structureID":{"value":"Walpart Parking Lot Project"},"observationDate":{"value":"12-09-2018 09:00"},"designVideo":{"value":"https://youtu.be/asdfasdfas"},"designFlowCondition":{"value":"BASEFLOW"},"designType":{"value":"BDA"},"location":{"value":{"width":408,"height":400,"latitude":49.271167612636,"longitude":-123.07160983624571,"zoom":17,"bearing":0,"pitch":0,"altitude":1.5,"maxZoom":20,"minZoom":0,"maxPitch":60,"minPitch":0,"transitionDuration":0,"transitionInterpolator":{"propNames":["longitude","latitude","zoom","bearing","pitch"]},"transitionInterruption":1}},"structureChannelLocation":{"value":"MAIN_CHANNEL"},"complex":{"value":"COMPLEX_342"},"complexExtended":{"value":"NEW_DAM_COMPLEX"},"structurePosition":{"value":"RIVER_LEFT_MARGIN_ATTACHED"},"structureOrientation":{"value":"ANGLED_DOWN"},"channelConstriction":{"value":"95T99"},"numPosts":{"value":"34"},"structureMaterials":{"value":["Key piece (completely limbed)","Key piece (limbed on bottom side only)"]},"materialSources":{"value":"ONSITE"},"maxStrucHeight":{"value":"2.4"},"maxPondDepth":{"value":"1.3"},"waterSurfDiff":{"value":"0.7"},"structLength":{"value":"3"},"expectedUnits":{"value":"Convexity","note":"thenote is good"},"elementsAtLocation":{"value":"Roots","note":"The other note is good"},"channelSpanners":{"value":{"OVER_TOP":65,"BASAL":35,"THROUGHFLOW":0,"AROUND_LEFT":0,"AROUND_RIGHT":0}},"nonChannelSpanners":{"value":{"SHUNT_LEFT":75,"SHUNT_RIGHT":25,"THROUGH":0,"OVER":0,"UNDER":0}},"TypicalFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"BigFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"upstreamHydraulicInfluence":{"value":"1-2"},"downstreamHydraulicInfluence":{"value":"1"},"sideChannelForced":{"value":["None","Single Left"]},"pondExtend":{"value":"Contained"},"floodplainInundation":{"value":["EXTREME_LEFT","EXTREME_RIGHT","SEASONAL_LEFT"]},"pondCapacityFirstYear":{"value":"CLEAN"},"pondCapacityBigFlood":{"value":"CLEAN"},"upstreamSubstrate":{"value":"Fines"},"downstreamSubstrate":{"value":"Gravels"},"expectedUnitsAtStruct":{"value":"Convexity"},"expectedElementsAtStruct":{"value":"MINOR"}}},"GUID_724":{"uploaded":false,"uploading":false,"uploadFailed":true,"fields":{"designerName":{"value":"Jane Doe"},"structureID":{"value":"John Day mile 316"},"observationDate":{"value":"12-09-2018 09:00"},"designVideo":{"value":"https://youtu.be/asdfasdfas"},"designFlowCondition":{"value":"BASEFLOW"},"designType":{"value":"BDA"},"location":{"value":{"width":408,"height":400,"latitude":49.271167612636,"longitude":-123.07160983624571,"zoom":17,"bearing":0,"pitch":0,"altitude":1.5,"maxZoom":20,"minZoom":0,"maxPitch":60,"minPitch":0,"transitionDuration":0,"transitionInterpolator":{"propNames":["longitude","latitude","zoom","bearing","pitch"]},"transitionInterruption":1}},"structureChannelLocation":{"value":"MAIN_CHANNEL"},"complex":{"value":"COMPLEX_342"},"complexExtended":{"value":"NEW_DAM_COMPLEX"},"structurePosition":{"value":"RIVER_LEFT_MARGIN_ATTACHED"},"structureOrientation":{"value":"ANGLED_DOWN"},"channelConstriction":{"value":"95T99"},"numPosts":{"value":"34"},"structureMaterials":{"value":["Key piece (completely limbed)","Key piece (limbed on bottom side only)"]},"materialSources":{"value":"ONSITE"},"maxStrucHeight":{"value":"2.4"},"maxPondDepth":{"value":"1.3"},"waterSurfDiff":{"value":"0.7"},"structLength":{"value":"3"},"expectedUnits":{"value":"Convexity","note":"thenote is good"},"elementsAtLocation":{"value":"Roots","note":"The other note is good"},"channelSpanners":{"value":{"OVER_TOP":65,"BASAL":35,"THROUGHFLOW":0,"AROUND_LEFT":0,"AROUND_RIGHT":0}},"nonChannelSpanners":{"value":{"SHUNT_LEFT":75,"SHUNT_RIGHT":25,"THROUGH":0,"OVER":0,"UNDER":0}},"TypicalFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"BigFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"upstreamHydraulicInfluence":{"value":"1-2"},"downstreamHydraulicInfluence":{"value":"1"},"sideChannelForced":{"value":["None","Single Left"]},"pondExtend":{"value":"Contained"},"floodplainInundation":{"value":["EXTREME_LEFT","EXTREME_RIGHT","SEASONAL_LEFT"]},"pondCapacityFirstYear":{"value":"CLEAN"},"pondCapacityBigFlood":{"value":"CLEAN"},"upstreamSubstrate":{"value":"Fines"},"downstreamSubstrate":{"value":"Gravels"},"expectedUnitsAtStruct":{"value":"Convexity"},"expectedElementsAtStruct":{"value":"MINOR"}}},"GUID_623":{"uploaded":false,"uploading":true,"uploadFailed":false,"fields":{"designerName":{"value":"Russell Sprout"},"structureID":{"value":"Urban beaver project"},"observationDate":{"value":"12-09-2018 09:00"},"designVideo":{"value":"https://youtu.be/asdfasdfas"},"designFlowCondition":{"value":"BASEFLOW"},"designType":{"value":"BDA"},"location":{"value":{"width":408,"height":400,"latitude":49.271167612636,"longitude":-123.07160983624571,"zoom":17,"bearing":0,"pitch":0,"altitude":1.5,"maxZoom":20,"minZoom":0,"maxPitch":60,"minPitch":0,"transitionDuration":0,"transitionInterpolator":{"propNames":["longitude","latitude","zoom","bearing","pitch"]},"transitionInterruption":1}},"structureChannelLocation":{"value":"MAIN_CHANNEL"},"complex":{"value":"COMPLEX_342"},"complexExtended":{"value":"NEW_DAM_COMPLEX"},"structurePosition":{"value":"RIVER_LEFT_MARGIN_ATTACHED"},"structureOrientation":{"value":"ANGLED_DOWN"},"channelConstriction":{"value":"95T99"},"numPosts":{"value":"34"},"structureMaterials":{"value":["Key piece (completely limbed)","Key piece (limbed on bottom side only)"]},"materialSources":{"value":"ONSITE"},"maxStrucHeight":{"value":"2.4"},"maxPondDepth":{"value":"1.3"},"waterSurfDiff":{"value":"0.7"},"structLength":{"value":"3"},"expectedUnits":{"value":"Convexity","note":"thenote is good"},"elementsAtLocation":{"value":"Roots","note":"The other note is good"},"channelSpanners":{"value":{"OVER_TOP":65,"BASAL":35,"THROUGHFLOW":0,"AROUND_LEFT":0,"AROUND_RIGHT":0}},"nonChannelSpanners":{"value":{"SHUNT_LEFT":75,"SHUNT_RIGHT":25,"THROUGH":0,"OVER":0,"UNDER":0}},"TypicalFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"BigFlood":{"value":{"behavior":"Minor","location":["Left","Center"]}},"upstreamHydraulicInfluence":{"value":"1-2"},"downstreamHydraulicInfluence":{"value":"1"},"sideChannelForced":{"value":["None","Single Left"]},"pondExtend":{"value":"Contained"},"floodplainInundation":{"value":["EXTREME_LEFT","EXTREME_RIGHT","SEASONAL_LEFT"]},"pondCapacityFirstYear":{"value":"CLEAN"},"pondCapacityBigFlood":{"value":"CLEAN"},"upstreamSubstrate":{"value":"Fines"},"downstreamSubstrate":{"value":"Gravels"},"expectedUnitsAtStruct":{"value":"Convexity"},"expectedElementsAtStruct":{"value":"MINOR"}}}}};

/***/ }),

/***/ "./src/components/Experiments/experiments.fixture.js":
/*!***********************************************************!*\
  !*** ./src/components/Experiments/experiments.fixture.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _ProjList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjList */ "./src/components/Experiments/ProjList.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.json */ "./src/components/Experiments/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/components/Experiments/data.json", 1);




var fixtures = [];
var devFixtures = [{
  name: 'ProjList',
  component: _ProjList__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    structures: _data_json__WEBPACK_IMPORTED_MODULE_3__["structures"]
  }
}];
var finalFixes = fixtures.concat(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_2__["default"].env === 'development' ? devFixtures : [])).map(function (fix) {
  console.log('fix.component.displayName', fix);
  fix.component.displayName = "Experiments/".concat(fix.name);
  return fix;
});
/* harmony default export */ __webpack_exports__["default"] = (finalFixes);

/***/ }),

/***/ "./src/components/common/charts/BarChart.jsx":
/*!***************************************************!*\
  !*** ./src/components/common/charts/BarChart.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-vis */ "./node_modules/react-vis/es/index.js");



var BarChart = function BarChart(_ref) {
  var data = _ref.data,
      xAxis = _ref.xAxis,
      yAxis = _ref.yAxis,
      height = _ref.height;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["FlexibleWidthXYPlot"], {
    height: height
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["HorizontalGridLines"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalGridLines"], null), data.map(function (dseries, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalBarSeries"], {
      key: "series".concat(idx),
      data: dseries
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["Borders"], {
    style: {
      all: {
        fill: '#fff'
      }
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["XAxis"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    hideLine: true,
    hideTicks: true,
    title: xAxis,
    top: height,
    position: "end",
    style: {
      fontSize: 13,
      fontWeight: 'bold'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
    hideLine: true,
    hideTicks: true,
    title: yAxis,
    style: {
      fontSize: 13,
      fontWeight: 'bold'
    }
  }));
};

BarChart.defaultProps = {
  data: [],
  xAxis: '',
  yAxis: '',
  height: 300
};
/* harmony default export */ __webpack_exports__["default"] = (BarChart);

/***/ }),

/***/ "./src/components/common/charts/LineChart.jsx":
/*!****************************************************!*\
  !*** ./src/components/common/charts/LineChart.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-vis */ "./node_modules/react-vis/es/index.js");



var LineChart = function LineChart(_ref) {
  var data = _ref.data,
      xAxis = _ref.xAxis,
      yAxis = _ref.yAxis,
      height = _ref.height,
      marks = _ref.marks;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["FlexibleWidthXYPlot"], {
    height: height
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["HorizontalGridLines"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalGridLines"], null), data.map(function (dseries, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["LineSeries"], {
      key: "series".concat(idx),
      data: dseries
    });
  }), marks ? data.map(function (dseries, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["MarkSeries"], {
      key: "series".concat(idx),
      data: dseries
    });
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["Borders"], {
    style: {
      all: {
        fill: '#fff'
      }
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["XAxis"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    hideLine: true,
    hideTicks: true,
    title: xAxis,
    top: height,
    position: "end",
    style: {
      fontSize: 13,
      fontWeight: 'bold'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
    hideLine: true,
    hideTicks: true,
    title: yAxis,
    style: {
      fontSize: 13,
      fontWeight: 'bold'
    }
  }));
};

LineChart.defaultProps = {
  data: [],
  xAxis: '',
  yAxis: '',
  height: 300
};
/* harmony default export */ __webpack_exports__["default"] = (LineChart);

/***/ }),

/***/ "./src/components/common/charts/charts.fixture.js":
/*!********************************************************!*\
  !*** ./src/components/common/charts/charts.fixture.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChart */ "./src/components/common/charts/LineChart.jsx");
/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarChart */ "./src/components/common/charts/BarChart.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./src/config.js");




var fixtures = [];
var devFixtures = [{
  name: 'LineChart',
  component: _LineChart__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    xAxis: 'X Axis (m)',
    yAxis: 'Y Axis (m)',
    height: 500,
    data: [[{
      x: 1,
      y: 1
    }, {
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 4
    }], [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 3
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 3
    }]]
  }
}, {
  name: 'LineChart (with marks)',
  component: _LineChart__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    xAxis: 'X Axis (m)',
    yAxis: 'Y Axis (m)',
    marks: true,
    height: 500,
    data: [[{
      x: 1,
      y: 1
    }, {
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 4
    }], [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 3
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 3
    }]]
  }
}, {
  name: 'BarChart',
  component: _BarChart__WEBPACK_IMPORTED_MODULE_2__["default"],
  props: {
    xAxis: 'X Axis (m)',
    yAxis: 'Y Axis (m)',
    height: 500,
    data: [[{
      x: 1,
      y: 1
    }, {
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 4
    }], [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 3
    }, {
      x: 3,
      y: 3
    }, {
      x: 4,
      y: 3
    }]]
  }
}];
var finalFixes = fixtures.concat(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_3__["default"].env === 'development' ? devFixtures : [])).map(function (fix) {
  fix.component.displayName = "Common/Charts/".concat(fix.component.name);
  return fix;
});
/* harmony default export */ __webpack_exports__["default"] = (finalFixes);

/***/ }),

/***/ "./src/components/common/maps/BaseMap.css":
/*!************************************************!*\
  !*** ./src/components/common/maps/BaseMap.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./BaseMap.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/common/maps/BaseMap.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./BaseMap.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/common/maps/BaseMap.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./BaseMap.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/common/maps/BaseMap.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/common/maps/BaseMap.jsx":
/*!************************************************!*\
  !*** ./src/components/common/maps/BaseMap.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/util */ "./src/lib/util.js");
/* harmony import */ var viewport_mercator_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! viewport-mercator-project */ "./node_modules/viewport-mercator-project/dist/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/common/maps/styles/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _styles_StyleButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/StyleButtons */ "./src/components/common/maps/styles/StyleButtons.jsx");
/* harmony import */ var _BaseMap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseMap.css */ "./src/components/common/maps/BaseMap.css");
/* harmony import */ var _BaseMap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_BaseMap_css__WEBPACK_IMPORTED_MODULE_8__);









/**
 * Note that this component technically has state but it is designed to be functionally stateless
 */

var BaseMap = function BaseMap(_ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      height = _ref$size.height,
      width = _ref$size.width,
      viewport = _ref.viewport,
      mapStyles = _ref.mapStyles,
      currStyle = _ref.currStyle,
      mapboxApiAccessToken = _ref.mapboxApiAccessToken,
      setCurrStyle = _ref.setCurrStyle,
      onViewportChange = _ref.onViewportChange,
      onMapDataEvent = _ref.onMapDataEvent,
      stylechooser = _ref.stylechooser;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, viewport, {
    height: height,
    width: width,
    mapStyle: mapStyles[currStyle].style,
    onData: onMapDataEvent,
    onViewportChange: onViewportChange,
    mapboxApiAccessToken: mapboxApiAccessToken
  }), stylechooser ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_StyleButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currStyle: currStyle,
    mapStyles: mapStyles,
    setCurrStyle: setCurrStyle
  }) : null, children && Array.isArray(children) ? children.map(function (c) {
    return handleChild(c, viewport, height, width);
  }) : handleChild(children, viewport, height, width));
};

function handleChild(child, viewport, height, width) {
  return typeof child === 'function' ? child(viewport, height, width) : child;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_6__["defaultProps"])({
  stylechooser: true,
  zoom: 12,
  latitude: 49.3050394,
  longitude: -123.1398254,
  size: {
    height: 500,
    width: 600
  },
  mapStyles: _styles__WEBPACK_IMPORTED_MODULE_5__["default"],
  lockToBounds: true
}), Object(recompose__WEBPACK_IMPORTED_MODULE_6__["withStateHandlers"])(function (_ref2) {
  var maxBounds = _ref2.maxBounds,
      latitude = _ref2.latitude,
      longitude = _ref2.longitude,
      zoom = _ref2.zoom,
      pitch = _ref2.pitch,
      minPitch = _ref2.minPitch,
      maxPitch = _ref2.maxPitch,
      bearing = _ref2.bearing;
  return {
    currStyle: 0,
    viewport: {
      latitude: maxBounds ? (maxBounds[1] + maxBounds[3]) / 2 : latitude,
      longitude: maxBounds ? (maxBounds[0] + maxBounds[2]) / 2 : longitude,
      zoom: zoom,
      minPitch: minPitch,
      maxPitch: maxPitch,
      bearing: bearing || 0,
      pitch: pitch || 0
    }
  };
}, {
  // This one's a thunk!!
  setCurrStyle: function setCurrStyle() {
    return function (currStyle) {
      return {
        currStyle: currStyle
      };
    };
  },
  recalcZoomBounds: function recalcZoomBounds(_ref3, _ref4) {
    var viewport = _ref3.viewport;
    var maxBounds = _ref4.maxBounds,
        size = _ref4.size,
        longitude = _ref4.longitude,
        latitude = _ref4.latitude;
    return function (nextProps) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Can't do anything without any bounds
      if (!maxBounds && !nextProps.maxBounds) return; // Any time the bounds change we want to recalc the props

      var minlng, minlat, maxlng, maxlat;
      var maxZoom = nextProps.maxZoom,
          minZoom = nextProps.minZoom;

      if (nextProps.maxBounds) {
        var _nextProps$maxBounds = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextProps.maxBounds, 4);

        minlng = _nextProps$maxBounds[0];
        minlat = _nextProps$maxBounds[1];
        maxlng = _nextProps$maxBounds[2];
        maxlat = _nextProps$maxBounds[3];
      } else {
        var _maxBounds = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(maxBounds, 4);

        minlng = _maxBounds[0];
        minlat = _maxBounds[1];
        maxlng = _maxBounds[2];
        maxlat = _maxBounds[3];
      } // Bounds change


      var boundsChange = nextProps.maxBounds && !Object(_lib_util__WEBPACK_IMPORTED_MODULE_3__["numericArrayCompare"])(nextProps.maxBounds, maxBounds);
      var sizeChange = null;

      if (nextProps.size) {
        sizeChange = nextProps.size.width !== 0 && (nextProps.size.width !== size.width || nextProps.size.height !== size.height);
      }

      if (boundsChange) {
        var _nextProps$maxBounds2 = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextProps.maxBounds, 4);

        minlng = _nextProps$maxBounds2[0];
        minlat = _nextProps$maxBounds2[1];
        maxlng = _nextProps$maxBounds2[2];
        maxlat = _nextProps$maxBounds2[3];
      }

      var newLat = viewport.latitude;
      var newLong = viewport.longitude;
      var zoom = viewport.zoom;
      var newPitch = viewport.pitch;
      var newBearing = viewport.Bearing;

      if (boundsChange || sizeChange || force) {
        // On the first run we're going to try to center the bounds.
        var _nextProps$size = nextProps.size,
            width = _nextProps$size.width,
            height = _nextProps$size.height;

        try {
          var wmview = new viewport_mercator_project__WEBPACK_IMPORTED_MODULE_4__["default"]({
            width: width > 0 ? width : size.width,
            height: height > 0 ? height : size.height
          });
          console.log('before boundschange', {
            wmview: wmview,
            bds: [[minlng, minlat], [maxlng, maxlat]]
          });
          var fittedBounds = wmview.fitBounds([[minlng, minlat], [maxlng, maxlat]], {
            padding: 20,
            offset: [0, -40]
          });
          newLat = fittedBounds.latitude;
          newLong = fittedBounds.longitude;
          zoom = fittedBounds.zoom;
        } catch (e) {
          // Sometimes we don't have a valid bound. Don't make a big deal out of it.
          console.error(e);
        }

        var newViewport = Object.assign({}, viewport, {
          latitide: newLat,
          longitude: newLong,
          zoom: zoom,
          bearing: newBearing,
          pitch: newPitch
        });
        var zoombounds = {
          max: maxZoom || viewport.zoom + 6,
          min: minZoom || viewport.zoom - 6
        };
        return {
          viewport: newViewport,
          zoombounds: zoombounds
        };
      }
    };
  },
  onViewportChange: function onViewportChange(_ref5, _ref6) {
    var zoombounds = _ref5.zoombounds,
        oldViewport = _ref5.viewport;
    var maxBounds = _ref6.maxBounds,
        lockPan = _ref6.lockPan,
        lockToBounds = _ref6.lockToBounds,
        lockZoom = _ref6.lockZoom,
        longitude = _ref6.longitude,
        latitude = _ref6.latitude;
    return function (viewport) {
      // Here we set/reset the bounds
      if (lockPan) {
        viewport.longitude = oldViewport.longitude;
        viewport.latitude = oldViewport.latitude;
      } else if (maxBounds && lockToBounds) {
        if (viewport.longitude < maxBounds[0]) viewport.longitude = maxBounds[0];else if (viewport.longitude > maxBounds[2]) viewport.longitude = maxBounds[2];
        if (viewport.latitude < maxBounds[1]) viewport.latitude = maxBounds[1];else if (viewport.latitude > maxBounds[3]) viewport.latitude = maxBounds[3];
      } // Here we set the max and min zoom bounds.


      if (lockZoom) {
        viewport.zoom = oldViewport.zoom;
      } else if (zoombounds) {
        if (viewport.zoom < zoombounds.min) viewport.zoom = zoombounds.min;else if (viewport.zoom > zoombounds.max) viewport.zoom = zoombounds.max;
      } // console.log('VIEWPORT', viewport)


      return {
        viewport: viewport
      };
    };
  }
}), // Unfortunately we need some lifecycle events for when things happen
Object(recompose__WEBPACK_IMPORTED_MODULE_6__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    var _this$props = this.props,
        viewport = _this$props.viewport,
        onViewportChange = _this$props.onViewportChange,
        recalcZoomBounds = _this$props.recalcZoomBounds;
    onViewportChange(viewport);
    recalcZoomBounds(this.props, true);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this$props2 = this.props,
        recalcZoomBounds = _this$props2.recalcZoomBounds,
        latitude = _this$props2.latitude,
        longitude = _this$props2.longitude; // If someone changes the lat/lng props then immediately jump

    if (longitude !== nextProps.longitude || latitude !== nextProps.latitude) {
      nextProps.viewport.latitude = nextProps.latitude;
      nextProps.viewport.longitude = nextProps.longitude;
    }

    recalcZoomBounds(nextProps);
  }
}))(BaseMap));

/***/ }),

/***/ "./src/components/common/maps/MarkerIcon.jsx":
/*!***************************************************!*\
  !*** ./src/components/common/maps/MarkerIcon.jsx ***!
  \***************************************************/
/*! exports provided: default, IconWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");





var MarkerIcon = function MarkerIcon(_ref) {
  var project = _ref.project,
      open = _ref.open;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
    flowing: true,
    hoverable: !open,
    open: open,
    className: "mapPopup",
    trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      style: {
        textShadow: '2px 2px 2px #00000099'
      },
      className: "markerIcon",
      name: "map marker",
      size: "large",
      color: "red"
    })
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    link: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: project.Banner
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, project.Title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "date"
  }, "Joined in 2015")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, null, project.Watershed)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
    extra: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Open Project"))));
};

/* harmony default export */ __webpack_exports__["default"] = (MarkerIcon);
/**
 * This is a popup state and a bit hard to test in cosmos so I write a wrapper
 * with a toggle
 */

var Wrapped = function Wrapped(_ref2) {
  var open = _ref2.open,
      setOpen = _ref2.setOpen,
      props = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["open", "setOpen"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      height: 500,
      width: 400,
      border: '2px dashed #666666'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarkerIcon, Object.assign({
    open: open
  }, props))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "yellow",
    onClick: function onClick() {
      return setOpen(!open);
    },
    content: "Keep Me Open"
  }));
};

var IconWrapper = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_3__["withState"])('open', 'setOpen', false))(Wrapped);

/***/ }),

/***/ "./src/components/common/maps/MarkerMap.jsx":
/*!**************************************************!*\
  !*** ./src/components/common/maps/MarkerMap.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _BaseMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseMap */ "./src/components/common/maps/BaseMap.jsx");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");







var MarkerMap = function MarkerMap(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude,
      props = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["latitude", "longitude"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      minHeight: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_4__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BaseMap__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
      longitude: longitude,
      latitude: latitude,
      size: {
        height: height < 500 ? 500 : height,
        width: width
      }
    }), // Render props here
    function (viewport) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        viewport: viewport,
        longitude: longitude,
        latitude: latitude,
        offsetLeft: -20,
        offsetTop: -30
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        style: {
          textShadow: '2px 2px 2px #00000099'
        },
        name: "map marker",
        size: "big",
        color: "red"
      }));
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MarkerMap);

/***/ }),

/***/ "./src/components/common/maps/MarkersMap.jsx":
/*!***************************************************!*\
  !*** ./src/components/common/maps/MarkersMap.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseMap */ "./src/components/common/maps/BaseMap.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _lib_mapUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/mapUtil */ "./src/lib/mapUtil.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");









var MarkerMap = function MarkerMap(_ref) {
  var data = _ref.data,
      center = _ref.center,
      bounds = _ref.bounds,
      props = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["data", "center", "bounds"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      minHeight: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_4__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BaseMap__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, {
      maxBounds: bounds,
      longitude: center[0],
      latitude: center[1],
      size: {
        height: height < 500 ? 500 : height,
        width: width
      }
    }), // Render props here
    function (viewport) {
      return data.map(function (_ref3) {
        var latitude = _ref3.latitude,
            longitude = _ref3.longitude;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
          viewport: viewport,
          longitude: longitude,
          latitude: latitude,
          offsetLeft: -20,
          offsetTop: -30
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
          flowing: true,
          trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
            className: "markerIcon",
            name: "map marker",
            size: "large",
            color: "red",
            style: {
              textShadow: '2px 2px 2px #00000099'
            }
          })
        }, "Hello: (", latitude, ", ", longitude, ")"));
      });
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_7__["withProps"])(function (_ref4) {
  var data = _ref4.data;
  return {
    center: Object(_lib_mapUtil__WEBPACK_IMPORTED_MODULE_6__["findCenter"])(data.map(function (d) {
      return [d.longitude, d.latitude];
    })),
    bounds: Object(_lib_mapUtil__WEBPACK_IMPORTED_MODULE_6__["findBounds"])(data.map(function (d) {
      return [d.longitude, d.latitude];
    }))
  };
}))(MarkerMap));

/***/ }),

/***/ "./src/components/common/maps/maps.fixture.js":
/*!****************************************************!*\
  !*** ./src/components/common/maps/maps.fixture.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _BaseMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseMap */ "./src/components/common/maps/BaseMap.jsx");
/* harmony import */ var _MarkerMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkerMap */ "./src/components/common/maps/MarkerMap.jsx");
/* harmony import */ var _MarkersMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkersMap */ "./src/components/common/maps/MarkersMap.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var fakeGeoSeed = {
  latitude: 49.3050394,
  longitude: -123.1398254
};
var randomLatLngs = [];

lodash__WEBPACK_IMPORTED_MODULE_5___default.a.times(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.random(10, 40), function () {
  randomLatLngs.push({
    latitude: fakeGeoSeed.latitude + lodash__WEBPACK_IMPORTED_MODULE_5___default.a.random(-0.002, 0.002),
    longitude: fakeGeoSeed.longitude + lodash__WEBPACK_IMPORTED_MODULE_5___default.a.random(-0.002, 0.002)
  });
});

var fixtures = [];
var devFixtures = [{
  name: 'BaseMap',
  component: _BaseMap__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    // maxBounds,
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_4__["mapBoxToken"],
    size: {
      height: 600,
      width: 800
    }
  }
}, {
  name: 'Custom Syle',
  component: _BaseMap__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    // maxBounds,
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_4__["mapBoxToken"],
    mapStyles: [{
      toolTip: 'WHOA',
      icon: 'image',
      color: 'blue',
      style: __webpack_require__(/*! ./styles/mockmap.json */ "./src/components/common/maps/styles/mockmap.json")
    }],
    size: {
      height: 600,
      width: 800
    }
  }
}, {
  name: 'Marker Map',
  component: _MarkerMap__WEBPACK_IMPORTED_MODULE_2__["default"],
  props: {
    // maxBounds,
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_4__["mapBoxToken"],
    lockPan: true,
    maxZoom: 18,
    minZoom: 2,
    latitude: 49.3050394,
    longitude: -123.1398254
  }
}, {
  name: 'Multiple Markers Map',
  component: _MarkersMap__WEBPACK_IMPORTED_MODULE_3__["default"],
  props: {
    // maxBounds,
    data: randomLatLngs,
    mapboxApiAccessToken: _config__WEBPACK_IMPORTED_MODULE_4__["mapBoxToken"],
    maxZoom: 18,
    minZoom: 2
  }
}];
var finalFixes = fixtures.concat(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_4__["default"].env === 'development' ? devFixtures : [])).map(function (fix) {
  console.log('fix.component.displayName', fix);
  fix.component.displayName = "Common/Maps/".concat(fix.name);
  return fix;
});
/* harmony default export */ __webpack_exports__["default"] = (finalFixes);

/***/ }),

/***/ "./src/components/common/maps/styles/BasicMap.json":
/*!*********************************************************!*\
  !*** ./src/components/common/maps/styles/BasicMap.json ***!
  \*********************************************************/
/*! exports provided: version, name, metadata, center, zoom, bearing, pitch, sources, sprite, glyphs, layers, created, id, modified, owner, visibility, draft, default */
/***/ (function(module) {

module.exports = {"version":8,"name":"Basic Template","metadata":{"mapbox:origin":"basic-template-v1","mapbox:autocomposite":true,"mapbox:type":"template","mapbox:sdk-support":{"js":"0.49.0","android":"6.5.0","ios":"4.4.0"}},"center":[2.3176,48.8665],"zoom":12,"bearing":0,"pitch":0,"sources":{"mapbox-streets":{"url":"mapbox://mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/raychaser/cjngl84yw1js52rqgjswrnjq1","glyphs":"mapbox://fonts/raychaser/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","layout":{},"paint":{"background-color":["interpolate",["linear"],["zoom"],5,"hsl(38, 43%, 89%)",7,"hsl(38, 48%, 86%)"]}},{"id":"national_park","type":"fill","source":"mapbox-streets","source-layer":"landuse_overlay","filter":["==","class","national_park"],"layout":{},"paint":{"fill-color":"hsl(78, 51%, 73%)","fill-opacity":["interpolate",["linear"],["zoom"],5,0,6,0.5]}},{"id":"landuse","type":"fill","source":"mapbox-streets","source-layer":"landuse","filter":["in","class","hospital","park","pitch","school"],"layout":{},"paint":{"fill-color":["match",["get","class"],"park","hsl(78, 51%, 73%)","pitch","hsl(78, 51%, 73%)","hospital","hsl(0, 56%, 89%)","school","hsl(25, 45%, 85%)","hsla(0, 0%, 0%, 0)"],"fill-opacity":["interpolate",["linear"],["zoom"],5,0,6,1]}},{"id":"waterway","type":"line","source":"mapbox-streets","source-layer":"waterway","minzoom":8,"filter":["all",["==","$type","LineString"],["in","class","canal","river"]],"layout":{"line-join":"round","line-cap":"round"},"paint":{"line-color":"hsl(205, 76%, 70%)","line-width":["interpolate",["exponential",1.3],["zoom"],8.5,0.1,20,8],"line-opacity":["interpolate",["linear"],["zoom"],8,0,8.5,1]}},{"id":"water","type":"fill","source":"mapbox-streets","source-layer":"water","layout":{},"paint":{"fill-color":["interpolate",["linear"],["zoom"],5,"hsl(205, 76%, 67%)",7,"hsl(205, 76%, 70%)"]}},{"id":"aeroway-polygon","type":"fill","source":"mapbox-streets","source-layer":"aeroway","filter":["all",["==","$type","Polygon"],["in","type","helipad","runway","taxiway"]],"layout":{},"paint":{"fill-color":"hsl(0, 0%, 77%)"}},{"id":"aeroway-line","type":"line","source":"mapbox-streets","source-layer":"aeroway","filter":["all",["==","$type","LineString"],["in","type","runway","taxiway"]],"layout":{},"paint":{"line-width":["interpolate",["exponential",1.5],["zoom"],10,0.5,18,20],"line-color":"hsl(0, 0%, 77%)"}},{"id":"building","type":"fill","source":"mapbox-streets","source-layer":"building","minzoom":15,"filter":["all",["!=","type","building:part"],["==","underground","false"]],"layout":{},"paint":{"fill-color":"hsl(38, 28%, 77%)","fill-opacity":["interpolate",["linear"],["zoom"],15.5,0,16,1]}},{"id":"pedestrian-path","type":"line","source":"mapbox-streets","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["!=","type","platform"],["in","class","path","pedestrian"]]],"layout":{"line-join":"round","line-cap":"round"},"paint":{"line-width":["interpolate",["exponential",1.5],["zoom"],14,["match",["get","class"],"pedestrian",1,"path",0.75,0.75],20,["match",["get","class"],"pedestrian",8,"path",5,5]],"line-color":["match",["get","type"],"sidewalk","hsl(38, 35%, 80%)","crossing","hsl(38, 35%, 80%)","hsl(38, 28%, 70%)"]}},{"id":"tunnel","type":"line","source":"mapbox-streets","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!=","type","service:parking_aisle"],["==","structure","tunnel"],["in","class","link","motorway","motorway_link","primary","secondary","service","street","street_limited","tertiary","track","trunk"]]],"layout":{"line-join":"round"},"paint":{"line-width":["interpolate",["exponential",1.5],["zoom"],5,["match",["get","class"],"motorway",0.5,"trunk",0.5,"primary",0.5,"secondary",0.01,"tertiary",0.01,"street",0,"street_limited",0,"motorway_link",0,"service",0,"track",0,"link",0,0],12,["match",["get","class"],"motorway",3,"trunk",3,"primary",3,"secondary",2,"tertiary",2,"street",0.5,"street_limited",0.5,"motorway_link",0.5,"service",0,"track",0,"link",0,0],18,["match",["get","class"],"motorway",30,"trunk",30,"primary",30,"secondary",24,"tertiary",24,"street",12,"street_limited",12,"motorway_link",12,"service",10,"track",10,"link",10,10]],"line-color":["match",["get","class"],"street","hsl(38, 100%, 98%)","street_limited","hsl(38, 100%, 98%)","service","hsl(38, 100%, 98%)","track","hsl(38, 100%, 98%)","link","hsl(38, 100%, 98%)","hsl(0, 0%, 100%)"],"line-dasharray":[0.2,0.2]}},{"id":"road","type":"line","source":"mapbox-streets","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!=","type","service:parking_aisle"],["!in","structure","bridge","tunnel"],["in","class","link","motorway","motorway_link","primary","secondary","service","street","street_limited","tertiary","track","trunk"]]],"layout":{"line-join":"round","line-cap":"round"},"paint":{"line-width":["interpolate",["exponential",1.5],["zoom"],5,["match",["get","class"],"motorway",0.5,"trunk",0.5,"primary",0.5,"secondary",0.01,"tertiary",0.01,"street",0,"street_limited",0,"motorway_link",0,"service",0,"track",0,"link",0,0],12,["match",["get","class"],"motorway",3,"trunk",3,"primary",3,"secondary",2,"tertiary",2,"street",0.5,"street_limited",0.5,"motorway_link",0.5,"service",0,"track",0,"link",0,0],18,["match",["get","class"],"motorway",30,"trunk",30,"primary",30,"secondary",24,"tertiary",24,"street",12,"street_limited",12,"motorway_link",12,"service",10,"track",10,"link",10,10]],"line-color":["match",["get","class"],"street","hsl(38, 100%, 98%)","street_limited","hsl(38, 100%, 98%)","service","hsl(38, 100%, 98%)","track","hsl(38, 100%, 98%)","link","hsl(38, 100%, 98%)","hsl(0, 0%, 100%)"]}},{"id":"bridge-case","type":"line","source":"mapbox-streets","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!=","type","service:parking_aisle"],["==","structure","bridge"],["in","class","link","motorway","motorway_link","primary","secondary","service","street","street_limited","tertiary","track","trunk"]]],"layout":{"line-join":"round"},"paint":{"line-width":["interpolate",["exponential",1.5],["zoom"],10,1,16,2],"line-color":"hsl(38, 48%, 86%)","line-gap-width":["interpolate",["exponential",1.5],["zoom"],5,["match",["get","class"],"motorway",0.5,"trunk",0.5,"primary",0.5,"secondary",0.01,"tertiary",0.01,"street",0,"street_limited",0,"motorway_link",0,"service",0,"track",0,"link",0,0],12,["match",["get","class"],"motorway",3,"trunk",3,"primary",3,"secondary",2,"tertiary",2,"street",0.5,"street_limited",0.5,"motorway_link",0.5,"service",0,"track",0,"link",0,0],18,["match",["get","class"],"motorway",30,"trunk",30,"primary",30,"secondary",24,"tertiary",24,"street",12,"street_limited",12,"motorway_link",12,"service",10,"track",10,"link",10,10]]}},{"id":"bridge","type":"line","source":"mapbox-streets","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!=","type","service:parking_aisle"],["==","structure","bridge"],["in","class","link","motorway","motorway_link","primary","secondary","service","street","street_limited","tertiary","track","trunk"]]],"layout":{"line-join":"round","line-cap":"round"},"paint":{"line-width":["interpolate",["exponential",1.5],["zoom"],5,["match",["get","class"],"motorway",0.5,"trunk",0.5,"primary",0.5,"secondary",0.01,"tertiary",0.01,"street",0,"street_limited",0,"motorway_link",0,"service",0,"track",0,"link",0,0],12,["match",["get","class"],"motorway",3,"trunk",3,"primary",3,"secondary",2,"tertiary",2,"street",0.5,"street_limited",0.5,"motorway_link",0.5,"service",0,"track",0,"link",0,0],18,["match",["get","class"],"motorway",30,"trunk",30,"primary",30,"secondary",24,"tertiary",24,"street",12,"street_limited",12,"motorway_link",12,"service",10,"track",10,"link",10,10]],"line-color":["match",["get","class"],"street","hsl(38, 100%, 98%)","street_limited","hsl(38, 100%, 98%)","service","hsl(38, 100%, 98%)","track","hsl(38, 100%, 98%)","link","hsl(38, 100%, 98%)","hsl(0, 0%, 100%)"]}},{"id":"admin-state-province","type":"line","source":"mapbox-streets","source-layer":"admin","minzoom":2,"filter":["all",["==","maritime",0],[">=","admin_level",3]],"layout":{"line-join":"round","line-cap":"round"},"paint":{"line-dasharray":["step",["zoom"],["literal",[2,0]],7,["literal",[2,2,6,2]]],"line-width":["interpolate",["linear"],["zoom"],7,0.75,12,1.5],"line-opacity":["interpolate",["linear"],["zoom"],2,0,3,1],"line-color":["step",["zoom"],"hsl(0, 0%, 80%)",4,"hsl(0, 0%, 65%)"]}},{"id":"admin-country","type":"line","source":"mapbox-streets","source-layer":"admin","minzoom":1,"filter":["all",["<=","admin_level",2],["==","disputed",0],["==","maritime",0]],"layout":{"line-join":"round","line-cap":"round"},"paint":{"line-color":"hsl(0, 0%, 50%)","line-width":["interpolate",["linear"],["zoom"],3,0.5,10,2]}},{"id":"admin-country-disputed","type":"line","source":"mapbox-streets","source-layer":"admin","minzoom":1,"filter":["all",["<=","admin_level",2],["==","disputed",1],["==","maritime",0]],"layout":{"line-join":"round"},"paint":{"line-color":"hsl(0, 0%, 50%)","line-width":["interpolate",["linear"],["zoom"],3,0.5,10,2],"line-dasharray":[1.5,1.5]}},{"id":"road-label","type":"symbol","source":"mapbox-streets","source-layer":"road_label","minzoom":12,"filter":["in","class","link","motorway","pedestrian","primary","secondary","street","street_limited","tertiary","trunk"],"layout":{"text-size":["interpolate",["linear"],["zoom"],9,["match",["get","class"],"motorway",10,"trunk",10,"primary",10,"secondary",10,"tertiary",10,9],20,["match",["get","class"],"motorway",15,"trunk",15,"primary",15,"secondary",15,"tertiary",15,14]],"text-max-angle":30,"text-font":["Roboto Regular","Arial Unicode MS Regular"],"symbol-placement":"line","text-padding":1,"text-rotation-alignment":"map","text-pitch-alignment":"viewport","text-field":["get","name_en"]},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1}},{"id":"poi-label","type":"symbol","source":"mapbox-streets","source-layer":"poi_label","filter":["<=","scalerank",3],"layout":{"text-line-height":1.1,"text-size":["interpolate",["linear"],["zoom"],10,11,18,13],"icon-image":["concat",["get","maki"],"-11"],"text-max-angle":38,"text-font":["Roboto Regular","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0.75],"text-anchor":"top","text-field":["get","name_en"],"text-max-width":8},"paint":{"text-color":"hsl(38, 19%, 29%)","text-halo-color":"hsla(0, 0%, 100%, 0.75)","text-halo-width":1,"text-halo-blur":0.5}},{"id":"airport-label","type":"symbol","source":"mapbox-streets","source-layer":"airport_label","filter":["<=","scalerank",2],"layout":{"text-line-height":1.1,"text-size":["interpolate",["linear"],["zoom"],10,12,18,18],"icon-image":["step",["zoom"],["concat",["get","maki"],"-11"],13,["concat",["get","maki"],"-15"]],"text-font":["Roboto Regular","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0.75],"text-anchor":"top","text-field":["step",["zoom"],["get","ref"],14,["get","name_en"]],"text-max-width":9},"paint":{"text-color":"hsl(38, 19%, 29%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1}},{"id":"place-neighborhood-suburb-label","type":"symbol","source":"mapbox-streets","source-layer":"place_label","minzoom":12,"maxzoom":15,"filter":["in","type","neighbourhood","suburb"],"layout":{"text-field":["get","name_en"],"text-transform":"uppercase","text-letter-spacing":0.15,"text-max-width":8,"text-font":["Roboto Regular","Arial Unicode MS Regular"],"text-padding":3,"text-size":["interpolate",["linear"],["zoom"],12,11,16,16]},"paint":{"text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1,"text-color":"hsl(38, 62%, 21%)"}},{"id":"place-town-village-hamlet-label","type":"symbol","source":"mapbox-streets","source-layer":"place_label","minzoom":6,"maxzoom":14,"filter":["in","type","hamlet","town","village"],"layout":{"text-size":["interpolate",["linear"],["zoom"],5,["match",["get","type"],"town",9.5,8],16,["match",["get","type"],"town",20,16]],"text-font":["step",["zoom"],["literal",["Roboto Regular","Arial Unicode MS Regular"]],12,["match",["get","type"],"town",["literal",["Roboto Medium","Arial Unicode MS Regular"]],["literal",["Roboto Regular","Arial Unicode MS Regular"]]]],"text-max-width":7,"text-field":["get","name_en"]},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-blur":0.5,"text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1}},{"id":"place-city-label-minor","type":"symbol","source":"mapbox-streets","source-layer":"place_label","minzoom":1,"maxzoom":14,"filter":["all",["!has","scalerank"],["==","type","city"]],"layout":{"text-size":["interpolate",["linear"],["zoom"],5,12,16,22],"text-font":["literal",["Roboto Medium","Arial Unicode MS Regular"]],"text-max-width":10,"text-field":["get","name_en"]},"paint":{"text-color":["interpolate",["linear"],["zoom"],5,"hsl(0, 0%, 33%)",6,"hsl(0, 0%, 0%)"],"text-halo-blur":0.5,"text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1.25}},{"id":"place-city-label-major","type":"symbol","source":"mapbox-streets","source-layer":"place_label","minzoom":1,"maxzoom":14,"filter":["all",["==","type","city"],["has","scalerank"]],"layout":{"text-size":["interpolate",["linear"],["zoom"],5,["step",["get","scalerank"],14,4,12],16,["step",["get","scalerank"],30,4,22]],"text-font":["step",["zoom"],["literal",["Roboto Medium","Arial Unicode MS Regular"]],10,["step",["get","scalerank"],["literal",["Roboto Bold","Arial Unicode MS Bold"]],5,["literal",["Roboto Medium","Arial Unicode MS Regular"]]]],"text-max-width":10,"text-field":["get","name_en"]},"paint":{"text-color":["interpolate",["linear"],["zoom"],5,"hsl(0, 0%, 33%)",6,"hsl(0, 0%, 0%)"],"text-halo-blur":0.5,"text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1.25}},{"id":"state-label","type":"symbol","source":"mapbox-streets","source-layer":"state_label","minzoom":4,"maxzoom":8,"layout":{"text-line-height":1.2,"text-size":["interpolate",["linear"],["zoom"],4,["step",["get","area"],8,20000,9,80000,10],9,["step",["get","area"],14,20000,18,80000,23]],"text-transform":"uppercase","text-font":["Roboto Black","Arial Unicode MS Bold"],"text-padding":1,"text-field":["step",["zoom"],["step",["get","area"],["get","abbr"],80000,["get","name_en"]],5,["get","name_en"]],"text-letter-spacing":0.2,"text-max-width":6},"paint":{"text-color":"hsl(38, 7%, 64%)","text-halo-width":1,"text-halo-color":"hsl(0, 0%, 100%)"}},{"id":"country-label","type":"symbol","source":"mapbox-streets","source-layer":"country_label","minzoom":1,"maxzoom":8,"layout":{"text-field":["get","name_en"],"text-max-width":["interpolate",["linear"],["zoom"],0,5,3,6],"text-font":["step",["zoom"],["literal",["Roboto Medium","Arial Unicode MS Regular"]],4,["literal",["Roboto Bold","Arial Unicode MS Bold"]]],"text-size":["interpolate",["linear"],["zoom"],2,["step",["get","scalerank"],13,3,11,5,9],9,["step",["get","scalerank"],35,3,27,5,22]]},"paint":{"text-halo-width":1.5,"text-halo-color":"hsl(0, 0%, 100%)","text-color":"hsl(0, 0%, 0%)"}}],"created":"2018-10-19T22:30:22.546Z","id":"cjngl84yw1js52rqgjswrnjq1","modified":"2018-10-19T22:32:05.957Z","owner":"raychaser","visibility":"private","draft":false};

/***/ }),

/***/ "./src/components/common/maps/styles/Satellite.json":
/*!**********************************************************!*\
  !*** ./src/components/common/maps/styles/Satellite.json ***!
  \**********************************************************/
/*! exports provided: version, name, glyphs, metadata, sources, layers, default */
/***/ (function(module) {

module.exports = {"version":8,"name":"TheProductMapboxGL","glyphs":"mapbox://fonts/raychaser/{fontstack}/{range}.pbf","metadata":{"mapbox:autocomposite":true,"mapbox:type":"default"},"sources":{"MapBaseLayer":{"url":"mapbox://mapbox.satellite","type":"raster","tileSize":256}},"layers":[{"id":"background","type":"background","paint":{"background-color":"rgb(0,0,0)"},"interactive":false},{"id":"MapBaseLayer","type":"raster","source":"MapBaseLayer","source-layer":"MapBaseLayer","interactive":false,"paint":{"raster-opacity":1}}]};

/***/ }),

/***/ "./src/components/common/maps/styles/StyleButtons.jsx":
/*!************************************************************!*\
  !*** ./src/components/common/maps/styles/StyleButtons.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var style = {
  zIndex: 10,
  top: '1rem',
  right: '1rem',
  position: 'absolute'
};

var StyleButtons = function StyleButtons(_ref) {
  var currStyle = _ref.currStyle,
      mapStyles = _ref.mapStyles,
      setCurrStyle = _ref.setCurrStyle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
    style: style
  }, mapStyles.map(function (theStyle, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: true,
      key: "stylebutton".concat(idx) // color={theStyle.color || null}
      ,
      active: idx === currStyle,
      onClick: function onClick() {
        return setCurrStyle(idx);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: theStyle.icon
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleButtons);

/***/ }),

/***/ "./src/components/common/maps/styles/TopoMap.json":
/*!********************************************************!*\
  !*** ./src/components/common/maps/styles/TopoMap.json ***!
  \********************************************************/
/*! exports provided: version, name, metadata, sources, sprite, glyphs, layers, created, id, modified, owner, visibility, draft, default */
/***/ (function(module) {

module.exports = {"version":8,"name":"Outdoors","metadata":{"mapbox:autocomposite":true,"mapbox:type":"default","mapbox:groups":{"1444934828655.3389":{"name":"Aeroways","collapsed":true},"1444933322393.2852":{"name":"POI labels  (scalerank 1)","collapsed":true},"1444934749452.0452":{"name":"Wetlands","collapsed":true},"1444855786460.0557":{"name":"Roads","collapsed":true},"1444933575858.6992":{"name":"Highway shields","collapsed":true},"1444934295202.7542":{"name":"Admin boundaries","collapsed":true},"1444856151690.9143":{"name":"State labels","collapsed":true},"1444933721429.3076":{"name":"Road labels","collapsed":true},"1444933358918.2366":{"name":"POI labels (scalerank 2)","collapsed":true},"1444933808272.805":{"name":"Water labels","collapsed":true},"1444855815295.714":{"name":"Hillshading","collapsed":true},"1444855831248.8289":{"name":"Landcover","collapsed":true},"1444933372896.5967":{"name":"POI labels (scalerank 3)","collapsed":true},"1444855799204.86":{"name":"Bridges","collapsed":true},"1444856087950.3635":{"name":"Marine labels","collapsed":true},"1444862510685.128":{"name":"City labels","collapsed":true},"1444855769305.6016":{"name":"Tunnels","collapsed":true},"1444856144497.7825":{"name":"Country labels","collapsed":true},"1444933456003.5437":{"name":"POI labels (scalerank 4)","collapsed":true},"1444933837268.9458":{"name":"Contour lines","collapsed":true}},"mapbox:trackposition":true},"sources":{"composite":{"url":"mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/pipbailey/cj66v6i8c4hnc2so16ngtlovn","glyphs":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","layout":{},"paint":{"background-color":{"base":1,"stops":[[11,"hsl(35, 32%, 91%)"],[13,"hsl(35, 12%, 89%)"]]}},"interactive":true},{"id":"landcover_crop","type":"fill","metadata":{"mapbox:group":"1444855831248.8289"},"source":"composite","source-layer":"landcover","maxzoom":12,"filter":["==","class","crop"],"layout":{},"paint":{"fill-color":"hsl(75, 62%, 81%)","fill-opacity":{"base":1.5,"stops":[[2,0.3],[12,0]]},"fill-antialias":false},"interactive":true},{"id":"landcover_grass","type":"fill","metadata":{"mapbox:group":"1444855831248.8289"},"source":"composite","source-layer":"landcover","maxzoom":12,"filter":["==","class","grass"],"layout":{},"paint":{"fill-color":"hsl(75, 62%, 81%)","fill-opacity":{"base":1.5,"stops":[[2,0.3],[12,0]]},"fill-antialias":false},"interactive":true},{"id":"landcover_scrub","type":"fill","metadata":{"mapbox:group":"1444855831248.8289"},"source":"composite","source-layer":"landcover","maxzoom":12,"filter":["==","class","scrub"],"layout":{},"paint":{"fill-color":"hsl(75, 62%, 81%)","fill-opacity":{"base":1.5,"stops":[[2,0.3],[12,0]]},"fill-antialias":false},"interactive":true},{"id":"landcover_wood","type":"fill","metadata":{"mapbox:group":"1444855831248.8289"},"source":"composite","source-layer":"landcover","maxzoom":12,"filter":["==","class","wood"],"layout":{},"paint":{"fill-color":"hsl(75, 62%, 81%)","fill-opacity":{"base":1.5,"stops":[[2,0.3],[12,0]]},"fill-antialias":false},"interactive":true},{"id":"landcover_snow","type":"fill","metadata":{"mapbox:group":"1444855831248.8289"},"source":"composite","source-layer":"landcover","filter":["==","class","snow"],"layout":{},"paint":{"fill-color":"hsl(0, 0%, 100%)","fill-opacity":0.2,"fill-antialias":false},"interactive":true},{"id":"national_park","type":"fill","source":"composite","source-layer":"landuse_overlay","filter":["==","class","national_park"],"layout":{},"paint":{"fill-color":"hsl(100, 59%, 76%)","fill-opacity":{"base":1,"stops":[[5,0],[5.5,0.75],[9,0.75],[10,0.35]]}},"interactive":true},{"id":"scrub","type":"fill","source":"composite","source-layer":"landuse","minzoom":9,"filter":["==","class","scrub"],"layout":{},"paint":{"fill-color":"hsl(75, 41%, 74%)","fill-opacity":{"base":1,"stops":[[9,0],[15,0.2]]}},"interactive":true},{"id":"grass","type":"fill","source":"composite","source-layer":"landuse","minzoom":9,"filter":["==","class","grass"],"layout":{},"paint":{"fill-color":"hsl(75, 41%, 74%)","fill-opacity":{"base":1,"stops":[[9,0],[15,0.4]]}},"interactive":true},{"id":"wood","type":"fill","source":"composite","source-layer":"landuse","minzoom":6,"filter":["==","class","wood"],"layout":{},"paint":{"fill-color":"hsl(75, 41%, 74%)","fill-opacity":{"base":1,"stops":[[7,0],[15,0.5]]}},"interactive":true},{"id":"agriculture","type":"fill","source":"composite","source-layer":"landuse","minzoom":11,"filter":["==","class","agriculture"],"layout":{},"paint":{"fill-opacity":{"base":1,"stops":[[11,0],[14,0.75]]},"fill-color":"hsl(75, 37%, 81%)","fill-outline-color":"hsl(75, 32%, 68%)"},"interactive":true},{"id":"national_park-tint-band","type":"line","source":"composite","source-layer":"landuse_overlay","minzoom":9,"filter":["==","class","national_park"],"layout":{"line-cap":"round"},"paint":{"line-color":"hsl(100, 62%, 74%)","line-width":{"base":1.4,"stops":[[9,1],[14,8]]},"line-offset":{"base":1.4,"stops":[[9,0],[14,-2.5]]},"line-opacity":{"base":1,"stops":[[9,0],[10,0.75]]},"line-blur":3},"interactive":true},{"id":"national_park-outline","type":"line","source":"composite","source-layer":"landuse_overlay","minzoom":9,"filter":["==","class","national_park"],"layout":{},"paint":{"line-color":{"base":1,"stops":[[12,"hsl(100, 49%, 71%)"],[14,"hsl(100, 40%, 67%)"]]},"line-width":{"base":1,"stops":[[9,0.75],[12,1]]},"line-offset":0,"line-opacity":{"base":1,"stops":[[9,0],[10,1]]}},"interactive":true},{"id":"hospital","type":"fill","source":"composite","source-layer":"landuse","filter":["==","class","hospital"],"layout":{},"paint":{"fill-color":{"base":1,"stops":[[15.5,"hsl(340, 37%, 87%)"],[16,"hsl(340, 63%, 89%)"]]}},"interactive":true},{"id":"school","type":"fill","source":"composite","source-layer":"landuse","filter":["==","class","school"],"layout":{},"paint":{"fill-color":{"base":1,"stops":[[15.5,"hsl(50, 47%, 81%)"],[16,"hsl(50, 63%, 84%)"]]}},"interactive":true},{"id":"park","type":"fill","source":"composite","source-layer":"landuse","filter":["all",["!in","type","garden","golf_course","playground","zoo"],["==","class","park"]],"layout":{},"paint":{"fill-color":"hsl(100, 59%, 76%)","fill-opacity":{"base":1,"stops":[[5,0],[6,1]]}},"interactive":true},{"id":"other-green-areas","type":"fill","source":"composite","source-layer":"landuse","filter":["all",["==","class","park"],["in","type","garden","golf_course","playground","zoo"]],"layout":{},"paint":{"fill-color":"hsl(100, 59%, 81%)","fill-opacity":{"base":1,"stops":[[5,0],[6,1]]}},"interactive":true},{"id":"glacier","type":"fill","source":"composite","source-layer":"landuse","minzoom":9,"filter":["==","class","glacier"],"layout":{},"paint":{"fill-color":"hsl(196, 71%, 93%)","fill-opacity":{"base":1,"stops":[[9,0],[10,0.5]]}},"interactive":true},{"id":"pitch","type":"fill","source":"composite","source-layer":"landuse","filter":["==","class","pitch"],"layout":{},"paint":{"fill-color":"hsl(100, 57%, 72%)"},"interactive":true},{"id":"pitch-line","type":"line","source":"composite","source-layer":"landuse","minzoom":15,"filter":["==","class","pitch"],"layout":{"line-join":"miter"},"paint":{"line-color":"hsl(75, 57%, 84%)"},"interactive":true},{"id":"cemetery","type":"fill","source":"composite","source-layer":"landuse","filter":["==","class","cemetery"],"layout":{},"paint":{"fill-color":"hsl(75, 37%, 81%)"},"interactive":true},{"id":"industrial","type":"fill","source":"composite","source-layer":"landuse","filter":["==","class","industrial"],"layout":{},"paint":{"fill-color":{"base":1,"stops":[[15.5,"hsl(230, 15%, 86%)"],[16,"hsl(230, 29%, 89%)"]]}},"interactive":true},{"id":"sand","type":"fill","source":"composite","source-layer":"landuse","filter":["==","class","sand"],"layout":{},"paint":{"fill-color":"hsl(60, 46%, 87%)"},"interactive":true},{"id":"contour-line","type":"line","metadata":{"mapbox:group":"1444933837268.9458"},"source":"composite","source-layer":"contour","minzoom":11,"filter":["!in","index",10,5],"layout":{},"paint":{"line-opacity":{"base":1,"stops":[[11,0.15],[12,0.3]]},"line-color":"hsl(100, 100%, 20%)","line-width":{"base":1,"stops":[[13,0.5],[16,0.8]]},"line-offset":{"base":1,"stops":[[13,1],[16,1.6]]}},"interactive":true},{"id":"contour-line-index","type":"line","metadata":{"mapbox:group":"1444933837268.9458"},"source":"composite","source-layer":"contour","minzoom":11,"filter":["in","index",10,5],"layout":{},"paint":{"line-opacity":{"base":1,"stops":[[11,0.25],[12,0.5]]},"line-color":"hsl(100, 100%, 20%)","line-width":{"base":1,"stops":[[13,0.6],[16,1.2]]},"line-offset":{"base":1,"stops":[[13,0.6],[16,1.2]]}},"interactive":true},{"id":"hillshade_highlight_bright","type":"fill","metadata":{"mapbox:group":"1444855815295.714"},"source":"composite","source-layer":"hillshade","maxzoom":18,"filter":["==","level",94],"layout":{},"paint":{"fill-color":"hsl(0, 0%, 100%)","fill-opacity":{"stops":[[15,0.15],[18,0]]},"fill-antialias":false},"interactive":true},{"id":"hillshade_highlight_med","type":"fill","metadata":{"mapbox:group":"1444855815295.714"},"source":"composite","source-layer":"hillshade","filter":["==","level",90],"layout":{},"paint":{"fill-color":"hsl(0, 0%, 100%)","fill-opacity":{"stops":[[15,0.15],[18,0]]},"fill-antialias":false},"interactive":true},{"id":"hillshade_shadow_faint","type":"fill","metadata":{"mapbox:group":"1444855815295.714"},"source":"composite","source-layer":"hillshade","maxzoom":17,"filter":["==","level",89],"layout":{},"paint":{"fill-color":"hsl(56, 59%, 22%)","fill-opacity":{"stops":[[15,0.07],[17,0]]},"fill-antialias":false},"interactive":true},{"id":"hillshade_shadow_med","type":"fill","metadata":{"mapbox:group":"1444855815295.714"},"source":"composite","source-layer":"hillshade","filter":["==","level",78],"layout":{},"paint":{"fill-color":"hsl(56, 59%, 22%)","fill-opacity":{"stops":[[15,0.07],[17,0]]},"fill-antialias":false},"interactive":true},{"id":"hillshade_shadow_dark","type":"fill","metadata":{"mapbox:group":"1444855815295.714"},"source":"composite","source-layer":"hillshade","filter":["==","level",67],"layout":{},"paint":{"fill-color":"hsl(56, 59%, 22%)","fill-opacity":{"stops":[[15,0.08],[17,0]]},"fill-antialias":false},"interactive":true},{"id":"hillshade_shadow_extreme","type":"fill","metadata":{"mapbox:group":"1444855815295.714"},"source":"composite","source-layer":"hillshade","maxzoom":17,"filter":["==","level",56],"layout":{},"paint":{"fill-color":"hsl(56, 59%, 22%)","fill-opacity":{"stops":[[15,0.08],[17,0]]},"fill-antialias":false},"interactive":true},{"id":"waterway-river-canal-shadow","type":"line","source":"composite","source-layer":"waterway","minzoom":8,"filter":["in","class","canal","river"],"layout":{"line-cap":{"base":1,"stops":[[0,"butt"],[11,"round"]]},"line-join":"round"},"paint":{"line-color":"hsl(215, 84%, 69%)","line-width":{"base":1.3,"stops":[[8.5,0.4],[20,8]]},"line-opacity":{"base":1,"stops":[[8,0],[8.5,1]]},"line-translate":{"base":1.2,"stops":[[7,[0,0]],[16,[-1,-1]]]},"line-translate-anchor":"viewport"},"interactive":true},{"id":"waterway-river-canal","type":"line","source":"composite","source-layer":"waterway","minzoom":8,"filter":["in","class","canal","river"],"layout":{"line-cap":{"base":1,"stops":[[0,"butt"],[11,"round"]]},"line-join":"round"},"paint":{"line-color":"hsl(205, 87%, 76%)","line-width":{"base":1.3,"stops":[[8.5,0.4],[20,8]]},"line-opacity":{"base":1,"stops":[[8,0],[8.5,1]]}},"interactive":true},{"id":"waterway-small","type":"line","source":"composite","source-layer":"waterway","minzoom":13,"filter":["!in","class","canal","river"],"layout":{"line-join":"round","line-cap":"round"},"paint":{"line-color":"hsl(205, 87%, 76%)","line-width":{"base":1.35,"stops":[[13.5,0.4],[20,3]]},"line-opacity":{"base":1,"stops":[[13,0],[13.5,1]]}},"interactive":true},{"id":"water-shadow","type":"fill","source":"composite","source-layer":"water","layout":{},"paint":{"fill-color":"hsl(215, 84%, 69%)","fill-translate":{"base":1.2,"stops":[[7,[0,0]],[16,[-1,-1]]]},"fill-translate-anchor":"viewport","fill-opacity":1},"interactive":true},{"id":"water","type":"fill","source":"composite","source-layer":"water","layout":{},"paint":{"fill-color":"hsl(196, 80%, 70%)"},"interactive":true},{"id":"wetlands","type":"fill","metadata":{"mapbox:group":"1444934749452.0452"},"source":"composite","source-layer":"landuse_overlay","filter":["in","class","wetland","wetland_noveg"],"layout":{},"paint":{"fill-color":"hsl(185, 43%, 74%)","fill-opacity":{"base":1,"stops":[[10,0.25],[10.5,0.15]]}},"interactive":true},{"id":"wetlands-pattern","type":"fill","metadata":{"mapbox:group":"1444934749452.0452"},"source":"composite","source-layer":"landuse_overlay","filter":["in","class","wetland","wetland_noveg"],"layout":{},"paint":{"fill-color":"hsl(185, 43%, 74%)","fill-opacity":{"base":1,"stops":[[10,0],[10.5,1]]},"fill-pattern":"wetland","fill-translate-anchor":"viewport"},"interactive":true},{"id":"barrier_line-land-polygon","type":"fill","source":"composite","source-layer":"barrier_line","filter":["all",["==","$type","Polygon"],["==","class","land"]],"layout":{},"paint":{"fill-color":"hsl(35, 12%, 89%)"},"interactive":true},{"id":"barrier_line-land-line","type":"line","source":"composite","source-layer":"barrier_line","filter":["all",["==","$type","LineString"],["==","class","land"]],"layout":{"line-cap":"round"},"paint":{"line-width":{"base":1.99,"stops":[[14,0.75],[20,40]]},"line-color":"hsl(35, 12%, 89%)"},"interactive":true},{"id":"aeroway-polygon","type":"fill","metadata":{"mapbox:group":"1444934828655.3389"},"source":"composite","source-layer":"aeroway","minzoom":11,"filter":["all",["!=","type","apron"],["==","$type","Polygon"]],"layout":{},"paint":{"fill-color":{"base":1,"stops":[[15,"hsl(230, 23%, 82%)"],[16,"hsl(230, 37%, 84%)"]]},"fill-opacity":{"base":1,"stops":[[11,0],[11.5,1]]}},"interactive":true},{"id":"aeroway-runway","type":"line","metadata":{"mapbox:group":"1444934828655.3389"},"source":"composite","source-layer":"aeroway","minzoom":9,"filter":["all",["==","$type","LineString"],["==","type","runway"]],"layout":{},"paint":{"line-color":{"base":1,"stops":[[15,"hsl(230, 23%, 82%)"],[16,"hsl(230, 37%, 84%)"]]},"line-width":{"base":1.5,"stops":[[9,1],[18,80]]}},"interactive":true},{"id":"aeroway-taxiway","type":"line","metadata":{"mapbox:group":"1444934828655.3389"},"source":"composite","source-layer":"aeroway","minzoom":9,"filter":["all",["==","$type","LineString"],["==","type","taxiway"]],"layout":{},"paint":{"line-color":{"base":1,"stops":[[15,"hsl(230, 23%, 82%)"],[16,"hsl(230, 37%, 84%)"]]},"line-width":{"base":1.5,"stops":[[10,0.5],[18,20]]}},"interactive":true},{"id":"building-line","type":"line","source":"composite","source-layer":"building","minzoom":15,"filter":["all",["!=","type","building:part"],["==","underground","false"]],"layout":{},"paint":{"line-color":"hsl(35, 6%, 79%)","line-width":{"base":1.5,"stops":[[15,0.75],[20,3]]},"line-opacity":{"base":1,"stops":[[15.5,0],[16,1]]}},"interactive":true},{"id":"building","type":"fill","source":"composite","source-layer":"building","minzoom":15,"filter":["all",["!=","type","building:part"],["==","underground","false"]],"layout":{},"paint":{"fill-color":{"base":1,"stops":[[15,"hsl(35, 11%, 88%)"],[16,"hsl(35, 8%, 85%)"]]},"fill-opacity":{"base":1,"stops":[[15.5,0],[16,1]]},"fill-outline-color":"hsl(35, 6%, 79%)"},"interactive":true},{"id":"tunnel-street-low","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"stops":[[11.5,0],[12,1],[14,1],[14.01,0]]}},"interactive":true},{"id":"tunnel-street_limited-low","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street_limited"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"stops":[[11.5,0],[12,1],[14,1],[14.01,0]]}},"interactive":true},{"id":"tunnel-track-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","track"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(50, 100%, 40%)","line-gap-width":{"base":1.5,"stops":[[15,1],[18,12]]},"line-dasharray":[3,3]},"interactive":true},{"id":"tunnel-service-link-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["==","structure","tunnel"],["in","class","link","service"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(230, 19%, 75%)","line-gap-width":{"base":1.5,"stops":[[14,0.5],[18,12]]},"line-dasharray":[3,3]},"interactive":true},{"id":"tunnel-street_limited-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street_limited"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(230, 19%, 75%)","line-gap-width":{"base":1.5,"stops":[[13,0],[14,2],[18,18]]},"line-dasharray":[3,3],"line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"tunnel-street-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(230, 19%, 75%)","line-gap-width":{"base":1.5,"stops":[[13,0],[14,2],[18,18]]},"line-dasharray":[3,3],"line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"tunnel-secondary-tertiary-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","structure","tunnel"],["in","class","secondary","tertiary"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.2,"stops":[[10,0.75],[18,2]]},"line-dasharray":[3,3],"line-gap-width":{"base":1.5,"stops":[[8.5,0.5],[10,0.75],[18,26]]},"line-color":"hsl(230, 19%, 75%)"},"interactive":true},{"id":"tunnel-primary-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","primary"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[16,2]]},"line-dasharray":[3,3],"line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":"hsl(230, 19%, 75%)"},"interactive":true},{"id":"tunnel-trunk_link-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","structure","tunnel"],["==","type","trunk_link"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-dasharray":[3,3]},"interactive":true},{"id":"tunnel-motorway_link-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","class","motorway_link"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-dasharray":[3,3]},"interactive":true},{"id":"tunnel-trunk-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","structure","tunnel"],["==","type","trunk"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[16,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-opacity":1,"line-dasharray":[3,3]},"interactive":true},{"id":"tunnel-motorway-case","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","motorway"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[16,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-opacity":1,"line-dasharray":[3,3]},"interactive":true},{"id":"tunnel-construction","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["==","class","construction"],["==","structure","tunnel"]]],"layout":{"line-join":"miter"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(230, 24%, 87%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]},"line-dasharray":{"base":1,"stops":[[14,[0.4,0.8]],[15,[0.3,0.6]],[16,[0.2,0.3]],[17,[0.2,0.25]],[18,[0.15,0.15]]]}},"interactive":true},{"id":"tunnel-path","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","type","cycleway","piste","steps"],["==","class","path"],["==","structure","tunnel"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,4]]},"line-dasharray":{"base":1,"stops":[[14,[4,0.4]],[15,[3,0.4]],[16,[3,0.35]],[17,[3,0.35]]]},"line-color":"hsl(35, 26%, 95%)","line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"tunnel-cycleway-piste","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","path"],["==","structure","tunnel"],["in","type","cycleway","piste"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,4]]},"line-dasharray":{"base":1,"stops":[[14,[4,0.4]],[15,[3,0.4]],[16,[3,0.35]],[17,[3,0.35]]]},"line-color":"hsl(35, 26%, 95%)","line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"tunnel-steps","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","structure","tunnel"],["==","type","steps"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[16,1.6],[18,6]]},"line-color":"hsl(35, 26%, 95%)","line-dasharray":{"base":1,"stops":[[14,[4,0.4]],[15,[1.75,0.4]],[16,[0.75,0.4]],[17,[0.3,0.3]]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"tunnel-trunk_link","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","structure","tunnel"],["==","type","trunk_link"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-color":"hsl(46, 77%, 78%)","line-opacity":1,"line-dasharray":[1,0]},"interactive":true},{"id":"tunnel-motorway_link","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","class","motorway_link"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-color":"hsl(26, 74%, 81%)","line-opacity":1,"line-dasharray":[1,0]},"interactive":true},{"id":"tunnel-pedestrian","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","class","pedestrian"],["==","structure","tunnel"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[14,0.5],[18,12]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":1,"line-dasharray":{"base":1,"stops":[[14,[1,0]],[15,[1.5,0.4]],[16,[1,0.2]]]}},"interactive":true},{"id":"tunnel-track","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","track"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,12]]},"line-color":"hsl(0, 0%, 100%)"},"interactive":true},{"id":"tunnel-service-link","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["==","structure","tunnel"],["in","class","link","service"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[14,0.5],[18,12]]},"line-color":"hsl(0, 0%, 100%)","line-dasharray":[1,0]},"interactive":true},{"id":"tunnel-street_limited","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street_limited"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(35, 14%, 93%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"tunnel-street","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"tunnel-secondary-tertiary","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","structure","tunnel"],["in","class","secondary","tertiary"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[8.5,0.5],[10,0.75],[18,26]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":1,"line-dasharray":[1,0],"line-blur":0},"interactive":true},{"id":"tunnel-primary","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","primary"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":1,"line-dasharray":[1,0],"line-blur":0},"interactive":true},{"id":"tunnel-oneway-arrows-blue-minor","type":"symbol","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":16,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["==","oneway","true"],["==","structure","tunnel"],["in","class","link","path","pedestrian","service","track"]]],"layout":{"symbol-placement":"line","icon-image":{"base":1,"stops":[[17,"oneway-small"],[18,"oneway-large"]]},"symbol-spacing":200,"icon-padding":2},"paint":{},"interactive":true},{"id":"tunnel-oneway-arrows-blue-major","type":"symbol","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":15,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["==","oneway","true"],["==","structure","tunnel"],["in","class","primary","secondary","street","street_limited","tertiary"]]],"layout":{"symbol-placement":"line","icon-image":{"base":1,"stops":[[16,"oneway-small"],[17,"oneway-large"]]},"symbol-spacing":200,"icon-padding":2},"paint":{},"interactive":true},{"id":"tunnel-trunk","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","trunk"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":"hsl(46, 77%, 78%)"},"interactive":true},{"id":"tunnel-motorway","type":"line","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","motorway"],["==","structure","tunnel"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-dasharray":[1,0],"line-opacity":1,"line-color":"hsl(26, 74%, 81%)","line-blur":0},"interactive":true},{"id":"tunnel-oneway-arrows-white","type":"symbol","metadata":{"mapbox:group":"1444855769305.6016"},"source":"composite","source-layer":"road","minzoom":16,"filter":["all",["==","$type","LineString"],["all",["!in","type","primary_link","secondary_link","tertiary_link"],["==","oneway","true"],["==","structure","tunnel"],["in","class","link","trunk"]]],"layout":{"symbol-placement":"line","icon-image":{"base":1,"stops":[[16,"oneway-white-small"],[17,"oneway-white-large"]]},"symbol-spacing":200,"icon-padding":2},"paint":{"icon-opacity":0.5},"interactive":true},{"id":"cliffs","type":"line","source":"composite","source-layer":"barrier_line","minzoom":15,"filter":["==","class","cliff"],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-opacity":{"base":1,"stops":[[15,0],[15.25,1]]},"line-width":10,"line-pattern":"cliff"},"interactive":true},{"id":"ferry","type":"line","source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["==","type","ferry"]],"layout":{"line-join":"round"},"paint":{"line-color":{"base":1,"stops":[[15,"hsl(205, 73%, 63%)"],[17,"hsl(230, 73%, 63%)"]]},"line-opacity":1,"line-width":{"base":1.5,"stops":[[14,0.5],[20,1]]},"line-dasharray":{"base":1,"stops":[[12,[1,0]],[13,[12,4]]]}},"interactive":true},{"id":"ferry-auto","type":"line","source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["==","type","ferry_auto"]],"layout":{"line-join":"round"},"paint":{"line-color":{"base":1,"stops":[[15,"hsl(205, 73%, 63%)"],[17,"hsl(230, 73%, 63%)"]]},"line-opacity":1,"line-width":{"base":1.5,"stops":[[14,0.5],[20,1]]}},"interactive":true},{"id":"road-path-bg","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["!in","type","corridor","crossing","piste","sidewalk","steps"],["==","class","path"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,2.5],[18,8]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]},"line-color":"hsl(50, 100%, 40%)","line-blur":{"base":1,"stops":[[14,0],[17,1]]}},"interactive":true},{"id":"road-piste-bg","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","path"],["==","type","piste"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,2],[18,7]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]},"line-color":"hsl(230, 85%, 67%)","line-blur":0},"interactive":true},{"id":"road-sidewalk-corridor-bg","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":16,"filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["in","type","corridor","crossing","sidewalk"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,2],[18,7]]},"line-dasharray":[1,0],"line-color":"hsl(230, 17%, 82%)","line-blur":0,"line-opacity":{"base":1,"stops":[[16,0],[16.25,0.25]]}},"interactive":true},{"id":"road-steps-bg","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","type","steps"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,2.5],[18,8]]},"line-color":"hsl(50, 100%, 40%)","line-blur":{"base":1,"stops":[[14,0],[17,1]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,0.25]]}},"interactive":true},{"id":"road-pedestrian-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":12,"filter":["all",["==","$type","LineString"],["all",["==","class","pedestrian"],["==","structure","none"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[14,2],[18,14.5]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":0,"line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"road-street-low","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street"],["==","structure","none"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"stops":[[11,0],[11.25,1],[14,1],[14.01,0]]}},"interactive":true},{"id":"road-street_limited-low","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street_limited"],["==","structure","none"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"stops":[[11,0],[11.25,1],[14,1],[14.01,0]]}},"interactive":true},{"id":"road-track-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","track"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(50, 100%, 40%)","line-gap-width":{"base":1.5,"stops":[[15,1],[18,12]]}},"interactive":true},{"id":"road-service-link-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["!in","structure","bridge","tunnel"],["in","class","link","service"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":{"base":1.5,"stops":[[14,0.5],[18,12]]}},"interactive":true},{"id":"road-street_limited-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street_limited"],["==","structure","none"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":{"base":1.5,"stops":[[13,0],[14,2],[18,18]]},"line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"road-street-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street"],["==","structure","none"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":{"base":1.5,"stops":[[13,0],[14,2],[18,18]]},"line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"road-secondary-tertiary-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["in","class","secondary","tertiary"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.2,"stops":[[10,0.75],[18,2]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":{"base":1.5,"stops":[[8.5,0.5],[10,0.75],[18,26]]},"line-opacity":{"base":1,"stops":[[9.99,0],[10,1]]}},"interactive":true},{"id":"road-primary-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","primary"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[16,2]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-opacity":{"base":1,"stops":[[9.99,0],[10,1]]}},"interactive":true},{"id":"road-motorway_link-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":10,"filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","motorway_link"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-opacity":{"base":1,"stops":[[10.99,0],[11,1]]}},"interactive":true},{"id":"road-trunk_link-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","type","trunk_link"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-opacity":{"base":1,"stops":[[10.99,0],[11,1]]}},"interactive":true},{"id":"road-trunk-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","trunk"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[10,1],[16,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-opacity":{"base":1,"stops":[[6,0],[6.1,1]]}},"interactive":true},{"id":"road-motorway-case","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","motorway"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[10,1],[16,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]}},"interactive":true},{"id":"road-construction","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["==","class","construction"],["==","structure","none"]]],"layout":{"line-join":"miter"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(230, 24%, 87%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]},"line-dasharray":{"base":1,"stops":[[14,[0.4,0.8]],[15,[0.3,0.6]],[16,[0.2,0.3]],[17,[0.2,0.25]],[18,[0.15,0.15]]]}},"interactive":true},{"id":"road-sidewalk-corridor","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":16,"filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["in","type","corridor","crossing","sidewalk"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,4]]},"line-color":"hsl(0, 0%, 100%)","line-dasharray":{"base":1,"stops":[[14,[4,0.4]],[15,[3,0.4]],[16,[3,0.35]],[17,[3,0.35]]]},"line-opacity":{"base":1,"stops":[[16,0],[16.25,1]]}},"interactive":true},{"id":"road-path-smooth","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","path"],["in","type","bridleway","footway","path"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,4]]},"line-color":"hsl(0, 0%, 100%)","line-dasharray":{"base":1,"stops":[[14,[4,0.4]],[15,[3,0.4]],[16,[3,0.35]],[17,[3,0.35]]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"road-path-rough","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","path"],["in","type","hiking","mountain_bike","trail"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,4]]},"line-color":"hsl(0, 0%, 100%)","line-dasharray":{"base":1,"stops":[[14,[4,0.4]],[15,[1.75,0.4]],[16,[1,0.4]],[17,[1,0.35]]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"road-cycleway-piste","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","path"],["in","type","cycleway","piste"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,4]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"road-steps","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","type","steps"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[16,1.6],[18,6]]},"line-color":"hsl(0, 0%, 100%)","line-dasharray":{"base":1,"stops":[[14,[4,0.4]],[15,[1.75,0.4]],[16,[0.75,0.4]],[17,[0.3,0.3]]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"road-trunk_link","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","type","trunk_link"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-color":"hsl(46, 69%, 68%)","line-opacity":1},"interactive":true},{"id":"road-motorway_link","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":10,"filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","motorway_link"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-color":"hsl(26, 67%, 70%)","line-opacity":1},"interactive":true},{"id":"road-pedestrian","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":12,"filter":["all",["==","$type","LineString"],["all",["==","class","pedestrian"],["==","structure","none"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[14,0.5],[18,12]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":1,"line-dasharray":{"base":1,"stops":[[14,[1,0]],[15,[1.5,0.4]],[16,[1,0.2]]]}},"interactive":true},{"id":"road-pedestrian-polygon-fill","type":"fill","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":12,"filter":["all",["==","$type","Polygon"],["all",["==","structure","none"],["in","class","path","pedestrian"]]],"layout":{},"paint":{"fill-color":{"base":1,"stops":[[16,"hsl(230, 16%, 94%)"],[16.25,"hsl(230, 50%, 98%)"]]},"fill-outline-color":"hsl(230, 26%, 88%)","fill-opacity":1},"interactive":true},{"id":"road-pedestrian-polygon-pattern","type":"fill","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":12,"filter":["all",["==","$type","Polygon"],["all",["==","structure","none"],["in","class","path","pedestrian"]]],"layout":{},"paint":{"fill-color":"hsl(0, 0%, 100%)","fill-outline-color":"hsl(35, 10%, 83%)","fill-pattern":"pedestrian-polygon","fill-opacity":{"base":1,"stops":[[16,0],[16.25,1]]}},"interactive":true},{"id":"road-polygon","type":"fill","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":12,"filter":["all",["==","$type","Polygon"],["all",["!in","class","motorway","path","pedestrian","trunk"],["!in","structure","bridge","tunnel"]]],"layout":{},"paint":{"fill-color":"hsl(0, 0%, 100%)","fill-outline-color":"hsl(0, 0%, 100%)"},"interactive":true},{"id":"road-track","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","track"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,12]]},"line-color":"hsl(0, 0%, 100%)"},"interactive":true},{"id":"road-service-link","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["!in","structure","bridge","tunnel"],["in","class","link","service"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[14,0.5],[18,12]]},"line-color":"hsl(0, 0%, 100%)"},"interactive":true},{"id":"road-street_limited","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street_limited"],["==","structure","none"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(35, 14%, 93%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"road-street","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street"],["==","structure","none"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"road-secondary-tertiary","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["in","class","secondary","tertiary"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[8.5,0.5],[10,0.75],[18,26]]},"line-color":{"base":1,"stops":[[5,"hsl(35, 32%, 91%)"],[8,"hsl(0, 0%, 100%)"]]},"line-opacity":{"base":1.2,"stops":[[5,0],[5.5,1]]}},"interactive":true},{"id":"road-primary","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","primary"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":{"base":1,"stops":[[5,"hsl(35, 32%, 91%)"],[8,"hsl(0, 0%, 100%)"]]},"line-opacity":{"base":1.2,"stops":[[5,0],[5.5,1]]}},"interactive":true},{"id":"road-oneway-arrows-blue-minor","type":"symbol","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":16,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["!in","structure","bridge","tunnel"],["==","oneway","true"],["in","class","link","path","pedestrian","service","track"]]],"layout":{"symbol-placement":"line","icon-image":{"base":1,"stops":[[17,"oneway-small"],[18,"oneway-large"]]},"icon-rotation-alignment":"map","icon-padding":2,"symbol-spacing":200},"paint":{},"interactive":true},{"id":"road-oneway-arrows-blue-major","type":"symbol","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":15,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["!in","structure","bridge","tunnel"],["==","oneway","true"],["in","class","primary","secondary","street","street_limited","tertiary"]]],"layout":{"symbol-placement":"line","icon-image":{"base":1,"stops":[[16,"oneway-small"],[17,"oneway-large"]]},"icon-rotation-alignment":"map","icon-padding":2,"symbol-spacing":200},"paint":{},"interactive":true},{"id":"road-trunk","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","trunk"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":{"base":1,"stops":[[6,"hsl(0, 0%, 100%)"],[6.1,"hsl(46, 80%, 60%)"],[9,"hsl(46, 69%, 68%)"]]}},"interactive":true},{"id":"road-motorway","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["==","class","motorway"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":{"base":1,"stops":[[8,"hsl(26, 87%, 62%)"],[9,"hsl(26, 67%, 70%)"]]}},"interactive":true},{"id":"road-rail","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["in","class","major_rail","minor_rail"]]],"layout":{"line-join":"round"},"paint":{"line-color":{"stops":[[13,"hsl(50, 17%, 82%)"],[16,"hsl(230, 10%, 74%)"]]},"line-width":{"base":1.5,"stops":[[14,0.5],[20,1]]}},"interactive":true},{"id":"road-rail-tracks","type":"line","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["in","class","major_rail","minor_rail"]]],"layout":{"line-join":"round"},"paint":{"line-color":{"stops":[[13,"hsl(50, 17%, 82%)"],[16,"hsl(230, 10%, 74%)"]]},"line-width":{"base":1.5,"stops":[[14,4],[20,8]]},"line-dasharray":[0.1,15],"line-opacity":{"base":1,"stops":[[13.75,0],[14,1]]}},"interactive":true},{"id":"level-crossing","type":"symbol","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":16,"filter":["all",["==","$type","Point"],["==","class","level_crossing"]],"layout":{"icon-allow-overlap":true,"icon-size":1,"icon-image":"level-crossing"},"paint":{"icon-opacity":1},"interactive":true},{"id":"road-oneway-arrows-white","type":"symbol","metadata":{"mapbox:group":"1444855786460.0557"},"source":"composite","source-layer":"road","minzoom":16,"filter":["all",["==","$type","LineString"],["all",["!in","structure","bridge","tunnel"],["!in","type","primary_link","secondary_link","tertiary_link"],["==","oneway","true"],["in","class","link","trunk"]]],"layout":{"symbol-placement":"line","icon-image":{"base":1,"stops":[[16,"oneway-white-small"],[17,"oneway-white-large"]]},"icon-padding":2,"symbol-spacing":200},"paint":{"icon-opacity":0.5},"interactive":true},{"id":"hedges","type":"line","source":"composite","source-layer":"barrier_line","minzoom":16,"filter":["==","class","hedge"],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-color":"hsl(100, 59%, 70%)","line-width":{"base":1,"stops":[[16,1],[20,3]]},"line-opacity":1,"line-dasharray":[1,2,5,2,1,2]},"interactive":true},{"id":"fences","type":"line","source":"composite","source-layer":"barrier_line","minzoom":16,"filter":["==","class","fence"],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-color":"hsl(46, 17%, 76%)","line-width":{"base":1,"stops":[[16,1],[20,3]]},"line-opacity":1,"line-dasharray":[1,2,5,2,1,2]},"interactive":true},{"id":"gates","type":"line","source":"composite","source-layer":"barrier_line","minzoom":17,"filter":["==","class","gate"],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-color":"hsl(46, 17%, 76%)","line-width":{"base":1,"stops":[[16,1],[20,3]]},"line-opacity":0.5,"line-dasharray":[1,2,5,2,1,2]},"interactive":true},{"id":"bridge-path-bg","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","type","piste","steps"],["==","class","path"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,2.5],[18,8]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]},"line-color":"hsl(50, 100%, 40%)","line-blur":{"base":1,"stops":[[14,0],[17,1]]}},"interactive":true},{"id":"bridge-piste-bg","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","path"],["==","structure","bridge"],["==","type","piste"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,2],[18,7]]},"line-dasharray":[1,0],"line-color":"hsl(205, 63%, 60%)","line-blur":0,"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"bridge-steps-bg","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","structure","bridge"],["==","type","steps"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,2.5],[18,8]]},"line-color":"hsl(50, 100%, 40%)","line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]},"line-blur":{"base":1,"stops":[[14,0],[17,1]]}},"interactive":true},{"id":"bridge-pedestrian-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","class","pedestrian"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[14,2],[18,14.5]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":0,"line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"bridge-street-low","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street"],["==","structure","bridge"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"stops":[[11.5,0],[12,1],[14,1],[14.01,0]]}},"interactive":true},{"id":"bridge-street_limited-low","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street_limited"],["==","structure","bridge"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"stops":[[11.5,0],[12,1],[14,1],[14.01,0]]}},"interactive":true},{"id":"bridge-track-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","track"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(50, 100%, 40%)","line-gap-width":{"base":1.5,"stops":[[15,1],[18,12]]}},"interactive":true},{"id":"bridge-service-link-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["==","structure","bridge"],["in","class","link","service"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":{"base":1.5,"stops":[[14,0.5],[18,12]]}},"interactive":true},{"id":"bridge-street_limited-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street_limited"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":{"base":1.5,"stops":[[13,0],[14,2],[18,18]]}},"interactive":true},{"id":"bridge-street-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(230, 24%, 87%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]},"line-gap-width":{"base":1.5,"stops":[[13,0],[14,2],[18,18]]}},"interactive":true},{"id":"bridge-secondary-tertiary-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","structure","bridge"],["in","class","secondary","tertiary"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.2,"stops":[[10,0.75],[18,2]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":{"base":1.5,"stops":[[8.5,0.5],[10,0.75],[18,26]]},"line-translate":[0,0]},"interactive":true},{"id":"bridge-primary-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","primary"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[16,2]]},"line-color":"hsl(230, 24%, 87%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-translate":[0,0]},"interactive":true},{"id":"bridge-trunk_link-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["!in","layer",2,3,4,5],["==","structure","bridge"],["==","type","trunk_link"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-opacity":{"base":1,"stops":[[10.99,0],[11,1]]}},"interactive":true},{"id":"bridge-motorway_link-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["!in","layer",2,3,4,5],["==","class","motorway_link"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-opacity":1},"interactive":true},{"id":"bridge-trunk-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","layer",2,3,4,5],["==","class","trunk"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[16,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]}},"interactive":true},{"id":"bridge-motorway-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","layer",2,3,4,5],["==","class","motorway"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[16,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]}},"interactive":true},{"id":"bridge-construction","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["==","class","construction"],["==","structure","bridge"]]],"layout":{"line-join":"miter"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(230, 24%, 87%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]},"line-dasharray":{"base":1,"stops":[[14,[0.4,0.8]],[15,[0.3,0.6]],[16,[0.2,0.3]],[17,[0.2,0.25]],[18,[0.15,0.15]]]}},"interactive":true},{"id":"bridge-path","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","type","cycleway","piste","steps"],["==","class","path"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,4]]},"line-color":"hsl(0, 0%, 100%)","line-dasharray":{"base":1,"stops":[[14,[4,0.4]],[15,[3,0.4]],[16,[3,0.35]],[17,[3,0.35]]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"bridge-cycleway-piste","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","path"],["==","structure","bridge"],["in","type","cycleway","piste"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,4]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"bridge-steps","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","structure","bridge"],["==","type","steps"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[16,1.6],[18,6]]},"line-color":"hsl(0, 0%, 100%)","line-dasharray":{"base":1,"stops":[[14,[4,0.4]],[15,[1.75,0.4]],[16,[0.75,0.4]],[17,[0.3,0.3]]]},"line-opacity":{"base":1,"stops":[[13,0],[13.25,1]]}},"interactive":true},{"id":"bridge-trunk_link","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["!in","layer",2,3,4,5],["==","structure","bridge"],["==","type","trunk_link"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-color":"hsl(46, 69%, 68%)"},"interactive":true},{"id":"bridge-motorway_link","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["!in","layer",2,3,4,5],["==","class","motorway_link"],["==","structure","bridge"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-color":"hsl(26, 67%, 70%)"},"interactive":true},{"id":"bridge-pedestrian","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","class","pedestrian"],["==","structure","bridge"]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[14,0.5],[18,12]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":1,"line-dasharray":{"base":1,"stops":[[14,[1,0]],[15,[1.5,0.4]],[16,[1,0.2]]]}},"interactive":true},{"id":"bridge-track","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","track"],["==","structure","bridge"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[15,1],[18,12]]},"line-color":"hsl(0, 0%, 100%)"},"interactive":true},{"id":"bridge-service-link","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":14,"filter":["all",["==","$type","LineString"],["all",["!=","type","trunk_link"],["==","structure","bridge"],["in","class","link","service","track"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[14,0.5],[18,12]]},"line-color":"hsl(0, 0%, 100%)"},"interactive":true},{"id":"bridge-street_limited","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street_limited"],["==","structure","bridge"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(35, 14%, 93%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"bridge-street","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":11,"filter":["all",["==","$type","LineString"],["all",["==","class","street"],["==","structure","bridge"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12.5,0.5],[14,2],[18,18]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"base":1,"stops":[[13.99,0],[14,1]]}},"interactive":true},{"id":"bridge-secondary-tertiary","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","structure","bridge"],["in","type","secondary","tertiary"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[8.5,0.5],[10,0.75],[18,26]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"base":1.2,"stops":[[5,0],[5.5,1]]}},"interactive":true},{"id":"bridge-primary","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","structure","bridge"],["==","type","primary"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":"hsl(0, 0%, 100%)","line-opacity":{"base":1.2,"stops":[[5,0],[5.5,1]]}},"interactive":true},{"id":"bridge-oneway-arrows-blue-minor","type":"symbol","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":16,"filter":["all",["==","$type","LineString"],["all",["==","oneway","true"],["==","structure","bridge"],["in","class","link","path","pedestrian","service","track"]]],"layout":{"symbol-placement":"line","icon-image":{"base":1,"stops":[[17,"oneway-small"],[18,"oneway-large"]]},"symbol-spacing":200,"icon-rotation-alignment":"map","icon-padding":2},"paint":{},"interactive":true},{"id":"bridge-oneway-arrows-blue-major","type":"symbol","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":15,"filter":["all",["==","$type","LineString"],["all",["==","oneway","true"],["==","structure","bridge"],["in","class","primary","secondary","street","street_limited","tertiary"]]],"layout":{"symbol-placement":"line","icon-image":{"base":1,"stops":[[16,"oneway-small"],[17,"oneway-large"]]},"symbol-spacing":200,"icon-rotation-alignment":"map","icon-padding":2},"paint":{},"interactive":true},{"id":"bridge-trunk","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","layer",2,3,4,5],["==","class","trunk"],["==","structure","bridge"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":"hsl(46, 69%, 68%)"},"interactive":true},{"id":"bridge-motorway","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["!in","layer",2,3,4,5],["==","class","motorway"],["==","structure","bridge"]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":"hsl(26, 67%, 70%)"},"interactive":true},{"id":"bridge-rail","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","structure","bridge"],["in","class","major_rail","minor_rail"]]],"layout":{"line-join":"round"},"paint":{"line-color":{"stops":[[13,"hsl(50, 17%, 82%)"],[16,"hsl(230, 10%, 74%)"]]},"line-width":{"base":1.5,"stops":[[14,0.5],[20,1]]}},"interactive":true},{"id":"bridge-rail-tracks","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","structure","bridge"],["in","class","major_rail","minor_rail"]]],"layout":{"line-join":"round"},"paint":{"line-color":{"stops":[[13,"hsl(50, 17%, 82%)"],[16,"hsl(230, 10%, 74%)"]]},"line-width":{"base":1.5,"stops":[[14,4],[20,8]]},"line-dasharray":[0.1,15],"line-opacity":{"base":1,"stops":[[13.75,0],[20,1]]}},"interactive":true},{"id":"bridge-trunk_link-2-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","structure","bridge"],["==","type","trunk_link"],[">=","layer",2]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-opacity":{"base":1,"stops":[[10.99,0],[11,1]]}},"interactive":true},{"id":"bridge-motorway_link-2-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","class","motorway_link"],["==","structure","bridge"],[">=","layer",2]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.75],[20,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-opacity":1},"interactive":true},{"id":"bridge-trunk-2-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","trunk"],["==","structure","bridge"],[">=","layer",2]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[10,1],[16,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]}},"interactive":true},{"id":"bridge-motorway-2-case","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","motorway"],["==","structure","bridge"],[">=","layer",2]]],"layout":{"line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[10,1],[16,2]]},"line-color":"hsl(0, 0%, 100%)","line-gap-width":{"base":1.5,"stops":[[5,0.75],[18,32]]}},"interactive":true},{"id":"bridge-trunk_link-2","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","structure","bridge"],["==","type","trunk_link"],[">=","layer",2]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-color":"hsl(46, 69%, 68%)"},"interactive":true},{"id":"bridge-motorway_link-2","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["all",["==","class","motorway_link"],["==","structure","bridge"],[">=","layer",2]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[12,0.5],[14,2],[18,18]]},"line-color":"hsl(26, 67%, 70%)"},"interactive":true},{"id":"bridge-trunk-2","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","trunk"],["==","structure","bridge"],[">=","layer",2]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":"hsl(46, 69%, 68%)"},"interactive":true},{"id":"bridge-motorway-2","type":"line","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","filter":["all",["==","$type","LineString"],["all",["==","class","motorway"],["==","structure","bridge"],[">=","layer",2]]],"layout":{"line-cap":"round","line-join":"round"},"paint":{"line-width":{"base":1.5,"stops":[[5,0.75],[18,32]]},"line-color":"hsl(26, 67%, 70%)"},"interactive":true},{"id":"bridge-oneway-arrows-white","type":"symbol","metadata":{"mapbox:group":"1444855799204.86"},"source":"composite","source-layer":"road","minzoom":16,"filter":["all",["==","$type","LineString"],["all",["!in","type","primary_link","secondary_link","tertiary_link"],["==","oneway","true"],["==","structure","bridge"],["in","class","link","trunk"]]],"layout":{"symbol-placement":"line","icon-image":{"base":1,"stops":[[16,"oneway-white-small"],[17,"oneway-white-large"]]},"symbol-spacing":200,"icon-padding":2},"paint":{"icon-opacity":0.5},"interactive":true},{"id":"aerialway-bg","type":"line","source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["==","class","aerialway"]],"layout":{"line-join":"round"},"paint":{"line-color":"hsl(0, 0%, 100%)","line-width":{"base":1.5,"stops":[[14,2.5],[20,3]]},"line-blur":0.5},"interactive":true},{"id":"aerialway","type":"line","source":"composite","source-layer":"road","minzoom":13,"filter":["all",["==","$type","LineString"],["==","class","aerialway"]],"layout":{"line-join":"round"},"paint":{"line-color":"hsl(230, 4%, 29%)","line-width":{"base":1.5,"stops":[[14,0.5],[20,1]]}},"interactive":true},{"id":"admin-3-4-boundaries-bg","type":"line","metadata":{"mapbox:group":"1444934295202.7542"},"source":"composite","source-layer":"admin","filter":["all",["==","maritime",0],[">=","admin_level",3]],"layout":{"line-join":"bevel"},"paint":{"line-color":{"base":1,"stops":[[8,"hsl(35, 12%, 89%)"],[16,"hsl(230, 49%, 90%)"]]},"line-width":{"base":1,"stops":[[7,3.75],[12,5.5]]},"line-opacity":{"base":1,"stops":[[7,0],[8,0.75]]},"line-dasharray":[1,0],"line-translate":[0,0],"line-blur":{"base":1,"stops":[[3,0],[8,3]]}},"interactive":true},{"id":"admin-2-boundaries-bg","type":"line","metadata":{"mapbox:group":"1444934295202.7542"},"source":"composite","source-layer":"admin","minzoom":1,"filter":["all",["==","admin_level",2],["==","maritime",0]],"layout":{"line-join":"miter"},"paint":{"line-width":{"base":1,"stops":[[3,3.5],[10,8]]},"line-color":{"base":1,"stops":[[6,"hsl(35, 12%, 89%)"],[8,"hsl(230, 49%, 90%)"]]},"line-opacity":{"base":1,"stops":[[3,0],[4,0.5]]},"line-translate":[0,0],"line-blur":{"base":1,"stops":[[3,0],[10,2]]}},"interactive":true},{"id":"admin-3-4-boundaries","type":"line","metadata":{"mapbox:group":"1444934295202.7542"},"source":"composite","source-layer":"admin","filter":["all",["==","maritime",0],[">=","admin_level",3]],"layout":{"line-join":"round","line-cap":"round"},"paint":{"line-dasharray":{"base":1,"stops":[[6,[2,0]],[7,[2,2,6,2]]]},"line-width":{"base":1,"stops":[[7,0.75],[12,1.5]]},"line-opacity":{"base":1,"stops":[[2,0],[3,1]]},"line-color":{"base":1,"stops":[[3,"hsl(230, 14%, 77%)"],[7,"hsl(230, 8%, 62%)"]]}},"interactive":true},{"id":"admin-2-boundaries","type":"line","metadata":{"mapbox:group":"1444934295202.7542"},"source":"composite","source-layer":"admin","minzoom":1,"filter":["all",["==","admin_level",2],["==","disputed",0],["==","maritime",0]],"layout":{"line-join":"round","line-cap":"round"},"paint":{"line-color":"hsl(230, 8%, 51%)","line-width":{"base":1,"stops":[[3,0.5],[10,2]]}},"interactive":true},{"id":"admin-2-boundaries-dispute","type":"line","metadata":{"mapbox:group":"1444934295202.7542"},"source":"composite","source-layer":"admin","minzoom":1,"filter":["all",["==","admin_level",2],["==","disputed",1],["==","maritime",0]],"layout":{"line-join":"round"},"paint":{"line-dasharray":[1.5,1.5],"line-color":"hsl(230, 8%, 51%)","line-width":{"base":1,"stops":[[3,0.5],[10,2]]}},"interactive":true},{"id":"housenum-label","type":"symbol","source":"composite","source-layer":"housenum_label","minzoom":17,"layout":{"text-field":"{house_num}","text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"text-padding":4,"text-max-width":7,"text-size":9.5},"paint":{"text-color":"hsl(35, 2%, 69%)","text-halo-color":"hsl(35, 8%, 85%)","text-halo-width":0.5,"text-halo-blur":0},"interactive":true},{"id":"contour-label","type":"symbol","source":"composite","source-layer":"contour","minzoom":11,"filter":["in","index",10,5],"layout":{"text-field":"{ele} m","symbol-placement":"line","text-max-angle":25,"text-padding":5,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-size":{"base":1,"stops":[[15,9.5],[20,12]]}},"paint":{"text-color":"hsl(100, 60%, 28%)","text-halo-width":1,"text-halo-blur":0,"text-halo-color":"hsla(0, 0%, 100%, 0.5)"},"interactive":true},{"id":"waterway-label","type":"symbol","source":"composite","source-layer":"waterway_label","minzoom":12,"filter":["in","class","canal","river"],"layout":{"text-field":"{name_en}","text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"symbol-placement":"line","text-max-angle":30,"text-size":{"base":1,"stops":[[13,12],[18,16]]}},"paint":{"text-halo-width":0.5,"text-halo-color":"hsl(196, 80%, 70%)","text-color":"hsl(230, 48%, 44%)","text-halo-blur":0.5},"interactive":true},{"id":"poi-relevant-scalerank4-l15","type":"symbol","metadata":{"mapbox:group":"1444933456003.5437"},"source":"composite","source-layer":"poi_label","minzoom":17,"filter":["all",["==","scalerank",4],[">=","localrank",15],["in","maki","amusement-park","aquarium","attraction","bakery","bank","bar","beer","bus","cafe","castle","college","doctor","fast-food","ferry","fire-station","fuel","grocery","harbor","hospital","ice-cream","lodging","marker","monument","museum","pharmacy","police","post","restaurant","rocket","stadium","swimming"]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[16,11],[20,13]]},"icon-image":"{maki}-11","text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":1,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(25, 25%, 32%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"poi-relevant-scalerank4-l1","type":"symbol","metadata":{"mapbox:group":"1444933456003.5437"},"source":"composite","source-layer":"poi_label","minzoom":15,"filter":["all",["<=","localrank",14],["==","scalerank",4],["in","maki","amusement-park","aquarium","attraction","bakery","bank","bar","beer","bus","cafe","castle","college","doctor","fast-food","ferry","fire-station","fuel","grocery","harbor","hospital","ice-cream","lodging","marker","monument","museum","pharmacy","police","post","restaurant","rocket","stadium","swimming"]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[16,11],[20,13]]},"icon-image":"{maki}-11","text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":1,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(25, 25%, 32%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"poi-parks_scalerank4","type":"symbol","metadata":{"mapbox:group":"1444933456003.5437"},"source":"composite","source-layer":"poi_label","minzoom":15,"filter":["all",["==","scalerank",4],["in","maki","campsite","cemetery","dog-park","garden","golf","park","picnic-site","playground","zoo"]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[16,11],[20,13]]},"icon-image":"{maki}-11","text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":1,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(100, 100%, 20%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"poi-scalerank3","type":"symbol","metadata":{"mapbox:group":"1444933372896.5967"},"source":"composite","source-layer":"poi_label","filter":["all",["!in","maki","campsite","cemetery","dog-park","garden","golf","park","picnic-site","playground","zoo"],["==","scalerank",3]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[16,11],[20,13]]},"icon-image":"{maki}-11","text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":1,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(25, 25%, 32%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"poi-parks-scalerank3","type":"symbol","metadata":{"mapbox:group":"1444933372896.5967"},"source":"composite","source-layer":"poi_label","filter":["all",["==","scalerank",3],["in","maki","campsite","cemetery","dog-park","garden","golf","park","picnic-site","playground","zoo"]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[16,11],[20,13]]},"icon-image":"{maki}-11","text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(100, 100%, 20%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"road-label-small","type":"symbol","metadata":{"mapbox:group":"1444933721429.3076"},"source":"composite","source-layer":"road_label","minzoom":15,"filter":["all",["!in","class","aerialway","link","motorway","path","pedestrian","primary","secondary","street","street_limited","tertiary","trunk"],["==","$type","LineString"]],"layout":{"text-size":{"base":1,"stops":[[15,10],[20,13]]},"text-max-angle":30,"symbol-spacing":250,"text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"symbol-placement":"line","text-padding":1,"text-rotation-alignment":"map","text-field":"{name_en}","text-letter-spacing":0.01},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1.25,"text-halo-blur":1},"interactive":true},{"id":"road-label-medium","type":"symbol","metadata":{"mapbox:group":"1444933721429.3076"},"source":"composite","source-layer":"road_label","minzoom":11,"filter":["all",["==","$type","LineString"],["in","class","aerialway","link","path","pedestrian","street","street_limited"]],"layout":{"text-size":{"base":1,"stops":[[11,10],[20,14]]},"text-max-angle":30,"symbol-spacing":250,"text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"symbol-placement":"line","text-padding":1,"text-rotation-alignment":"map","text-field":"{name_en}","text-letter-spacing":0.01},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1},"interactive":true},{"id":"road-label-large","type":"symbol","metadata":{"mapbox:group":"1444933721429.3076"},"source":"composite","source-layer":"road_label","filter":["in","class","motorway","primary","secondary","tertiary","trunk"],"layout":{"text-size":{"base":1,"stops":[[9,10],[20,16]]},"text-max-angle":30,"symbol-spacing":250,"text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"symbol-placement":"line","text-padding":1,"text-rotation-alignment":"map","text-field":"{name_en}","text-letter-spacing":0.01},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":"rgba(255,255,255, 0.75)","text-halo-width":1,"text-halo-blur":1},"interactive":true},{"id":"road-shields-black","type":"symbol","metadata":{"mapbox:group":"1444933575858.6992"},"source":"composite","source-layer":"road_label","filter":["all",["!in","shield","at-expressway","at-motorway","at-state-b","bg-motorway","bg-national","ch-main","ch-motorway","cz-motorway","cz-road","de-motorway","e-road","fi-main","gr-motorway","gr-national","hr-motorway","hr-state","hu-main","hu-motorway","nz-state","pl-expressway","pl-motorway","pl-national","ro-county","ro-motorway","ro-national","rs-motorway","rs-state-1b","se-main","si-expressway","si-motorway","sk-highway","sk-road","us-interstate","us-interstate-business","us-interstate-duplex","us-interstate-truck","za-metropolitan","za-national","za-provincial","za-regional"],["<=","reflen",6]],"layout":{"text-size":9,"icon-image":"{shield}-{reflen}","icon-rotation-alignment":"viewport","text-max-angle":38,"symbol-spacing":{"base":1,"stops":[[11,150],[14,200]]},"text-font":["DIN Offc Pro Bold","Arial Unicode MS Bold"],"symbol-placement":{"base":1,"stops":[[10,"point"],[11,"line"]]},"text-padding":2,"text-rotation-alignment":"viewport","text-field":"{ref}","text-letter-spacing":0.05,"icon-padding":2},"paint":{"text-color":"hsl(230, 21%, 37%)","icon-halo-color":"rgba(0, 0, 0, 1)","icon-halo-width":1,"text-opacity":1,"icon-color":"white","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0},"interactive":true},{"id":"road-shields-white","type":"symbol","metadata":{"mapbox:group":"1444933575858.6992"},"source":"composite","source-layer":"road_label","filter":["all",["<=","reflen",6],["in","shield","at-expressway","at-motorway","at-state-b","bg-motorway","bg-national","ch-main","ch-motorway","cz-motorway","cz-road","de-motorway","e-road","fi-main","gr-motorway","gr-national","hr-motorway","hr-state","hu-main","hu-motorway","nz-state","pl-expressway","pl-motorway","pl-national","ro-county","ro-motorway","ro-national","rs-motorway","rs-state-1b","se-main","si-expressway","si-motorway","sk-highway","sk-road","us-interstate","us-interstate-business","us-interstate-duplex","us-interstate-truck","za-metropolitan","za-national","za-provincial","za-regional"]],"layout":{"text-size":9,"icon-image":"{shield}-{reflen}","icon-rotation-alignment":"viewport","text-max-angle":38,"symbol-spacing":{"base":1,"stops":[[11,150],[14,200]]},"text-font":["DIN Offc Pro Bold","Arial Unicode MS Bold"],"symbol-placement":{"base":1,"stops":[[10,"point"],[11,"line"]]},"text-padding":2,"text-rotation-alignment":"viewport","text-field":"{ref}","text-letter-spacing":0.05,"icon-padding":2},"paint":{"text-color":"hsl(0, 0%, 100%)","icon-halo-color":"rgba(0, 0, 0, 1)","icon-halo-width":1,"text-opacity":1,"icon-color":"white","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0},"interactive":true},{"id":"motorway-junction","type":"symbol","metadata":{"mapbox:group":"1444933575858.6992"},"source":"composite","source-layer":"motorway_junction","minzoom":14,"filter":["all",["<=","reflen",9],[">","reflen",0]],"layout":{"text-field":"{ref}","text-size":9,"icon-image":"motorway-exit-{reflen}","text-font":["DIN Offc Pro Bold","Arial Unicode MS Bold"]},"paint":{"text-color":"hsl(0, 0%, 100%)","text-translate":[0,0]},"interactive":true},{"id":"poi-outdoor-features","type":"symbol","source":"composite","source-layer":"poi_label","filter":["in","maki","bicycle","bicycle-share","drinking-water","information","picnic-site","toilet"],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[16,11],[20,13]]},"icon-image":"{maki}-11","text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(25, 25%, 32%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"mountain-peak-label","type":"symbol","source":"composite","source-layer":"mountain_peak_label","layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[10,11],[18,14]]},"icon-image":"{maki}-15","text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-offset":[0,0.65],"text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(100, 100%, 20%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"mountain-peak-label-with-elevation","type":"symbol","source":"composite","source-layer":"mountain_peak_label","filter":[">","elevation_m",0],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[10,11],[18,14]]},"icon-image":"{maki}-15","text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-offset":[0,0.65],"text-anchor":"top","text-field":"{name_en}, {elevation_m}m","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(100, 100%, 20%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"poi-scalerank2","type":"symbol","metadata":{"mapbox:group":"1444933358918.2366"},"source":"composite","source-layer":"poi_label","filter":["all",["!in","maki","campsite","cemetery","dog-park","garden","golf","park","picnic-site","playground","zoo"],["==","scalerank",2]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[14,11],[20,14]]},"icon-image":{"stops":[[14,"{maki}-11"],[15,"{maki}-15"]]},"text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(25, 25%, 32%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"poi-parks-scalerank2","type":"symbol","metadata":{"mapbox:group":"1444933358918.2366"},"source":"composite","source-layer":"poi_label","filter":["all",["==","scalerank",2],["in","maki","campsite","cemetery","dog-park","garden","golf","park","picnic-site","playground","zoo"]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[14,11],[20,14]]},"icon-image":{"stops":[[14,"{maki}-11"],[15,"{maki}-15"]]},"text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(100, 100%, 20%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"rail-label","type":"symbol","source":"composite","source-layer":"rail_station_label","minzoom":12,"filter":["!=","maki","entrance"],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[16,11],[20,13]]},"icon-image":"{network}","symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-offset":[0,0.85],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":{"base":1,"stops":[[0,""],[13,"{name_en}"]]},"text-letter-spacing":0.01,"icon-padding":0,"text-max-width":7},"paint":{"text-color":"hsl(230, 48%, 44%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"icon-halo-width":4,"icon-halo-color":"#fff","text-opacity":{"base":1,"stops":[[13.99,0],[14,1]]},"text-halo-blur":0.5},"interactive":true},{"id":"water-label-sm","type":"symbol","metadata":{"mapbox:group":"1444933808272.805"},"source":"composite","source-layer":"water_label","minzoom":15,"filter":["<=","area",10000],"layout":{"text-field":"{name_en}","text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"text-max-width":7,"text-size":{"base":1,"stops":[[16,13],[20,16]]}},"paint":{"text-color":"hsl(230, 48%, 44%)"},"interactive":true},{"id":"water-label","type":"symbol","metadata":{"mapbox:group":"1444933808272.805"},"source":"composite","source-layer":"water_label","minzoom":5,"filter":[">","area",10000],"layout":{"text-field":"{name_en}","text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"text-max-width":7,"text-size":{"base":1,"stops":[[13,13],[18,18]]}},"paint":{"text-color":"hsl(230, 48%, 44%)"},"interactive":true},{"id":"poi-parks-scalerank1","type":"symbol","metadata":{"mapbox:group":"1444933322393.2852"},"source":"composite","source-layer":"poi_label","filter":["all",["<=","scalerank",1],["in","maki","campsite","cemetery","dog-park","garden","golf","park","picnic-site","playground","zoo"]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[10,11],[18,14]]},"icon-image":{"stops":[[13,"{maki}-11"],[14,"{maki}-15"]]},"text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(100, 100%, 20%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"poi-scalerank1","type":"symbol","metadata":{"mapbox:group":"1444933322393.2852"},"source":"composite","source-layer":"poi_label","filter":["all",["!in","maki","campsite","cemetery","dog-park","garden","golf","park","picnic-site","playground","zoo"],["<=","scalerank",1]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[10,11],[18,14]]},"icon-image":{"stops":[[13,"{maki}-11"],[14,"{maki}-15"]]},"text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0.65],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(25, 25%, 32%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"airport-label","type":"symbol","source":"composite","source-layer":"airport_label","minzoom":9,"filter":["<=","scalerank",2],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[10,12],[18,18]]},"icon-image":{"stops":[[12,"{maki}-11"],[13,"{maki}-15"]]},"symbol-spacing":250,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0.75],"text-rotation-alignment":"viewport","text-anchor":"top","text-field":{"stops":[[11,"{ref}"],[12,"{name_en}"]]},"text-letter-spacing":0.01,"text-max-width":9},"paint":{"text-color":"hsl(230, 48%, 44%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":0.5,"text-halo-blur":0.5},"interactive":true},{"id":"place-islet-archipelago-aboriginal","type":"symbol","source":"composite","source-layer":"place_label","maxzoom":16,"filter":["in","type","aboriginal_lands","archipelago","islet"],"layout":{"text-line-height":1.2,"text-size":{"base":1,"stops":[[10,11],[18,16]]},"text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0],"text-rotation-alignment":"viewport","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":8},"paint":{"text-color":"hsl(230, 29%, 35%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1},"interactive":true},{"id":"place-residential","type":"symbol","source":"composite","source-layer":"place_label","maxzoom":18,"filter":["all",["all",["<=","localrank",10],["==","type","residential"]],["in","$type","LineString","Point","Polygon"]],"layout":{"text-line-height":1.2,"text-size":{"base":1,"stops":[[10,11],[18,14]]},"text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0],"text-rotation-alignment":"viewport","text-field":"{name_en}","text-max-width":7},"paint":{"text-color":"hsl(26, 25%, 32%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1,"text-halo-blur":0.5},"interactive":true},{"id":"place-neighbourhood","type":"symbol","source":"composite","source-layer":"place_label","minzoom":10,"maxzoom":16,"filter":["==","type","neighbourhood"],"layout":{"text-field":"{name_en}","text-transform":"uppercase","text-letter-spacing":0.1,"text-max-width":7,"text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"text-padding":3,"text-size":{"base":1,"stops":[[12,11],[16,16]]}},"paint":{"text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1,"text-color":"hsl(230, 29%, 35%)","text-halo-blur":0.5},"interactive":true},{"id":"place-suburb","type":"symbol","source":"composite","source-layer":"place_label","minzoom":10,"maxzoom":16,"filter":["==","type","suburb"],"layout":{"text-field":"{name_en}","text-transform":"uppercase","text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"text-letter-spacing":0.15,"text-max-width":7,"text-padding":3,"text-size":{"base":1,"stops":[[11,11],[15,18]]}},"paint":{"text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1,"text-color":"hsl(230, 29%, 35%)","text-halo-blur":0.5},"interactive":true},{"id":"place-hamlet","type":"symbol","source":"composite","source-layer":"place_label","minzoom":10,"maxzoom":16,"filter":["==","type","hamlet"],"layout":{"text-field":"{name_en}","text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"text-size":{"base":1,"stops":[[12,11.5],[15,16]]}},"paint":{"text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1.25,"text-color":"hsl(0, 0%, 0%)"},"interactive":true},{"id":"place-village","type":"symbol","source":"composite","source-layer":"place_label","minzoom":8,"maxzoom":15,"filter":["==","type","village"],"layout":{"text-field":"{name_en}","text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"text-max-width":7,"text-size":{"base":1,"stops":[[10,11.5],[16,18]]}},"paint":{"text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1.25,"text-color":"hsl(0, 0%, 0%)"},"interactive":true},{"id":"place-town","type":"symbol","source":"composite","source-layer":"place_label","minzoom":6,"maxzoom":15,"filter":["==","type","town"],"layout":{"icon-image":"dot-9","text-font":{"base":1,"stops":[[11,["DIN Offc Pro Regular","Arial Unicode MS Regular"]],[12,["DIN Offc Pro Medium","Arial Unicode MS Regular"]]]},"text-offset":{"base":1,"stops":[[7,[0,-0.15]],[8,[0,0]]]},"text-anchor":{"base":1,"stops":[[7,"bottom"],[8,"center"]]},"text-field":"{name_en}","text-max-width":7,"text-size":{"base":1,"stops":[[7,11.5],[15,20]]}},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1.25,"icon-opacity":{"base":1,"stops":[[7.99,1],[8,0]]}},"interactive":true},{"id":"place-island","type":"symbol","source":"composite","source-layer":"place_label","maxzoom":16,"filter":["==","type","island"],"layout":{"text-line-height":1.2,"text-size":{"base":1,"stops":[[10,11],[18,16]]},"text-max-angle":38,"symbol-spacing":250,"text-font":["DIN Offc Pro Regular","Arial Unicode MS Regular"],"text-padding":2,"text-offset":[0,0],"text-rotation-alignment":"viewport","text-field":"{name_en}","text-letter-spacing":0.01,"text-max-width":7},"paint":{"text-color":"hsl(230, 29%, 35%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1},"interactive":true},{"id":"place-city-sm","type":"symbol","metadata":{"mapbox:group":"1444862510685.128"},"source":"composite","source-layer":"place_label","maxzoom":14,"filter":["all",["!in","scalerank",0,1,2,3,4,5],["==","type","city"]],"layout":{"text-size":{"base":1,"stops":[[6,12],[14,22]]},"icon-image":"dot-9","text-font":{"base":1,"stops":[[7,["DIN Offc Pro Regular","Arial Unicode MS Regular"]],[8,["DIN Offc Pro Medium","Arial Unicode MS Regular"]]]},"text-offset":{"base":1,"stops":[[7.99,[0,-0.2]],[8,[0,0]]]},"text-anchor":{"base":1,"stops":[[7,"bottom"],[8,"center"]]},"text-field":"{name_en}","text-max-width":7},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1.25,"icon-opacity":{"base":1,"stops":[[7.99,1],[8,0]]}},"interactive":true},{"id":"place-city-md-s","type":"symbol","metadata":{"mapbox:group":"1444862510685.128"},"source":"composite","source-layer":"place_label","maxzoom":14,"filter":["all",["==","type","city"],["in","ldir","E","S","SE","SW"],["in","scalerank",3,4,5]],"layout":{"text-field":"{name_en}","icon-image":"dot-10","text-anchor":{"base":1,"stops":[[7,"top"],[8,"center"]]},"text-offset":{"base":1,"stops":[[7.99,[0,0.1]],[8,[0,0]]]},"text-font":{"base":1,"stops":[[7,["DIN Offc Pro Regular","Arial Unicode MS Regular"]],[8,["DIN Offc Pro Medium","Arial Unicode MS Regular"]]]},"text-size":{"base":0.9,"stops":[[5,12],[12,22]]}},"paint":{"text-halo-width":1,"text-halo-color":"hsl(0, 0%, 100%)","text-color":"hsl(0, 0%, 0%)","text-halo-blur":1,"icon-opacity":{"base":1,"stops":[[7.99,1],[8,0]]}},"interactive":true},{"id":"place-city-md-n","type":"symbol","metadata":{"mapbox:group":"1444862510685.128"},"source":"composite","source-layer":"place_label","maxzoom":14,"filter":["all",["==","type","city"],["in","ldir","N","NE","NW","W"],["in","scalerank",3,4,5]],"layout":{"icon-image":"dot-10","text-font":{"base":1,"stops":[[7,["DIN Offc Pro Regular","Arial Unicode MS Regular"]],[8,["DIN Offc Pro Medium","Arial Unicode MS Regular"]]]},"text-offset":{"base":1,"stops":[[7.99,[0,-0.25]],[8,[0,0]]]},"text-anchor":{"base":1,"stops":[[7,"bottom"],[8,"center"]]},"text-field":"{name_en}","text-max-width":7,"text-size":{"base":0.9,"stops":[[5,12],[12,22]]}},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1,"icon-opacity":{"base":1,"stops":[[7.99,1],[8,0]]},"text-halo-blur":1},"interactive":true},{"id":"place-city-lg-s","type":"symbol","metadata":{"mapbox:group":"1444862510685.128"},"source":"composite","source-layer":"place_label","minzoom":1,"maxzoom":14,"filter":["all",["<=","scalerank",2],["==","type","city"],["in","ldir","E","S","SE","SW"]],"layout":{"icon-image":"dot-11","text-font":{"base":1,"stops":[[7,["DIN Offc Pro Regular","Arial Unicode MS Regular"]],[8,["DIN Offc Pro Medium","Arial Unicode MS Regular"]]]},"text-offset":{"base":1,"stops":[[7.99,[0,0.15]],[8,[0,0]]]},"text-anchor":{"base":1,"stops":[[7,"top"],[8,"center"]]},"text-field":"{name_en}","text-max-width":7,"text-size":{"base":0.9,"stops":[[4,12],[10,22]]}},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1,"icon-opacity":{"base":1,"stops":[[7.99,1],[8,0]]},"text-halo-blur":1},"interactive":true},{"id":"place-city-lg-n","type":"symbol","metadata":{"mapbox:group":"1444862510685.128"},"source":"composite","source-layer":"place_label","minzoom":1,"maxzoom":14,"filter":["all",["<=","scalerank",2],["==","type","city"],["in","ldir","N","NE","NW","W"]],"layout":{"icon-image":"dot-11","text-font":{"base":1,"stops":[[7,["DIN Offc Pro Regular","Arial Unicode MS Regular"]],[8,["DIN Offc Pro Medium","Arial Unicode MS Regular"]]]},"text-offset":{"base":1,"stops":[[7.99,[0,-0.25]],[8,[0,0]]]},"text-anchor":{"base":1,"stops":[[7,"bottom"],[8,"center"]]},"text-field":"{name_en}","text-max-width":7,"text-size":{"base":0.9,"stops":[[4,12],[10,22]]}},"paint":{"text-color":"hsl(0, 0%, 0%)","text-opacity":1,"text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1,"icon-opacity":{"base":1,"stops":[[7.99,1],[8,0]]},"text-halo-blur":1},"interactive":true},{"id":"marine-label-sm-ln","type":"symbol","metadata":{"mapbox:group":"1444856087950.3635"},"source":"composite","source-layer":"marine_label","minzoom":3,"maxzoom":10,"filter":["all",["==","$type","LineString"],[">=","labelrank",4]],"layout":{"text-line-height":1.1,"text-size":{"base":1,"stops":[[3,12],[6,16]]},"symbol-spacing":{"base":1,"stops":[[4,100],[6,400]]},"text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"symbol-placement":"line","text-field":"{name_en}","text-letter-spacing":0.1,"text-max-width":5},"paint":{"text-color":"hsl(205, 83%, 88%)"},"interactive":true},{"id":"marine-label-sm-pt","type":"symbol","metadata":{"mapbox:group":"1444856087950.3635"},"source":"composite","source-layer":"marine_label","minzoom":3,"maxzoom":10,"filter":["all",["==","$type","Point"],[">=","labelrank",4]],"layout":{"text-field":"{name_en}","text-max-width":5,"text-letter-spacing":0.1,"text-line-height":1.5,"text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"text-size":{"base":1,"stops":[[3,12],[6,16]]}},"paint":{"text-color":"hsl(205, 83%, 88%)"},"interactive":true},{"id":"marine-label-md-ln","type":"symbol","metadata":{"mapbox:group":"1444856087950.3635"},"source":"composite","source-layer":"marine_label","minzoom":2,"maxzoom":8,"filter":["all",["==","$type","LineString"],["in","labelrank",2,3]],"layout":{"text-line-height":1.1,"text-size":{"base":1.1,"stops":[[2,12],[5,20]]},"symbol-spacing":250,"text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"symbol-placement":"line","text-field":"{name_en}","text-letter-spacing":0.15,"text-max-width":5},"paint":{"text-color":"hsl(205, 83%, 88%)"},"interactive":true},{"id":"marine-label-md-pt","type":"symbol","metadata":{"mapbox:group":"1444856087950.3635"},"source":"composite","source-layer":"marine_label","minzoom":2,"maxzoom":8,"filter":["all",["==","$type","Point"],["in","labelrank",2,3]],"layout":{"text-field":"{name_en}","text-max-width":5,"text-letter-spacing":0.15,"text-line-height":1.5,"text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"text-size":{"base":1.1,"stops":[[2,14],[5,20]]}},"paint":{"text-color":"hsl(205, 83%, 88%)"},"interactive":true},{"id":"marine-label-lg-ln","type":"symbol","metadata":{"mapbox:group":"1444856087950.3635"},"source":"composite","source-layer":"marine_label","minzoom":1,"maxzoom":4,"filter":["all",["==","$type","LineString"],["==","labelrank",1]],"layout":{"text-field":"{name_en}","text-max-width":4,"text-letter-spacing":0.25,"text-line-height":1.1,"symbol-placement":"line","text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"text-size":{"base":1,"stops":[[1,14],[4,30]]}},"paint":{"text-color":"hsl(205, 83%, 88%)"},"interactive":true},{"id":"marine-label-lg-pt","type":"symbol","metadata":{"mapbox:group":"1444856087950.3635"},"source":"composite","source-layer":"marine_label","minzoom":1,"maxzoom":4,"filter":["all",["==","$type","Point"],["==","labelrank",1]],"layout":{"text-field":"{name_en}","text-max-width":4,"text-letter-spacing":0.25,"text-line-height":1.5,"text-font":["DIN Offc Pro Italic","Arial Unicode MS Regular"],"text-size":{"base":1,"stops":[[1,14],[4,30]]}},"paint":{"text-color":"hsl(205, 83%, 88%)"},"interactive":true},{"id":"state-label-sm","type":"symbol","metadata":{"mapbox:group":"1444856151690.9143"},"source":"composite","source-layer":"state_label","minzoom":3,"maxzoom":9,"filter":["<","area",20000],"layout":{"text-size":{"base":1,"stops":[[6,10],[9,14]]},"text-transform":"uppercase","text-font":["DIN Offc Pro Bold","Arial Unicode MS Bold"],"text-field":{"base":1,"stops":[[0,"{abbr}"],[6,"{name_en}"]]},"text-letter-spacing":0.15,"text-max-width":5},"paint":{"text-opacity":1,"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1},"interactive":true},{"id":"state-label-md","type":"symbol","metadata":{"mapbox:group":"1444856151690.9143"},"source":"composite","source-layer":"state_label","minzoom":3,"maxzoom":8,"filter":["all",["<","area",80000],[">=","area",20000]],"layout":{"text-size":{"base":1,"stops":[[5,10],[8,16]]},"text-transform":"uppercase","text-font":["DIN Offc Pro Bold","Arial Unicode MS Bold"],"text-field":{"base":1,"stops":[[0,"{abbr}"],[5,"{name_en}"]]},"text-letter-spacing":0.15,"text-max-width":6},"paint":{"text-opacity":1,"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1},"interactive":true},{"id":"state-label-lg","type":"symbol","metadata":{"mapbox:group":"1444856151690.9143"},"source":"composite","source-layer":"state_label","minzoom":3,"maxzoom":7,"filter":[">=","area",80000],"layout":{"text-size":{"base":1,"stops":[[4,10],[7,18]]},"text-transform":"uppercase","text-font":["DIN Offc Pro Bold","Arial Unicode MS Bold"],"text-padding":1,"text-field":{"base":1,"stops":[[0,"{abbr}"],[4,"{name_en}"]]},"text-letter-spacing":0.15,"text-max-width":6},"paint":{"text-opacity":1,"text-color":"hsl(0, 0%, 0%)","text-halo-color":"hsl(0, 0%, 100%)","text-halo-width":1},"interactive":true},{"id":"country-label-sm","type":"symbol","metadata":{"mapbox:group":"1444856144497.7825"},"source":"composite","source-layer":"country_label","minzoom":1,"maxzoom":10,"filter":[">=","scalerank",5],"layout":{"text-field":"{name_en}","text-max-width":6,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-size":{"base":0.9,"stops":[[5,14],[9,22]]}},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":{"base":1,"stops":[[2,"rgba(255,255,255,0.75)"],[3,"hsl(0, 0%, 100%)"]]},"text-halo-width":1.25},"interactive":true},{"id":"country-label-md","type":"symbol","metadata":{"mapbox:group":"1444856144497.7825"},"source":"composite","source-layer":"country_label","minzoom":1,"maxzoom":8,"filter":["in","scalerank",3,4],"layout":{"text-field":{"base":1,"stops":[[0,"{code}"],[2,"{name_en}"]]},"text-max-width":6,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-size":{"base":1,"stops":[[3,10],[8,24]]}},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":{"base":1,"stops":[[2,"rgba(255,255,255,0.75)"],[3,"hsl(0, 0%, 100%)"]]},"text-halo-width":1.25},"interactive":true},{"id":"country-label-lg","type":"symbol","metadata":{"mapbox:group":"1444856144497.7825"},"source":"composite","source-layer":"country_label","minzoom":1,"maxzoom":7,"filter":["in","scalerank",1,2],"layout":{"text-field":"{name_en}","text-max-width":{"base":1,"stops":[[0,5],[3,6]]},"text-font":["DIN Offc Pro Medium","Arial Unicode MS Regular"],"text-size":{"base":1,"stops":[[1,10],[6,24]]}},"paint":{"text-color":"hsl(0, 0%, 0%)","text-halo-color":{"base":1,"stops":[[2,"rgba(255,255,255,0.75)"],[3,"hsl(0, 0%, 100%)"]]},"text-halo-width":1.25},"interactive":true}],"created":"2017-08-10T19:56:21.137Z","id":"cj66v6i8c4hnc2so16ngtlovn","modified":"2017-08-10T19:56:21.137Z","owner":"pipbailey","visibility":"private","draft":false};

/***/ }),

/***/ "./src/components/common/maps/styles/index.js":
/*!****************************************************!*\
  !*** ./src/components/common/maps/styles/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Satellite_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Satellite.json */ "./src/components/common/maps/styles/Satellite.json");
var _Satellite_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./Satellite.json */ "./src/components/common/maps/styles/Satellite.json", 1);
/* harmony import */ var _BasicMap_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicMap.json */ "./src/components/common/maps/styles/BasicMap.json");
var _BasicMap_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./BasicMap.json */ "./src/components/common/maps/styles/BasicMap.json", 1);
/* harmony import */ var _TopoMap_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopoMap.json */ "./src/components/common/maps/styles/TopoMap.json");
var _TopoMap_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./TopoMap.json */ "./src/components/common/maps/styles/TopoMap.json", 1);



/* harmony default export */ __webpack_exports__["default"] = ([{
  toolTip: 'TopoMap',
  icon: 'image',
  color: 'blue',
  style: _TopoMap_json__WEBPACK_IMPORTED_MODULE_2__
}, {
  toolTip: 'Aerial',
  icon: 'plane',
  color: 'green',
  style: _Satellite_json__WEBPACK_IMPORTED_MODULE_0__
}, {
  toolTip: 'RoadMap',
  icon: 'road',
  color: 'blue',
  style: _BasicMap_json__WEBPACK_IMPORTED_MODULE_1__
}]);

/***/ }),

/***/ "./src/components/common/maps/styles/mockmap.json":
/*!********************************************************!*\
  !*** ./src/components/common/maps/styles/mockmap.json ***!
  \********************************************************/
/*! exports provided: version, DESCRIPTION, URL, name, glyphs, metadata, sources, layers, default */
/***/ (function(module) {

module.exports = {"version":8,"DESCRIPTION":"This style is only used by the custom style fixture. Go nuts! See the URL below for style spec","URL":"https://www.mapbox.com/mapbox-gl-js/style-spec#sources-vector","name":"TheProductMapboxGL","glyphs":"mapbox://fonts/raychaser/{fontstack}/{range}.pbf","metadata":{"mapbox:autocomposite":true,"mapbox:type":"default"},"sources":{"MapBaseLayer":{"url":"mapbox://mapbox.satellite","type":"raster","tileSize":256}},"layers":[{"id":"background","type":"background","paint":{"background-color":"rgb(0,0,0)"},"interactive":false},{"id":"MapBaseLayer","type":"raster","source":"MapBaseLayer","source-layer":"MapBaseLayer","interactive":false,"paint":{"raster-opacity":1}}]};

/***/ }),

/***/ "./src/components/misc/Placeholder.css":
/*!*********************************************!*\
  !*** ./src/components/misc/Placeholder.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Placeholder.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/misc/Placeholder.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Placeholder.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/misc/Placeholder.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Placeholder.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/misc/Placeholder.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/misc/Placeholder.jsx":
/*!*********************************************!*\
  !*** ./src/components/misc/Placeholder.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _Placeholder_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Placeholder.css */ "./src/components/misc/Placeholder.css");
/* harmony import */ var _Placeholder_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Placeholder_css__WEBPACK_IMPORTED_MODULE_5__);






var Placeholder = Object(recompose__WEBPACK_IMPORTED_MODULE_4__["pure"])(function (_ref) {
  var autoHeight = _ref.autoHeight,
      autoWidth = _ref.autoWidth,
      aspect = _ref.aspect,
      width = _ref.width,
      height = _ref.height,
      className = _ref.className,
      json = _ref.json,
      description = _ref.description,
      title = _ref.title,
      icon = _ref.icon,
      showSize = _ref.showSize;
  var finalHeight = height || autoHeight;
  var finalWidth = width || autoWidth;

  if (aspect) {
    finalHeight = aspect * finalWidth;
  }

  var minSize = Math.min(finalHeight, finalWidth);
  var minIconFontSize = minSize * 6;
  var iconStyle = {
    fontSize: "".concat(minIconFontSize, "%") // marginTop: `${(height - minIconFontSize) / 2}px`

  };
  var widthText = "".concat(finalWidth, "px");
  var heightText = "".concat(finalHeight, "px");
  var style = {
    maxWidth: widthText,
    width: widthText,
    height: heightText
  };
  var classes = ['myPlaceholder'].concat(className.split(' ')).join(' ');
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    className: classes,
    style: style
  }, icon ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: icon,
    style: iconStyle
  }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "centered"
  }, title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], null, title.toString()) : null, showSize ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sizeText"
  }, "".concat(widthText, " X ").concat(heightText)) : null, description ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "description"
  }, description) : null, json ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "json"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", null, JSON.stringify(json, null, 2)))) : null));
});
Placeholder.defaultProps = {
  className: ''
};

var SizerWrapper = function SizerWrapper(_ref2) {
  var minHeight = _ref2.minHeight,
      props = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["minHeight"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      minHeight: minHeight,
      height: minHeight ? '100%' : null
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_2__["AutoSizer"], null, function (_ref3) {
    var height = _ref3.height,
        width = _ref3.width;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Placeholder, Object.assign({
      autoHeight: height,
      autoWidth: width
    }, props));
  }));
};

SizerWrapper.displayName = 'Placeholder';
/* harmony default export */ __webpack_exports__["default"] = (SizerWrapper);

/***/ }),

/***/ "./src/components/misc/misc.fixture.js":
/*!*********************************************!*\
  !*** ./src/components/misc/misc.fixture.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Placeholder */ "./src/components/misc/Placeholder.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config.js");



var fixtures = [];
var devFixtures = [{
  name: 'Placeholder',
  component: _Placeholder__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    title: 'SomeTitle',
    icon: 'user',
    description: 'Some description',
    aspect: 0.5,
    width: 200,
    height: 200,
    showSize: true
  }
}];
var finalFixes = fixtures.concat(Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_config__WEBPACK_IMPORTED_MODULE_2__["default"].env === 'development' ? devFixtures : [])).map(function (fix) {
  console.log('fix.component.displayName', fix);
  fix.component.displayName = "Misc/".concat(fix.component.name);
  return fix;
});
/* harmony default export */ __webpack_exports__["default"] = (finalFixes);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: AuthStates, mapBoxToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStates", function() { return AuthStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapBoxToken", function() { return mapBoxToken; });
/**
 * NOTE: This gets checked into Git. Nothing secret should go here
 */
var AuthStates = {
  unknown: 'unknown',
  // This is the initial state
  unauthenticated: 'unauthenticated',
  signingOut: 'signingOut',
  signedOut: 'signedOut',
  signingIn: 'signingIn',
  signedIn: 'signedIn',
  mfaRequired: 'mfaRequired',
  newPasswordRequired: 'newPasswordRequired' // Need to supply a mapbox token (it's not secret. Putting it in git is fine)

};
var mapBoxToken = Object({"NODE_ENV":"production","PUBLIC_URL":"","REACT_APP_GRAPHQL":"https://jelwrai7pjcr5e2lmfskr5zpzq.appsync-api.us-west-2.amazonaws.com/graphql","REACT_APP_AWS_REGION":"us-west-2","REACT_APP_API_KEY":"m4dcwk5b75fwxl5zen63wjeaou","REACT_APP_COGNITO_CLIENT":"2kbuh7kcl2miv96ctdao340s4t","REACT_APP_MAPBOX_TOKEN":"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw","REACT_APP_USER_POOL_ID":"us-west-2_xuI6sjGDF","REACT_APP_DOMAIN":"northarrowresearchlabs.github.io","REACT_APP_COOKIEPATH":"/BDAPOC"}).REACT_APP_MAPBOXTOKEN;
var domain = "northarrowresearchlabs.github.io";

if (false) {}

/* harmony default export */ __webpack_exports__["default"] = ({
  env: "production",
  GraphQLEndpoint: "https://jelwrai7pjcr5e2lmfskr5zpzq.appsync-api.us-west-2.amazonaws.com/graphql",
  // Cognito stuff
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
    // REQUIRED - Amazon Cognito Region
    region: "us-west-2",
    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    // identityPoolRegion: 'XX-XXXX-X',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "us-west-2_xuI6sjGDF",
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "2kbuh7kcl2miv96ctdao340s4t",
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: true,
    // OPTIONAL - Configuration for cookie storage
    cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      domain: "".concat(domain),
      // OPTIONAL - Cookie path
      path: "/BDAPOC" || null,
      // OPTIONAL - Cookie expiration in days
      expires: 20,
      // OPTIONAL - Cookie secure flag (requires HTTP)
      secure: true // OPTIONAL - customized storage object
      // storage: new MyStorage(),
      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      // authenticationFlowType: 'USER_PASSWORD_AUTH'

    }
  }
});

/***/ }),

/***/ "./src/css/cosmos.css":
/*!****************************!*\
  !*** ./src/css/cosmos.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./cosmos.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/cosmos.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./cosmos.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/cosmos.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./cosmos.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/cosmos.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/graphql/queries.js":
/*!********************************!*\
  !*** ./src/graphql/queries.js ***!
  \********************************/
/*! exports provided: withStructuresList, withCreateStructure, withDeleteStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStructuresList", function() { return withStructuresList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withCreateStructure", function() { return withCreateStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDeleteStructure", function() { return withDeleteStructure; });
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);




function _templateObject5() {
  var data = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation deleteBDAPOC($input: DeleteBDAPOCInput!) {\n    deleteBDAPOC(input: $input) {\n      id\n      body\n      lastEdit\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation updateBDAPOC($input: UpdateBDAPOCInput!) {\n    createBDAPOC(input: $input) {\n      id\n      body\n      lastEdit\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation createBDAPOC($input: CreateBDAPOCInput!) {\n    createBDAPOC(input: $input) {\n      id\n      body\n      lastEdit\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query getBDAPOC($id: ID!) {\n    createBDAPOC(input: $id) {\n      id\n      body\n      lastEdit\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query listBDAPOCS {\n    listBDAPOCS {\n      items {\n        id\n        body\n        lastEdit\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var QueryListStructures = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var QueryGetStructure = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var MutationCreateStructure = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3());
var MutationUpdateStructure = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject4());
var MutationDeleteStructure = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject5());
var withStructuresList = Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(QueryListStructures, {
  options: function options(_ref) {
    var pollInterval = _ref.pollInterval;
    return {
      fetchPolicy: 'cache-and-network',
      pollInterval: pollInterval || 5000
    };
  },
  props: function props(_props) {
    return {
      debug: console.log('this query', _props),
      structures: _props.data.listBDAPOCS ? _props.data.listBDAPOCS.items : []
    };
  }
});
var withCreateStructure = Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(MutationCreateStructure, {
  options: {
    update: function update(proxy, _ref2) {
      var createBDAPOC = _ref2.data.createBDAPOC;
      var query = QueryListStructures;
      var data = proxy.readQuery({
        query: query
      });
      data.listBDAPOCS.items = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data.listBDAPOCS.items.filter(function (struct) {
        return !createBDAPOC || struct.id !== createBDAPOC.id;
      })).concat([createBDAPOC]);
      console.log('update', {
        data: data,
        createBDAPOC: createBDAPOC
      });
      proxy.writeQuery({
        query: query,
        data: data
      });
    }
  },
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        mutate = _ref3.mutate;
    return {
      createStructure: function createStructure(structure) {
        return mutate({
          variables: {
            input: Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, structure, {
              lastEdit: Math.round(new Date().getTime() / 1000)
            })
          },
          optimisticResponse: function optimisticResponse() {
            return {
              __typename: 'Mutation',
              createBDAPOC: Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, structure, {
                id: "pending".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()),
                lastEdit: Math.round(new Date().getTime() / 1000),
                __typename: 'BDAPOC'
              })
            };
          }
        });
      }
    };
  }
});
var withDeleteStructure = Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(MutationDeleteStructure, {
  options: {
    update: function update(proxy, _ref4) {
      var deleteBDAPOC = _ref4.data.deleteBDAPOC;
      var query = QueryListStructures;
      var data = proxy.readQuery({
        query: query
      });
      data.listBDAPOCS.items = data.listBDAPOCS.items.filter(function (struct) {
        return !deleteBDAPOC || struct.id !== deleteBDAPOC.id;
      });
      proxy.writeQuery({
        query: query,
        data: data
      });
    }
  },
  props: function props(_ref5) {
    var ownProps = _ref5.ownProps,
        mutate = _ref5.mutate;
    return {
      deleteStructure: function deleteStructure(structure) {
        return mutate({
          variables: {
            input: structure
          },
          optimisticResponse: function optimisticResponse() {
            return {
              __typename: 'Mutation',
              deleteBDAPOC: Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, structure, {
                __typename: 'BDAPOC'
              })
            };
          }
        });
      }
    };
  }
});

/***/ }),

/***/ "./src/lib/mapUtil.js":
/*!****************************!*\
  !*** ./src/lib/mapUtil.js ***!
  \****************************/
/*! exports provided: findBounds, findCenter, findYdomain, maxYChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBounds", function() { return findBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCenter", function() { return findCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findYdomain", function() { return findYdomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxYChars", function() { return maxYChars; });
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/lib/util.js");

 // // Just set some dummy macbounds for now.

/**
 *
 * @param {*} acc  the accumulator we're comparing to
 * @param {*} pt  [Easting, Nothing]
 */

function findBounds(pts) {
  try {
    return pts.filter(function (pt) {
      return !!pt;
    }).reduce(function (bds, pt) {
      if (!pt) return bds;
      var newAcc = !bds ? [null, null, null, null] : bds.slice();
      if (!newAcc[0] || newAcc[0] > pt[0]) newAcc[0] = pt[0];
      if (!newAcc[1] || newAcc[1] > pt[1]) newAcc[1] = pt[1];
      if (!newAcc[2] || newAcc[2] < pt[0]) newAcc[2] = pt[0];
      if (!newAcc[3] || newAcc[3] < pt[1]) newAcc[3] = pt[1];
      return newAcc;
    }, null);
  } catch (e) {
    console.error('findBounds', e);
  }
}
/**
 * Find the average of a bunch of points
 * @param {*} pts
 */

function findCenter(pts) {
  try {
    var sums = pts.filter(function (pt) {
      return !!pt;
    }).reduce(function (acc, pt) {
      return [acc[0] + pt[0], acc[1] + pt[1]];
    }, [0, 0]);
    return [sums[0] / pts.length, sums[1] / pts.length];
  } catch (e) {}
}
/**
 * Given a range of data points. find the y-extent and buffer it by a percent
 * @param {*} allDataPts
 * @param {*} lastDrawLocation
 * @param {*} buffer
 **/

function findYdomain(allDataPts, lastDrawLocation) {
  var buffer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.05;

  // console.log('findYdomain RUN')
  try {
    var filteredys = allDataPts // Either don't filter (if we aren't zoomed) or filter to the left and the right
    .filter(function (p) {
      return !lastDrawLocation || p.x >= lastDrawLocation.left && p.x <= lastDrawLocation.right;
    });
    if (filteredys.length === 0) return;
    var rawEdges = [Math.min.apply(Math, Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredys.map(function (dp) {
      return dp.y - (dp.err ? dp.err : 0);
    }))), Math.max.apply(Math, Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredys.map(function (dp) {
      return dp.y + (dp.err ? dp.err : 0);
    })))];
    var range = rawEdges[1] - rawEdges[0]; // Buffer by %

    var newRange = [rawEdges[0] !== 0 ? rawEdges[0] - range * buffer : 0, rawEdges[1] + range * buffer];
    return newRange;
  } catch (e) {
    console.error(e);
    return null;
  }
}
/**
 * return the greatest character count of the y vals
 * @param {*} allDAtaPts
 */

function maxYChars(allDAtaPts) {
  try {
    var _maxYChars = Math.max.apply(Math, Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allDAtaPts.map(function (p) {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isNumeric"])(p.y)) return p.y.toFixed(1).length;else return p.y.toString().length;
    })));

    return _maxYChars;
  } catch (e) {
    return 5;
  }
}

/***/ }),

/***/ "./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/*! exports provided: isNumeric, urlizeb64, formatNum, clearSelection, isObjectWithKeys, makeDomArray, capitalizeFirstLetter, numericArrayCompare, decodeUnbufferedBase64, encodeUnbufferedBase64, isObject, arrToObj, getRandomArbitraryInt, randomMap, randomArrayEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlizeb64", function() { return urlizeb64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNum", function() { return formatNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSelection", function() { return clearSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectWithKeys", function() { return isObjectWithKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDomArray", function() { return makeDomArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericArrayCompare", function() { return numericArrayCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeUnbufferedBase64", function() { return decodeUnbufferedBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeUnbufferedBase64", function() { return encodeUnbufferedBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrToObj", function() { return arrToObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArbitraryInt", function() { return getRandomArbitraryInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomMap", function() { return randomMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomArrayEl", function() { return randomArrayEl; });
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var isNumeric = function isNumeric(num) {
  try {
    return !isNaN(parseFloat(num)) && isFinite(num);
  } catch (e) {
    return false;
  }
};
/**
 * This is a correction to strip === signs off of base64-encoded strings
 * @param {} x
 */

var urlizeb64 = function urlizeb64(x) {
  return x.replace('+', '-').replace('/', '_').replace(/=+$/, '');
};
/**
 * We need numbers displayed consistently. This is how we do it.
 * @param {*} num
 * @param {*} precision
 */

function formatNum(num, precision) {
  try {
    var precstr = precision > 0 ? '.' + Array(precision + 1).join('0') : '';
    var newprec = isNumeric(num) ? numeral__WEBPACK_IMPORTED_MODULE_1___default()(num).format("0,0".concat(precstr)) : num;
    return newprec.replace(/(\.(0{0,1}[1-9]*))0+$/, '$1');
  } catch (e) {
    return num;
  }
}
/**
 * Magic function to clear mouse selection. Use sparingly.
 */

function clearSelection() {
  if (document.selection && document.selection.empty) {
    document.selection.empty();
  } else if (window.getSelection) {
    var sel = window.getSelection();
    sel.removeAllRanges();
  }
}
function isObjectWithKeys(obj) {
  return typeof obj === 'object' && obj !== null && Object.keys(obj).length > 0;
}
/**
 * Dom node parsing is weird because it may return an array or a single element with no way to know
 * which is which.
 */

function makeDomArray(domnode) {
  if (!domnode) return [];
  var keys = Object.keys(domnode); // This is not the pattern we expect

  if (keys.length > 1 || keys.length === 0) throw Error('Expected nester domnode structure.');
  if (!domnode) return [];
  if (!domnode[keys[0]]) return [];
  return Array.isArray(domnode[keys[0]]) ? domnode[keys[0]] : [domnode[keys[0]]];
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
/**
 * Good for comparing two purely numeric arrays
 * @param {*} arr1
 * @param {*} arr2
 */

function numericArrayCompare(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;
  return !arr1.some(function (el, idx) {
    return el !== arr2[idx];
  });
}
/**
 * We need a function to add the padding '=' signs back before we decode
 * @param {*} hash
 */

function decodeUnbufferedBase64(hash) {
  var missingPadding = hash.length % 4;

  if (missingPadding !== 0) {
    var newhash = hash + Array(4 - missingPadding).join('=');
    return Buffer.from(newhash, 'base64').toString();
  } else {
    return Buffer.from(hash, 'base64').toString();
  }
}
function encodeUnbufferedBase64(str) {
  return urlizeb64(Buffer.from(str).toString('base64'));
}
/**
 *
 * @param {*} o
 */

function isObject(o) {
  return o instanceof Object && o.constructor === Object;
}
/**
 * XML to JSON is a non-trivial exercise. We can make certain assumptions
 * about our incoming file
 * @param {*} data
 */

function arrToObj(data) {
  for (var key in data) {
    // Make sure we're looping over legitimate objects
    if (data.hasOwnProperty(key)) {
      var keyDat = data[key];

      if (keyDat._) {
        keyDat.val = keyDat._;
        delete keyDat._;
      }

      if (keyDat.$) {
        keyDat.attr = keyDat.$;
        delete keyDat.$;
      }

      if (typeof keyDat === 'object') {
        data[key] = arrToObj(keyDat); // There's a pattern we want to collapse
        // It puts every single individual value into its own array. Not cool

        if (Array.isArray(keyDat) && keyDat.length === 1 && typeof keyDat[0] === 'string') {
          if (isNumeric(keyDat[0])) data[key] = Number(keyDat[0]);else data[key] = keyDat[0].replace(/\\/g, '/');
        } else if (Array.isArray(keyDat) && keyDat.length === 1 && // The second case is when it puts objects into its own array
        isObject(keyDat[0]) && Object.keys(keyDat[0]).length === 1) {
          // xml2js does a weird thing where attributes get put into the following structure
          // [{ "_": "475945.992587164,5125837.37170763", "$": { "units": "m"  } }]
          data[key] = keyDat[0][Object.keys(keyDat[0])[0]];
        } // Dynamo DB does not like empty strings


        if (typeof data[key] && data[key].length === 0) {
          delete data[key];
        }

        if (typeof data[key] === 'string' && isNumeric(data[key])) data[key] = Number(data[key]);
      }
    }
  }

  return data;
}
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */

function getRandomArbitraryInt(min, max) {
  return parseInt(Math.random() * (max - min) + min, 10);
}
var randomMap = function randomMap(low, high, func) {
  return Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random(low, high)).keys()).map(func);
};
var randomArrayEl = function randomArrayEl(arr) {
  return arr[lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random(0, arr.length - 1)];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/redux/reducers.js":
/*!*******************************!*\
  !*** ./src/redux/reducers.js ***!
  \*******************************/
/*! exports provided: actionConsts, actions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionConsts", function() { return actionConsts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);





var actionConsts = {
  INIT_FIELD: 'INIT_FIELD',
  CHANGE_FIELD_VALUE: 'CHANGE_FIELD_VALUE',
  CREATE_STRUCTURE: 'CREATE_STRUCTURE',
  EDIT_STRUCTURE: 'EDIT_STRUCTURE',
  VIEW_STRUCTURE: 'VIEW_STRUCTURE',
  BACK_TO_HOME: 'BACK_TO_HOME',
  DELETE_STRUCTURE: 'DELETE_STRUCTURE',
  UPLOAD_STRUCTURE: 'UPLOAD_FORM'
  /**
   * Return a random chance of something happening happening
   * @param {*} prob (in percent: 0-100)
   */

};

var randomFail = function randomFail(prob) {
  var rand = Math.random();
  return rand > parseFloat(prob) / 100;
};

var getRandomArbitrary = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};
/**
 * Actions are actually just really simple objects
 */


var actions = {
  initializeField: function initializeField(guid, fieldName, fieldSection) {
    return {
      type: actionConsts.INIT_FIELD,
      guid: guid,
      fieldName: fieldName,
      fieldSection: fieldSection
    };
  },
  changeFieldValue: function changeFieldValue(guid, fieldName, fieldValue, fieldNote) {
    return {
      type: actionConsts.CHANGE_FIELD_VALUE,
      guid: guid,
      fieldName: fieldName,
      fieldValue: fieldValue,
      fieldNote: fieldNote
    };
  },
  backToHome: function backToHome() {
    return {
      type: actionConsts.BACK_TO_HOME
    };
  },
  createStructure: function createStructure() {
    var guid = uuid_v1__WEBPACK_IMPORTED_MODULE_4___default()();
    return function (dispatch) {
      dispatch({
        type: actionConsts.CREATE_STRUCTURE,
        guid: guid
      });
      dispatch({
        type: actionConsts.EDIT_STRUCTURE,
        guid: guid
      });
    };
  },
  deleteStructure: function deleteStructure(guid) {
    return {
      type: actionConsts.DELETE_STRUCTURE,
      guid: guid
    };
  },
  editStructure: function editStructure(guid) {
    return {
      type: actionConsts.EDIT_STRUCTURE,
      guid: guid
    };
  },
  viewStructure: function viewStructure(guid) {
    return {
      type: actionConsts.VIEW_STRUCTURE,
      guid: guid
    };
  },
  uploadStructure: function uploadStructure(guid) {
    var type = actionConsts.UPLOAD_STRUCTURE;
    return function (dispatch) {
      dispatch({
        type: type,
        guid: guid,
        uploading: true,
        uploaded: false,
        uploadFailed: false
      });
      setTimeout(function () {
        // Randomly fail and ask for retry
        if (randomFail(20)) dispatch({
          type: type,
          guid: guid,
          uploading: false,
          uploaded: true,
          uploadFailed: false
        });else dispatch({
          type: type,
          guid: guid,
          uploading: false,
          uploaded: false,
          uploadFailed: true
        });
      }, getRandomArbitrary(1000, 4000)); // between 3 and 10 seconds simulates a bad network connection
    };
  } // Template for new structure form object

};
var structureTemplate = {
  uploaded: false,
  uploading: false,
  uploadFailed: false,
  fields: {// fieldname: {
    //   value: null,
    //   section: null
    // }
  }
};
var defaultState = {
  // editing: '3b99e3e0-7598-11e8-90be-95472fb3ecbd',
  // structures: {
  //   '3b99e3e0-7598-11e8-90be-95472fb3ecbd': {
  //     uploaded: false,
  //     uploading: false,
  //     uploadFailed: false,
  //     fields: [
  //       {
  //         value: 'SOMETHING',
  //         section: 1
  //       }
  //     ]
  //   }
  // }
  editing: null,
  structures: {}
  /**
   * Our reducers are super simple too
   * @param {*} state
   * @param {*} action
   */

};

var structures = function structures() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.structures;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var guid = action.guid,
      uploading = action.uploading,
      uploaded = action.uploaded,
      uploadFailed = action.uploadFailed,
      fieldName = action.fieldName,
      fieldValue = action.fieldValue,
      fieldSection = action.fieldSection,
      fieldNote = action.fieldNote;
  var newState;

  switch (action.type) {
    case actionConsts.CREATE_STRUCTURE:
      // Add a new object and set what we're currently editing
      return Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, guid, structureTemplate));

    case actionConsts.INIT_FIELD:
      newState = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(state); // console.log('HERE I AM', { action, state })

      var currField = newState[guid].fields[fieldName] || {
        value: null
      };
      newState[guid].fields[fieldName] = {
        value: currField.value,
        section: fieldSection,
        note: currField.note
      };
      return newState;

    case actionConsts.CHANGE_FIELD_VALUE:
      var oldVal = state[guid].fields[fieldName];
      newState = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(state);
      var newVal = fieldValue || oldVal.value;
      var newNote = fieldNote || oldVal.note;
      newState[guid].fields[fieldName] = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, oldVal, {
        value: newVal,
        note: newNote
      });
      return newState;

    case actionConsts.DELETE_STRUCTURE:
      newState = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(state);
      delete newState[guid];
      return newState;

    case actionConsts.UPLOAD_STRUCTURE:
      newState = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(state);
      newState[guid] = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, newState[guid], {
        uploading: uploading,
        uploaded: uploaded,
        uploadFailed: uploadFailed
      });
      return newState;

    default:
      return state;
  }
};

var editing = function editing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.editing;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionConsts.EDIT_STRUCTURE:
      return {
        guid: action.guid,
        edit: true
      };

    case actionConsts.VIEW_STRUCTURE:
      return {
        guid: action.guid,
        edit: false
      };

    case actionConsts.BACK_TO_HOME:
      return null;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  structures: structures,
  editing: editing
}));

/***/ }),

/***/ "./src/redux/withRedux.js":
/*!********************************!*\
  !*** ./src/redux/withRedux.js ***!
  \********************************/
/*! exports provided: withReduxField, withReduxHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReduxField", function() { return withReduxField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReduxHome", function() { return withReduxHome; });
/* harmony import */ var _Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/redux/reducers.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var mapStateToFieldProps = function mapStateToFieldProps(state, props) {
  var editing = state.editing,
      structures = state.structures;
  var name = props.name;
  var formGuid = '';
  var currField = {
    value: '',
    note: ''
  };

  try {
    currField = structures[editing.guid].fields[name] || {};
    formGuid = editing.guid;
  } catch (e) {}

  return {
    formGuid: formGuid,
    value: currField.value,
    note: currField.note
  };
};

var withReduxField = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToFieldProps), // Once connect() is composed `dispatch` is prop.
// ONCE we mount the control we should initialize it
Object(recompose__WEBPACK_IMPORTED_MODULE_1__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    var _this$props = this.props,
        dispatch = _this$props.dispatch,
        formGuid = _this$props.formGuid,
        section = _this$props.section,
        name = _this$props.name,
        present = _this$props.present;

    if (!present) {
      console.log('componentDidMount', formGuid, section, name);
      dispatch(_reducers__WEBPACK_IMPORTED_MODULE_2__["actions"].initializeField(formGuid, name, section));
    }
  }
}), Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withHandlers"])({
  setValue: function setValue(_ref) {
    var dispatch = _ref.dispatch,
        formGuid = _ref.formGuid,
        name = _ref.name;
    return function (newVal) {
      console.log('setValue called', formGuid, name, newVal);
      dispatch(_reducers__WEBPACK_IMPORTED_MODULE_2__["actions"].changeFieldValue(formGuid, name, newVal));
    };
  },
  setNote: function setNote(_ref2) {
    var dispatch = _ref2.dispatch,
        formGuid = _ref2.formGuid,
        name = _ref2.name;
    return function (newNote) {
      console.log('setNote called', formGuid, name, newNote);
      dispatch(_reducers__WEBPACK_IMPORTED_MODULE_2__["actions"].changeFieldValue(formGuid, name, null, newNote));
    };
  }
}), // Make sure dispatch and formGuid never make it to the individual components
Object(recompose__WEBPACK_IMPORTED_MODULE_1__["mapProps"])(function (_ref3) {
  var dispatch = _ref3.dispatch,
      formGuid = _ref3.formGuid,
      otherProps = Object(_Users_matt_Work_Git_Anabranch_beaver_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["dispatch", "formGuid"]);

  return otherProps;
}));

var mapStateToHomeProps = function mapStateToHomeProps(_ref4, props) {
  var editing = _ref4.editing;
  return {
    editing: editing
  };
};
/**
 * HOMEPAGE state
 */


var withReduxHome = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToHomeProps), // Once connect() is composed `dispatch` is prop.
Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withHandlers"])({
  backToHome: function backToHome(_ref5) {
    var dispatch = _ref5.dispatch;
    return function (guid) {
      console.log('backToHome called', guid);
      dispatch(_reducers__WEBPACK_IMPORTED_MODULE_2__["actions"].backToHome(guid));
    };
  },
  viewStructure: function viewStructure(_ref6) {
    var dispatch = _ref6.dispatch;
    return function (guid) {
      console.log('viewStructure called', guid);
      dispatch(_reducers__WEBPACK_IMPORTED_MODULE_2__["actions"].viewStructure(guid));
    };
  }
}));

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/semantic-ui-css/semantic.css ./src/css/cosmos.css ./node_modules/mapbox-gl/dist/mapbox-gl.css ./node_modules/react-cosmos/dist/client/loader-entry.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/matt/Work/Git/Anabranch/beaver/node_modules/semantic-ui-css/semantic.css */"./node_modules/semantic-ui-css/semantic.css");
__webpack_require__(/*! /Users/matt/Work/Git/Anabranch/beaver/src/css/cosmos.css */"./src/css/cosmos.css");
__webpack_require__(/*! /Users/matt/Work/Git/Anabranch/beaver/node_modules/mapbox-gl/dist/mapbox-gl.css */"./node_modules/mapbox-gl/dist/mapbox-gl.css");
module.exports = __webpack_require__(/*! /Users/matt/Work/Git/Anabranch/beaver/node_modules/react-cosmos/dist/client/loader-entry.js */"./node_modules/react-cosmos/dist/client/loader-entry.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.js.map