(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-home-home-module"],{

/***/ "3Agx":
/*!*************************************************!*\
  !*** ./src/app/feature/home/home.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "4yq2":
/*!*****************************************************!*\
  !*** ./src/app/feature/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "Adbd");




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "A4/C":
/*!*********************************************!*\
  !*** ./src/app/feature/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "4yq2");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "Adbd");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "d2mR");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-list/client-list.component */ "G3UL");







let HomeModule = class HomeModule {
};
HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientListComponent"]],
        imports: [
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ],
        exports: []
    })
], HomeModule);



/***/ }),

/***/ "Adbd":
/*!************************************************!*\
  !*** ./src/app/feature/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "nyhI");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "3Agx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-list/client-list.component */ "G3UL");







let HomeComponent = class HomeComponent {
    constructor(apollo, modalService) {
        this.apollo = apollo;
        this.modalService = modalService;
        this.industryListFetch = 0;
    }
    ngOnInit() {
        this.apollo
            .watchQuery({
            query: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
          {
            industries{
              name,
              createdDate,
              id
            }
          }
        `,
        }).valueChanges.subscribe((result) => {
            console.log("RESULT", result);
            if (result.data && result.data.industries) {
                this.industryList = result.data.industries;
                this.industryListFetch = 1;
            }
            else {
                this.industryListFetch = -1;
            }
        });
    }
    openClientList(industryId, industryName) {
        const clientmodal = this.modalService.open(_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientListComponent"], { size: 'lg' });
        clientmodal.componentInstance.industryId = industryId;
        clientmodal.componentInstance.industryName = industryName;
    }
};
HomeComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "G3UL":
/*!*******************************************************************!*\
  !*** ./src/app/feature/home/client-list/client-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-list.component.html */ "IHBv");
/* harmony import */ var _client_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-list.component.css */ "LIjb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







let ClientListComponent = class ClientListComponent {
    constructor(apollo, router, modalService) {
        this.apollo = apollo;
        this.router = router;
        this.modalService = modalService;
        this.industryName = "Industry";
        this.bussinessListFetch = 0;
        this.selectedClientId = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        const industryId = this.industryId.toString();
        const query = `{
      getBussinessesById(industryId:"${industryId}"){
        name,
        id,
        createdDate,
        industryId,
    		img,
    		location,
        phoneNumber,
   			city
    
    }
    }`;
        this.apollo
            .watchQuery({
            query: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `${query}`
        }).valueChanges.subscribe((result) => {
            // console.log("RESULT",result)
            if (result && result.data && result.data.getBussinessesById) {
                this.bussinessList = result.data.getBussinessesById;
                this.bussinessListFetch = 1;
            }
            else {
                this.bussinessListFetch = -1;
            }
        });
    }
    navToProductList(_bussinessId) {
        this.modalService.dismissAll();
        this.router.navigate(['/productList', this.industryId, _bussinessId]);
    }
};
ClientListComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
ClientListComponent.propDecorators = {
    industryId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    industryName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selectedClientId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ClientListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-client-list',
        template: _raw_loader_client_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_client_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClientListComponent);



/***/ }),

/***/ "IHBv":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/home/client-list/client-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-5\">\n    <h3>{{industryName}}</h3>\n    <div *ngIf=\"bussinessListFetch == 0\">\n        Loading\n    </div>\n    <div *ngIf=\"bussinessListFetch == 1\">\n        <div *ngIf=\"bussinessList.length == 0\">\n            No data found for this {{industryName}} type\n        </div>\n        <div class=\"d-flex clientContainer\">\n            <!-- <div class=\"clientDiv\" (click)=\"navToProductList(bussiness.id)\" *ngFor=\"let bussiness of bussinessList\">\n                {{bussiness.name}}\n            </div> -->\n            <div  (click)=\"navToProductList(bussiness.id)\"  *ngFor=\"let bussiness of bussinessList\" class=\"card clientDiv \" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" [src]=\"bussiness.img\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">{{bussiness.name}}</h5>\n                  <p class=\"card-text\">{{bussiness.location}}</p>\n                  <p class=\"card-text\">{{bussiness.city}}</p>\n                  <p class=\"card-text\">{{bussiness.phoneNumber}}</p>\n                  <a  class=\"btn btn-primary\">Select</a>\n                </div>\n              </div>\n        </div>\n        \n    </div>\n    <div *ngIf=\"bussinessListFetch == -1\">\n    \n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "LIjb":
/*!********************************************************************!*\
  !*** ./src/app/feature/home/client-list/client-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clientDiv{\r\n        flex: 1;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 10px;\r\n        border-radius: 10px;\r\n}\r\n.clientContainer{\r\n        padding:10px;\r\n}\r\n.clientDiv:hover{\r\n    box-shadow: 5px 3px 15px -8px #fc8181;\r\n}\r\n.clientDiv .card-img-top{\r\n        width: 60%;\r\n}\r\n.clientDiv .card-body h5, .clientDiv .card-body p{\r\n        font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9ob21lL2NsaWVudC1saXN0L2NsaWVudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxPQUFPO1FBQ1AsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osbUJBQW1CO0FBQzNCO0FBQ0E7UUFDUSxZQUFZO0FBQ3BCO0FBQ0E7SUFFUSxxQ0FBcUM7QUFDN0M7QUFDQTtRQUNRLFVBQVU7QUFDbEI7QUFDQTtRQUNRLGlCQUFpQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvaG9tZS9jbGllbnQtbGlzdC9jbGllbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudERpdntcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNsaWVudENvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuLmNsaWVudERpdjpob3ZlcntcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgNHB4IDFweCAxNXB4IC04cHggI2ZjODE4MTtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggM3B4IDE1cHggLThweCAjZmM4MTgxO1xyXG59XHJcbi5jbGllbnREaXYgLmNhcmQtaW1nLXRvcHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG59XHJcbi5jbGllbnREaXYgLmNhcmQtYm9keSBoNSwgLmNsaWVudERpdiAuY2FyZC1ib2R5IHB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "nyhI":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\n<main>\n  <div\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"\n  >\n  <!--\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');\n      \"\n    >\n-->\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('assets/img/selvi.jpg');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-75 bg-black\"\n      ></span>\n    </div>\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n            <h1 class=\"text-white font-semibold text-2xl\">\n              Online uniform store, Uniform Manufacturer & Custom Dress Makers, We care your Workwear \n</h1>\n<p class=\"mt-4 text-lg text-gray-300\">\n  Service our customers with a solid design and creative process set to deliver custom and curated outfits for all ages.\n</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0);\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-gray-300 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <section class=\"pb-20 bg-gray-300 -mt-24\">\n    <div class=\"container mx-auto px-4\" >\n      <div *ngIf=\"industryListFetch == 1\" class=\"flex flex-wrap\">\n        \n          <div *ngFor=\"let industry of industryList\"\n           class=\"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer\"\n            (click)=\"openClientList(industry.id,industry.name)\">\n            <div\n              class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\n            >\n              <div class=\"px-4 py-5 flex-auto\">\n                <div class=\"item active\">\n                <img\n                alt=\"...\"\n                [src]=\"industry.img\"\n                class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n              /></div>\n                <div\n                  class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400\"\n                >\n                  <i class=\"fas fa-award\"></i>\n                </div>\n                <h6 class=\"text-xl font-semibold\">{{industry.name}}</h6>\n                <p class=\"mt-2 mb-4 text-gray-600\">\n                  {{industry.description}} \n                </p>\n              </div>\n            </div>\n          </div>\n      </div>\n      <div *ngIf=\"industryListFetch == 0\">\n          loading\n      </div>\n\n      <div *ngIf=\"industryListFetch == -1\">\n        Not loading refresh page\n      </div>\n\n      <!--<div class=\"flex flex-wrap items-center mt-12\">\n        <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\n          <div\n            class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100\"\n          >\n            <i class=\"fas fa-user-friends text-xl\"></i>\n          </div>\n          <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n            Working with us is a pleasure\n          </h3>\n          <p class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700\">\n            Don't let your uses guess by attaching tooltips and popoves to any\n            element. Just make sure you enable them first via JavaScript.\n          </p>\n          <p class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700\">\n            The kit comes with three pre-built pages to help you get started\n            faster. You can change the text and images and you're good to go.\n            Just make sure you enable them first via JavaScript.\n          </p>\n          <a [routerLink]=\"['/']\" class=\"font-bold text-gray-800 mt-8\">\n            Check Selvi Trends!\n          </a>\n        </div>-->\n\n        <div class=\"flex flex-wrap items-center mt-32\" >\n          <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\n            <!--<div\n              class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100\"\n            >\n              <i class=\"fas fa-user-friends text-xl\"></i>\n            </div> -->\n            <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n              Working with us is a pleasure\n            </h3>\n            <p class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 font-bold\">\n              Make your custom fits with currated color, styles and sizesets as you wish.\n            </p>\n            <p class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700\">\n              The process comes in three phases which includes Fabric selection, Styles and Sizesets that meets your need. \n              You are allowed to modify the measurements for the selected sizesets to adjust the best fits you need.\n            </p>\n            <a [routerLink]=\"['/']\" class=\"font-bold text-gray-800 mt-8\">\n              Check Selvi Trends!\n            </a>\n          </div>\n\n        <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\n          >\n\n          <img\n          alt=\"...\"\n          src=\"assets/img/unit1.JPG\"\n          class=\"w-full align-middle rounded-t-lg\"\n        />\n          <!--  <img\n              alt=\"...\"\n              src=\"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80\"\n              class=\"w-full align-middle rounded-t-lg\"\n            />-->\n            <blockquote class=\"relative p-8 bg-red-600\">\n              <svg\n                preserveAspectRatio=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 583 95\"\n                class=\"absolute left-0 w-full block h-95-px -top-94-px\"\n              >\n                <polygon\n                  points=\"-30,95 583,95 583,65\"\n                  class=\"text-red-600 fill-current\"\n                ></polygon>\n              </svg>\n              <h4 class=\"text-xl font-bold text-white\">\n                Top Notch Services\n              </h4>\n              <p class=\"text-md font-light mt-2 text-white\">\n                Our Custom Uniforms look and feel beautiful for any corporates. \n                Many people have never experienced the magic of uniform that fits perfectly: \n                no matter your body type, a well proportioned uniform designed \n                just for your employees build confidence like nothing else. \n              </p>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"relative py-20\">\n    <div\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n      style=\"transform: translateZ(0);\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-white fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n\n    <div class=\"container mx-auto px-4\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full md:w-4/12 ml-auto mr-auto px-4\">\n      <!--    <img\n            alt=\"...\"\n            class=\"max-w-full rounded-lg shadow-lg\"\n            src=\"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80\"\n          />\n-->\n          <img\n        alt=\"...\"\n        src=\"assets/img/needle.JPG\"\n        class=\"w-full align-middle rounded-t-lg\"\n      />\n\n        </div>\n        <div class=\"w-full md:w-5/12 ml-auto mr-auto px-4\">\n          <div class=\"md:pr-12\">\n            <div\n              class=\"text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300\"\n            >\n              <i class=\"fas fa-rocket text-xl\"></i>\n            </div>\n            <h3 class=\"text-3xl font-semibold\">A growing company</h3>\n            <p class=\"mt-4 text-lg leading-relaxed text-gray-600\">\n              Every uniform design begins with a consultation to discuss what the client is \n              looking for in terms of their objective, theme color , fit requests, variations for departments \n              and design details. \n              Some clients already have a very precise idea of what they are looking for, others like to \n              \"shop\" a bit for inspiration. \n              Once our client decides to move forward with a design, we will provide a simple sketch \n              and begin a personalized color, logo, captions fitting their vision and mission before \n              beginning work on the actual garment.\n            </p>\n            <ul class=\"list-none mt-6\">\n              <li class=\"py-2\">\n                <div class=\"flex items-center\">\n                  <div>\n                    <span\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\n                    >\n                      <i class=\"fas fa-fingerprint\"></i>\n                    </span>\n                  </div>\n                  <div>\n                    <h4 class=\"text-gray-600\">\n                      Carefully crafted designs\n                    </h4>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"flex items-center\">\n                  <div>\n                    <span\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\n                    >\n                      <i class=\"fab fa-html5\"></i>\n                    </span>\n                  </div>\n                  <div>\n                    <h4 class=\"text-gray-600\">\n                      Amazing colors & styles\n                    </h4>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"flex items-center\">\n                  <div>\n                    <span\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\n                    >\n                      <i class=\"far fa-paper-plane\"></i>\n                    </span>\n                  </div>\n                  <div>\n                    <h4 class=\"text-gray-600\">Dynamic Designer wears</h4>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"pt-20 pb-48\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap justify-center text-center mb-24\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <h2 class=\"text-4xl font-semibold\">Here are our Expert Team</h2>\n          <p class=\"text-lg leading-relaxed m-4 text-gray-600\">\n           Our bussiness holds expertise team in design ! .We make win for our customers.\n           Our customers makes us more customers. So like to showcase the experts who run the company with full of passion. \n           </p>\n        </div>\n      </div>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/ksp.png\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">K.S.Palanisamy</h5>\n              <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\n                Founder and Chairman - SelviTrends              </p>\n              <div class=\"mt-6\">\n              \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n           <!-- <img\n              alt=\"...\"\n              src=\"assets/img/team-1-800x800.jpg\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />-->\n            <img\n              alt=\"...\"\n              src=\"assets/img/tharani.jpeg\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Tharani</h5>\n              <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\n                Managing Director & Chief Designer  - SelviTrends </p>\n              <div class=\"mt-6\">\n                \n              </div>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/master.JPG\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">John Kennedy</h5>\n              <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\n                Pattern Master & Designer - SelviTrends\n              </p>\n              <div class=\"mt-6\">\n               \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/senthil.png\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Senthil</h5>\n              <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\nGM & Chief Marketing Officer    - SelviTrends          </p>\n              <div class=\"mt-6\">\n                \n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </section>\n<!--\n  <section class=\"pb-20 relative block bg-gray-900\">\n    <div\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n      style=\"transform: translateZ(0);\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-gray-900 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n\n    <div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\">\n      <div class=\"flex flex-wrap text-center justify-center\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <h2 class=\"text-4xl font-semibold text-white\">\n            Build something\n          </h2>\n          <p class=\"text-lg leading-relaxed mt-4 mb-4 text-gray-500\">\n            Put the potentially record low maximum sea ice extent tihs year down\n            to low ice. According to the National Oceanic and Atmospheric\n            Administration, Ted, Scambos.\n          </p>\n        </div>\n      </div>\n      <div class=\"flex flex-wrap mt-12 justify-center\">\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-medal text-xl\"></i>\n          </div>\n          <h6 class=\"text-xl mt-5 font-semibold text-white\">\n            Excelent Services\n          </h6>\n          <p class=\"mt-2 mb-4 text-gray-500\">\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </p>\n        </div>\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-poll text-xl\"></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\n            Grow your market\n          </h5>\n          <p class=\"mt-2 mb-4 text-gray-500\">\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </p>\n        </div>\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-lightbulb text-xl\"></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\n            Launch time\n          </h5>\n          <p class=\"mt-2 mb-4 text-gray-500\">\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n  \n  <section class=\"relative block py-24 lg:pt-0 bg-gray-900\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300\"\n          >\n            <div class=\"flex-auto p-5 lg:p-10\">\n              <h4 class=\"text-2xl font-semibold\">\n                Want to work with us?\n              </h4>\n              <p class=\"leading-relaxed mt-1 mb-4 text-gray-600\">\n                Complete this form and we will get back to you in 24 hours.\n              </p>\n              <div class=\"relative w-full mb-3 mt-8\">\n                <label\n                  class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n                  htmlFor=\"full-name\"\n                >\n                  Full Name\n                </label>\n                <input\n                  type=\"text\"\n                  class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Full Name\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n                  htmlFor=\"email\"\n                >\n                  Email\n                </label>\n                <input\n                  type=\"email\"\n                  class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Email\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\n                  htmlFor=\"message\"\n                >\n                  Message\n                </label>\n                <textarea\n                  rows=\"4\"\n                  cols=\"80\"\n                  class=\"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full\"\n                  placeholder=\"Type a message...\"\n                ></textarea>\n              </div>\n              <div class=\"text-center mt-6\">\n                <button\n                  class=\"bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Send Message\n                </button>\n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>-->\n</main>\n<!-- <app-footer></app-footer>--> \n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=feature-home-home-module-es2015.js.map