import { Component, OnInit } from '@angular/core';
import { EmbryoService } from '../../../Services/Embryo.service';
import { AccountService } from '../../../Services/account.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastOptions, ToastaService } from 'ngx-toasta';

@Component({
  selector: 'signIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.scss'],
})
export class SignInComponent implements OnInit {
  //Form properties
  insertForm: FormGroup;
  Username: FormControl;
  Password: FormControl;
  RememberMe: FormControl;
  //Urls
  returnUrl: string;
  adminReturnUrl: string;

  //Messages
  messagesList: string[];

  // Toast Options
  toastOption: ToastOptions = {
    title: 'Sign-in',
    msg: 'You sign-in successfully!',
    showClose: true,
    timeout: 3000,
    theme: 'material',
  };

  constructor(
    private embryoService: EmbryoService,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastyService: ToastaService
  ) {}

  onSubmit() {
    this.embryoService.loadingToasty();

    let userlogin = this.insertForm.value;

    this.accountService.login(userlogin.Username, userlogin.Password).subscribe(
      (result) => {
        this.accountService.rememberMyUserName(
          this.insertForm.get('Username').value,
          userlogin.RememberMe
        );

        this.messagesList = [];

        let token = (<any>result).token;

        console.log('User Logged In Successfully');

        this.embryoService.closeToasty();

        if (result.userRole == 'Customer') {
          this.router.navigate([this.returnUrl]).then(() => {
            this.toastyService.success(this.toastOption);
          });
        }
        else {
          this.router.navigate([this.adminReturnUrl]).then(() => {
            this.toastyService.success(this.toastOption);
          });
        }
      },
      (error) => {
        this.messagesList = [];

        // if (error.status == 400) {
        //   for (var i = 0; i < error.error.errors['Password'].length; i++) {
        //     if (
        //       error.error.errors['Password'][i] ==
        //       "The field Password must match the regular expression '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9_]).*$'."
        //     )
        //       this.messagesList.push(
        //         '"The field Password must contain at least 6 characters, including at least 1 Lower case, 1 Upper case, 1 Digits and 1 Special character'
        //       );
        //     console.log(error.error.errors['Password'][i]);
        //   }
        // } else if (error.status == 401)
        //   this.messagesList.push(error.error.loginError);

        // this.messagesList.push('Failed to login!');

        // console.log(error);

        // this.embryoService.closeToasty();
        this.messagesList.push(error);
        this.embryoService.OkPopup(this.messagesList);
      }
    );
  }

  ngOnInit() {
    let rememberMeStatus = this.accountService.checkRememberMeStatus();

    // Initialize Form Controls

    this.Username = new FormControl('', [Validators.required]);
    this.Password = new FormControl('', [Validators.required]);
    this.RememberMe = new FormControl(rememberMeStatus);

    if (rememberMeStatus)
      this.Username.setValue(this.accountService.getRememberMeUserName());

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.adminReturnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/admin-panel';

    // Initialize FormGroup using FormBuilder
    this.insertForm = this.fb.group({
      Username: this.Username,
      Password: this.Password,
      RememberMe: this.RememberMe,
    });
  }
}
