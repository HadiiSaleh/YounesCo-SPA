import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
	MatListModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatInputModule,
	MatDatepickerModule,
	MatRadioModule,
	MatFormFieldModule,
	MatSelectModule,
	MatTableModule,
	MatCheckboxModule,
	MatSortModule,
	MatPaginatorModule,
	MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AccountComponent } from './Account/Account.component';
import { CollaborationComponent } from './Collaboration/Collaboration.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { ProfileComponent } from './Profile/Profile.component';
import { AdminAccountRoutes } from './AdminAccount.routing';

@NgModule({
	declarations: [
		ProfileComponent,
		AccountComponent,
		CollaborationComponent,
		EditProfileComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(AdminAccountRoutes),
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatRadioModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		FlexLayoutModule,
		MatCheckboxModule,
		MatTooltipModule,
	]
})
export class AdminAccountModule { }
