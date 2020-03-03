var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
import { environment } from 'src/environments/environment';
var AccountService = /** @class */ (function () {
    // Need HttpClient to communicate over HTTP with Web API
    function AccountService(http, router) {
        this.http = http;
        this.router = router;
        // Urls to access accounts Web API’s
        this.baseUrlLogin = environment.apiUrl + "accounts/login";
        this.baseUrlRegister = environment.apiUrl + "accounts/register";
        this.baseUrlForgotPassword = environment.apiUrl + "accounts/forgotpassword";
        this.baseUrlResetPassword = environment.apiUrl + "accounts/resetpassword";
        this.baseUrlGetUserByUsername = environment.apiUrl + "accounts/GetUserByUsername";
        this.baseUrlGetUserById = environment.apiUrl + "accounts/GetUserById";
        this.baseUrlUpdateUserById = environment.apiUrl + "accounts/UpdateUserById";
        // User related properties
        this.loginStatus = new BehaviorSubject(this.checkLoginStatus());
        this.UserName = new BehaviorSubject(localStorage.getItem('username'));
        this.UserRole = new BehaviorSubject(localStorage.getItem('userRole'));
    }
    AccountService.prototype.register = function (newUser) {
        return this.http.post(this.baseUrlRegister, newUser);
    };
    AccountService.prototype.login = function (username, password) {
        var _this = this;
        // pipe() let you combine multiple functions into a single function. 
        // pipe() runs the composed functions in sequence.
        return this.http.post(this.baseUrlLogin, { username: username, password: password }).pipe(map(function (result) {
            // login successful if there's a jwt token in the response
            if (result && result.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('loginStatus', '1');
                localStorage.setItem('jwt', result.token);
                localStorage.setItem('username', result.username);
                localStorage.setItem('expiration', result.expiration);
                localStorage.setItem('userRole', result.userRole);
                _this.UserName.next(localStorage.getItem('username'));
                _this.UserRole.next(localStorage.getItem('userRole'));
                _this.loginStatus.next(true);
            }
            return result;
        }));
    };
    AccountService.prototype.logout = function () {
        // Set Loginstatus to false and delete saved jwt cookie  
        localStorage.removeItem('jwt');
        localStorage.removeItem('userRole');
        localStorage.removeItem('username');
        localStorage.removeItem('expiration');
        localStorage.setItem('loginStatus', '0');
        this.loginStatus.next(false);
        this.router.navigate(['/session']);
        console.log("Logged Out Successfully");
    };
    AccountService.prototype.checkLoginStatus = function () {
        var loginCookie = localStorage.getItem("loginStatus");
        if (loginCookie == "1") {
            if (localStorage.getItem('jwt') === null || localStorage.getItem('jwt') === undefined) {
                return false;
            }
            // Get and Decode the Token
            var token = localStorage.getItem('jwt');
            var decoded = jwt_decode(token);
            // Check if the cookie is valid
            if (decoded.exp === undefined) {
                return false;
            }
            // Get Current Date Time
            var date = new Date(0);
            // Convert EXp Time to UTC
            var tokenExpDate = date.setUTCSeconds(decoded.exp);
            // If Value of Token time greter than 
            if (tokenExpDate.valueOf() > new Date().valueOf()) {
                return true;
            }
            console.log("NEW DATE " + new Date().valueOf());
            console.log("Token DATE " + tokenExpDate.valueOf());
            this.logout();
            return false;
        }
        return false;
    };
    Object.defineProperty(AccountService.prototype, "isLoggedIn", {
        get: function () {
            return this.loginStatus.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "currentUserName", {
        get: function () {
            return this.UserName.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "currentUserRole", {
        get: function () {
            return this.UserRole.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AccountService.prototype.changeCurrentUsername = function (username) {
        localStorage.setItem('username', username);
        this.UserName.next(username);
    };
    // Custom Validator
    AccountService.prototype.MustMatch = function (passwordControl) {
        return function (confirmPasswordControl) {
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
                return { 'mustMatch': true };
            }
            else {
                return null;
            }
        };
    };
    AccountService.prototype.rememberMyUserName = function (username, option) {
        localStorage.setItem('rememberMeStatus', option.valueOf().toString());
        if (option == true)
            localStorage.setItem('rememberUserName', username);
        else
            localStorage.removeItem('rememberUserName');
        ;
    };
    AccountService.prototype.checkRememberMeStatus = function () {
        var rememberMe = localStorage.getItem('rememberMeStatus');
        if (rememberMe == 'true')
            return true;
        localStorage.setItem('rememberMeStatus', 'false');
        localStorage.removeItem('rememberUserName');
        return false;
    };
    AccountService.prototype.getRememberMeUserName = function () {
        return localStorage.getItem('rememberUserName');
    };
    /*---APIs---*/
    // API:forgot Password
    AccountService.prototype.forgotPasswrod = function (email) {
        return this.http.post(this.baseUrlForgotPassword, { email: email });
    };
    // API:reset Password
    AccountService.prototype.resetPasswrod = function (data) {
        return this.http.post(this.baseUrlResetPassword, data);
    };
    // API:Get User by his id
    AccountService.prototype.getUserById = function (id) {
        return this.http.get(this.baseUrlGetUserById + "/" + id);
    };
    // API:Get User by his username
    AccountService.prototype.getUserByUserName = function (username) {
        return this.http.get(this.baseUrlGetUserByUsername + "/" + username);
    };
    // API:Update User
    AccountService.prototype.updateUserById = function (id, editUser) {
        return this.http.put(this.baseUrlUpdateUserById + "/" + id, editUser);
    };
    AccountService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], AccountService);
    return AccountService;
}());
export { AccountService };
//# sourceMappingURL=account.service.js.map