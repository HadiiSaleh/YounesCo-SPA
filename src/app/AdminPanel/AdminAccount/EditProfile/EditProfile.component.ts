import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { AccountService } from 'src/app/Services/account.service';
import { Observable } from 'rxjs';
import { User } from '../../Interfaces/User';

@Component({
   selector: 'app-EditProfile',
   templateUrl: './EditProfile.component.html',
   styleUrls: ['./EditProfile.component.scss']
})
export class EditProfileComponent implements OnInit {

   //Form properties
   updateForm: FormGroup;
   Location: FormGroup;
   Username: FormControl;
   Email: FormControl;
   PhoneNumber: FormControl;
   FirstName: FormControl;
   MiddleName: FormControl;
   LastName: FormControl;
   Country: FormControl;
   City: FormControl;
   Region: FormControl;
   Street: FormControl;
   Building: FormControl;
   Floor: FormControl;

   //Regex
   phoneRegex = "[+][0-9]{3} [0-9]{8}";
   nameRegex = "^[A-Za-z]+$";
   passRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9_]).*$";

   //Urls
   returnUrl: string;

   //Messages
   messagesList: string[];

   //Global variables
   LoginStatus$: Observable<boolean>;
   UserRole$: Observable<string>;
   currentRole: string;
   CurrentUser: User;
   @Output() sentCurrentUser: EventEmitter<any> = new EventEmitter();
   type: string;

   //Toast Options
   toastOption: ToastOptions = {
      title: "Account Information",
      msg: "Your account information updated successfully!",
      showClose: true,
      timeout: 3000,
      theme: "material"
   };

   constructor(private embryoService: EmbryoService,
      private accountService: AccountService,
      private router: Router,
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private toastyService: ToastaService) {

      this.route.params.subscribe(params => {
         this.route.queryParams.forEach(queryParams => {
            this.type = queryParams['type'];
         });
      });
   }

   /**
    * Function is used to submit the profile info.
    * If form value is valid, redirect to profile page.
    */
   getCurrentUser(currentUser: User) {
      this.CurrentUser = currentUser
   }

   sendDataToParent(data) {
      // emit data to parent component
      this.sentCurrentUser.emit(data);
   }

   onSubmit() {

      this.embryoService.loadingToasty();

      let updatedUser = this.updateForm.value;

      this.accountService.updateUserById(this.CurrentUser.id, updatedUser).subscribe(
         result => {

            //pass the new user to parent
            this.sendDataToParent(result);

            this.messagesList = [];

            console.log("Your account information updated successfully!");

            this.embryoService.closeToasty();

            this.router.navigate([this.returnUrl]).then(() => {
               this.toastyService.success(this.toastOption);
            });

            this.accountService.changeCurrentUsername(result.userName);
         },
         error => {

            this.messagesList = [];

            for (var i = 0; i < error.error.value.length; i++) {
               this.messagesList.push(error.error.value[i]);
               console.log(error.error.value[i]);
            }

            this.messagesList.push("Update Failed!");

            console.log(error);

            this.embryoService.closeToasty();

            this.embryoService.OkPopup(this.messagesList);

         });

   }

   ngOnInit() {

      this.messagesList = [];

      this.LoginStatus$ = this.accountService.isLoggedIn;
      this.UserRole$ = this.accountService.currentUserRole;

      this.UserRole$.subscribe(
         result => {
            this.currentRole = result;
         },
         error => {
            console.log(error);
         }
      );


      // get return url from route parameters or default to '/'
      this.returnUrl = '/admin-panel/account/profile';

      // Initialize Form Controls
      this.Username = new FormControl('', [Validators.required, Validators.maxLength(256)]);
      this.Email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(256)]);
      this.PhoneNumber = new FormControl('', [Validators.required, Validators.pattern(this.phoneRegex), Validators.maxLength(256)]);
      this.FirstName = new FormControl('', [Validators.required, Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
      this.MiddleName = new FormControl('', [Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
      this.LastName = new FormControl('', [Validators.required, Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
      this.Country = new FormControl('', [Validators.required, Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
      this.City = new FormControl('', [Validators.required, Validators.pattern(this.nameRegex), Validators.maxLength(256)]);
      this.Region = new FormControl('', [Validators.required, Validators.maxLength(256)]);
      this.Street = new FormControl('', [Validators.required, Validators.maxLength(256)]);
      this.Building = new FormControl('', [Validators.required, Validators.maxLength(256)]);
      this.Floor = new FormControl('', [Validators.required, Validators.maxLength(256)]);

      // Initialize Location using FormBuilder
      this.Location = this.fb.group({
         "Country": this.Country,
         "City": this.City,
         "Region": this.Region,
         "Street": this.Street,
         "Building": this.Building,
         "Floor": this.Floor
      });

      // Initialize updateForm using FormBuilder
      this.updateForm = this.fb.group({
         "Username": this.Username,
         "Email": this.Email,
         "PhoneNumber": this.PhoneNumber,
         "role": this.currentRole,
         "FirstName": this.FirstName,
         "MiddleName": this.MiddleName,
         "LastName": this.LastName,
         "Location": this.Location
      });

      this.Country.setValue(this.CurrentUser.location.country);
      this.City.setValue(this.CurrentUser.location.city);
      this.Region.setValue(this.CurrentUser.location.region);
      this.Street.setValue(this.CurrentUser.location.street);
      this.Building.setValue(this.CurrentUser.location.building);
      this.Floor.setValue(this.CurrentUser.location.floor);

      this.Username.setValue(this.CurrentUser.userName);
      this.Email.setValue(this.CurrentUser.email);
      this.PhoneNumber.setValue(this.CurrentUser.phoneNumber);
      this.FirstName.setValue(this.CurrentUser.firstName);
      this.MiddleName.setValue(this.CurrentUser.middleName);
      this.LastName.setValue(this.CurrentUser.lastName);

      this.Location.setValue({
         "Country": this.Country.value,
         "City": this.City.value,
         "Region": this.Region.value,
         "Street": this.Street.value,
         "Building": this.Building.value,
         "Floor": this.Floor.value
      });

      this.updateForm.setValue({
         "Username": this.Username.value,
         "Email": this.Email.value,
         "PhoneNumber": this.PhoneNumber.value,
         "role": this.currentRole,
         "FirstName": this.FirstName.value,
         "MiddleName": this.MiddleName.value,
         "LastName": this.LastName.value,
         "Location": this.Location.value
      });

   }

}
