import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastOptions, ToastaService } from 'ngx-toasta';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { AccountService } from 'src/app/Services/account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'embryo-ResetPassword',
  templateUrl: './ResetPassword.component.html',
  styleUrls: ['./ResetPassword.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  //Form properties
  insertForm: FormGroup;
  Password: FormControl;
  ConfirmPassword: FormControl;

  //Urls
  returnUrl: string;

  //Messages
  messagesList: string[];

  //Regex
  passRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9_]).*$";

  // Toast Options
  toastOption: ToastOptions = {
    title: "Password Reset",
    msg: "Your password is reset successfully!",
    showClose: true,
    timeout: 3000,
    theme: "material"
  };

  //url params
  id: string;
  code: string;

  constructor(private embryoService: EmbryoService,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastyService: ToastaService) {
    this.route.params.subscribe(params => {
      this.route.queryParams.forEach(queryParams => {
        this.id = queryParams['id'];
        this.code = queryParams['code'];
      });
    });
  }


  onSubmit() {

    this.embryoService.loadingToasty();

    let data = this.insertForm.value;

    this.accountService.resetPasswrod(data).subscribe(
      result => {

        console.log("Your password is reset successfully!");

        this.embryoService.closeToasty();

        this.router.navigate([this.returnUrl]).then(() => {
          this.toastyService.success(this.toastOption);
        });

      },
      error => {

        this.messagesList = [];

        this.messagesList.push(error.error.value);

        this.messagesList.push("Failed to reset your password!");

        console.log(error);

        this.embryoService.closeToasty();

        this.embryoService.OkPopup(this.messagesList);

      });

  }

  ngOnInit() {

    this.messagesList = [];

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/session/signin';

    this.Password = new FormControl('', [Validators.required, Validators.pattern(this.passRegex), Validators.maxLength(256), Validators.minLength(6)]);
    this.ConfirmPassword = new FormControl('', [Validators.required, this.accountService.MustMatch(this.Password)]);

    // Initialize insertForm using FormBuilder
    this.insertForm = this.fb.group({
      "Id": this.id,
      "Code": this.code,
      "Password": this.Password,
      "ConfirmPassword": this.ConfirmPassword,
    });
  }

}
