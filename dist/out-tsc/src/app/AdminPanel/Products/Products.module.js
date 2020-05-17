var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatTableModule, MatListModule, MatDividerModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { EditProductComponent } from './EditProduct/EditProduct.component';
import { AddProductComponent } from './AddProduct/AddProduct.component';
import { GlobalModule } from '../../Global/Global.module';
import { ProductsComponent } from './Products/Products.component';
import { ProductsRoutes } from './Products.routing';
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        NgModule({
            declarations: [ProductsComponent, EditProductComponent, AddProductComponent],
            imports: [
                CommonModule,
                FlexLayoutModule,
                MatSidenavModule,
                MatIconModule,
                MatCheckboxModule,
                MatButtonModule,
                MatSelectModule,
                MatCardModule,
                MatMenuModule,
                MatOptionModule,
                MatFormFieldModule,
                MatInputModule,
                MatTableModule,
                MatDividerModule,
                MatListModule,
                RouterModule.forChild(ProductsRoutes),
                TranslateModule,
                MatPaginatorModule,
                MatSortModule,
                MatGridListModule,
                GlobalModule,
                FormsModule,
                ReactiveFormsModule
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());
export { ProductsModule };
//# sourceMappingURL=Products.module.js.map