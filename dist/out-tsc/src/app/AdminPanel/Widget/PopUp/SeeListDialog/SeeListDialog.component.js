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
import { MatDialogRef } from '@angular/material';
var SeeListDialogComponent = /** @class */ (function () {
    function SeeListDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.config = {};
        this.todayDate = new Date();
    }
    SeeListDialogComponent.prototype.ngOnInit = function () {
    };
    SeeListDialogComponent = __decorate([
        Component({
            selector: 'app-see-list-dialog',
            templateUrl: './SeeListDialog.component.html',
            styleUrls: ['./SeeListDialog.component.scss']
        }),
        __metadata("design:paramtypes", [MatDialogRef])
    ], SeeListDialogComponent);
    return SeeListDialogComponent;
}());
export { SeeListDialogComponent };
//# sourceMappingURL=SeeListDialog.component.js.map