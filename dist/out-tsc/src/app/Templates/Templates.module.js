var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatRadioModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GlobalModule } from '../Global/Global.module';
import { ProductGridComponent } from './Grid/ProductGrid/ProductGrid.component';
import { Grid3Component } from './Grid/Grid3/Grid3.component';
import { ReviewComponent } from './Review/Review.component';
import { ShopDetailsComponent } from './ShopDetails/ShopDetails.component';
var TemplatesModule = /** @class */ (function () {
    function TemplatesModule() {
    }
    TemplatesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                MatButtonModule,
                FlexLayoutModule,
                MatCardModule,
                MatMenuModule,
                MatToolbarModule,
                MatIconModule,
                MatInputModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatProgressSpinnerModule,
                MatTableModule,
                MatExpansionModule,
                MatSelectModule,
                MatSnackBarModule,
                MatTooltipModule,
                MatChipsModule,
                MatListModule,
                MatSidenavModule,
                MatTabsModule,
                MatProgressBarModule,
                MatCheckboxModule,
                MatSliderModule,
                MatRadioModule,
                MatDialogModule,
                MatGridListModule,
                GlobalModule
            ],
            declarations: [
                ProductGridComponent,
                Grid3Component,
                ReviewComponent,
                ShopDetailsComponent
            ],
            exports: [
                ProductGridComponent,
                Grid3Component,
                ReviewComponent,
                ShopDetailsComponent
            ]
        })
    ], TemplatesModule);
    return TemplatesModule;
}());
export { TemplatesModule };
//# sourceMappingURL=Templates.module.js.map