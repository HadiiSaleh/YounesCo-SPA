var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent(service) {
        this.service = service;
        this.invoiceList = [];
        this.dataSource = new MatTableDataSource(this.invoiceList);
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
        this.dataSource = new MatTableDataSource(this.invoiceList);
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
            this.dataSource = new MatTableDataSource(this.dataSource.data);
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
    __decorate([
        ViewChild(MatPaginator, { static: false }),
        __metadata("design:type", MatPaginator)
    ], InvoicesComponent.prototype, "paginator", void 0);
    InvoicesComponent = __decorate([
        Component({
            selector: 'app-invoices',
            templateUrl: './Invoices.component.html',
            styleUrls: ['./Invoices.component.scss']
        }),
        __metadata("design:paramtypes", [AdminPanelServiceService])
    ], InvoicesComponent);
    return InvoicesComponent;
}());
export { InvoicesComponent };
//# sourceMappingURL=Invoices.component.js.map