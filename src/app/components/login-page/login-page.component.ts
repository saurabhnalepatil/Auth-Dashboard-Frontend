import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignIn, SignUp } from 'src/app/models/master-model';
import { MasterServiceTsService } from 'src/app/services/master-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  @ViewChild('passwordModal') exampleModal!: ElementRef;

  showLoginForm: boolean = true;
  showLoginFormTitle: boolean = true;
  showPassword: boolean = false;
  showOldPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;
  encryptText: string = '';
  encPassword: string = '';
  decPassword: string = '';
  conversionEncryptOutput: string = '';
  conversionDecryptOutput: string = '';
  generatedPasswordLength: number = 8;
  showForgotPassword = 'none';
  showFirstTimePassword = 'none';

  user: SignUp = new SignUp();
  login: SignIn = new SignIn();

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private masterService: MasterServiceTsService,
  ) { }

  toggleForms() {
    this.showLoginForm = !this.showLoginForm;
    this.showLoginFormTitle = !this.showLoginFormTitle;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleOldPasswordVisibility() {
    this.showOldPassword = !this.showOldPassword;
  }
  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  generatePassword(length: number = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return this.user.generatedPassword = password;
  }
  openModal(isForgotPasswordVisible: boolean = false) {
    debugger;
    if (isForgotPasswordVisible) { this.showForgotPassword = 'block'; }
    else { this.showFirstTimePassword = 'block'; }
  }
  onCloseHandled() {
    this.showForgotPassword = 'none';
    this.showFirstTimePassword = 'none';
  }

  saveUserSignUp() {
    debugger;
    if (!this.user.fullName) {
      this.toastr.error('Kindly provide fullname!');
      return;
    }

    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    if (!phoneRegex.test(this.user.phoneNumber)) {
      this.toastr.error('Please enter a valid phone number,At least contain 10 numbers!');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.user.email)) {
      this.toastr.error('Please enter a correct email address!');
      return;
    }
    this.user.password = this.generatePassword(this.generatedPasswordLength)
    this.masterService.registerUser(this.user).subscribe(
      (result) => {
        if (result) {
          this.user = new SignUp();
          this.toastr.success('Sign up successful!');
          this.openModal(false);
        } else {
          this.toastr.error('Registration failed. Please try again.');
        }
      },
      (err) => {
        this.toastr.error('Failed to register. Please try again later.');
      }
    );
  }

  userLogin() {
    debugger;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!this.login.email || !emailRegex.test(this.login.email)) {
      this.toastr.error('Please enter a valid email address!');
      return;
    }

    if (!this.login.password) {
      this.toastr.error('Please provide a password!');
      return;
    }
    this.masterService.loginUser(this.login.email, this.login.password).subscribe(
      () => {
        this.login = new SignIn();
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        if (error.status === 401) {
          this.toastr.error('Incorrect email or password. Please try again.');
        } else {
          this.toastr.error('Failed to log in. Please try again later.');
        }
      }
    );
  }

  forgotPassword() {
    debugger;
    if (!this.login.password) {
      this.toastr.error('Please provide a password!');
      return;
    }
    this.masterService.loginUser(this.login.email, this.login.password).subscribe(
      () => {
        this.user = new SignUp();
        this.toggleForms();
      },
      (error) => {
        if (error.status === 401) {
          this.toastr.error('Incorrect email or password. Please try again.');
        } else {
          this.toastr.error('Failed to log in. Please try again later.');
        }
      }
    );
  }

}
