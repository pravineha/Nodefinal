(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-product-list-product-list-module"],{

/***/ "0cab":
/*!****************************************************************!*\
  !*** ./src/app/feature/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list.component.html */ "Mole");
/* harmony import */ var _product_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component.css */ "sLgj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let ProductListComponent = class ProductListComponent {
    constructor(apollo, route) {
        this.apollo = apollo;
        this.route = route;
        this.industryid = "";
        this.bussinessid = "";
        this.categoryList = [];
        this.sectionList = [];
        this.productList = [];
        this.bussinessDetails = { name: "", location: "N/A", city: "N/A" };
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.industryid = params['industryid'];
            this.bussinessid = params['bussinessid'];
        });
        console.log("INdustryID", this.industryid);
        console.log("bussinessid", this.bussinessid);
        console.log("bussinessid", this.bussinessDetails);
        const query = `
    {
      getCategoryByBID(bussinessid:"${this.bussinessid}"){
        name,
        id,
        createdDate,
        bussinessId,
        sectionList{
          name,
          id
        }
        bussinessDetails{
          name,
          img,
          location,
          city
        }
      }
    }`;
        this.apollo
            .watchQuery({
            query: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `${query}`
        }).valueChanges.subscribe((result) => {
            console.log("RESULT", result);
            this.categoryList = [];
            if (result && result.data && result.data.getCategoryByBID) {
                this.categoryList = result.data.getCategoryByBID;
                console.log("CategoryList", this.categoryList);
                this.bussinessDetails = this.categoryList[0] ? this.categoryList[0].bussinessDetails : this.bussinessDetails;
            }
        });
    }
    onChangeCategory(catSelectedId) {
        this.catSectionId = catSelectedId;
        console.log(catSelectedId);
        this.productList = [];
        //this.categoryChange.emit(catSelectedId)
        if (catSelectedId) {
            const selectedCategory = this.categoryList.find(cat => cat.id == catSelectedId);
            if (selectedCategory) {
                this.sectionList = selectedCategory.sectionList;
                console.log(this.sectionList);
            }
        }
    }
    onChangeSelection(catSectionId) {
        console.log(catSectionId);
        const query = `
    {
      getProductBySectionId(sectionid:"${catSectionId}"){
         id,
          name,
          createdDate,
          sectionId,
          img,
          measurements{
            name,
            sizename,
            size,
            price
          }
      }
    }`;
        this.apollo
            .watchQuery({
            query: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `${query}`
        }).valueChanges.subscribe((result) => {
            console.log("Product LIST", result);
            if (result && result.data && result.data.getProductBySectionId) {
                this.productList = result.data.getProductBySectionId;
            }
        });
    }
};
ProductListComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-list',
        template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductListComponent);



/***/ }),

/***/ "6e/V":
/*!*****************************************************************************************!*\
  !*** ./src/app/feature/product-list/product-list-items/product-list-items.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductListItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListItemsComponent", function() { return ProductListItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_items_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list-items.component.html */ "IqHI");
/* harmony import */ var _product_list_items_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list-items.component.css */ "Rykc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utility */ "57nc");





let ProductListItemsComponent = class ProductListItemsComponent {
    constructor() {
        this.measureMentList = [];
        this.selectedMeasureIndex = 0;
        this.selectedMeasures = [];
        this.quantity = 1;
        this.checkCart = false;
        this.oldCheckCart = false;
        this.productinCart = false;
    }
    ngOnInit() {
        console.clear();
        console.log(this.product);
        console.log();
        const measurementGroup = Object(src_app_utility__WEBPACK_IMPORTED_MODULE_4__["groupMeasurementByName"])(this.product.measurements);
        measurementGroup.subscribe((val) => {
            this.measureMentList = [...this.measureMentList, val];
        });
        console.log("MeasurementGrou", this.measureMentList);
        // this.selectedMeasures=[...this.measureMentList[0]];
        const selectedSizeMeasure = this.measureMentList[this.selectedMeasureIndex];
        const selectedMeasures = selectedSizeMeasure.map(measurement => {
            const { name, sizename, size } = measurement;
            return { name, sizename, size };
        });
        this.selectedMeasures = selectedMeasures;
        this.checkCart = !this.checkCart;
    }
    ngDoCheck() {
        if (this.oldCheckCart !== this.checkCart) {
            let cartItem = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
            if (cartItem) {
                const cartexisitng = cartItem.findIndex(cart => {
                    if (cart) {
                        return cart.id == this.product.id;
                    }
                });
                if (cartexisitng >= 0) {
                    this.productinCart = true;
                }
                else {
                    this.productinCart = false;
                }
            }
            else {
                this.productinCart = false;
            }
            this.oldCheckCart = this.checkCart;
        }
    }
    measureChanged(value) {
        this.selectedMeasureIndex = value;
        // this.selectedMeasures = this.measureMentList[value].filter(measurement => {
        //   const {name,sizename,size}= measurement;
        //   return {name,sizename,size};
        // })
        // console.log("MeasurementGrou", this.selectedMeasures)
    }
    updateMeasurement(event, measureIndex) {
        console.log("VALUE", event.target.value, "MEASUREMENT", measureIndex);
        console.log("MEASUREMENT", this.selectedMeasures);
        console.log("MEASUREMNT INDEX", this.measureMentList);
        const selectedSizeMeasure = this.measureMentList[this.selectedMeasureIndex];
        const selectedMeasures = selectedSizeMeasure.map(measurement => {
            const { name, sizename, size } = measurement;
            return { name, sizename, size };
        });
        selectedMeasures[measureIndex].size = event.target.value;
        this.selectedMeasures = selectedMeasures;
        console.log("MeasurementGrou", selectedMeasures);
    }
    addToCart() {
        //  console.log("id",prodId);
        if (this.quantity > 0) {
            const { id, name, img,price } = this.product; //adding price
            let cartObject = { id, img,price, name, quantity: this.quantity };//adding price
            cartObject["measurements"] = this.selectedMeasures;
            console.log("Measurement Index", cartObject);
            let cartItem = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
            if (cartItem) {
                const cartexisitng = cartItem.findIndex(cart => {
                    if (cart) {
                        return cart.id == id;
                    }
                });
                if (cartexisitng >= 0) {
                    cartItem[cartexisitng].quantity = this.quantity;
                    cartItem[cartexisitng].measurements = cartObject["measurements"];
                }
                else {
                    cartItem = [...cartItem, ...[cartObject]];
                }
            }
            else {
                cartItem = [cartObject];
            }
            localStorage.setItem("cart", JSON.stringify(cartItem));
            this.checkCart = !this.checkCart;
        }
        else {
            this.removecart();
        }
    }
    removecart() {
        let cartItem = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
        const { id, name, img } = this.product;
        if (cartItem) {
            const cartexisitng = cartItem.findIndex(cart => {
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
};
ProductListItemsComponent.ctorParameters = () => [];
ProductListItemsComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductListItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-list-items',
        template: _raw_loader_product_list_items_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_items_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductListItemsComponent);



/***/ }),

/***/ "7PRQ":
/*!*********************************************************************!*\
  !*** ./src/app/feature/product-list/product-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListRoutingModule", function() { return ProductListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list.component */ "0cab");




const routes = [{ path: '', component: _product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] }];
let ProductListRoutingModule = class ProductListRoutingModule {
};
ProductListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductListRoutingModule);



/***/ }),

/***/ "Folt":
/*!***********************************************************************************!*\
  !*** ./src/app/feature/product-list/select-category/select-category.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCategoryComponent", function() { return SelectCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-category.component.html */ "rmQr");
/* harmony import */ var _select_category_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-category.component.css */ "t0/x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SelectCategoryComponent = class SelectCategoryComponent {
    constructor() {
        this.categoryList = [];
        this.sectionList = [];
        this.categoryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onChangeCategory(catSelectedId) {
        console.log(catSelectedId);
        this.categoryChange.emit(catSelectedId);
    }
    onChangeSection(selectionId) {
        console.log("selectionId", selectionId);
        this.sectionChange.emit(selectionId);
    }
};
SelectCategoryComponent.ctorParameters = () => [];
SelectCategoryComponent.propDecorators = {
    categoryList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    sectionList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    categoryChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    sectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
SelectCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-category',
        template: _raw_loader_select_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_category_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectCategoryComponent);



/***/ }),

/***/ "IqHI":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/product-list/product-list-items/product-list-items.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-item\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"item active\"><img alt=\"First slide\"\n                    [src]=\"product.img\"\n                    class=\"d-block\"></div>\n               \n            </div>\n            \n            <div class=\"col-lg-6 col-md-12 mx-auto\">\n                <h2 class=\"title\">{{product.name}}</h2>\n                <div class=\"stats\">\n                    <div class=\"stars text-warning\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i\n                            class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"far fa-star\"></i>\n                        <p class=\"d-inline\">(76 customer reviews)</p>\n                    </div>\n                </div><br>\n                <!-- <h2 class=\"main-price\">$3,390</h2> -->\n                <!-- <h6 class=\"category\">Description</h6> -->\n                <!-- <p class=\"description\"> Eres' daring 'Grigri Fortune' swimsuit has the fit and coverage of a\n                    shirt\n                    in a one-piece silhouette. This fuchsia style is crafted from the label's sculpting peau\n                    douce\n                    fabric and has flattering cutouts through the torso and back. Wear yours with mirrored\n                    sunglasses on vacation. </p><br> -->\n                <div class=\"row pick-size\">\n                    <div class=\"col-lg-4 col-md-4\"><label> Quantity </label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-btn\"><button id=\"down\"\n                                (click)=\"quantity = quantity-1\" [disabled]=\"quantity == 0\"   class=\"btn btn-outline-warning btn-round\"><i\n                                        class=\"ni ni-fat-delete\"></i></button></div><input id=\"myNumber\"\n                                type=\"text\" value=\"1\" [(ngModel)]=\"quantity\" class=\"form-control input-number\">\n                            <div class=\"input-group-btn\"><button id=\"up\" [disabled]=\"quantity == 99\"\n                                (click)=\"quantity = quantity+1\"    class=\"btn btn-outline-warning btn-round\"><i\n                                        class=\"ni ni-fat-add\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-lg-4 col-md-4 col-sm-6\"><label> Select color </label>\n                        <select name=\"color\" id=\"color\">\n                            <option value=\"volvo\">Black</option>\n                            <option value=\"saab\">Red</option>\n                            <option value=\"mercedes\">Blue</option>\n                            <option value=\"audi\">Orange</option>\n                        </select>\n                    </div> -->\n                    <div class=\"col-lg-4 col-md-4 col-sm-6\"><label> Select size </label>\n                        <br>\n                        <select (change)=\"measureChanged($event.target.value)\" name=\"size\" id=\"size\">\n                            <!-- <option  selected disabled>Select measures</option> -->\n                            <option *ngFor=\"let measures of measureMentList ;let i= index\"\n                             [value]=\"i\">\n                                {{measures[0].name}}\n                            </option>\n                            <!-- <option value=\"volvo\">XL</option>\n                            <option value=\"saab\">L</option>\n                            <option value=\"mercedes\">S</option>\n                            <option value=\"audi\">M</option> -->\n                        </select>\n                    </div>\n                \n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div *ngFor=\"let measurements of measureMentList[selectedMeasureIndex] ;let i= index\" class=\"col-sm mt-2\">\n                                <label class=\"text-capitalize\">{{measurements.sizename}}</label>\n                                <input type=\"text\" (change)=\"updateMeasurement($event,i)\" placeholder=\"Collor\" class=\"form-control\" aria-describedby=\"basic-addon3\"\n                                 [value]=\"measurements.size\">\n                            </div>\n                        </div>\n                       \n                    </div>\n                </div><br>\n                <div class=\"row justify-content-start\">\n                    <button *ngIf=\"!productinCart\" class=\"btn btn-warning ml-3\" (click)=\"addToCart(product)\"> Add to Cart <i\n                            class=\"ni ni-cart\"></i></button>\n                     <button *ngIf=\"productinCart\" class=\"btn btn-warning ml-3\" (click)=\"addToCart(product)\"> Update Cart <i\n                                class=\"ni ni-cart\"></i></button>\n                </div>\n                <div class=\"italic mt-2 text-green text-left\" *ngIf=\"productinCart\">product found cart</div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "JO0B":
/*!*************************************************************!*\
  !*** ./src/app/feature/product-list/product-list.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "d2mR");
/* harmony import */ var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list-routing.module */ "7PRQ");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list.component */ "0cab");
/* harmony import */ var _select_category_select_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-category/select-category.component */ "Folt");
/* harmony import */ var _product_list_items_product_list_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-list-items/product-list-items.component */ "6e/V");









let ProductListModule = class ProductListModule {
};
ProductListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"], _select_category_select_category_component__WEBPACK_IMPORTED_MODULE_7__["SelectCategoryComponent"], _product_list_items_product_list_items_component__WEBPACK_IMPORTED_MODULE_8__["ProductListItemsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductListRoutingModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], ProductListModule);



/***/ }),

/***/ "Mole":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/product-list/product-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\n<main class=\"profile-page\">\n\n    <app-select-category   [categoryList]=\"categoryList\" [sectionList]=\"sectionList\"\n     (sectionChange)=\"onChangeSelection($event)\" (categoryChange)=\"onChangeCategory($event)\"></app-select-category>\n  \n  <section *ngIf=\"categoryList.length > 0\"  class=\"relative py-16 bg-gray-300\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\">\n        <div class=\"px-6\">\n          <div class=\"flex flex-wrap justify-center\">\n            <div class=\"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\">\n              <div *ngIf=\"bussinessDetails\" class=\"relative\">\n                <img\n                  [alt]=\"bussinessDetails.name\"\n                  [src]=\"bussinessDetails.img\"\n                  class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center mt-20\">\n            <h3\n              class=\"text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2\"\n            >\n              {{bussinessDetails.name}}\n            </h3>\n            <div\n              class=\"text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase\"\n            >\n              <i class=\"fas fa-map-marker-alt mr-2 text-lg text-gray-500\"></i>\n              {{bussinessDetails.location}}\n            </div>\n            <div class=\"mb-2 text-gray-700 mt-1\">\n              <i class=\"fas fa-briefcase mr-2 text-lg text-gray-500\"></i>\n              {{bussinessDetails.city}}\n            </div>\n            <div *ngFor=\"let product of productList\">\n              <app-product-list-items [product]=\"product\"></app-product-list-items>\n            </div>\n            <div class=\"w-100 text-center\" *ngIf=\"productList.length == 0\"> \n                  <h3 *ngIf=\"sectionList.length > 0 && catSectionId\">Try diffrent category</h3>\n                  <h3 *ngIf=\"sectionList.length > 0 && !catSectionId\">Select section</h3>\n                  <h3 *ngIf=\"sectionList.length == 0  \">Select category</h3>\n            </div>\n          </div>\n          \n        </div>\n\n        \n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>");

/***/ }),

/***/ "Rykc":
/*!******************************************************************************************!*\
  !*** ./src/app/feature/product-list/product-list-items/product-list-items.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-group-btn button{\r\n    padding: 10px;\r\n    border-radius: 0px;\r\n}\r\n\r\n.input-number{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LWl0ZW1zL3Byb2R1Y3QtbGlzdC1pdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC1pdGVtcy9wcm9kdWN0LWxpc3QtaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cC1idG4gYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLmlucHV0LW51bWJlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "rmQr":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/product-list/select-category/select-category.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group mb-3 industry-search\">\n    <div *ngIf=\"categoryList.length > 0\" class=\"d-flex form-group\">\n        <select (change)=\"onChangeCategory($event.target.value)\" class=\"form-control m-2\"  id=\"Select category\">\n          <option  value=\"\" disabled selected>Select Category</option>\n          <option *ngFor=\"let cat of categoryList\" [value]=\"cat.id\">{{cat.name}}</option>\n          <!-- <option>Apollo hospital</option>\n          <option>CMC Vellore hospital</option>\n          <option>KG coimbatore</option>\n          <option>Ganga coimbatore</option> -->\n        </select>\n        <select (change)=\"onChangeSection($event.target.value)\" class=\"form-control m-2\" id=\"Select section\">\n          <option value=\"\" disabled selected>Select Section</option>\n          <option *ngFor=\"let sec of sectionList\" [value]=\"sec.id\">{{sec.name}}</option>\n        </select>\n    </div> \n    <div  *ngIf=\"categoryList.length == 0\" class=\"w-100 text-center\">\n      <h2 class=\"p-3 \">No data found for this client!!!</h2>\n    </div>\n</div>\n<section class=\"relative block h-500-px\">\n<div\n  class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n  style=\"\n    background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');\n  \"\n>\n  <span\n    id=\"blackOverlay\"\n    class=\"w-full h-full absolute opacity-50 bg-black\"\n  ></span>\n</div>\n<div\n  class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n  style=\"transform: translateZ(0);\"\n>\n  <svg\n    class=\"absolute bottom-0 overflow-hidden\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    preserveAspectRatio=\"none\"\n    version=\"1.1\"\n    viewBox=\"0 0 2560 100\"\n    x=\"0\"\n    y=\"0\"\n  >\n    <polygon\n      class=\"text-gray-300 fill-current\"\n      points=\"2560 0 2560 100 0 100\"\n    ></polygon>\n  </svg>\n</div>\n</section>\n");

/***/ }),

/***/ "sLgj":
/*!*****************************************************************!*\
  !*** ./src/app/feature/product-list/product-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1200px){\r\n    .container {\r\n        max-width: 1040px;\r\n    }\r\n}\r\n.h1, h1 {\r\n    font-size: 2.5rem;\r\n}\r\n.product-page .page-header.skew-separator:after{\r\n    background: #fff!important;\r\n}\r\n.input-group-btn button{\r\n    padding: 10px;\r\n    border-radius: 0px;\r\n}\r\n.input-number{\r\n    text-align: center;\r\n}\r\n.industry-search{\r\n    position: absolute;\r\n    background: #fff;\r\n    z-index: 999;\r\n    width: 60%;\r\n    left: 20%;\r\n    top: 20%;\r\n}\r\n.industry-search .form-group\r\n{\r\n    width: 100%;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7QUFDWjtBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xyXG4gICAgfVxyXG59XHJcbi5oMSwgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuLnByb2R1Y3QtcGFnZSAucGFnZS1oZWFkZXIuc2tldy1zZXBhcmF0b3I6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXQtZ3JvdXAtYnRuIGJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1udW1iZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmR1c3RyeS1zZWFyY2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHRvcDogMjAlO1xyXG59XHJcbi5pbmR1c3RyeS1zZWFyY2ggLmZvcm0tZ3JvdXBcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "t0/x":
/*!************************************************************************************!*\
  !*** ./src/app/feature/product-list/select-category/select-category.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1200px){\r\n    .container {\r\n        max-width: 1040px;\r\n    }\r\n}\r\n.h1, h1 {\r\n    font-size: 2.5rem;\r\n}\r\n.product-page .page-header.skew-separator:after{\r\n    background: #fff!important;\r\n}\r\n.industry-search{\r\n    position: absolute;\r\n    background: #fff;\r\n    z-index: 999;\r\n    width: 60%;\r\n    left: 20%;\r\n    top: 20%;\r\n}\r\n.industry-search .form-group\r\n{\r\n    width: 100%;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9wcm9kdWN0LWxpc3Qvc2VsZWN0LWNhdGVnb3J5L3NlbGVjdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtBQUNaO0FBQ0E7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL3Byb2R1Y3QtbGlzdC9zZWxlY3QtY2F0ZWdvcnkvc2VsZWN0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xyXG4gICAgfVxyXG59XHJcbi5oMSwgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuLnByb2R1Y3QtcGFnZSAucGFnZS1oZWFkZXIuc2tldy1zZXBhcmF0b3I6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5pbmR1c3RyeS1zZWFyY2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHRvcDogMjAlO1xyXG59XHJcbi5pbmR1c3RyeS1zZWFyY2ggLmZvcm0tZ3JvdXBcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=feature-product-list-product-list-module-es2015.js.map