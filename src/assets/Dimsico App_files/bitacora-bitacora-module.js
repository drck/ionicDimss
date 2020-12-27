(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bitacora-bitacora-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bitacora/bitacora.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bitacora/bitacora.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid no-padding>\n\n    <ion-row class=\"middle-row\" no-padding>\n      <ion-col size=\".804\">\n\n      </ion-col>\n      <ion-col size=\"10.392\" no-padding>\n       \n<mat-form-field>\n  <mat-label>Filter</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\" >\n  <div id=\"htmlData\" #htmlData style=\"max-height: 70vh; overflow: scroll;\">\n  <table matTableExporter #exporter=\"matTableExporter\" mat-table [dataSource]=\"dataSource\"  matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"area\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> area </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.area}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"fecha_captura\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> fecha_captura </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.fecha_captura}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"linea\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> linea </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.linea}} </td>\n    </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"motivo_especifico\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> motivo_especifico </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.motivo_especifico}} </td>\n      </ng-container>\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"estacion\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> estacion </th>\n      <td mat-cell *matCellDef=\"let row\" > {{row.estacion}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n</div>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100,1000]\"></mat-paginator>\n\n  <button style=\"margin:1rem\" mat-raised-button color=\"secondary\"  (click)=\"downloadPDF()\">Download PDF</button>\n<button  style=\"margin:1rem\" mat-raised-button color=\"primary\" \n        (click)=\"exporter.exportTable('xlsx', {fileName:'table'})\">Export to xlsx</button>\n<button  style=\"margin:1rem\"  id=\"export\" mat-raised-button color=\"primary\" \n        (click)=\"exporter.exportTable('csv')\">Export To csv</button>\n<button  style=\"margin:1rem\" id=\"export\" mat-raised-button color=\"primary\" \n        (click)=\"exporter.exportTable('json')\">Export To json</button>\n<button  style=\"margin:1rem\" id=\"export\" mat-raised-button color=\"primary\" \n        (click)=\"exporter.exportTable('txt')\">Export To txt</button>\n\n</div>\n\n\n</ion-col>\n<ion-col size=\".804\">\n\n</ion-col>\n</ion-row>\n<ion-row class=\"bottom-row\">\n</ion-row>\n</ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/bitacora/bitacora-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/bitacora/bitacora-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BitacoraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitacoraPageRoutingModule", function() { return BitacoraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bitacora_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bitacora.page */ "./src/app/bitacora/bitacora.page.ts");




const routes = [
    {
        path: '',
        component: _bitacora_page__WEBPACK_IMPORTED_MODULE_3__["BitacoraPage"]
    }
];
let BitacoraPageRoutingModule = class BitacoraPageRoutingModule {
};
BitacoraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BitacoraPageRoutingModule);



/***/ }),

/***/ "./src/app/bitacora/bitacora.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bitacora/bitacora.module.ts ***!
  \*********************************************/
/*! exports provided: BitacoraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitacoraPageModule", function() { return BitacoraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bitacora_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bitacora-routing.module */ "./src/app/bitacora/bitacora-routing.module.ts");
/* harmony import */ var _bitacora_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bitacora.page */ "./src/app/bitacora/bitacora.page.ts");







let BitacoraPageModule = class BitacoraPageModule {
};
BitacoraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bitacora_routing_module__WEBPACK_IMPORTED_MODULE_5__["BitacoraPageRoutingModule"]
        ],
        declarations: [_bitacora_page__WEBPACK_IMPORTED_MODULE_6__["BitacoraPage"]]
    })
], BitacoraPageModule);



/***/ }),

/***/ "./src/app/bitacora/bitacora.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bitacora/bitacora.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\ntable {\n  width: 100%;\n}\n\nmat-form-field {\n  width: 33%;\n  padding: 1rem;\n}\n\nion-grid {\n  height: 100%;\n  width: 100%;\n  background-color: #eff1f2;\n}\n\nion-grid .top-row {\n  height: 10%;\n}\n\nion-grid .middle-row {\n  height: 70%;\n}\n\nion-grid .middle-row form {\n  background-color: white;\n  height: 100%;\n  border-radius: 2px;\n}\n\nion-grid .middle-row section {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  padding: 2.7% 7.6% 5.3% 5%;\n}\n\nion-grid .middle-row section .client-header h1 {\n  font-size: 40px;\n  font-weight: normal;\n  color: #344653;\n}\n\nion-grid .middle-row section .client-header p {\n  font-size: 28px;\n  font-weight: normal;\n  color: #344653;\n}\n\nion-grid .middle-row section .client-card-input {\n  margin: 150px 0px;\n}\n\nion-grid .middle-row section .client-card-input button {\n  margin-top: 110px;\n}\n\nion-grid .middle-row section .client-card-input ion-item {\n  width: 75%;\n  border-bottom: solid 1% #d7d8d6;\n  margin: 0 auto 5% auto;\n}\n\nion-grid .middle-row section .client-card-input ion-item ion-label {\n  order: 1;\n  font-size: 4.2rem;\n}\n\nion-grid .middle-row section .client-card-input ion-item ion-input {\n  font-size: 4rem;\n  font-weight: 300;\n  color: #344653;\n}\n\nion-grid .bottom-row {\n  height: 20%;\n}\n\n.errorText {\n  position: absolute;\n  color: red;\n  margin-left: 10%;\n  margin-top: -1%;\n  font-size: 1.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYml0YWNvcmEvYml0YWNvcmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFHQTtFQUNFLFVBQUE7RUFDRixhQUFBO0FBQUE7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBRUU7RUFDRSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0FBREo7O0FBR0k7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUROOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBRk47O0FBS1E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSFY7O0FBTVE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSlY7O0FBUU07RUFDRSxpQkFBQTtBQU5SOztBQU9RO0VBQ0UsaUJBQUE7QUFMVjs7QUFPUTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FBTFY7O0FBTVU7RUFDRSxRQUFBO0VBQ0EsaUJBQUE7QUFKWjs7QUFPVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMWjs7QUFZRTtFQUNFLFdBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWEYiLCJmaWxlIjoic3JjL2FwcC9iaXRhY29yYS9iaXRhY29yYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ZCwgdGgge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDMzJTtcbnBhZGRpbmc6IDFyZW07XG59XG5cbmlvbi1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmMjtcblxuICAudG9wLXJvdyB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gIH1cblxuICAubWlkZGxlLXJvdyB7XG4gICAgaGVpZ2h0OiA3MCU7XG5cbiAgICBmb3JtIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cblxuICAgIHNlY3Rpb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAyLjclIDcuNiUgNS4zJSA1JTtcblxuICAgICAgLmNsaWVudC1oZWFkZXIge1xuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgY29sb3I6ICMzNDQ2NTM7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBjb2xvcjogIzM0NDY1MztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2xpZW50LWNhcmQtaW5wdXQge1xuICAgICAgICBtYXJnaW46IDE1MHB4IDBweDtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxJSAjZDdkOGQ2O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUlIGF1dG87XG4gICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG9yZGVyOiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0LjJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBjb2xvcjogIzM0NDY1MztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYm90dG9tLXJvdyB7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuLmVycm9yVGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogLTElO1xuICBmb250LXNpemU6IDEuOXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/bitacora/bitacora.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bitacora/bitacora.page.ts ***!
  \*******************************************/
/*! exports provided: BitacoraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitacoraPage", function() { return BitacoraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _service_fire_base_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/fire-base-service.service */ "./src/app/service/fire-base-service.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);







let BitacoraPage = class BitacoraPage {
    constructor(fireBaseServiceService) {
        this.fireBaseServiceService = fireBaseServiceService;
        this.displayedColumns = ['area', 'fecha_captura', 'linea', 'estacion', 'motivo_especifico'];
        this.displayedColumns2 = ['id', 'name', 'progress', 'color'];
        this.fireBaseServiceService.getTiket().subscribe(resp => {
            this.dataSourceTmp = resp.map((e) => {
                return e.payload.doc.data();
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.dataSourceTmp);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    downloadPDF() {
        let DATA = this.htmlData.nativeElement;
        let doc = new jspdf__WEBPACK_IMPORTED_MODULE_6___default.a('p', 'pt', 'a4');
        let handleElement = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML(DATA.innerHTML, 15, 15, {
            'width': 600,
            'elementHandlers': handleElement
        });
        doc.save('report.pdf');
    }
};
BitacoraPage.ctorParameters = () => [
    { type: _service_fire_base_service_service__WEBPACK_IMPORTED_MODULE_5__["FireBaseServiceService"] }
];
BitacoraPage.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"],] }],
    htmlData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['htmlData',] }]
};
BitacoraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bitacora',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bitacora.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bitacora/bitacora.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bitacora.page.scss */ "./src/app/bitacora/bitacora.page.scss")).default]
    })
], BitacoraPage);



/***/ })

}]);
//# sourceMappingURL=bitacora-bitacora-module.js.map