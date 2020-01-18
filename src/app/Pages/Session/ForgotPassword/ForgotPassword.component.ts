import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastaService, ToastOptions } from 'ngx-toasta';

@Component({
  selector: 'embryo-ForgotPassword',
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  //Form properties
  insertForm: FormGroup;
  Email: FormControl;
  EmailConfirmation: FormControl;

  //Urls
  returnUrl: string;

  //Messages
  messagesList: string[];

  // Toast Options
  toastOption: ToastOptions = {
    title: "Please check your inbox",
    msg: "Password reset link sent to your email!",
    showClose: true,
    timeout: 3000,
    theme: "material"
  };

  constructor(private embryoService: EmbryoService,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastyService: ToastaService) { }

  onSubmit() {

    this.embryoService.loadingToasty();

    let user = this.insertForm.value;

    this.accountService.forgotPasswrod(user.Email).subscribe(
      result => {

        console.log("Password reset link sent to your email!");

        this.embryoService.closeToasty();

        this.router.navigate([this.returnUrl]).then(() => {
          this.toastyService.success(this.toastOption);
        });

      },
      error => {

        this.messagesList = [];

        this.messagesList.push(error.error.value);

        this.messagesList.push("Failed send password reset link to your email !");

        console.log(error);

        this.embryoService.closeToasty();

        this.embryoService.OkPopup(this.messagesList);

      });

  }

  ngOnInit() {

    this.messagesList = [];

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/session/signin';

    this.Email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(256)]);
    this.EmailConfirmation = new FormControl('', [Validators.required, this.accountService.MustMatch(this.Email)]);

    // Initialize insertForm using FormBuilder
    this.insertForm = this.fb.group({
      "Email": this.Email,
      "EmailConfirmation": this.EmailConfirmation,
    });
  }

}
