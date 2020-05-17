import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import * as screenfull from 'screenfull';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteListDialogComponent } from '../Widget/PopUp/DeleteListDialog/DeleteListDialog.component';
import { SeeListDialogComponent } from '../Widget/PopUp/SeeListDialog/SeeListDialog.component';
import { AddNewUserComponent } from '../Widget/PopUp/AddNewUser/AddNewUser.component';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';
import { User } from '../Interfaces/User';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';
import { EditUserComponent } from '../Widget/PopUp/edit-user/edit-user.component';
import { PagedUsers } from '../Interfaces/PagedUsers';

@Injectable({
  providedIn: 'root',
})
export class AdminPanelServiceService {
  sidenavOpen: boolean = true;
  sidenavMode: string = 'side';
  chatSideBarOpen: boolean = true;
  editProductData: any;
  products: AngularFireObject<any>;

  // Urls to access accounts Web API’s

  private baseUrlGetAllUsersByRole: string =
    environment.apiUrl + 'accounts/GetUsersByRole';
  private baseUrlGetAllUsersPagedByRole: string =
    environment.apiUrl + 'accounts/GetUsersByRolePaged';
  private baseUrlGetAllUsers: string =
    environment.apiUrl + 'accounts/GetAllUsers';
  private baseUrlDeleteUserById: string =
    environment.apiUrl + 'accounts/DeleteUserById';
  private baseUrlUnDelteUserById: string =
    environment.apiUrl + 'accounts/UnDelteUserById';
  private baseUrlChangeRole: string =
    environment.apiUrl + 'accounts/ChangeRole';

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private db: AngularFireDatabase
  ) {}

  /*
		---------- Pop Up Function ----------
	*/

  //seeList function is used to open the see Dialog Component.
  seeList() {
    let dialogRef: MatDialogRef<SeeListDialogComponent>;
    dialogRef = this.dialog.open(SeeListDialogComponent);
  }

  //addNewUserDialog function is used to open Add new user Dialog Component.
  addNewUserDialog(role: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = role;

    let dialogRef: MatDialogRef<AddNewUserComponent>;
    dialogRef = this.dialog.open(AddNewUserComponent, dialogConfig);

    return dialogRef.afterClosed();
  }

  //editUserDialog function is used to open edit user Dialog Component.
  editUserDialog(userEdit: User) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = userEdit;

    let dialogRef: MatDialogRef<EditUserComponent>;
    dialogRef = this.dialog.open(EditUserComponent, dialogConfig);

    return dialogRef.afterClosed();
  }

  //deleteDiaglog function is used to open the Delete Dialog Component.
  deleteDialog(data: string) {
    let dialogRef: MatDialogRef<DeleteListDialogComponent>;
    dialogRef = this.dialog.open(DeleteListDialogComponent);
    dialogRef.componentInstance.data = data;

    return dialogRef.afterClosed();
  }

  //getProducts method is used to get the products.
  public getProducts() {
    this.products = this.db.object('products');
    return this.products;
  }

  //getTableTabContent method is used to get the transcation table data.
  getTableTabContent() {
    let tableContent: any;
    tableContent = this.db.object('transcationTable');
    return tableContent;
  }

  //getBuySellChartData method is used to get the buy and sell chart data.
  getBuySellChartContent() {
    let buySellChart: any;
    buySellChart = this.db.list('buySellChartData');
    return buySellChart;
  }

  //getInvoiceContent method is used to get the Invoice table data.
  getInvoiceContent() {
    let invoiceList: any;
    invoiceList = this.db.list('invoiceData');
    return invoiceList;
  }

  //getCollaborationContent method is used to get the Collaboration table data.
  getCollaborationContent() {
    return this.http
      .get<User[]>(this.baseUrlGetAllUsersByRole + '/Moderator')
      .pipe(shareReplay());
  }

  // API:Get Users by role
  getAllUsersByRole(role: string): Observable<User[]> {
    switch (role) {
      case 'Admin':
        return this.http
          .get<User[]>(this.baseUrlGetAllUsersByRole + '/' + role)
          .pipe(shareReplay());

      case 'Moderator':
        return this.http
          .get<User[]>(this.baseUrlGetAllUsersByRole + '/' + role)
          .pipe(shareReplay());

      default:
        return this.http
          .get<User[]>(this.baseUrlGetAllUsersByRole + '/' + role)
          .pipe(shareReplay());
    }
  }

  // API:Get Users by role paged
  getAllUsersPagedByRole(
    role: string,
    filter: string,
    sortDirection: string,
    pageNumber: number,
    pageSize: number
  ): Observable<PagedUsers> {
    // switch (role) {
    // 	case "Admin":
    // 		return this.http.get<User[]>(this.baseUrlGetAllUsersByRole + "/" + role).pipe(shareReplay());

    // 	case "Moderator":
    // 		return this.http.get<User[]>(this.baseUrlGetAllUsersByRole + "/" + role).pipe(shareReplay());

    // 	default:
    return this.http.get<PagedUsers>(
      this.baseUrlGetAllUsersPagedByRole + '/' + role,
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortDirection', sortDirection)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString()),
      }
    );
    // }
  }

  // API:Delete User by id
  deleteUserById(id: string): Observable<any> {
    return this.http.delete(this.baseUrlDeleteUserById + '/' + id);
  }

  // API:UnDelete User by id
  unDeleteUserById(id: string): Observable<any> {
    return this.http.delete(this.baseUrlUnDelteUserById + '/' + id);
  }
}
