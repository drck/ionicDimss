(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"padre\">\n  <div class=\"hijo\">\n    <section class=\"welcome-content-card\" *ngIf=\"isWelcomeScreenActive\">\n      <ion-row no-padding class=\"welcome-content-card-main-row\">\n        <ion-col no-padding size=\"1\">\n        </ion-col>\n        <ion-col no-padding size=\"11\">\n          <ion-row no-padding class=\"welcome-content-card-row-intro\">\n          </ion-row>\n          <ion-row no-padding class=\"welcome-content-card-row-logo\">\n            <img src=\"assets/logo.png\" />\n          </ion-row>\n          <ion-row class=\"welcome-content-card-row-spacing-1\">\n          </ion-row>\n          <ion-row no-padding class=\"welcome-content-card-row-text\">\n            <span><b>Dimssico Portal</b> </span>\n          </ion-row>\n          <ion-row class=\"welcome-content-card-row-spacing-2\">\n          </ion-row>\n          <ion-row class=\"welcome-content-card-row-button\">\n            <button color=\"hsbc\" ion-button (click)=\"isWelcomeScreenActive = false\">\n              Comencemos\n            </button>\n          </ion-row>\n          <ion-row class=\"welcome-content-card-row-outro\">\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </section>\n\n    <section class=\"login-content-card\" *ngIf=\"!isWelcomeScreenActive\">\n      <ion-row no-padding class=\"login-content-card-main-row\">\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col no-padding size=\"11\">\n          <form [formGroup]=\"authenticationForm\" (ngSubmit)=\"authenticationForm.valid && loginEventHandler()\" style=\"height: 100%\">\n            <ion-col no-padding>\n              <ion-row no-padding class=\"login-content-card-row-intro\">\n                Accede proporcionando tu usuario y contraseña\n              </ion-row>\n              <ion-row no-padding class=\"login-content-card-row-user\">\n                <ion-item>\n                  <ion-label position=\"floating\">Usuario</ion-label>\n                  <ion-input min=\"0\" autofocus=\"true\" type=\"number\" maxlength=\"10\" pattern=\"[0-9]*\" \n                    formControlName=\"username\" required>\n                  </ion-input>\n                </ion-item>\n              </ion-row>\n              <ion-row no-padding class=\"login-content-card-row-password\">\n                <ion-item class=\"custom-input\">\n                  <ion-label position=\"floating\">Contraseña</ion-label>\n                  <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n                   <img src=\"assets/images/warning-error.svg\" alt=\"\"> \n                </ion-item>\n                <div *ngIf=\"password.errors\">\n                  <p style=\"color: red;\" *ngIf=\"password.errors['invalidCredentials']\">* Usuario y/o contraseña\n                    incorrectos</p>\n                </div>\n              </ion-row>\n              <ion-row no-padding class=\"login-content-card-row-login-button\">\n                <button class=\"red-button-medium\" [disabled]=\"!authenticationForm.valid\">Iniciar sesión</button>\n              </ion-row>\n            </ion-col>\n          </form>\n        </ion-col>\n      </ion-row>\n    </section>\n\n  </div>\n</div>\n\n<!--ion-content class=\"login-grid\">\n    <ion-row no-padding class=\"login-grid-middle-row\">\n       \n\n      </ion-col>\n      <ion-col size=3 class=\"welcome-grid-middle-row column-height\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"login-grid-bottom-row\">\n\n    </ion-row>\n  </ion-grid>\n</ion-content-->");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".padre {\n  background-color: #eff1f2;\n  height: 100vh;\n  display: flex;\n  font-size: 12px;\n  justify-content: center;\n  align-items: center;\n}\n\n.hijo {\n  background: #eff1f2;\n  width: 50%;\n  height: 50vh;\n  min-width: 287px;\n}\n\n.custom-input {\n  position: relative;\n  width: 73.2%;\n  height: 100%;\n  font-size: 1rem;\n}\n\n.custom-input ion-input {\n  font-size: 1rem;\n  color: #344653;\n  font-weight: normal;\n}\n\n.custom-input ion-label {\n  color: #344653;\n  font-size: 1rem;\n}\n\n.login-grid {\n  color: #344653;\n}\n\n.login-grid ion-grid {\n  height: 100%;\n  width: 100%;\n  background-color: #eff1f2;\n}\n\n.login-grid-top-row {\n  height: 22.5%;\n}\n\n.login-grid-top-row section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.login-grid-top-row section.single {\n  justify-content: flex-end;\n}\n\n.login-grid-top-row section img {\n  width: 9%;\n  height: 18%;\n  margin: 3.5%;\n}\n\n.login-grid-top-row section button {\n  background: transparent;\n  height: 20%;\n  width: 5%;\n  margin: 3%;\n}\n\n.login-grid-top-row section button img {\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n}\n\n.login-grid-middle-row {\n  height: 56.3%;\n}\n\n.login-grid-middle-row .column-height {\n  height: auto;\n}\n\n.login-grid-bottom-row {\n  height: 21.3%;\n}\n\n.login-content-card {\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  border-radius: 3.8px;\n}\n\n.login-content-card-main-row {\n  height: 100%;\n}\n\n.login-content-card-row-intro {\n  height: 14.5%;\n  width: 77.9%;\n  color: #344653;\n  font-size: 1rem;\n  text-align: justify;\n  margin-top: 6.5%;\n  vertical-align: top;\n}\n\n.login-content-card-row-user ion-item {\n  position: relative;\n  width: 73.2%;\n  height: 100%;\n}\n\n.login-content-card-row-user ion-item ion-input {\n  color: #344653;\n  font-weight: normal;\n}\n\n.login-content-card-row-user ion-item ion-label {\n  color: #344653;\n}\n\n.login-content-card-row-password ion-item {\n  width: 73.2%;\n  height: 65%;\n}\n\n.login-content-card-row-password ion-item ion-input {\n  color: #344653;\n  font-weight: normal;\n}\n\n.login-content-card-row-password ion-item ion-label {\n  color: #344653;\n}\n\n.login-content-card-row-password ion-item img {\n  float: right;\n  width: 1rem;\n}\n\n.login-content-card-row-password p {\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.67;\n  letter-spacing: normal;\n  text-align: left;\n  color: #999999;\n}\n\n.login-content-card-row-login-button {\n  height: 20%;\n}\n\n.login-content-card-row-login-button > button {\n  position: relative;\n  margin-top: 3%;\n  width: 29%;\n  margin-left: 60%;\n  height: 60%;\n  border-radius: 3.8px;\n  background-color: #33db00;\n  color: white;\n}\n\n.login-content-card-row-login-button > button:disabled {\n  position: relative;\n  border-radius: 3.8px;\n  font-size: 1rem;\n  margin-top: 3%;\n  width: 29%;\n  margin-left: 60%;\n  height: 60%;\n  color: white;\n}\n\n.login-content-card-row-info {\n  height: 13%;\n}\n\n.login-content-card-row-info > p {\n  color: #999999;\n  font-size: 1.313rem;\n}\n\n.welcome-content-card {\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  border-radius: 3.8px;\n}\n\n.welcome-content-card-main-row {\n  height: 100%;\n}\n\n.welcome-content-card-row-intro {\n  height: 17.2%;\n}\n\n.welcome-content-card-row-logo {\n  height: 8.4%;\n}\n\n.welcome-content-card-row-logo img {\n  min-width: 100px;\n  width: 1rem;\n}\n\n.welcome-content-card-row-spacing-1 {\n  height: 6.8%;\n}\n\n.welcome-content-card-row-text {\n  padding-top: 1rem;\n  height: 23.9%;\n  width: 64%;\n  font-size: 2rem;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #344653;\n  color: var(--dark-grey-blue);\n}\n\n.welcome-content-card-row-spacing-2 {\n  height: 13.1%;\n}\n\n.welcome-content-card-row-button {\n  height: 13.3%;\n}\n\n.welcome-content-card-row-button button {\n  border-radius: 2px;\n  position: relative;\n  background-position: right 9% center;\n  background-repeat: no-repeat;\n  background-size: 7%;\n  padding-left: 5%;\n  width: 39%;\n  min-width: 200px;\n  height: 100%;\n  background-color: #33db00;\n  color: white;\n  text-align: left;\n  font-size: 1rem;\n}\n\n.welcome-content-card-row-outro {\n  height: 17.2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UseUJBSlU7RUFLVixhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFiVTtFQWNWLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTEY7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsY0EzQmM7RUE0QmQsbUJBQUE7QUFKSjs7QUFNRTtFQUNFLGNBL0JjO0VBZ0NkLGVBQUE7QUFKSjs7QUFPQTtFQUNFLGNBcENnQjtBQWdDbEI7O0FBS0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXpDUTtBQXNDWjs7QUFNRTtFQUNFLGFBQUE7QUFKSjs7QUFNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFKTjs7QUFNTTtFQUNFLHlCQUFBO0FBSlI7O0FBT007RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMUjs7QUFRTTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTlI7O0FBUVE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOVjs7QUFhRTtFQUNFLGFBQUE7QUFYSjs7QUFhSTtFQUNFLFlBQUE7QUFYTjs7QUFlRTtFQUNFLGFBQUE7QUFiSjs7QUFpQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFkRjs7QUFnQkU7RUFDRSxZQUFBO0FBZEo7O0FBaUJFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQXpHYztFQTBHZCxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBbUJJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWpCTjs7QUFrQk07RUFDRSxjQXRIVTtFQXVIVixtQkFBQTtBQWhCUjs7QUFrQk07RUFDRSxjQTFIVTtBQTBHbEI7O0FBdUJJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFyQk47O0FBc0JNO0VBQ0UsY0FySVU7RUFzSVYsbUJBQUE7QUFwQlI7O0FBc0JNO0VBQ0UsY0F6SVU7QUFxSGxCOztBQXNCTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBcEJSOztBQXdCSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF0Qk47O0FBMEJFO0VBQ0UsV0FBQTtBQXhCSjs7QUEwQkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFyS007RUFzS04sWUFBQTtBQXhCTjs7QUEyQkk7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXpCTjs7QUE2QkU7RUFDRSxXQUFBO0FBM0JKOztBQTZCSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQTNCTjs7QUFnQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUE3QkY7O0FBK0JFO0VBQ0UsWUFBQTtBQTdCSjs7QUFnQ0U7RUFDRSxhQUFBO0FBOUJKOztBQWlDRTtFQUNFLFlBQUE7QUEvQko7O0FBaUNJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBL0JOOztBQW1DRTtFQUNFLFlBQUE7QUFqQ0o7O0FBb0NFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsYUFBQTtBQW5DSjs7QUFzQ0U7RUFDRSxhQUFBO0FBcENKOztBQXNDSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkExUE07RUEyUE4sWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXBDTjs7QUF3Q0U7RUFDRSxhQUFBO0FBdENKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kcGFsZS1ncmV5OiAjZWZmMWYyO1xuJGNvbG9yLWJsdWUtZ3JheTogIzM0NDY1MztcbiRjb2xvci1yZWQ6ICMzM2RiMDA7XG4ucGFkcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFsZS1ncmV5O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEycHggO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhpam8ge1xuICBiYWNrZ3JvdW5kOiAkcGFsZS1ncmV5O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG1pbi13aWR0aDogMjg3cHg7XG5cbn1cblxuXG4uY3VzdG9tLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzMuMiU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBpb24taW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogJGNvbG9yLWJsdWUtZ3JheTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9IFxuICBpb24tbGFiZWwge1xuICAgIGNvbG9yOiAkY29sb3ItYmx1ZS1ncmF5O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuLmxvZ2luLWdyaWQge1xuICBjb2xvcjogJGNvbG9yLWJsdWUtZ3JheTtcbiAgaW9uLWdyaWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFsZS1ncmV5XG4gIH1cblxuICAmLXRvcC1yb3cge1xuICAgIGhlaWdodDogMjIuNSU7XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICYuc2luZ2xlIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDklO1xuICAgICAgICBoZWlnaHQ6IDE4JTtcbiAgICAgICAgbWFyZ2luOiAzLjUlO1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgbWFyZ2luOiAzJTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgJi1taWRkbGUtcm93IHtcbiAgICBoZWlnaHQ6IDU2LjMlO1xuXG4gICAgLmNvbHVtbi1oZWlnaHQge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gICYtYm90dG9tLXJvdyB7XG4gICAgaGVpZ2h0OiAyMS4zJTtcbiAgfVxufVxuXG4ubG9naW4tY29udGVudC1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDMuOHB4O1xuXG4gICYtbWFpbi1yb3cge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gICYtcm93LWludHJvIHtcbiAgICBoZWlnaHQ6IDE0LjUlO1xuICAgIHdpZHRoOiA3Ny45JTtcbiAgICBjb2xvcjogJGNvbG9yLWJsdWUtZ3JheTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW4tdG9wOiA2LjUlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAmLXJvdy11c2VyIHtcbiAgICBpb24taXRlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogNzMuMiU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWJsdWUtZ3JheTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH0gXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWJsdWUtZ3JheTtcbiAgICAgIH1cbiAgICAgXG4gICAgfVxuICB9XG5cbiAgJi1yb3ctcGFzc3dvcmQgeyAgICBcbiAgICBpb24taXRlbSB7XG4gICAgICB3aWR0aDogNzMuMiU7XG4gICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItYmx1ZS1ncmF5O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgfSBcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItYmx1ZS1ncmF5O1xuICAgICAgfVxuICAgICAgaW1ne1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuNjc7XG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIH1cbiAgfVxuXG4gICYtcm93LWxvZ2luLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyMCU7XG5cbiAgICA+YnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgd2lkdGg6IDI5JTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2MCU7XG4gICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMuOHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjokY29sb3ItcmVkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgID5idXR0b246ZGlzYWJsZWQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMy44cHg7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgIHdpZHRoOiAyOSU7XG4gICAgICBtYXJnaW4tbGVmdDogNjAlO1xuICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgJi1yb3ctaW5mbyB7XG4gICAgaGVpZ2h0OiAxMyU7XG5cbiAgICA+cCB7XG4gICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgIGZvbnQtc2l6ZTogMS4zMTNyZW07XG4gICAgfVxuICB9XG59XG5cbi53ZWxjb21lLWNvbnRlbnQtY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzLjhweDtcblxuICAmLW1haW4tcm93IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmLXJvdy1pbnRybyB7XG4gICAgaGVpZ2h0OiAxNy4yJTtcbiAgfVxuXG4gICYtcm93LWxvZ28ge1xuICAgIGhlaWdodDogOC40JTtcblxuICAgIGltZyB7XG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgfVxuICB9XG5cbiAgJi1yb3ctc3BhY2luZy0xIHtcbiAgICBoZWlnaHQ6IDYuOCU7XG4gIH1cblxuICAmLXJvdy10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBoZWlnaHQ6IDIzLjklO1xuICAgIHdpZHRoOiA2NCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMzQ0NjUzO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXktYmx1ZSk7XG4gIH1cblxuICAmLXJvdy1zcGFjaW5nLTIge1xuICAgIGhlaWdodDogMTMuMSU7XG4gIH1cblxuICAmLXJvdy1idXR0b24ge1xuICAgIGhlaWdodDogMTMuMyU7XG5cbiAgICBidXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOSUgY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNyU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgd2lkdGg6IDM5JTtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gIH1cblxuICAmLXJvdy1vdXRybyB7XG4gICAgaGVpZ2h0OiAxNy4yJTtcbiAgICBcbiAgfVxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let LoginPage = class LoginPage {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.isWelcomeScreenActive = true;
        this.authenticationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999999999),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)
            ])
        });
    }
    get user() { return this.authenticationForm.get('username'); }
    get password() { return this.authenticationForm.get('password'); }
    loginEventHandler() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.navCtrl.navigateRoot('/home');
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map