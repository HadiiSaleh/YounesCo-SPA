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
var CollaborationComponent = /** @class */ (function () {
    function CollaborationComponent(service) {
        this.service = service;
        this.displayedColumns = ['image', 'name', 'email', 'access', 'action'];
        this.dataSource = new MatTableDataSource(this.collaborationData);
    }
    CollaborationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCollaborationContent().valueChanges().subscribe(function (res) { return _this.getCollaborationData(res); });
    };
    //getCollaborationData method is used to get the collaboration data.
    CollaborationComponent.prototype.getCollaborationData = function (response) {
        this.collaborationData = response;
        this.dataSource = new MatTableDataSource(this.collaborationData);
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
            this.dataSource = new MatTableDataSource(this.dataSource.data);
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
            this.dataSource = new MatTableDataSource(this.collaborationData);
        }
    };
    CollaborationComponent = __decorate([
        Component({
            selector: 'app-collaboration',
            templateUrl: './Collaboration.component.html',
            styleUrls: ['./Collaboration.component.scss']
        }),
        __metadata("design:paramtypes", [AdminPanelServiceService])
    ], CollaborationComponent);
    return CollaborationComponent;
}());
export { CollaborationComponent };
//# sourceMappingURL=Collaboration.component.js.map