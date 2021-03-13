(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~feature-auth-auth-module~feature-cart-cart-module~feature-home-home-module~feature-product-l~8f14f9f5"], {
    /***/
    "1DoU":
    /*!***************************************************************!*\
      !*** ./src/app/components/footers/footer/footer.component.ts ***!
      \***************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function DoU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "CzbP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.date = new Date().getFullYear();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer",
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "CzbP":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer/footer.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CzbP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"relative bg-gray-300 pt-8 pb-6\">\n  <!--<div\n    class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n    style=\"transform: translateZ(0);\"\n  >\n    <svg\n      class=\"absolute bottom-0 overflow-hidden\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      preserveAspectRatio=\"none\"\n      version=\"1.1\"\n      viewBox=\"0 0 2560 100\"\n      x=\"0\"\n      y=\"0\"\n    >\n      <polygon\n        class=\"text-gray-300 fill-current\"\n        points=\"2560 0 2560 100 0 100\"\n      ></polygon>\n    </svg> \n  </div>-->\n  <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n    <div class=\"w-full md:w-4/12 px-4 mx-auto text-center\">\n      <div class=\"text-sm text-gray-600 font-semibold py-1\">\n        Copyright © {{ date }} Selvi Trends by\n        <a\n          href=\"https://www.creative-tim.com?ref=na-footer\"\n          class=\"text-gray-600 hover:text-gray-900\"\n        >\n          Selvi Trends\n        </a>\n        .\n      </div>\n    </div>\n  </div>\n  <!--  <div class=\"container mx-auto px-4\">\n  <div class=\"flex flex-wrap text-center lg:text-left\">\n      \n      <div class=\"w-full lg:w-6/12 px-4\">\n        <h4 class=\"text-3xl font-semibold\">Let's keep in touch!</h4>\n        <h5 class=\"text-lg mt-0 mb-2 text-gray-700\">\n          Find us on any of these platforms, we respond 1-2 business days.\n        </h5>\n        <div class=\"mt-6 lg:mb-0 mb-6\">\n          <button\n            class=\"bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-twitter\"></i>\n          </button>\n          <button\n            class=\"bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n          </button>\n          <button\n            class=\"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-dribbble\"></i>\n          </button>\n          <button\n            class=\"bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-github\"></i>\n          </button>\n        </div>\n      </div>\n\n\n\n      <div class=\"w-full lg:w-6/12 px-4\">\n        <div class=\"flex flex-wrap items-top mb-6\">\n          <div class=\"w-full lg:w-4/12 px-4 ml-auto\">\n            <span\n              class=\"block uppercase text-gray-600 text-sm font-semibold mb-2\"\n            >\n              Useful Links\n            </span>\n            <ul class=\"list-unstyled\">\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  href=\"https://www.creative-tim.com/presentation?ref=na-footer\"\n                >\n                  About Us\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  href=\"https://blog.creative-tim.com?ref=na-footer\"\n                >\n                  Blog\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  href=\"https://www.github.com/creativetimofficial?ref=na-footer\"\n                >\n                  Github\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  href=\"https://www.creative-tim.com/bootstrap-themes/free?ref=na-footer\"\n                >\n                  Free Products\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"w-full lg:w-4/12 px-4\">\n            <span\n              class=\"block uppercase text-gray-600 text-sm font-semibold mb-2\"\n            >\n              Other Resources\n            </span>\n            <ul class=\"list-unstyled\">\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  href=\"https://github.com/creativetimofficial/notus-angular/blob/master/LICENSE.md?ref=creativetim\"\n                >\n                  MIT License\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  href=\"https://creative-tim.com/terms?ref=na-footer\"\n                >\n                  Terms & Conditions\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  href=\"https://creative-tim.com/privacy?ref=na-footer\"\n                >\n                  Privacy Policy\n                </a>\n              </li>\n              <li>\n                <a\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\n                  href=\"https://creative-tim.com/contact-us?ref=na-footer\"\n                >\n                  Contact Us\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>-\n    \n    <hr class=\"my-6 border-gray-400\" />\n    \n  </div>-->\n</footer>\n";
      /***/
    },

    /***/
    "DLfO":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-small/footer-small.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DLfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer\n  class=\"pb-6\"\n  [ngClass]=\"absolute ? 'absolute w-full bottom-0 bg-gray-900' : 'relative'\"\n>\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-6 border-b-1 border-gray-700\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div\n          class=\"text-sm text-white font-semibold py-1 text-center md:text-left\"\n        >\n          Copyright © {{ date }}\n          <a\n            href=\"https://www.creative-tim.com?ref=na-footer-small\"\n            class=\"text-white hover:text-gray-400 text-sm font-semibold py-1\"\n          >\n            Selvi Trends\n          </a>\n        </div>\n      </div>\n      <!--\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\n          <li>\n            <a\n              href=\"https://www.creative-tim.com?ref=na-footer-small\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\"\n            >\n              Selvi Trends\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=na-footer-small\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\"\n            >\n              About Us\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"http://blog.creative-tim.com?ref=na-footer-small\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\"\n            >\n              Blog\n            </a>\n          </li>\n          <li>\n            <a\n              href=\"https://github.com/creativetimofficial/notus-angular/blob/master/LICENSE.md?ref=creativetim\"\n              class=\"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3\"\n            >\n              MIT License\n            </a>\n          </li>\n        </ul>\n      </div>-->\n    </div>\n  </div>\n</footer>\n";
      /***/
    },

    /***/
    "d2mR":
    /*!**********************************!*\
      !*** ./src/app/shared.module.ts ***!
      \**********************************/

    /*! exports provided: SharedModule */

    /***/
    function d2mR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/footers/footer/footer.component */
      "1DoU");
      /* harmony import */


      var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/footers/footer-small/footer-small.component */
      "xlab");
      /* harmony import */


      var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/navbars/auth-navbar/auth-navbar.component */
      "zslb");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_5__["FooterSmallComponent"], _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_6__["AuthNavbarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_5__["FooterSmallComponent"], _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_6__["AuthNavbarComponent"]]
      })], SharedModule);
      /***/
    },

    /***/
    "e8ip":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/auth-navbar/auth-navbar.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e8ip(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav\n  class=\"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg\"\n>\n  <div\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\n  >\n    <div\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\n    >\n      <a\n        [routerLink]=\"['/']\"\n        class=\"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase\"\n      >\n        Selvi Trends \n      </a>\n      <button\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\n        type=\"button\"\n        (click)=\"setNavbarOpen()\"\n      >\n        <i class=\"text-white fas fa-bars\"></i>\n      </button>\n    </div>\n    <div\n      class=\"lg:flex  items-center lg:bg-transparent lg:shadow-none\"\n      [ngClass]=\"{ hidden: !navbarOpen, 'block rounded shadow-lg': navbarOpen }\"\n      id=\"example-navbar-warning\"\n    >\n      <!-- <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-auth-navbar\"\n          >\n            <i\n              class=\"lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2\"\n            ></i>\n            Docs\n          </a>\n        </li>\n      </ul> -->\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\n        <!-- <li class=\"flex items-center\">\n          <app-pages-dropdown class=\"block\"></app-pages-dropdown>\n        </li> -->\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"\"\n        \n          >\n            <i\n              class=\"lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"\"\n            \n          >\n            <i\n              class=\"lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\n          </a>\n        </li>\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            [routerLink]=\"['/cart']\"\n          \n          >\n            <i\n              class=\"lg:text-gray-300 text-gray-500 fas fa-shopping-cart text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Cart</span>\n          </a>\n        </li>\n\n        <!-- <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n            href=\"https://github.com/creativetimofficial/notus-angular?ref=na-auth-navbar\"\n            target=\"_blank\"\n          >\n            <i\n              class=\"lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg\"\n            ></i>\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\n          </a>\n        </li> -->\n\n        <!-- <li class=\"flex items-center\">\n          <button\n            class=\"bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\n            type=\"button\"\n          >\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Download\n          </button>\n        </li> -->\n      </ul>\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "xlab":
    /*!***************************************************************************!*\
      !*** ./src/app/components/footers/footer-small/footer-small.component.ts ***!
      \***************************************************************************/

    /*! exports provided: FooterSmallComponent */

    /***/
    function xlab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterSmallComponent", function () {
        return FooterSmallComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer-small.component.html */
      "DLfO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterSmallComponent = /*#__PURE__*/function () {
        function FooterSmallComponent() {
          _classCallCheck(this, FooterSmallComponent);

          this.date = new Date().getFullYear();
          this._absolute = false;
        }

        _createClass(FooterSmallComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "absolute",
          get: function get() {
            return this._absolute;
          },
          set: function set(absolute) {
            this._absolute = absolute === undefined ? false : absolute;
          }
        }]);

        return FooterSmallComponent;
      }();

      FooterSmallComponent.ctorParameters = function () {
        return [];
      };

      FooterSmallComponent.propDecorators = {
        absolute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      FooterSmallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-small",
        template: _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterSmallComponent);
      /***/
    },

    /***/
    "zslb":
    /*!*************************************************************************!*\
      !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AuthNavbarComponent */

    /***/
    function zslb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function () {
        return AuthNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth-navbar.component.html */
      "e8ip");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthNavbarComponent = /*#__PURE__*/function () {
        function AuthNavbarComponent() {
          _classCallCheck(this, AuthNavbarComponent);

          this.navbarOpen = false;
        }

        _createClass(AuthNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setNavbarOpen",
          value: function setNavbarOpen() {
            this.navbarOpen = !this.navbarOpen;
          }
        }]);

        return AuthNavbarComponent;
      }();

      AuthNavbarComponent.ctorParameters = function () {
        return [];
      };

      AuthNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-auth-navbar",
        template: _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AuthNavbarComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~feature-auth-auth-module~feature-cart-cart-module~feature-home-home-module~feature-product-l~8f14f9f5-es5.js.map