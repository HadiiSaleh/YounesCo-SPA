import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { User } from '../../../Interfaces/User';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

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

  //Global variables
  CurrentUser: User;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.CurrentUser = data;
  }

  onSubmit() {
    this.dialogRef.close(this.updateForm.value);
  }

  ngOnInit() {

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
      "role": this.CurrentUser.role,
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
      "role": this.CurrentUser.role,
      "FirstName": this.FirstName.value,
      "MiddleName": this.MiddleName.value,
      "LastName": this.LastName.value,
      "Location": this.Location.value
    });

  }


}

