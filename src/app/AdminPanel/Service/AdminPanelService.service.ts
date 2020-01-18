import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import * as screenfull from 'screenfull';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DeleteListDialogComponent } from '../Widget/PopUp/DeleteListDialog/DeleteListDialog.component';
import { SeeListDialogComponent } from '../Widget/PopUp/SeeListDialog/SeeListDialog.component';
import { AddNewUserComponent } from '../Widget/PopUp/AddNewUser/AddNewUser.component';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import { User } from '../Interfaces/User';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class AdminPanelServiceService {

	sidenavOpen: boolean = true;
	sidenavMode: string = "side";
	chatSideBarOpen: boolean = true;
	editProductData: any;
	products: AngularFireObject<any>;


	//users arrays

	private Admins$: Observable<User[]>;
	private Moderators$: Observable<User[]>;
	private Customers$: Observable<User[]>;


	// Urls to access accounts Web API’s

	private baseUrlGetAllUsersByRole: string = environment.apiUrl + "accounts/GetUsersByRole";
	private baseUrlGetAllUsers: string = environment.apiUrl + "accounts/GetAllUsers";
	private baseUrlDeleteUserById: string = environment.apiUrl + "accounts/DeleteUserById";
	private baseUrlUnDelteUserById: string = environment.apiUrl + "accounts/UnDelteUserById";
	private baseUrlChangeRole: string = environment.apiUrl + "accounts/ChangeRole";

	constructor(private http: HttpClient,
		private dialog: MatDialog,
		private db: AngularFireDatabase) { }

	/*
		---------- Pop Up Function ----------
	*/

	//deleteDiaglog function is used to open the Delete Dialog Component. 
	deleteDialog(data: string) {
		let dialogRef: MatDialogRef<DeleteListDialogComponent>;
		dialogRef = this.dialog.open(DeleteListDialogComponent);
		dialogRef.componentInstance.data = data;

		return dialogRef.afterClosed();
	}

	//getProducts method is used to get the products.
	public getProducts() {
		this.products = this.db.object("products");
		return this.products;
	}

	//getTableTabContent method is used to get the transcation table data.
	getTableTabContent() {
		let tableContent: any;
		tableContent = this.db.object("transcationTable");
		return tableContent;
	}

	//getBuySellChartData method is used to get the buy and sell chart data.
	getBuySellChartContent() {
		let buySellChart: any;
		buySellChart = this.db.list("buySellChartData");
		return buySellChart;
	}

	//getInvoiceContent method is used to get the Invoice table data.
	getInvoiceContent() {
		let invoiceList: any;
		invoiceList = this.db.list("invoiceData");
		return invoiceList;
	}

	//getCollaborationContent method is used to get the Collaboration table data.
	getCollaborationContent() {
		return this.http.get<User[]>(this.baseUrlGetAllUsersByRole + "/Customer").pipe(shareReplay());
	}

	//seeList function is used to open the see Dialog Component.
	seeList() {
		let dialogRef: MatDialogRef<SeeListDialogComponent>;
		dialogRef = this.dialog.open(SeeListDialogComponent);
	}

	//addNewUserDialog function is used to open Add new user Dialog Component. 
	addNewUserDialog() {
		let dialogRef: MatDialogRef<AddNewUserComponent>;
		dialogRef = this.dialog.open(AddNewUserComponent);

		return dialogRef.afterClosed();
	}

	getAllUsersByRole(role: string): Observable<User[]> {
		switch (role) {
			case "Admin":
				if (!this.Admins$) {
					this.Admins$ = this.http.get<User[]>(this.baseUrlGetAllUsersByRole + "/" + role).pipe(shareReplay());
				}
				// if Admins cache exists return it
				return this.Admins$;

			case "Moderator":
				if (!this.Moderators$) {
					this.Moderators$ = this.http.get<User[]>(this.baseUrlGetAllUsersByRole + "/" + role).pipe(shareReplay());
				}
				// if Admins cache exists return it
				return this.Moderators$;

			default:
				if (!this.Customers$) {
					this.Customers$ = this.http.get<User[]>(this.baseUrlGetAllUsersByRole + "/" + role).pipe(shareReplay());
				}
				// if Admins cache exists return it
				return this.Customers$;
		}
	}

	// API:Delete User by id
	deleteUserById(id: string): Observable<any> {
		return this.http.delete(this.baseUrlDeleteUserById + "/" + id);
	}

	// API:UnDelete User by id
	unDeleteUserById(id: string): Observable<any> {
		return this.http.delete(this.baseUrlUnDelteUserById + "/" + id);
	}
}
