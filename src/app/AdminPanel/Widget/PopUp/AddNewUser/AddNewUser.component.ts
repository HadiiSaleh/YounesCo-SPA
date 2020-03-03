import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AccountService } from '../../../../Services/account.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'ms-add-new-client',
	templateUrl: './AddNewUser.component.html',
	styleUrls: ['./AddNewUser.component.scss']
})
export class AddNewUserComponent implements OnInit {

	//Form properties
	insertForm: FormGroup;
	Location: FormGroup;
	Username: FormControl;
	Password: FormControl;
	ConfirmPassword: FormControl;
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

	constructor(
		private accountService: AccountService,
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<AddNewUserComponent>
	) { }

	// onSubmit method is submit a add new user form.
	onSubmit() {
		this.dialogRef.close(this.insertForm.value);
	}

	ngOnInit() {

		this.messagesList = [];

		// Initialize Form Controls
		this.Username = new FormControl('', [Validators.required, Validators.maxLength(256)]);
		this.Password = new FormControl('', [Validators.required, Validators.pattern(this.passRegex), Validators.maxLength(256), Validators.minLength(6)]);
		this.ConfirmPassword = new FormControl('', [Validators.required, this.accountService.MustMatch(this.Password)]);
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

		// Initialize insertForm using FormBuilder
		this.insertForm = this.fb.group({
			"Username": this.Username,
			"Password": this.Password,
			"ConfirmPassword": this.ConfirmPassword,
			"Email": this.Email,
			"PhoneNumber": this.PhoneNumber,
			"role": 'Moderator',
			"FirstName": this.FirstName,
			"MiddleName": this.MiddleName,
			"LastName": this.LastName,
			"Location": this.Location
		});

	}
}