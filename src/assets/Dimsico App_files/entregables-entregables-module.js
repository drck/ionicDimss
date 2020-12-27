(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entregables-entregables-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entregables/entregables.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entregables/entregables.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Entregable 4 \">\n    <ion-content>\n      <ion-grid no-padding>\n\n        <ion-row class=\"middle-row\" no-padding>\n          <ion-col size=\".804\">\n\n          </ion-col>\n          <ion-col size=\"10.392\" no-padding>\n\n            <mat-form-field>\n              <mat-label>Filter</mat-label>\n              <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n            </mat-form-field>\n\n            <div class=\"mat-elevation-z8\">\n              <div id=\"htmlData\" #htmlData style=\"max-height: 70vh; overflow: scroll;\">\n                <table matTableExporter #exporter=\"matTableExporter\" mat-table [dataSource]=\"dataSource\" matSort>\n\n                  <!-- ID Column -->\n                  <ng-container matColumnDef=\"area\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> area </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.area}} </td>\n                  </ng-container>\n\n                  <!-- Progress Column -->\n                  <ng-container matColumnDef=\"fecha_captura\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> fecha_captura </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.fecha_captura}} </td>\n                  </ng-container>\n\n                  <!-- Name Column -->\n                  <ng-container matColumnDef=\"linea\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> linea </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.linea}} </td>\n                  </ng-container>\n\n                  <!-- Name Column -->\n                  <ng-container matColumnDef=\"motivo_especifico\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> motivo_especifico </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.motivo_especifico}} </td>\n                  </ng-container>\n                  <!-- Color Column -->\n                  <ng-container matColumnDef=\"estacion\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> estacion </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.estacion}} </td>\n                  </ng-container>\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                  <!-- Row shown when there is no matching data. -->\n                  <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n                  </tr>\n                </table>\n              </div>\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100,1000]\"></mat-paginator>\n\n              <button style=\"margin:1rem\" mat-raised-button color=\"secondary\" (click)=\"downloadPDF()\">Download\n                PDF</button>\n              <button style=\"margin:1rem\" mat-raised-button color=\"primary\"\n                (click)=\"exporter.exportTable('xlsx', {fileName:'table'})\">Export to xlsx</button>\n              <button style=\"margin:1rem\" id=\"export\" mat-raised-button color=\"primary\"\n                (click)=\"exporter.exportTable('csv')\">Export To csv</button>\n              <button style=\"margin:1rem\" id=\"export\" mat-raised-button color=\"primary\"\n                (click)=\"exporter.exportTable('json')\">Export To json</button>\n              <button style=\"margin:1rem\" id=\"export\" mat-raised-button color=\"primary\"\n                (click)=\"exporter.exportTable('txt')\">Export To txt</button>\n\n            </div>\n\n\n          </ion-col>\n          <ion-col size=\".804\">\n\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"bottom-row\">\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </mat-tab>\n  <mat-tab label=\"Entregable 6.2\"> </mat-tab>\n  <mat-tab label=\"Entregable 7\"> </mat-tab>\n  <mat-tab label=\"Entregable 8\"> </mat-tab>\n  <mat-tab label=\"Entregable 20\"> </mat-tab>\n  <mat-tab label=\"Entregable 21\"> </mat-tab>\n</mat-tab-group>");

/***/ }),

/***/ "./src/app/entregables/entregables-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/entregables/entregables-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EntregablesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregablesPageRoutingModule", function() { return EntregablesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _entregables_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entregables.page */ "./src/app/entregables/entregables.page.ts");




const routes = [
    {
        path: '',
        component: _entregables_page__WEBPACK_IMPORTED_MODULE_3__["EntregablesPage"]
    }
];
let EntregablesPageRoutingModule = class EntregablesPageRoutingModule {
};
EntregablesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EntregablesPageRoutingModule);



/***/ }),

/***/ "./src/app/entregables/entregables.module.ts":
/*!***************************************************!*\
  !*** ./src/app/entregables/entregables.module.ts ***!
  \***************************************************/
/*! exports provided: EntregablesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregablesPageModule", function() { return EntregablesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _entregables_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entregables-routing.module */ "./src/app/entregables/entregables-routing.module.ts");
/* harmony import */ var _entregables_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entregables.page */ "./src/app/entregables/entregables.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");








let EntregablesPageModule = class EntregablesPageModule {
};
EntregablesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _entregables_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntregablesPageRoutingModule"]
        ],
        declarations: [_entregables_page__WEBPACK_IMPORTED_MODULE_6__["EntregablesPage"]]
    })
], EntregablesPageModule);



/***/ }),

/***/ "./src/app/entregables/entregables.page.scss":
/*!***************************************************!*\
  !*** ./src/app/entregables/entregables.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\ntable {\n  width: 100%;\n}\n\nmat-form-field {\n  width: 33%;\n  padding: 1rem;\n}\n\nion-grid {\n  height: 100%;\n  width: 100%;\n  background-color: #eff1f2;\n}\n\nion-grid .top-row {\n  height: 10%;\n}\n\nion-grid .middle-row {\n  height: 70%;\n}\n\nion-grid .middle-row form {\n  background-color: white;\n  height: 100%;\n  border-radius: 2px;\n}\n\nion-grid .middle-row section {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  padding: 2.7% 7.6% 5.3% 5%;\n}\n\nion-grid .middle-row section .client-header h1 {\n  font-size: 40px;\n  font-weight: normal;\n  color: #344653;\n}\n\nion-grid .middle-row section .client-header p {\n  font-size: 28px;\n  font-weight: normal;\n  color: #344653;\n}\n\nion-grid .middle-row section .client-card-input {\n  margin: 150px 0px;\n}\n\nion-grid .middle-row section .client-card-input button {\n  margin-top: 110px;\n}\n\nion-grid .middle-row section .client-card-input ion-item {\n  width: 75%;\n  border-bottom: solid 1% #d7d8d6;\n  margin: 0 auto 5% auto;\n}\n\nion-grid .middle-row section .client-card-input ion-item ion-label {\n  order: 1;\n  font-size: 4.2rem;\n}\n\nion-grid .middle-row section .client-card-input ion-item ion-input {\n  font-size: 4rem;\n  font-weight: 300;\n  color: #344653;\n}\n\nion-grid .bottom-row {\n  height: 20%;\n}\n\n.errorText {\n  position: absolute;\n  color: red;\n  margin-left: 10%;\n  margin-top: -1%;\n  font-size: 1.9rem;\n}\n\n.example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cmVnYWJsZXMvZW50cmVnYWJsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFHQTtFQUNFLFVBQUE7RUFDRixhQUFBO0FBQUE7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBRUU7RUFDRSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0FBREo7O0FBR0k7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUROOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBRk47O0FBS1E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSFY7O0FBTVE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSlY7O0FBUU07RUFDRSxpQkFBQTtBQU5SOztBQU9RO0VBQ0UsaUJBQUE7QUFMVjs7QUFPUTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FBTFY7O0FBTVU7RUFDRSxRQUFBO0VBQ0EsaUJBQUE7QUFKWjs7QUFPVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMWjs7QUFZRTtFQUNFLFdBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWEY7O0FBY0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFjRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBWEo7O0FBY0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvZW50cmVnYWJsZXMvZW50cmVnYWJsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdGQsIHRoIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIFxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAzMyU7XG5wYWRkaW5nOiAxcmVtO1xufVxuXG5pb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjI7XG5cbiAgLnRvcC1yb3cge1xuICAgIGhlaWdodDogMTAlO1xuICB9XG5cbiAgLm1pZGRsZS1yb3cge1xuICAgIGhlaWdodDogNzAlO1xuXG4gICAgZm9ybSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMi43JSA3LjYlIDUuMyUgNSU7XG5cbiAgICAgIC5jbGllbnQtaGVhZGVyIHtcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGNvbG9yOiAjMzQ0NjUzO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgY29sb3I6ICMzNDQ2NTM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNsaWVudC1jYXJkLWlucHV0IHtcbiAgICAgICAgbWFyZ2luOiAxNTBweCAwcHg7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMSUgI2Q3ZDhkNjtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byA1JSBhdXRvO1xuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICMzNDQ2NTM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJvdHRvbS1yb3cge1xuICAgIGhlaWdodDogMjAlO1xuICB9XG59XG5cbi5lcnJvclRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IC0xJTtcbiAgZm9udC1zaXplOiAxLjlyZW07XG59XG5cbi5leGFtcGxlLXNtYWxsLWJveCwgLmV4YW1wbGUtbGFyZ2UtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zbWFsbC1ib3gge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1sYXJnZS1ib3gge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/entregables/entregables.page.ts":
/*!*************************************************!*\
  !*** ./src/app/entregables/entregables.page.ts ***!
  \*************************************************/
/*! exports provided: EntregablesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregablesPage", function() { return EntregablesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _service_fire_base_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/fire-base-service.service */ "./src/app/service/fire-base-service.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);







let EntregablesPage = class EntregablesPage {
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
EntregablesPage.ctorParameters = () => [
    { type: _service_fire_base_service_service__WEBPACK_IMPORTED_MODULE_5__["FireBaseServiceService"] }
];
EntregablesPage.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"],] }],
    htmlData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['htmlData',] }]
};
EntregablesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entregables',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entregables.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entregables/entregables.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./entregables.page.scss */ "./src/app/entregables/entregables.page.scss")).default]
    })
], EntregablesPage);



/***/ })

}]);
//# sourceMappingURL=entregables-entregables-module.js.map