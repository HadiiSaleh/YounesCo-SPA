var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { MatDialog } from '@angular/material';
import { DeleteListDialogComponent } from '../Widget/PopUp/DeleteListDialog/DeleteListDialog.component';
import { SeeListDialogComponent } from '../Widget/PopUp/SeeListDialog/SeeListDialog.component';
import { AddNewUserComponent } from '../Widget/PopUp/AddNewUser/AddNewUser.component';
import { AngularFireDatabase } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';
var AdminPanelServiceService = /** @class */ (function () {
    function AdminPanelServiceService(http, dialog, db) {
        this.http = http;
        this.dialog = dialog;
        this.db = db;
        this.sidenavOpen = true;
        this.sidenavMode = "side";
        this.chatSideBarOpen = true;
        // Urls to access accounts Web API’s
        this.baseUrlGetAllUsersByRole = environment.apiUrl + "accounts/GetUsersByRole";
        this.baseUrlGetAllUsers = environment.apiUrl + "accounts/GetAllUsers";
        this.baseUrlDeleteUserById = environment.apiUrl + "accounts/DeleteUserById";
        this.baseUrlUnDelteUserById = environment.apiUrl + "accounts/UnDelteUserById";
        this.baseUrlChangeRole = environment.apiUrl + "accounts/ChangeRole";
    }
    /*
        ---------- Pop Up Function ----------
    */
    //deleteDiaglog function is used to open the Delete Dialog Component. 
    AdminPanelServiceService.prototype.deleteDialog = function (data) {
        var dialogRef;
        dialogRef = this.dialog.open(DeleteListDialogComponent);
        dialogRef.componentInstance.data = data;
        return dialogRef.afterClosed();
    };
    //getProducts method is used to get the products.
    AdminPanelServiceService.prototype.getProducts = function () {
        this.products = this.db.object("products");
        return this.products;
    };
    //getTableTabContent method is used to get the transcation table data.
    AdminPanelServiceService.prototype.getTableTabContent = function () {
        var tableContent;
        tableContent = this.db.object("transcationTable");
        return tableContent;
    };
    //getBuySellChartData method is used to get the buy and sell chart data.
    AdminPanelServiceService.prototype.getBuySellChartContent = function () {
        var buySellChart;
        buySellChart = this.db.list("buySellChartData");
        return buySellChart;
    };
    //getInvoiceContent method is used to get the Invoice table data.
    AdminPanelServiceService.prototype.getInvoiceContent = function () {
        var invoiceList;
        invoiceList = this.db.list("invoiceData");
        return invoiceList;
    };
    //getCollaborationContent method is used to get the Collaboration table data.
    AdminPanelServiceService.prototype.getCollaborationContent = function () {
        return this.http.get(this.baseUrlGetAllUsersByRole + "/Customer").pipe(shareReplay());
    };
    //seeList function is used to open the see Dialog Component.
    AdminPanelServiceService.prototype.seeList = function () {
        var dialogRef;
        dialogRef = this.dialog.open(SeeListDialogComponent);
    };
    //addNewUserDialog function is used to open Add new user Dialog Component. 
    AdminPanelServiceService.prototype.addNewUserDialog = function () {
        var dialogRef;
        dialogRef = this.dialog.open(AddNewUserComponent);
        return dialogRef.afterClosed();
    };
    AdminPanelServiceService.prototype.getAllUsersByRole = function (role) {
        switch (role) {
            case "Admin":
                if (!this.Admins$) {
                    this.Admins$ = this.http.get(this.baseUrlGetAllUsersByRole + "/" + role).pipe(shareReplay());
                }
                // if Admins cache exists return it
                return this.Admins$;
            case "Moderator":
                if (!this.Moderators$) {
                    this.Moderators$ = this.http.get(this.baseUrlGetAllUsersByRole + "/" + role).pipe(shareReplay());
                }
                // if Admins cache exists return it
                return this.Moderators$;
            default:
                if (!this.Customers$) {
                    this.Customers$ = this.http.get(this.baseUrlGetAllUsersByRole + "/" + role).pipe(shareReplay());
                }
                // if Admins cache exists return it
                return this.Customers$;
        }
    };
    // API:Delete User by id
    AdminPanelServiceService.prototype.deleteUserById = function (id) {
        return this.http.delete(this.baseUrlDeleteUserById + "/" + id);
    };
    // API:UnDelete User by id
    AdminPanelServiceService.prototype.unDeleteUserById = function (id) {
        return this.http.delete(this.baseUrlUnDelteUserById + "/" + id);
    };
    AdminPanelServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            MatDialog,
            AngularFireDatabase])
    ], AdminPanelServiceService);
    return AdminPanelServiceService;
}());
export { AdminPanelServiceService };
//# sourceMappingURL=AdminPanelService.service.js.map