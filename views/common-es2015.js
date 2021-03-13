(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "57nc":
/*!**********************************!*\
  !*** ./src/app/utility/index.js ***!
  \**********************************/
/*! exports provided: groupMeasurementByName, validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupMeasurementByName", function() { return groupMeasurementByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



function groupMeasurementByName(measurements){
   const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(measurements);
  //  let group =[];
   const mesurementList = source.pipe(
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["groupBy"])(measurement => measurement.name),
      // return each item in group as array
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["toArray"])()))
    );  
   return mesurementList;
}


function validateEmail(email){
   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map