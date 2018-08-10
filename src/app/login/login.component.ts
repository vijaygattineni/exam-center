import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service/app-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from './login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginErrorMessage: string;
  submitted: boolean;
  submissionInProgress: boolean;

  constructor(private appSerivce: AppServiceService, private router: Router, private fb: FormBuilder) { }

  /**
   * Login form Submission
   *
   * @param loginValue: (Login) login details
   */
  submitForm(loginValue: Login) {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.submissionInProgress = true;
      this.appSerivce.MTRMLogin(loginValue)
        .subscribe(response => {
          this.submissionInProgress = false;
          sessionStorage.setItem('token', response['auth_token']);
          this.appSerivce.setHeader();
          this.router.navigate(['details']);
        }, errorResponse => {
          this.submissionInProgress = false;
          this.loginErrorMessage = errorResponse.error.message;
        });
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'userid': [null, Validators.required],
      'password': [null, Validators.required],
      'confirm_attendance': [true]
    });
  }

}
