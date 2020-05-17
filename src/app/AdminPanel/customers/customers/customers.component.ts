import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { MatSort, MatPaginator } from '@angular/material';
import { AccountService } from 'src/app/Services/account.service';
import { Observable, merge, fromEvent } from 'rxjs';
import { User } from '../../Interfaces/User';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { ToastaService, ToastOptions } from 'ngx-toasta';
import { UsersDataSource } from '../../Helpers/UsersDataSource'
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PagedUsers } from '../../Interfaces/PagedUsers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  //Toast Options
  toastOptionOperationSucceeded: ToastOptions = {
    title: "Operation Succeeded",
    showClose: true,
    timeout: 3000,
    theme: "material"
  };

  toastOptionOperationFailed: ToastOptions = {
    title: "Operation Failed",
    showClose: true,
    timeout: 3000,
    theme: "material"
  };

  //Global variables
  LoginStatus$: Observable<boolean>;
  UserRole$: Observable<string>;
  CurrentUser: User;
  collaborationData: User[];
  collaborationPagedResult: PagedUsers;

  //Popup properties
  popUpDeleteUserResponse: any;
  popUpUnDeleteUserResponse: any;
  popUpNewUserResponse: any;
  popUpEditUserResponse: any;

  //Messages
  messagesList: string[];

  displayedColumns: string[] = ['id', 'displayName', 'userName', 'email', 'phoneNumber', 'location', 'createdAt', 'updatedAt', 'action'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild('input', { static: false }) input: ElementRef;

  //dataSource = new MatTableDataSource<any>(this.collaborationData);
  dataSource: UsersDataSource;
  isLoading = true;
  role = "Customer";

  constructor(
    public adminService: AdminPanelServiceService,
    private accountService: AccountService,
    private toastyService: ToastaService,
    private embryoService: EmbryoService
  ) { }

  getCurrentUser(currentUser: User) {
    this.CurrentUser = currentUser
  }

  ngOnInit() {
    this.LoginStatus$ = this.accountService.isLoggedIn;
    this.UserRole$ = this.accountService.currentUserRole;

    this.dataSource = new UsersDataSource(this.adminService);
    this.dataSource.loadUsers(this.role, '', 'asc', 1, 5);

    this.dataSource.usersPagedResult$.subscribe(
      result => {
        if (result) {
          this.collaborationPagedResult = result;
          this.collaborationData = result.results;
        }
      }
    );
  }

  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadCustomersPage();
        })
      )
      .subscribe();

    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // on sort or paginate events, load a new page
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadCustomersPage())
      )
      .subscribe();
  }

  loadCustomersPage() {
    this.dataSource.loadUsers(
      this.role,
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex + 1,
      this.paginator.pageSize);
  }

  /** 
    * addNewUserDialog method is used to open a add new client dialog.
    */
  addNewUserDialog() {
    this.adminService.addNewUserDialog(this.role).
      subscribe(res => { this.popUpNewUserResponse = res },
        err => console.log(err),
        () => this.getAddUserPopupResponse(this.popUpNewUserResponse))
  }

  /**
    *getAddUserPopupResponse method is used to get a new client dialog response.
    *if response will be get then add new client into client list.
    */
  getAddUserPopupResponse(response: any) {

    if (response) {

      let addUser = response;

      this.accountService.register(addUser).subscribe(
        result => {

          this.messagesList = [];

          console.log(this.role + " creation succeeded!");

          this.toastyService.success(this.toastOptionOperationSucceeded);

          this.refresh();
        },
        error => {

          this.messagesList = [];

          for (var i = 0; i < error.error.value.length; i++) {
            this.messagesList.push(error.error.value[i]);
            console.log(error.error.value[i]);
          }

          this.messagesList.push(this.role + " creation failed!");

          this.embryoService.OkPopup(this.messagesList);

          console.log(error);
        });
    }
  }

  /** 
    *onEditDialog method is used to open a edit dialog.
    */
  onEditDialog(index: number) {
    let userEdit = this.collaborationData[index];
    this.adminService.editUserDialog(userEdit).
      subscribe(res => { this.popUpEditUserResponse = res },
        err => console.log(err),
        () => this.getEditUserPopupResponse(this.popUpEditUserResponse, userEdit.id))
  }

  /**
    *getEditUserPopupResponse method is used to edit a client dialog response.
    *if response will be get then updated in client list.
    */
  getEditUserPopupResponse(response: any, userId: string) {

    if (response) {

      let updatedUser = response;

      this.accountService.updateUserById(userId, updatedUser).subscribe(
        result => {

          this.messagesList = [];

          console.log(this.role + "'s information updated successfully!");

          this.toastyService.success(this.toastOptionOperationSucceeded);

          this.refresh();
        },
        error => {

          this.messagesList = [];

          for (var i = 0; i < error.error.value.length; i++) {
            this.messagesList.push(error.error.value[i]);
            console.log(error.error.value[i]);
          }

          this.messagesList.push("Update Failed!");

          console.log(error);

          this.embryoService.OkPopup(this.messagesList);

        });
    }
  }

  /** 
    *onDeleteDialog method is used to open a delete dialog.
    */
  onDeleteDialog(index: number) {
    this.adminService.deleteDialog("Are you sure you want to delete this customer?").
      subscribe(res => { this.popUpDeleteUserResponse = res },
        err => console.log(err),
        () => this.getDeleteResponse(this.popUpDeleteUserResponse, index));
  }

  /**
    * getDeleteResponse method is used to delete a user from the user list.
    */
  getDeleteResponse(response: string, index: number) {
    if (response == "yes") {
      this.adminService.deleteUserById(this.collaborationData[index].id).subscribe(
        result => {
          this.toastyService.success(this.toastOptionOperationSucceeded);
          this.refresh();
        },
        error => {
          this.toastyService.error(this.toastOptionOperationFailed);
          console.log(error);
          this.refresh();
        }
      );
    }
  }

  /** 
    *onUnDeleteDialog method is used to open a unDelete dialog.
    */
  onUnDeleteDialog(index: number) {
    this.adminService.deleteDialog("Are you sure you want to undelete this customer?").
      subscribe(res => { this.popUpUnDeleteUserResponse = res },
        err => console.log(err),
        () => this.getUnDeleteResponse(this.popUpUnDeleteUserResponse, index));
  }

  /**
    * getDeleteResponse method is used to delete a user from the user list.
    */
  getUnDeleteResponse(response: string, index: number) {
    if (response == "yes") {
      this.adminService.unDeleteUserById(this.collaborationData[index].id).subscribe(
        result => {
          this.toastyService.success(this.toastOptionOperationSucceeded);
          this.refresh();
        },
        error => {
          this.toastyService.error(this.toastOptionOperationFailed);
          console.log(error);
          this.refresh();
        }
      );
    }
  }

  /** 
     * refresh the data table after a modification
     */
  refresh() {
    let details = this.collaborationPagedResult;
    this.dataSource.loadUsers(this.role, details.filter, details.sortDirection, details.currentPage, details.pageSize);
  }

  /**
    * applyFilter function can be set which takes a data object and filter string and returns true if the data object is considered a match.
    */
  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

}
