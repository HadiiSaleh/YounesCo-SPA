(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Invoices-Invoices-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/Invoices/Invoices/Invoices.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPanel/Invoices/Invoices/Invoices.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dash-title mb-4 ml-3\">\r\n   Invoice List\r\n</div>\r\n<!-- dash-title -->\r\n<mat-card class=\"m-3\">\r\n   <div fxLayout=\"row wrap\">\r\n      <div fxFlex.gt-md=\"600px\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n         <mat-form-field class=\"w-100\">\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n         </mat-form-field>\r\n      </div>\r\n   </div>\r\n   <!-- wrap -->\r\n</mat-card>\r\n<ng-container *ngIf=\"invoiceList && invoiceList.length>0; else elseBlock\">\r\n   <div fxLayout=\"column\">\r\n      <mat-card>\r\n         <div class=\"table-responsive-x\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"w-100 table-scroll-wrap\">\r\n               <ng-container matColumnDef=\"position\">\r\n                  <th class=\"px-3 text-nowrap\" mat-header-cell *matHeaderCellDef> No. </th>\r\n                  <td class=\"px-3 text-nowrap\" mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n               </ng-container>\r\n               <ng-container matColumnDef=\"invoiceId\">\r\n                  <th class=\"px-3 text-nowrap\" mat-header-cell *matHeaderCellDef> Invoice Id </th>\r\n                  <td class=\"px-3 text-nowrap\" mat-cell *matCellDef=\"let element\"> <a href=\"javascript:void(0)\" (click) =\"onSeeDialog()\"> {{element.invoiceId}}</a> </td>\r\n               </ng-container>\r\n               <ng-container matColumnDef=\"name\">\r\n                  <th class=\"px-3 text-nowrap\" mat-header-cell *matHeaderCellDef> Buyer </th>\r\n                  <td class=\"px-3 text-nowrap\" mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n               </ng-container>\r\n               <ng-container matColumnDef=\"date\">\r\n                  <th class=\"px-3 text-nowrap\" mat-header-cell *matHeaderCellDef>Date </th>\r\n                  <td class=\"px-3 text-nowrap\" mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\r\n               </ng-container>\r\n               <ng-container matColumnDef=\"price\">\r\n                  <th class=\"px-3 text-nowrap\" mat-header-cell *matHeaderCellDef> Price </th>\r\n                  <td class=\"px-3 text-nowrap\" mat-cell *matCellDef=\"let element\"> ${{element.price}} </td>\r\n               </ng-container>\r\n               <ng-container matColumnDef=\"payment\">\r\n                  <th class=\"px-3 text-nowrap\" mat-header-cell *matHeaderCellDef mat-sort-header> Payment </th>\r\n                  <td class=\"px-3 text-nowrap\" mat-cell *matCellDef=\"let element\"> {{element.payment}} </td>\r\n               </ng-container>\r\n               <ng-container matColumnDef=\"status\">\r\n                  <th class=\"px-3 text-nowrap\" mat-header-cell *matHeaderCellDef> Status </th>\r\n                  <td class=\"px-3 text-nowrap\" mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\r\n               </ng-container> \r\n               <ng-container matColumnDef=\"action\">\r\n                  <th class=\"px-3 text-nowrap\" mat-header-cell *matHeaderCellDef> Action </th>\r\n                  <td class=\"px-3 text-nowrap\" mat-cell *matCellDef=\"let element;let i = index;\">\r\n                  <button mat-icon-button (click) =\"onSeeDialog()\" color=\"primary\">\r\n                     <i class=\"material-icons\">remove_red_eye</i>\r\n                  </button> \r\n                  <button color=\"warn\" mat-icon-button (click)=\"onDelete(i)\">\r\n                     <mat-icon class=\"\">delete</mat-icon>\r\n                  </button>\r\n                  </td>\r\n               </ng-container>\r\n               <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n               <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n         </div>  \r\n         <mat-paginator [pageSizeOptions]=\"[15, 30, 45, 60]\"></mat-paginator>\r\n         <!-- table-responsive -->\r\n      </mat-card>\r\n   </div>\r\n</ng-container>\r\n<ng-template #elseBlock>\r\n   <h5 class=\"ml-5\">No data found</h5>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/AdminPanel/Invoices/Invoices.module.ts":
/*!********************************************************!*\
  !*** ./src/app/AdminPanel/Invoices/Invoices.module.ts ***!
  \********************************************************/
/*! exports provided: InvoicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _Invoices_Invoices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Invoices/Invoices.component */ "./src/app/AdminPanel/Invoices/Invoices/Invoices.component.ts");
/* harmony import */ var _Invoices_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Invoices.routing */ "./src/app/AdminPanel/Invoices/Invoices.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Invoices_Invoices_component__WEBPACK_IMPORTED_MODULE_5__["InvoicesComponent"]],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Invoices_routing__WEBPACK_IMPORTED_MODULE_6__["InvoicesRoutes"])
            ]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());



/***/ }),

/***/ "./src/app/AdminPanel/Invoices/Invoices.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/AdminPanel/Invoices/Invoices.routing.ts ***!
  \*********************************************************/
/*! exports provided: InvoicesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesRoutes", function() { return InvoicesRoutes; });
/* harmony import */ var _Invoices_Invoices_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoices/Invoices.component */ "./src/app/AdminPanel/Invoices/Invoices/Invoices.component.ts");

var InvoicesRoutes = [
    {
        path: '',
        component: _Invoices_Invoices_component__WEBPACK_IMPORTED_MODULE_0__["InvoicesComponent"]
    }
];


/***/ }),

/***/ "./src/app/AdminPanel/Invoices/Invoices/Invoices.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/AdminPanel/Invoices/Invoices/Invoices.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvSW52b2ljZXMvSW52b2ljZXMvSW52b2ljZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/AdminPanel/Invoices/Invoices/Invoices.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/AdminPanel/Invoices/Invoices/Invoices.component.ts ***!
  \********************************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/AdminPanelService.service */ "./src/app/AdminPanel/Service/AdminPanelService.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent(service) {
        this.service = service;
        this.invoiceList = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.invoiceList);
        this.displayedColumns = ['position', 'invoiceId', 'name', 'date', 'price', 'payment', 'status', 'action'];
    }
    InvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getInvoiceContent().valueChanges().subscribe(function (res) { return _this.getInvoiceData(res); });
    };
    //getInvoiceData method is used to get the invoice list data.
    InvoicesComponent.prototype.getInvoiceData = function (response) {
        var _this = this;
        this.invoiceList = response;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.invoiceList);
        setTimeout(function () {
            _this.dataSource.paginator = _this.paginator;
        }, 0);
    };
    /**
     *onDelete method is used to open a delete dialog.
     */
    InvoicesComponent.prototype.onDelete = function (i) {
        var _this = this;
        this.service.deleteDialog("Are you sure you want to delete this invoice permanently?").
            subscribe(function (res) { _this.popUpDeleteUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getDeleteResponse(_this.popUpDeleteUserResponse, i); });
    };
    /**
      * getDeleteResponse method is used to delete a invoice from the invoice list.
      */
    InvoicesComponent.prototype.getDeleteResponse = function (response, i) {
        if (response == "yes") {
            this.dataSource.data.splice(i, 1);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataSource.data);
            this.dataSource.paginator = this.paginator;
        }
    };
    /**
      * onSeeDialog method is used to open a see dialog.
      */
    InvoicesComponent.prototype.onSeeDialog = function () {
        this.service.seeList();
    };
    //applyFilter function can be set which takes a data object and filter string and returns true if the data object is considered a match.
    InvoicesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    InvoicesComponent.ctorParameters = function () { return [
        { type: _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], InvoicesComponent.prototype, "paginator", void 0);
    InvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__(/*! raw-loader!./Invoices.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/Invoices/Invoices/Invoices.component.html"),
            styles: [__webpack_require__(/*! ./Invoices.component.scss */ "./src/app/AdminPanel/Invoices/Invoices/Invoices.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"]])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Invoices-Invoices-module.js.map