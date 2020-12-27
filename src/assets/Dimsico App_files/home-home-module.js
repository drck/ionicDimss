(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<ion-content>\n  <ion-grid no-padding style=\"display: flex;\n  justify-content: center;\n  align-items: center;\">\n\n<mat-grid-list cols=\"4\" class=\"middle-row\" style=\"width: 80%; \" rowHeight=\"30vh\">\n  <mat-grid-tile\n    style=\"margin: 1rem;\"\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\"\n      (click)=\"navCtrl.navigateRoot(tile.url)\">\n      <ion-icon class=\"icons\"  name=\"document-text-outline\"></ion-icon>\n      {{tile.text}}\n\n  </mat-grid-tile>\n</mat-grid-list>\n\n    <!--ion-row class=\"middle-row\" no-padding>\n      <ion-col size=\".804\">\n\n      </ion-col>\n      <ion-col size=\"6.648\" no-padding>\n        <button tab=\"tab2\" class=\"primaryButton\" (click)=\"navCtrl.navigateRoot('/register')\">\n          <ion-icon class=\"icons\"  name=\"document-text-outline\"></ion-icon>\n          <p>Alta</p>\n        </button>\n      </ion-col>\n      <ion-col size=\".096\">\n\n      </ion-col>\n      <ion-col size=\"3.648\" no-padding>\n      <ion-row >\n      <ion-col no-padding>\n        <button tab=\"tab3\" class=\"secondButton\" (click)=\"navCtrl.navigateRoot('/dashboard')\">\n          <ion-icon class=\"icons\" name=\"briefcase-outline\"></ion-icon>\n          <p>Reportes</p>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col no-padding>\n        <button tab=\"tab4\" class=\"secondButton\" (click)=\"navCtrl.navigateRoot('/dashboard')\">\n          <ion-icon  class=\"icons\"  size=\"1\" name=\"receipt-outline\"></ion-icon>\n          <p>Dashboard</p>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n    <ion-col size=\".804\">\n    </ion-col>\n    </ion-row>\n    <ion-row class=\"bottom-row\">\n\n    </ion-row-->\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ]),
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  height: 100%;\n  width: 100%;\n}\nion-content ion-grid {\n  padding: 1rem;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-color: #eff1f2;\n}\nion-content .icons {\n  height: 3rem;\n  width: 3rem;\n  color: lightblue;\n}\nion-content .middle-row {\n  height: 40%;\n  position: relative;\n}\nion-content .middle-row button {\n  position: relative;\n  background-color: white;\n  border-radius: 3px;\n  height: 100%;\n  width: 100%;\n}\nion-content .middle-row .primaryButton {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 7% 21%;\n  background-position-y: 35%;\n}\nion-content .middle-row .primaryButton p {\n  color: #344653;\n  font-size: 2.5rem;\n}\nion-content .middle-row .secondButton {\n  padding-top: 2rem;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 20% 25%;\n  background-position-y: 35%;\n}\nion-content .middle-row .secondButton > p {\n  color: #344653;\n  font-size: 1.5rem;\n}\nion-content .middle-row .secondButton .subtext {\n  color: #344653;\n  font-size: 2em;\n}\nion-content .bottom-row {\n  height: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFFSjtBQUFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHTjtBQURJO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUFHTjtBQUZNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSVI7QUFESTtFQUNFLGlCQUFBO0VBQ0MsMkJBQUE7RUFDRCw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFHTjtBQUZNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSVI7QUFGTTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBSVI7QUFBRTtFQUNFLFdBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmMjtcbiAgfVxuICAuaWNvbnMge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBjb2xvcjpsaWdodGJsdWU7XG4gIH1cbiAgLm1pZGRsZS1yb3cge1xuICAgIGhlaWdodDogNDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBidXR0b24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnByaW1hcnlCdXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNyUgMjElO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAzNSU7XG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6ICMzNDQ2NTM7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAuc2Vjb25kQnV0dG9uIHtcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwJSAyNSU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDM1JTtcbiAgICAgID5wIHtcbiAgICAgICAgY29sb3I6ICMzNDQ2NTM7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgICAgLnN1YnRleHQge1xuICAgICAgICBjb2xvcjogIzM0NDY1MztcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5ib3R0b20tcm93IHtcbiAgICBoZWlnaHQ6IDM1JTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _service_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/security.service */ "./src/app/service/security.service.ts");




let HomePage = class HomePage {
    constructor(navCtrl, modalCtrl, secure) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.secure = secure;
        this.tiles = [
            { text: 'Registro Incidencias', cols: 3, rows: 1, color: 'white', url: '/register' },
            { text: 'Bitacora', cols: 1, rows: 2, color: 'white', url: '/reports' },
            { text: 'Entregables', cols: 1, rows: 1, color: 'white', url: '/entregables' },
            { text: 'Operaciones', cols: 2, rows: 1, color: 'white', url: '' },
        ];
        secure.bndBaner = true;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _service_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map