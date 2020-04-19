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
var order_history = [
    { position: 1, orderid: 1801, name: 'LEGITIM', price: 1.0079, status: 'Sent', action: '' },
    { position: 2, orderid: 1832, name: 'GRUNDTAL', price: 4.0026, status: 'In processing', action: '' },
    { position: 3, orderid: 1881, name: 'BOHOLMEN', price: 6.941, status: 'Sent', action: '' },
    { position: 4, orderid: 1832, name: 'ROSTAD LÖK', price: 9.0122, status: 'Return', action: '' },
    { position: 5, orderid: 1810, name: 'TÅRTA CHOKLADKROKANT', price: 10.811, status: 'Sent', action: '' },
];
var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent() {
        this.displayedColumns = ['position', 'orderid', 'name', 'price', 'status', 'action'];
        this.dataSource = order_history;
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent = __decorate([
        Component({
            selector: 'app-OrderHistory',
            templateUrl: './OrderHistory.component.html',
            styleUrls: ['./OrderHistory.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());
export { OrderHistoryComponent };
//# sourceMappingURL=OrderHistory.component.js.map