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
var OkPopupComponent = /** @class */ (function () {
    function OkPopupComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    OkPopupComponent.prototype.ngOnInit = function () {
        this.mainMessage = this.messages.pop();
        this.succeeded = this.messages.length == 0 ? true : false;
    };
    OkPopupComponent = __decorate([
        Component({
            selector: 'app-ok-popup',
            templateUrl: './ok-popup.component.html',
            styleUrls: ['./ok-popup.component.scss']
        }),
        __metadata("design:paramtypes", [MatDialogRef])
    ], OkPopupComponent);
    return OkPopupComponent;
}());
export { OkPopupComponent };
//# sourceMappingURL=ok-popup.component.js.map