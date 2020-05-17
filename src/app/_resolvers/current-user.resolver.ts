import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from '../Services/account.service';
import { User } from '../AdminPanel/Interfaces/User';
import { ToastaService, ToastOptions } from 'ngx-toasta';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserResover implements Resolve<any> {
  constructor(
    private accountService: AccountService,
    private toastyService: ToastaService,
    private router: Router
  ) {}

  private curentUsername: string;

  private toastOption: ToastOptions = {
    title: 'Account Information',
    msg: 'Problem retriving data!',
    showClose: true,
    timeout: 3000,
    theme: 'material',
  };

  private returnUrl = '/admin-panel';

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    this.accountService.currentUserName.subscribe((result) => {
      this.curentUsername = result;
    });

    return this.accountService.getUserByUserName(this.curentUsername).pipe(
      catchError((error) => {
        this.router.navigate([this.returnUrl]).then(() => {
          this.toastyService.error(this.toastOption);
        });
        return of(null);
      })
    );
  }
}
