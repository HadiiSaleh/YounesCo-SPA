(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AdminAccount-AdminAccount-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/AdminAccount/Account/Account.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPanel/AdminAccount/Account/Account.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-container\">\r\n   <div class=\"final-receipt-page section-gap\">\r\n      <div class=\"account-info\">\r\n         <!-- *ngIf=\"((UserRole$ | async)=='Admin' || (UserRole$ | async)=='Moderator') && (LoginStatus$ | async) as LoginStatus \"> -->\r\n         <div class=\"container\">\r\n            <div class=\"mb-4 user-info\">\r\n               <div fxLayoutAlign=\"flex-start\">\r\n                  <div class=\"login-user-img\">\r\n                     <img src=\"assets/images/user-4.jpg\" width=\"70\" alt=\"Active User\">\r\n                  </div>\r\n                  <!-- login-user-img -->\r\n                  <div class=\"px-3\">\r\n                     <!-- <h4>Hi, John Doe</h4> -->\r\n                     <h4>{{CurrentUserName}}</h4>\r\n                     <div class=\"text-muted text-xl\">johndoe@deo.com</div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n               <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"30\" fxFlex.lg=\"20\" fxFlex.xl=\"20\"\r\n                  class=\"user-nav-list bg-white\">\r\n                  <mat-list class=\"py-2\" role=\"list\">\r\n                     <mat-list-item role=\"listitem\">\r\n                        <a [routerLink]=\"['/admin-panel/account/profile']\" routerLinkActive=\"tab-active\">\r\n                           <span>\r\n                              <i class=\"material-icons\">account_circle</i> Profile\r\n                           </span>\r\n                        </a>\r\n                     </mat-list-item>\r\n                     <mat-list-item role=\"listitem\">\r\n                        <a [routerLink]=\"['/admin-panel/account/collaboration']\" routerLinkActive=\"tab-active\">\r\n                           <i class=\"material-icons\">location_on</i>\r\n                           <span>Collaboration</span>\r\n                        </a>\r\n                     </mat-list-item>\r\n                  </mat-list>\r\n               </div>\r\n               <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"70\" fxFlex.lg=\"70\" fxFlex.xl=\"70\"\r\n                  class=\"user-content-wrapper my-0\">\r\n                  <div class=\"tab-container\">\r\n                     <router-outlet></router-outlet>\r\n                  </div>\r\n                  <!-- tab-container -->\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <!-- account-info -->\r\n   </div>\r\n   <!-- final-receipt-page -->\r\n</div>\r\n<!-- inner-container -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n   <button color=\"primary\" mat-raised-button (click)=\"addNewUserDialog()\">\r\n      Add Users\r\n   </button>\r\n   <ng-container *ngIf=\"collaborationData && collaborationData.length>0; else elseBlock\">\r\n      <div class=\"table-responsive-x\">\r\n         <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 w-100 table-scroll-wrap\">\r\n            <ng-container matColumnDef=\"image\">\r\n               <th class=\"px-3\" mat-header-cell *matHeaderCellDef>Image</th>\r\n               <td class=\"px-3\" mat-cell *matCellDef=\"let element\"> <img src= {{element.image}} width=\"40\" height=\"40\"></td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"name\">\r\n               <th class=\"px-3\" mat-header-cell *matHeaderCellDef> Name </th>\r\n               <td class=\"px-3\" mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"email\">\r\n               <th class=\"px-3\" mat-header-cell *matHeaderCellDef> email </th>\r\n               <td class=\"px-3\" mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"access\">\r\n               <th class=\"px-3\" mat-header-cell *matHeaderCellDef> Access </th>\r\n               <td class=\"px-3\" mat-cell *matCellDef=\"let element\"> {{element.access}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"action\">\r\n               <th class=\"px-3\" mat-header-cell *matHeaderCellDef> Action </th>\r\n               <td class=\"px-3\" mat-cell *matCellDef=\"let element;let i = index;\">\r\n                  <button color=\"warn\" mat-icon-button (click)=\"onDelete(i)\">\r\n                     <mat-icon class=\"\">delete</mat-icon>\r\n                  </button>\r\n               </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n         </table>\r\n      </div>  \r\n      <!-- table-responsive-x -->\r\n   </ng-container>\r\n   <ng-template #elseBlock>\r\n      <h5 class=\"ml-5\">No user found</h5>\r\n   </ng-template>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"type == 'info'\">\r\n   <h4> Edit Profile Information</h4>\r\n   <div fxLayoutAlign=\"flex-start\">\r\n      <div class=\"product-image-gallery-item edit-icon mb-4\">\r\n         <a>\r\n            <img src=\"assets/images/user-edit.png\" alt=\"\" width=\"70\" alt=\"Active User\">\r\n         </a>\r\n         <button class=\"edit-btn\" md-mini-fab type=\"button\">\r\n            <label for=\"fileToUpload\">\r\n               <mat-icon>edit</mat-icon>\r\n            </label>\r\n         </button>\r\n         <input mat id=\"fileToUpload\" type=\"file\" accept=\"image/*\" style=\"display:none;\">\r\n      </div>\r\n      <!-- product-image-gallery-item -->\r\n   </div>\r\n   <div fxLayout=\"row wrap\" class=\"col-gap\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n         <form [formGroup]=\"info\">\r\n            <div class=\"example-container\">\r\n               <mat-form-field class=\"w-100 mb-3\">\r\n                  <input matInput placeholder=\"First Name\" formControlName=\"first_name\">\r\n                  <mat-error *ngIf=\"info.get('first_name').hasError('required') && info.get('first_name').touched\">This\r\n                     field should not be empty.</mat-error>\r\n               </mat-form-field>\r\n               <mat-form-field class=\"w-100 mb-3\">\r\n                  <input matInput placeholder=\"Last Name\" formControlName=\"last_name\">\r\n                  <mat-error *ngIf=\"info.get('last_name').hasError('required') && info.get('last_name').touched\">This\r\n                     field should not be empty.</mat-error>\r\n               </mat-form-field>\r\n               <div class=\"mb-3\">\r\n                  <mat-radio-group formControlName=\"gender\">\r\n                     <mat-radio-button class=\"mr-2\" value=\"male\">Male</mat-radio-button>\r\n                     <mat-radio-button value=\"female\">Female</mat-radio-button>\r\n                  </mat-radio-group>\r\n               </div>\r\n               <div>\r\n                  <mat-form-field class=\"w-100 mb-3\">\r\n                     <input matInput [matDatepicker]=\"picker\" placeholder=\"Bith Date\" formControlName=\"date\">\r\n                     <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                     <mat-datepicker #picker></mat-datepicker>\r\n                     <mat-error *ngIf=\"info.get('date').hasError('required') && info.get('date').touched\">This field\r\n                        should not be empty.</mat-error>\r\n                  </mat-form-field>\r\n               </div>\r\n               <mat-form-field class=\"w-100 mb-3\">\r\n                  <input matInput placeholder=\"Mobile No.\" formControlName=\"phone_number\">\r\n                  <mat-error *ngIf=\"info.get('phone_number').hasError('required') && info.get('phone_number').touched\">\r\n                     This field should not be empty.</mat-error>\r\n               </mat-form-field>\r\n               <mat-form-field class=\"w-100 mb-3\">\r\n                  <input matInput placeholder=\"Location\" formControlName=\"location\">\r\n                  <mat-error *ngIf=\"info.get('location').hasError('required') && info.get('location').touched\">This\r\n                     field should not be empty.</mat-error>\r\n               </mat-form-field>\r\n               <mat-form-field class=\"w-100 mb-3\">\r\n                  <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n                  <mat-error *ngIf=\"info.get('email').hasError('required') && info.get('email').touched\">This field\r\n                     should not be empty.</mat-error>\r\n                  <mat-error *ngIf=\"info.get('email').hasError('pattern') && info.get('email').touched\">Please enter a\r\n                     valid email.</mat-error>\r\n               </mat-form-field>\r\n               <button mat-raised-button color=\"accent\" (click)=\"submitProfileInfo()\">Save</button>\r\n            </div>\r\n            <!-- example-container -->\r\n         </form>\r\n      </div>\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\" class=\"edit-profile\"\r\n         style=\"background-image: url(assets/images/user-edit.png)\">\r\n      </div>\r\n   </div>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/AdminAccount/Profile/Profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPanel/AdminAccount/Profile/Profile.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n   <h4>Profile Information</h4>\r\n   <div class=\"pt-3\">\r\n      <div class=\"proflie-field mb-3\">\r\n         <label>First Name:</label>\r\n         <span>John</span>\r\n      </div>\r\n      <div class=\"proflie-field mb-3\">\r\n         <label>Last Name:</label>\r\n         <span>Doe</span>\r\n      </div>\r\n      <div class=\"proflie-field mb-3\">\r\n         <label>Gender:</label>\r\n         <span>Male</span>\r\n      </div>\r\n      <div class=\"proflie-field mb-3\">\r\n         <label>Date of birth:</label>\r\n         <span>Jan,06,1979</span>\r\n      </div>\r\n      <div class=\"proflie-field mb-3\">\r\n         <label>Mobile Number:</label>\r\n         <span>+120 256 254 125</span>\r\n      </div>\r\n      <div class=\"proflie-field mb-3\">\r\n         <label>location:</label>\r\n         <span>New York</span>\r\n      </div>\r\n      <div class=\"proflie-field mb-3\">\r\n         <label>E-mail id:</label>\r\n         <span class=\"text-ellipse\">johnDoe@doe.com</span>\r\n      </div>\r\n      <button mat-raised-button color=\"accent\" [routerLink]=\"['edit']\" [queryParams]=\"{type:'info'}\">Edit</button>\r\n   </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/Account/Account.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/Account/Account.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvQWRtaW5BY2NvdW50L0FjY291bnQvQWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/Account/Account.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/Account/Account.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/AdminPanelService.service */ "./src/app/AdminPanel/Service/AdminPanelService.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = /** @class */ (function () {
    function AccountComponent(adminService) {
        this.adminService = adminService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LoginStatus$ = this.adminService.isLoggedIn;
        this.UserName$ = this.adminService.currentUserName;
        this.UserRole$ = this.adminService.currentUserRole;
        this.adminService.currentUserName.subscribe(function (result) { _this.CurrentUserName = result; });
        this.CurrentUser$ = this.adminService.getUserByUsername(this.CurrentUserName);
    };
    AccountComponent.ctorParameters = function () { return [
        { type: _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"] }
    ]; };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Account',
            template: __webpack_require__(/*! raw-loader!./Account.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/AdminAccount/Account/Account.component.html"),
            styles: [__webpack_require__(/*! ./Account.component.scss */ "./src/app/AdminPanel/AdminAccount/Account/Account.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/AdminAccount.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/AdminAccount.module.ts ***!
  \****************************************************************/
/*! exports provided: AdminAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccountModule", function() { return AdminAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Account/Account.component */ "./src/app/AdminPanel/AdminAccount/Account/Account.component.ts");
/* harmony import */ var _Collaboration_Collaboration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Collaboration/Collaboration.component */ "./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.ts");
/* harmony import */ var _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditProfile/EditProfile.component */ "./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.ts");
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Profile/Profile.component */ "./src/app/AdminPanel/AdminAccount/Profile/Profile.component.ts");
/* harmony import */ var _AdminAccount_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AdminAccount.routing */ "./src/app/AdminPanel/AdminAccount/AdminAccount.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminAccountModule = /** @class */ (function () {
    function AdminAccountModule() {
    }
    AdminAccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _Account_Account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"],
                _Collaboration_Collaboration_component__WEBPACK_IMPORTED_MODULE_7__["CollaborationComponent"],
                _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_8__["EditProfileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_AdminAccount_routing__WEBPACK_IMPORTED_MODULE_10__["AdminAccountRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
            ]
        })
    ], AdminAccountModule);
    return AdminAccountModule;
}());



/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/AdminAccount.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/AdminAccount.routing.ts ***!
  \*****************************************************************/
/*! exports provided: AdminAccountRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccountRoutes", function() { return AdminAccountRoutes; });
/* harmony import */ var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile/Profile.component */ "./src/app/AdminPanel/AdminAccount/Profile/Profile.component.ts");
/* harmony import */ var _Account_Account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account/Account.component */ "./src/app/AdminPanel/AdminAccount/Account/Account.component.ts");
/* harmony import */ var _Collaboration_Collaboration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collaboration/Collaboration.component */ "./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.ts");
/* harmony import */ var _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditProfile/EditProfile.component */ "./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.ts");




var AdminAccountRoutes = [
    {
        path: '',
        component: _Account_Account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"],
        children: [
            {
                path: 'profile',
                component: _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]
            },
            {
                path: 'collaboration',
                component: _Collaboration_Collaboration_component__WEBPACK_IMPORTED_MODULE_2__["CollaborationComponent"]
            },
            {
                path: 'profile/edit',
                component: _EditProfile_EditProfile_component__WEBPACK_IMPORTED_MODULE_3__["EditProfileComponent"]
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvQWRtaW5BY2NvdW50L0NvbGxhYm9yYXRpb24vQ29sbGFib3JhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CollaborationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborationComponent", function() { return CollaborationComponent; });
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



var CollaborationComponent = /** @class */ (function () {
    function CollaborationComponent(service) {
        this.service = service;
        this.displayedColumns = ['image', 'name', 'email', 'access', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.collaborationData);
    }
    CollaborationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCollaborationContent().valueChanges().subscribe(function (res) { return _this.getCollaborationData(res); });
    };
    //getCollaborationData method is used to get the collaboration data.
    CollaborationComponent.prototype.getCollaborationData = function (response) {
        this.collaborationData = response;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.collaborationData);
    };
    /**
     *onDelete method is used to open a delete dialog.
     */
    CollaborationComponent.prototype.onDelete = function (i) {
        var _this = this;
        this.service.deleteDialog("Are you sure you want to delete this user permanently?").
            subscribe(function (res) { _this.popUpDeleteUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getDeleteResponse(_this.popUpDeleteUserResponse, i); });
    };
    /**
      * getDeleteResponse method is used to delete a user from the user list.
      */
    CollaborationComponent.prototype.getDeleteResponse = function (response, i) {
        if (response == "yes") {
            this.dataSource.data.splice(i, 1);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataSource.data);
        }
    };
    /**
      * addNewUserDialog method is used to open a add new client dialog.
      */
    CollaborationComponent.prototype.addNewUserDialog = function () {
        var _this = this;
        this.service.addNewUserDialog().
            subscribe(function (res) { _this.popUpNewUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getAddUserPopupResponse(_this.popUpNewUserResponse); });
    };
    /**
      *getAddUserPopupResponse method is used to get a new client dialog response.
      *if response will be get then add new client into client list.
      */
    CollaborationComponent.prototype.getAddUserPopupResponse = function (response) {
        if (response) {
            var addUser = {
                image: "assets/images/user-edit.png",
                name: response.name,
                email: response.email,
                access: response.accessType
            };
            this.collaborationData.push(addUser);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.collaborationData);
        }
    };
    CollaborationComponent.ctorParameters = function () { return [
        { type: _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"] }
    ]; };
    CollaborationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collaboration',
            template: __webpack_require__(/*! raw-loader!./Collaboration.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.html"),
            styles: [__webpack_require__(/*! ./Collaboration.component.scss */ "./src/app/AdminPanel/AdminAccount/Collaboration/Collaboration.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"]])
    ], CollaborationComponent);
    return CollaborationComponent;
}());



/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvQWRtaW5BY2NvdW50L0VkaXRQcm9maWxlL0VkaXRQcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/fesm5/ngx-toasta.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(route, router, formGroup, toastyService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.formGroup = formGroup;
        this.toastyService = toastyService;
        this.emailPattern = /\S+@\S+\.\S+/;
        this.toastOption = {
            title: "Account Information",
            msg: "Your account information updated successfully!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
        this.route.params.subscribe(function (params) {
            _this.route.queryParams.forEach(function (queryParams) {
                _this.type = queryParams['type'];
            });
        });
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.info = this.formGroup.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['male'],
            date: [],
            phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            location: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]]
        });
    };
    /**
     * Function is used to submit the profile info.
     * If form value is valid, redirect to profile page.
     */
    EditProfileComponent.prototype.submitProfileInfo = function () {
        var _this = this;
        if (this.info.valid) {
            this.router.navigate(['/admin-panel/account/profile']).then(function () {
                _this.toastyService.success(_this.toastOption);
            });
        }
        else {
            for (var i in this.info.controls) {
                this.info.controls[i].markAsTouched();
            }
        }
    };
    EditProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toasta__WEBPACK_IMPORTED_MODULE_3__["ToastaService"] }
    ]; };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-EditProfile',
            template: __webpack_require__(/*! raw-loader!./EditProfile.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.html"),
            styles: [__webpack_require__(/*! ./EditProfile.component.scss */ "./src/app/AdminPanel/AdminAccount/EditProfile/EditProfile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toasta__WEBPACK_IMPORTED_MODULE_3__["ToastaService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/Profile/Profile.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/Profile/Profile.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvQWRtaW5BY2NvdW50L1Byb2ZpbGUvUHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/AdminPanel/AdminAccount/Profile/Profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/AdminPanel/AdminAccount/Profile/Profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./Profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/AdminAccount/Profile/Profile.component.html"),
            styles: [__webpack_require__(/*! ./Profile.component.scss */ "./src/app/AdminPanel/AdminAccount/Profile/Profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=AdminAccount-AdminAccount-module.js.map