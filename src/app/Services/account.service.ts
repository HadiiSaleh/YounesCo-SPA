import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { User } from '../AdminPanel/Interfaces/User';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ResetPassword } from '../AdminPanel/Interfaces/ResetPassword';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // Urls to access accounts Web API’s
  private baseUrlLogin: string = environment.apiUrl + 'accounts/login';
  private baseUrlRegister: string = environment.apiUrl + 'accounts/register';
  private baseUrlForgotPassword: string =
    environment.apiUrl + 'accounts/forgotpassword';
  private baseUrlResetPassword: string =
    environment.apiUrl + 'accounts/resetpassword';
  private baseUrlGetUserByUsername: string =
    environment.apiUrl + 'accounts/GetUserByUsername';
  private baseUrlGetUserById: string =
    environment.apiUrl + 'accounts/GetUserById';
  private baseUrlUpdateUserById: string =
    environment.apiUrl + 'accounts/UpdateUserById';

  // User related properties
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject<string>(
    localStorage.getItem('username')
  );
  private UserRole = new BehaviorSubject<string>(
    localStorage.getItem('userRole')
  );

  // Need HttpClient to communicate over HTTP with Web API
  constructor(private http: HttpClient, private router: Router) {}

  register(newUser: User): Observable<User> {
    return this.http.post<User>(this.baseUrlRegister, newUser);
  }

  login(username: string, password: string) {
    // pipe() let you combine multiple functions into a single function.
    // pipe() runs the composed functions in sequence.
    return this.http
      .post<any>(this.baseUrlLogin, { username, password })
      .pipe(
        map((result) => {
          // login successful if there's a jwt token in the response
          if (result && result.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            localStorage.setItem('loginStatus', '1');
            localStorage.setItem('jwt', result.token);
            localStorage.setItem('username', result.username);
            localStorage.setItem('expiration', result.expiration);
            localStorage.setItem('userRole', result.userRole);
            this.UserName.next(localStorage.getItem('username'));
            this.UserRole.next(localStorage.getItem('userRole'));
            this.loginStatus.next(true);
          }
          return result;
        })
      );
  }

  logout() {
    // Set Loginstatus to false and delete saved jwt cookie
    localStorage.removeItem('jwt');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    localStorage.removeItem('expiration');
    localStorage.setItem('loginStatus', '0');
    this.loginStatus.next(false);
    this.router.navigate(['/session']);
    console.log('Logged Out Successfully');
  }

  checkLoginStatus(): boolean {
    const loginCookie = localStorage.getItem('loginStatus');

    if (loginCookie === '1') {
      if (
        localStorage.getItem('jwt') === null ||
        localStorage.getItem('jwt') === undefined
      ) {
        return false;
      }

      // Get and Decode the Token
      const token = localStorage.getItem('jwt');
      const decoded = jwt_decode(token);
      // Check if the cookie is valid

      if (decoded.exp === undefined) {
        return false;
      }

      // Get Current Date Time
      const date = new Date(0);

      // Convert EXp Time to UTC
      const tokenExpDate = date.setUTCSeconds(decoded.exp);

      // If Value of Token time greter than

      if (tokenExpDate.valueOf() > new Date().valueOf()) {
        return true;
      }

      console.log('NEW DATE ' + new Date().valueOf());
      console.log('Token DATE ' + tokenExpDate.valueOf());

      this.logout();

      return false;
    }
    return false;
  }

  get isLoggedIn() {
    return this.loginStatus.asObservable();
  }

  get currentUserName() {
    return this.UserName.asObservable();
  }

  get currentUserRole() {
    return this.UserRole.asObservable();
  }

  changeCurrentUsername(username: string) {
    localStorage.setItem('username', username);
    this.UserName.next(username);
  }

  // Custom Validator

  MustMatch(passwordControl: AbstractControl): ValidatorFn {
    return (
      confirmPasswordControl: AbstractControl
    ): { [key: string]: boolean } | null => {
      // return null if controls haven't initialised yet
      if (!passwordControl && !confirmPasswordControl) {
        return null;
      }

      // return null if another validator has already found an error on the matchingControl
      if (confirmPasswordControl.hasError && !passwordControl.hasError) {
        return null;
      }
      // set error on matchingControl if validation fails
      if (passwordControl.value !== confirmPasswordControl.value) {
        return { mustMatch: true };
      } else {
        return null;
      }
    };
  }

  rememberMyUserName(username: string, option: boolean) {
    localStorage.setItem('rememberMeStatus', option.valueOf().toString());
    if (option === true) {
      localStorage.setItem('rememberUserName', username);
    } else {
      localStorage.removeItem('rememberUserName');
    }
  }

  checkRememberMeStatus(): boolean {
    const rememberMe = localStorage.getItem('rememberMeStatus');
    if (rememberMe === 'true') {
      return true;
    }

    localStorage.setItem('rememberMeStatus', 'false');
    localStorage.removeItem('rememberUserName');
    return false;
  }

  getRememberMeUserName(): string {
    return localStorage.getItem('rememberUserName');
  }

  /*---APIs---*/

  // API:forgot Password

  forgotPasswrod(email: string) {
    return this.http.post<any>(this.baseUrlForgotPassword, { email });
  }

  // API:reset Password

  resetPasswrod(data: ResetPassword) {
    return this.http.post<any>(this.baseUrlResetPassword, data);
  }

  // API:Get User by his id

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrlGetUserById + '/' + id);
  }

  // API:Get User by his username

  getUserByUserName(username: string): Observable<User> {
    return this.http.get<User>(this.baseUrlGetUserByUsername + '/' + username);
  }

  // API:Update User

  updateUserById(id: string, editUser: User): Observable<User> {
    return this.http.put<User>(this.baseUrlUpdateUserById + '/' + id, editUser);
  }
}
