var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatBadgeModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MatExpansionModule, MatSelectModule, MatSnackBarModule, MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule, MatCheckboxModule, MatSliderModule, MatRadioModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAccountRoutes } from './UserAccount.routing';
import { AccountComponent } from './Account/Account.component';
import { ProfileComponent } from './Profile/Profile.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { CardsComponent } from './Cards/Cards.component';
import { AddressComponent } from './Address/Address.component';
import { OrderHistoryComponent } from './OrderHistory/OrderHistory.component';
import { GridProductComponent } from './GridProduct/GridProduct.component';
var UserAccountModule = /** @class */ (function () {
    function UserAccountModule() {
    }
    UserAccountModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(UserAccountRoutes),
                MatBadgeModule,
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
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                AccountComponent,
                ProfileComponent,
                EditProfileComponent,
                CardsComponent,
                AddressComponent,
                OrderHistoryComponent,
                GridProductComponent
            ]
        })
    ], UserAccountModule);
    return UserAccountModule;
}());
export { UserAccountModule };
//# sourceMappingURL=UserAccount.module.js.map