(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-order-order-module"], {
    /***/
    "24Xg":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/order/order.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>order works!</p>\n";
      /***/
    },

    /***/
    "82SP":
    /*!***********************************************!*\
      !*** ./src/app/feature/order/order.module.ts ***!
      \***********************************************/

    /*! exports provided: OrderModule */

    /***/
    function SP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
        return OrderModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-routing.module */
      "KIsv");
      /* harmony import */


      var _order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./order.component */
      "tXZX");

      var OrderModule = function OrderModule() {
        _classCallCheck(this, OrderModule);
      };

      OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"]]
      })], OrderModule);
      /***/
    },

    /***/
    "9VWX":
    /*!***************************************************!*\
      !*** ./src/app/feature/order/order.component.css ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function VWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "KIsv":
    /*!*******************************************************!*\
      !*** ./src/app/feature/order/order-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: OrderRoutingModule */

    /***/
    function KIsv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () {
        return OrderRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order.component */
      "tXZX");

      var routes = [{
        path: '',
        component: _order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]
      }];

      var OrderRoutingModule = function OrderRoutingModule() {
        _classCallCheck(this, OrderRoutingModule);
      };

      OrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderRoutingModule);
      /***/
    },

    /***/
    "tXZX":
    /*!**************************************************!*\
      !*** ./src/app/feature/order/order.component.ts ***!
      \**************************************************/

    /*! exports provided: OrderComponent */

    /***/
    function tXZX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
        return OrderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order.component.html */
      "24Xg");
      /* harmony import */


      var _order_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order.component.css */
      "9VWX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OrderComponent = /*#__PURE__*/function () {
        function OrderComponent() {
          _classCallCheck(this, OrderComponent);
        }

        _createClass(OrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrderComponent;
      }();

      OrderComponent.ctorParameters = function () {
        return [];
      };

      OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order',
        template: _raw_loader_order_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=feature-order-order-module-es5.js.map