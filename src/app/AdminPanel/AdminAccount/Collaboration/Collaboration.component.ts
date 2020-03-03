import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AccountService } from 'src/app/Services/account.service';
import { Observable } from 'rxjs';
import { User } from '../../Interfaces/User';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { ToastaService, ToastOptions } from 'ngx-toasta';

@Component({
   selector: 'app-collaboration',
   templateUrl: './Collaboration.component.html',
   styleUrls: ['./Collaboration.component.scss']
})

export class CollaborationComponent implements OnInit {


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

   //Popup properties
   popUpDeleteUserResponse: any;
   popUpUnDeleteUserResponse: any;
   popUpNewUserResponse: any;
   popUpEditUserResponse: any;

   //Messages
   messagesList: string[];

   displayedColumns: string[] = ['displayName', 'userName', 'email', 'phoneNumber', 'createdAt', 'updatedAt', 'action'];
   @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
   @ViewChild(MatSort, { static: false }) sort: MatSort;

   dataSource = new MatTableDataSource<any>(this.collaborationData);

   constructor(
      private changeDetectorRefs: ChangeDetectorRef,
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
      this.adminService.getCollaborationContent().subscribe(res => this.getCollaborationData(res));
   }

   /** 
     *getCollaborationData method is used to get the collaboration data.
     */
   getCollaborationData(response) {
      this.collaborationData = response;
      this.dataSource = new MatTableDataSource<any>(this.collaborationData);
      setTimeout(() => {
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      }, 0)
   }

   /** 
     * addNewUserDialog method is used to open a add new client dialog.
     */
   addNewUserDialog() {
      this.adminService.addNewUserDialog().
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

               console.log("Moderator creation succeeded!");

               this.toastyService.success(this.toastOptionOperationSucceeded);

               this.refresh();
            },
            error => {

               this.messagesList = [];

               for (var i = 0; i < error.error.value.length; i++) {
                  this.messagesList.push(error.error.value[i]);
                  console.log(error.error.value[i]);
               }

               this.messagesList.push("Moderator creation failed!");

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

               console.log("Moderator's information updated successfully!");

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
      this.adminService.deleteDialog("Are you sure you want to delete this moderator?").
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
            }
         );
      }
   }

   /** 
     *onUnDeleteDialog method is used to open a unDelete dialog.
     */
   onUnDeleteDialog(index: number) {
      this.adminService.deleteDialog("Are you sure you want to undelete this moderator?").
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
            }
         );
      }
   }

   /** 
      * addNewUserDialog method is used to open a add new client dialog.
      */
   refresh() {

      this.adminService.getCollaborationContent().subscribe(
         res => {
            this.getCollaborationData(res);
            this.changeDetectorRefs.detectChanges();
         },
         error => {
            console.log(error);
         }
      );
   }

   /**
     * applyFilter function can be set which takes a data object and filter string and returns true if the data object is considered a match.
     */
   applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
         this.dataSource.paginator.firstPage();
      }
   }

}
