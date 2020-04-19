import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'embryo-HeaderUserProfileDropdown',
  templateUrl: './HeaderUserProfileDropdown.component.html',
  styleUrls: ['./HeaderUserProfileDropdown.component.scss']
})
export class HeaderUserProfileDropdownComponent implements OnInit {

   constructor(private accountService : AccountService,public router: Router) { }

   ngOnInit() {
   }

   //log out method 
	logOut() {
		this.accountService.logout();
		this.router.navigate(['/session/signin']);
	}

}
