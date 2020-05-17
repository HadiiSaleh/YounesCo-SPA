import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
	selector: 'embryo-header-user-profile',
	templateUrl: './HeaderUserProfileDropdown.component.html',
	styleUrls: ['./HeaderUserProfileDropdown.component.scss']
})

export class HeaderUserProfileDropdownComponent implements OnInit {

	constructor(public router: Router, private accountService: AccountService) { }

	ngOnInit() {
	}

	//log out method 
	logOut() {
		this.accountService.logout();
		document.getElementById('html').classList.remove("admin-panel");
		this.router.navigate(['/session/signin']);
	}
}
