import { Component, OnInit } from '@angular/core';
import { User } from '../../Interfaces/User';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {

  CurrentUser: User;
  LoginStatus$: Observable<boolean>;
  UserRole$: Observable<string>;

  constructor(private accountService: AccountService) { }

  getCurrentUser(currentUser: User) {
    this.CurrentUser = currentUser
  }

  ngOnInit() {
    this.LoginStatus$ = this.accountService.isLoggedIn;
    this.UserRole$ = this.accountService.currentUserRole;
  }


}
