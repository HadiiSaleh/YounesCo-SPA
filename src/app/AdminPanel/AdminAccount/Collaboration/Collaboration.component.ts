import { Component, OnInit } from '@angular/core';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { MatTableDataSource, MatCheckboxChange } from '@angular/material';
import { AccountService } from 'src/app/Services/account.service';
import { Observable } from 'rxjs';
import { User } from '../../Interfaces/User';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { ToastaService, ToastOptions } from 'ngx-toasta';
//import { ConsoleReporter } from 'jasmine';

@Component({
   selector: 'app-collaboration',
   templateUrl: './Collaboration.component.html',
   styleUrls: ['./Collaboration.component.scss']
})

export class CollaborationComponent implements OnInit {


   //Toast Options
   toastOptionDeleteSucceeded: ToastOptions = {
      title: "Delete Moderator",
      msg: "This moderator is deleted successfully!",
      showClose: true,
      timeout: 3000,
      theme: "material"
   };

   toastOptionUnDeleteSucceeded: ToastOptions = {
      title: "Undelete Moderator",
      msg: "This moderator is undeleted successfully!",
      showClose: true,
      timeout: 3000,
      theme: "material"
   };


   LoginStatus$: Observable<boolean>;
   UserRole$: Observable<string>;

   popUpDeleteUserResponse: any;
   popUpNewUserResponse: any;
   collaborationData: User[];

   displayedColumns: string[] = ['displayName', 'userName', 'email', 'phoneNumber', 'createdAt', 'deleted'];

   dataSource = new MatTableDataSource<any>(this.collaborationData);

   constructor(
      public adminService: AdminPanelServiceService,
      private accountService: AccountService,
      private toastyService: ToastaService
   ) { }

   ngOnInit() {
      this.LoginStatus$ = this.accountService.isLoggedIn;
      this.UserRole$ = this.accountService.currentUserRole;
      this.adminService.getCollaborationContent().subscribe(res => this.getCollaborationData(res));
   }

   //getCollaborationData method is used to get the collaboration data.
   getCollaborationData(response) {
      this.collaborationData = response;
      console.table(this.collaborationData)
      this.dataSource = new MatTableDataSource<any>(this.collaborationData);
   }

   //deleted checkbox listener
   receiveCheckboxChange(moderator: User, value: MatCheckboxChange) {

      const inArrayIndex: number = this.collaborationData.indexOf(moderator);
      const deleted: boolean = value.checked;

      let succeded: boolean = this.onCheckboxChangeDialog(inArrayIndex, deleted);
      console.log(succeded)
      console.table(this.collaborationData)
      this.dataSource = new MatTableDataSource(this.dataSource.data);
   }

   //open a delete or undelete dialog
   onCheckboxChangeDialog(index: number, deleted: boolean): boolean {

      let message: string = "Are you sure you want to delete this user permanently?";
      if (!deleted)
         message = "Are you sure you want to undelete this user permanently?";

      this.adminService.deleteDialog(message).
         subscribe(
            result => this.popUpDeleteUserResponse = result,
            error => console.log(error),
            () => {
               if (this.getChangeResponse(this.popUpDeleteUserResponse, index, deleted)) {
                  this.collaborationData[index].deleted = deleted;
                  return true
               }

            }
         );

      return false;
   }

   //used to delete or undelete a user from the user list
   getChangeResponse(response: string, index: number, deleted: boolean): boolean {
      let apiResult: Observable<User>;

      if (response == "yes") {
         deleted ? apiResult = this.adminService.deleteUserById(this.collaborationData[index].id) : apiResult = this.adminService.unDeleteUserById(this.collaborationData[index].id)
         apiResult.subscribe(
            result => {
               this.toastyService.success(this.toastOptionDeleteSucceeded)
               return true
            },
            error => {
               this.toastyService.error(this.toastOptionUnDeleteSucceeded)
               return false
            }
         );
      }
      return false;
   }

	/** 
     *onDelete method is used to open a delete dialog.
     */
   onDelete(i) {
      this.adminService.deleteDialog("Are you sure you want to delete this user permanently?").
         subscribe(res => { this.popUpDeleteUserResponse = res },
            err => console.log(err),
            () => this.getDeleteResponse(this.popUpDeleteUserResponse, i))
   }

   /**
     * getDeleteResponse method is used to delete a user from the user list.
     */
   getDeleteResponse(response: string, i) {
      if (response == "yes") {
         this.dataSource.data.splice(i, 1);
         this.dataSource = new MatTableDataSource(this.dataSource.data);
      }
   }

   /** 
     * addNewUserDialog method is used to open a add new client dialog.
     */
   // addNewUserDialog() {
   //    this.adminService.addNewUserDialog().
   //       subscribe(res => { this.popUpNewUserResponse = res },
   //          err => console.log(err),
   //          () => this.getAddUserPopupResponse(this.popUpNewUserResponse))
   // }

   /**
     *getAddUserPopupResponse method is used to get a new client dialog response.
     *if response will be get then add new client into client list.
     */
   // getAddUserPopupResponse(response: any) {
   //    if (response) {
   //       let addUser = {
   //          image: "assets/images/user-edit.png",
   //          name: response.name,
   //          email: response.email,
   //          access: response.accessType
   //       }
   //       this.collaborationData.push(addUser);
   //       this.dataSource = new MatTableDataSource<any>(this.collaborationData);
   //    }
   // }

}
