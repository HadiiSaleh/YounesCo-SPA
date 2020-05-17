import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../../Services/account.service'
import { User } from '../../Interfaces/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Account',
  templateUrl: './Account.component.html',
  styleUrls: ['./Account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  LoginStatus$: Observable<boolean>;

  UserRole$: Observable<string>;

  CurrentUser: User;

  onActivate(componentReference) {
    
    componentReference.getCurrentUser(this.CurrentUser);
    //Below will subscribe to the sentCurrentUser emitter
    if (componentReference.sentCurrentUser != undefined)
      componentReference.sentCurrentUser.subscribe((data) => {
        // Will receive the data from child here
        this.CurrentUser = data
      })
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.CurrentUser = data['user'];
    });

    this.LoginStatus$ = this.accountService.isLoggedIn;
    this.UserRole$ = this.accountService.currentUserRole;
  }

}
