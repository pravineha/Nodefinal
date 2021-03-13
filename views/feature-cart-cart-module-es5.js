(function () {
  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n          {\n          createOrder(\n          productList:[", "]){\n            id\n          }\n        }\n          "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  mutation createOrder(\n   $productList:[any],\n\n  ){\n    createOrder(productList:$productList){\n      id\n    }\n  }\n  "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-cart-cart-module"], {
    /***/
    "4d7y":
    /*!*********************************************!*\
      !*** ./src/app/feature/cart/cart.module.ts ***!
      \*********************************************/

    /*! exports provided: CartModule */

    /***/
    function d7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModule", function () {
        return CartModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cart-routing.module */
      "jAQ5");
      /* harmony import */


      var _cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart.component */
      "p73V");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared.module */
      "d2mR");
      /* harmony import */


      var _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./cart-list/cart-list.component */
      "z7ep");

      var CartModule = function CartModule() {
        _classCallCheck(this, CartModule);
      };

      CartModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_7__["CartListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_4__["CartRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        providers: []
      })], CartModule);
      /***/
    },

    /***/
    "8g42":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/cart/cart-list/cart-list.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function g42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"section section-item\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"item active\"><img alt=\"First slide\"\n                    [src]=\"product.img\"\n                    class=\"d-block\"></div>\n               \n            </div>\n            \n            <div class=\"col-lg-6 col-md-12 mx-auto\">\n                <h2 class=\"title\">{{product.name}}</h2>\n                <div class=\"stats\">\n                    <div class=\"stars text-warning\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i\n                            class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"far fa-star\"></i>\n                        <p class=\"d-inline\">(76 customer reviews)</p>\n                    </div>\n                </div><br>\n                <!-- <h2 class=\"main-price\">$3,390</h2> -->\n                <!-- <h6 class=\"category\">Description</h6> -->\n                <!-- <p class=\"description\"> Eres' daring 'Grigri Fortune' swimsuit has the fit and coverage of a\n                    shirt\n                    in a one-piece silhouette. This fuchsia style is crafted from the label's sculpting peau\n                    douce\n                    fabric and has flattering cutouts through the torso and back. Wear yours with mirrored\n                    sunglasses on vacation. </p><br> -->\n                <div class=\"row pick-size\">\n                    <div class=\"col-lg-4 col-md-4\"><label> Quantity </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-btn\"><button id=\"down\"\n                                (click)=\"quantity = quantity-1\" [disabled]=\"quantity == 0\"   class=\"btn btn-outline-warning btn-round\"><i\n                                        class=\"ni ni-fat-delete\"></i></button></div><input id=\"myNumber\"\n                                type=\"text\" value=\"1\" [(ngModel)]=\"quantity\" class=\"form-control input-number\">\n                            <div class=\"input-group-btn\"><button id=\"up\" [disabled]=\"quantity == 99\"\n                                (click)=\"quantity = quantity+1\"    class=\"btn btn-outline-warning btn-round\"><i\n                                        class=\"ni ni-fat-add\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-4 col-md-4 col-sm-6\"><label> Select color </label>\n                        <select name=\"color\" id=\"color\">\n                            <option value=\"volvo\">Black</option>\n                            <option value=\"saab\">Red</option>\n                            <option value=\"mercedes\">Blue</option>\n                            <option value=\"audi\">Orange</option>\n                        </select>\n                    </div> -->\n                    <div class=\"col-lg-4 col-md-4 col-sm-6\"><label> Select size </label>\n                        <br>\n                        <select (change)=\"measureChanged($event.target.value)\" name=\"size\" id=\"size\">\n                            <!-- <option  selected disabled>Select measures</option> -->\n                            <option *ngFor=\"let measures of measureMentList ;let i= index\"\n                             [value]=\"i\">\n                                {{measures[0].name}}\n                            </option>\n                            <!-- <option value=\"volvo\">XL</option>\n                            <option value=\"saab\">L</option>\n                            <option value=\"mercedes\">S</option>\n                            <option value=\"audi\">M</option> -->\n                        </select>\n                    </div>\n                \n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div *ngFor=\"let measurements of measureMentList[selectedMeasureIndex] ;let i= index\" class=\"col-sm mt-2\">\n                                <label class=\"text-capitalize\">{{measurements.sizename}}</label>\n                                <input type=\"text\" (change)=\"updateMeasurement($event,i)\" [placeholder]=\"measurements.sizename\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                                 [value]=\"measurements.size\">\n                            </div>\n                        </div>\n                       \n                    </div>\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"m-1 w-25\">\n                                <label class=\"text-capitalize\">Name</label>\n                                <input (change)=\"addToCart()\" [(ngModel)]=\"createdFor\" class=\"form-control\" type=\"text\" placeholder=\"Name\" value=\"self\">\n                            </div>\n                            <div class=\"m-1 w-25\">\n                                <label class=\"text-capitalize\">Address</label>\n                                <input  (change)=\"addToCart()\" [(ngModel)]=\"address\" class=\"form-control\" type=\"text\" placeholder=\"Address\" value=\"self\">\n                            </div>\n                                 \n                        </div>\n                    </div>\n                </div><br>\n                <div class=\"row justify-content-start\">\n                    <button *ngIf=\"!productinCart\" class=\"btn btn-warning ml-3\" (click)=\"addToCart(product)\"> Add to Cart <i\n                            class=\"ni ni-cart\"></i></button>\n                     <button *ngIf=\"productinCart\" class=\"btn btn-warning ml-3\" (click)=\"addToCart(product)\"> Update Cart <i\n                                class=\"ni ni-cart\"></i></button>\n                </div>\n                <!-- <div class=\"italic mt-2 text-green text-left\" *ngIf=\"productinCart\">product found cart</div> -->\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Da3E":
    /*!************************************************!*\
      !*** ./src/app/shared/service/auth.service.ts ***!
      \************************************************/

    /*! exports provided: AuthService */

    /***/
    function Da3E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthService = /*#__PURE__*/function () {
        function AuthService() {
          _classCallCheck(this, AuthService);
        }

        _createClass(AuthService, [{
          key: "getAuthStatus",
          value: function getAuthStatus() {
            var authToken = localStorage.getItem("authToken");
            return authToken;
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "O898":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/cart/cart.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function O898(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <app-auth-navbar></app-auth-navbar> -->\n<app-auth-navbar></app-auth-navbar>\n<main class=\"cart-page\">\n  <section class=\"relative block h-500-px\">\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-50 bg-black\"\n      ></span>\n    </div>\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0);\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-gray-300 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </section>\n  <section class=\"relative py-16 bg-gray-300\" >\n   <div class=\"cart-container\" *ngFor=\"let product of cartProducts\" >\n    <div class=\"container mx-auto px-4\">\n        <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg \">\n          <div class=\"px-6\">\n            <app-cart-list [product]=\"product\"></app-cart-list>\n          </div>\n         </div>\n    </div>      \n        \n   </div>\n   <div class=\"d-flex w-100 justify-center\" *ngIf=\"!orderCreated\">\n    <h4 class=\"text-danger\">{{orderCallMessage}}</h4> \n    <button  class=\"btn btn-warning ml-3\" (click)=\"checkout()\"> Checkout</button>\n   </div>\n   <div class=\"d-flex w-25 justify-center flex-col\" style=\"margin:0 auto\" *ngIf=\"orderCreated\" >\n     <h4 class=\"text-success\">{{orderCallMessage}}</h4> \n    <button  class=\"btn btn-warning ml-3\" (click)=\"home()\"> Home</button>\n   </div>\n  \n  </section>\n</main>\n<app-footer></app-footer>\n\n\n\n        \n       \n";
      /***/
    },

    /***/
    "c7In":
    /*!*************************************************!*\
      !*** ./src/app/feature/cart/cart.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function c7In(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cart-container{\r\n    max-width: 1000px;\r\n    margin: 20px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufSJdfQ== */";
      /***/
    },

    /***/
    "eZ7l":
    /*!****************************************************************!*\
      !*** ./src/app/feature/cart/cart-list/cart-list.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function eZ7l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input-group-btn button{\r\n    padding: 10px;\r\n    border-radius: 0px;\r\n}\r\n\r\n.input-number{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jYXJ0L2NhcnQtbGlzdC9jYXJ0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2NhcnQvY2FydC1saXN0L2NhcnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwLWJ0biBidXR0b257XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtbnVtYmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
      /***/
    },

    /***/
    "jAQ5":
    /*!*****************************************************!*\
      !*** ./src/app/feature/cart/cart-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CartRoutingModule */

    /***/
    function jAQ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function () {
        return CartRoutingModule;
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


      var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.component */
      "p73V");

      var routes = [{
        path: '',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
      }];

      var CartRoutingModule = function CartRoutingModule() {
        _classCallCheck(this, CartRoutingModule);
      };

      CartRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartRoutingModule);
      /***/
    },

    /***/
    "p73V":
    /*!************************************************!*\
      !*** ./src/app/feature/cart/cart.component.ts ***!
      \************************************************/

    /*! exports provided: CartComponent */

    /***/
    function p73V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
        return CartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cart.component.html */
      "O898");
      /* harmony import */


      var _cart_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cart.component.css */
      "c7In");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! apollo-angular */
      "/IUn");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CartComponent = /*#__PURE__*/function () {
        function CartComponent(auth, appolloProvider, router) {
          _classCallCheck(this, CartComponent);

          this.auth = auth;
          this.appolloProvider = appolloProvider;
          this.router = router;
          this.orderCreated = false;
          this.createOrderQ = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject());
          this.apollo = this.appolloProvider.use("loggedInUser");
        }

        _createClass(CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cartProducts = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
            console.log("CARTPRODUCT", this.cartProducts);
          }
        }, {
          key: "checkout",
          value: function checkout() {
            var authStatus = this.auth.getAuthStatus();

            if (authStatus) {
              console.log("AUTH");
              this.createOrder();
            } else {
              this.router.navigate(['/auth']);
            }
          }
        }, {
          key: "home",
          value: function home() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "createProductList",
          value: function createProductList() {
            var StoredproductList = JSON.parse(localStorage.getItem("cart"));

            if (StoredproductList && StoredproductList.length > 0) {
              var storedProductLIst = StoredproductList.map(function (product) {
                return {
                  productId: product.id,
                  measurements: _toConsumableArray(product.measurements),
                  quantity: product.quantity,
                  createdFor: product.createdFor,
                  address: product.address
                };
              });
              var formedQueryList = '';
              storedProductLIst.map(function (product) {
                var measurementString = '';
                product.measurements.map(function (measurement) {
                  measurementString += "{\n            name:\"".concat(measurement.name, "\",\n          size:\"").concat(measurement.size, "\",\n          sizename:\"").concat(measurement.sizename, "\"\n        },");
                });
                formedQueryList += "{ \n          productId:\"".concat(product.productId, "\",\n          quantity:").concat(product.quantity, "\n          createdFor:\"").concat(product.createdFor, "\",\n          measurements:[").concat(measurementString, "]\n          address:\"").concat(product.address, "\"\n        },");
              });
              return formedQueryList;
            }

            return [];
          }
        }, {
          key: "createOrder",
          value: function createOrder() {
            var _this = this;

            try {
              var productList = this.createProductList();
              console.log("PRODUCTLIST fdfgfg", productList);
              this.apollo.watchQuery({
                query: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject2(), productList)
              }).valueChanges.subscribe(function (result) {
                if (!result.data || result.data && result.data.errorCode == 403) {
                  _this.router.navigate(['/auth']);
                } else if (result.data) {
                  console.log("Order", result); //alert("")

                  _this.orderCreated = true;
                  _this.orderCallMessage = "Thank you ! Order created successfully orderID ".concat(result.data.createOrder.id);
                  localStorage.removeItem("cart");
                } else {
                  _this.orderCreated = false;
                  _this.orderCallMessage = "Order not created";
                }
              });
            } catch (err) {
              console.log("ERR", err);
              alert("Problem in order creations");
            }
          }
        }]);

        return CartComponent;
      }();

      CartComponent.ctorParameters = function () {
        return [{
          type: _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CartComponent);
      /***/
    },

    /***/
    "z7ep":
    /*!***************************************************************!*\
      !*** ./src/app/feature/cart/cart-list/cart-list.component.ts ***!
      \***************************************************************/

    /*! exports provided: CartListComponent */

    /***/
    function z7ep(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartListComponent", function () {
        return CartListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cart_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cart-list.component.html */
      "8g42");
      /* harmony import */


      var _cart_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cart-list.component.css */
      "eZ7l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utility */
      "57nc");

      var CartListComponent = /*#__PURE__*/function () {
        function CartListComponent() {
          _classCallCheck(this, CartListComponent);

          this.measureMentList = [];
          this.selectedMeasureIndex = 0;
          this.selectedMeasures = [];
          this.quantity = 1;
          this.checkCart = false;
          this.oldCheckCart = false;
          this.productinCart = false;
          this.createdFor = "self";
          this.address = "self";
        }

        _createClass(CartListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // console.clear();
            // console.log(this.product);
            // console.log()
            var measurementGroup = Object(src_app_utility__WEBPACK_IMPORTED_MODULE_4__["groupMeasurementByName"])(this.product.measurements);
            measurementGroup.subscribe(function (val) {
              _this2.measureMentList = [].concat(_toConsumableArray(_this2.measureMentList), [val]);
            }); // console.log("MeasurementGrou",this.measureMentList)
            // this.selectedMeasures=[...this.measureMentList[0]];

            var selectedSizeMeasure = this.measureMentList[this.selectedMeasureIndex];
            var selectedMeasures = selectedSizeMeasure.map(function (measurement) {
              var name = measurement.name,
                  sizename = measurement.sizename,
                  size = measurement.size;
              return {
                name: name,
                sizename: sizename,
                size: size
              };
            });
            this.selectedMeasures = selectedMeasures;
            this.checkCart = !this.checkCart;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            var _this3 = this;

            if (this.oldCheckCart !== this.checkCart) {
              var cartItem = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;

              if (cartItem) {
                var cartexisitng = cartItem.findIndex(function (cart) {
                  if (cart) {
                    return cart.id == _this3.product.id;
                  }
                });

                if (cartexisitng >= 0) {
                  this.productinCart = true;
                } else {
                  this.productinCart = false;
                }
              } else {
                this.productinCart = false;
              }

              this.oldCheckCart = this.checkCart;
            }
          }
        }, {
          key: "measureChanged",
          value: function measureChanged(value) {
            this.selectedMeasureIndex = value; // this.selectedMeasures = this.measureMentList[value].filter(measurement => {
            //   const {name,sizename,size}= measurement;
            //   return {name,sizename,size};
            // })
            // // console.log("MeasurementGrou", this.selectedMeasures)
          }
        }, {
          key: "updateMeasurement",
          value: function updateMeasurement(event, measureIndex) {
            // console.log("VALUE",event.target.value,"MEASUREMENT",measureIndex);
            // console.log("MEASUREMENT", this.selectedMeasures);
            // console.log("MEASUREMNT INDEX",this.measureMentList);
            var selectedSizeMeasure = this.measureMentList[this.selectedMeasureIndex];
            var selectedMeasures = selectedSizeMeasure.map(function (measurement) {
              var name = measurement.name,
                  sizename = measurement.sizename,
                  size = measurement.size;
              return {
                name: name,
                sizename: sizename,
                size: size
              };
            });
            selectedMeasures[measureIndex].size = event.target.value;
            this.selectedMeasures = selectedMeasures; // console.log("MeasurementGrou", selectedMeasures);

            this.addToCart();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            //  // console.log("id",prodId);
            console.log("NAME", this.createdFor);

            if (this.quantity > 0) {
              var _this$product = this.product,
                  id = _this$product.id,
                  name = _this$product.name,
                  img = _this$product.img;
              var cartObject = {
                id: id,
                img: img,
                name: name,
                quantity: this.quantity
              };
              cartObject["measurements"] = this.selectedMeasures; // console.log("Measurement Index",cartObject);

              var cartItem = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;

              if (cartItem) {
                var cartexisitng = cartItem.findIndex(function (cart) {
                  if (cart) {
                    return cart.id == id;
                  }
                });

                if (cartexisitng >= 0) {
                  cartItem[cartexisitng].quantity = this.quantity;
                  cartItem[cartexisitng].measurements = cartObject["measurements"];
                  cartItem[cartexisitng].createdFor = this.createdFor;
                  cartItem[cartexisitng].address = this.address;
                } else {
                  cartItem = [].concat(_toConsumableArray(cartItem), [cartObject]);
                }
              } else {
                cartItem = [cartObject];
              }

              localStorage.setItem("cart", JSON.stringify(cartItem));
              this.checkCart = !this.checkCart;
            } else {
              this.removecart();
            }
          }
        }, {
          key: "removecart",
          value: function removecart() {
            var cartItem = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
            var _this$product2 = this.product,
                id = _this$product2.id,
                name = _this$product2.name,
                img = _this$product2.img;

            if (cartItem) {
              var cartexisitng = cartItem.findIndex(function (cart) {
                if (cart) {
                  return cart.id == id;
                }
              });

              if (cartexisitng >= 0) {
                cartItem = cartItem.splice(0, cartexisitng);
              }

              localStorage.setItem("cart", JSON.stringify(cartItem));
              this.checkCart = !this.checkCart;
            }
          }
        }]);

        return CartListComponent;
      }();

      CartListComponent.ctorParameters = function () {
        return [];
      };

      CartListComponent.propDecorators = {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CartListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-list',
        template: _raw_loader_cart_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CartListComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=feature-cart-cart-module-es5.js.map