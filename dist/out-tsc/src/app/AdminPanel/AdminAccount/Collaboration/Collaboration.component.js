var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { MatTableDataSource } from '@angular/material';
import { AccountService } from 'src/app/Services/account.service';
import { ToastaService } from 'ngx-toasta';
//import { ConsoleReporter } from 'jasmine';
var CollaborationComponent = /** @class */ (function () {
    function CollaborationComponent(adminService, accountService, toastyService) {
        this.adminService = adminService;
        this.accountService = accountService;
        this.toastyService = toastyService;
        //Toast Options
        this.toastOptionDeleteSucceeded = {
            title: "Delete Moderator",
            msg: "This moderator is deleted successfully!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
        this.toastOptionUnDeleteSucceeded = {
            title: "Undelete Moderator",
            msg: "This moderator is undeleted successfully!",
            showClose: true,
            timeout: 3000,
            theme: "material"
        };
        this.displayedColumns = ['displayName', 'userName', 'email', 'phoneNumber', 'createdAt', 'deleted'];
        this.dataSource = new MatTableDataSource(this.collaborationData);
    }
    CollaborationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LoginStatus$ = this.accountService.isLoggedIn;
        this.UserRole$ = this.accountService.currentUserRole;
        this.adminService.getCollaborationContent().subscribe(function (res) { return _this.getCollaborationData(res); });
    };
    //getCollaborationData method is used to get the collaboration data.
    CollaborationComponent.prototype.getCollaborationData = function (response) {
        this.collaborationData = response;
        console.table(this.collaborationData);
        this.dataSource = new MatTableDataSource(this.collaborationData);
    };
    //deleted checkbox listener
    CollaborationComponent.prototype.receiveCheckboxChange = function (moderator, value) {
        var inArrayIndex = this.collaborationData.indexOf(moderator);
        var deleted = value.checked;
        var succeded = this.onCheckboxChangeDialog(inArrayIndex, deleted);
        console.log(succeded);
        console.table(this.collaborationData);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
    };
    //open a delete or undelete dialog
    CollaborationComponent.prototype.onCheckboxChangeDialog = function (index, deleted) {
        var _this = this;
        var message = "Are you sure you want to delete this user permanently?";
        if (!deleted)
            message = "Are you sure you want to undelete this user permanently?";
        this.adminService.deleteDialog(message).
            subscribe(function (result) { return _this.popUpDeleteUserResponse = result; }, function (error) { return console.log(error); }, function () {
            if (_this.getChangeResponse(_this.popUpDeleteUserResponse, index, deleted)) {
                _this.collaborationData[index].deleted = deleted;
                return true;
            }
        });
        return false;
    };
    //used to delete or undelete a user from the user list
    CollaborationComponent.prototype.getChangeResponse = function (response, index, deleted) {
        var _this = this;
        var apiResult;
        if (response == "yes") {
            deleted ? apiResult = this.adminService.deleteUserById(this.collaborationData[index].id) : apiResult = this.adminService.unDeleteUserById(this.collaborationData[index].id);
            apiResult.subscribe(function (result) {
                _this.toastyService.success(_this.toastOptionDeleteSucceeded);
                return true;
            }, function (error) {
                _this.toastyService.error(_this.toastOptionUnDeleteSucceeded);
                return false;
            });
        }
        return false;
    };
    /**
     *onDelete method is used to open a delete dialog.
     */
    CollaborationComponent.prototype.onDelete = function (i) {
        var _this = this;
        this.adminService.deleteDialog("Are you sure you want to delete this user permanently?").
            subscribe(function (res) { _this.popUpDeleteUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getDeleteResponse(_this.popUpDeleteUserResponse, i); });
    };
    /**
      * getDeleteResponse method is used to delete a user from the user list.
      */
    CollaborationComponent.prototype.getDeleteResponse = function (response, i) {
        if (response == "yes") {
            this.dataSource.data.splice(i, 1);
            this.dataSource = new MatTableDataSource(this.dataSource.data);
        }
    };
    CollaborationComponent = __decorate([
        Component({
            selector: 'app-collaboration',
            templateUrl: './Collaboration.component.html',
            styleUrls: ['./Collaboration.component.scss']
        }),
        __metadata("design:paramtypes", [AdminPanelServiceService,
            AccountService,
            ToastaService])
    ], CollaborationComponent);
    return CollaborationComponent;
}());
export { CollaborationComponent };
//# sourceMappingURL=Collaboration.component.js.map