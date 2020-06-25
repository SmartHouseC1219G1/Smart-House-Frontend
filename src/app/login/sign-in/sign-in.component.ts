import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
// @ts-ignore
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../service/auth/auth.service';
import { FacebookUser } from '../../model/social-user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// @ts-ignore
import { FacebookLoginProvider } from 'angularx-social-login';
// @ts-ignore
import { SocialAuthService } from 'angularx-social-login';
// @ts-ignore
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  helper = new JwtHelperService();

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  async signIn() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = this.loginForm.value;
    this.authService.signIn(loginPayload).subscribe(
      (data) => {
        window.localStorage.setItem('access_token', JSON.stringify(data));
        console.log(data);
        this.popUpSuccess();
        const redirect = this.redirectTimeOut();
      },
      (err) => {
        this.popUpFailed();
        console.log(err);
      }
    );
  }
  // auth
  signInWithFB(): void {
    this.socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((res: FacebookUser) => console.log(res))
      // save auth token to session storage
      // add new user -> backend with username = email + id
      // if user exist
      .catch((err) => console.log(err));
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

  popUpSuccess() {
    let timerInterval;
    Swal.fire({
      title: 'Sign in!',
      html: 'Redirecting',
      timer: 2000,
      icon: 'success',
      timerProgressBar: true,
      onBeforeOpen: () => {
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
        }, 2000);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  popUpFailed() {
    Swal.fire(
      'Sign in failed',
      'Please re enter username and password',
      'warning'
    );
  }

  async redirectTimeOut() {
    if (this.authService.isCustomer()) {
      return await setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    } else {
      return await setTimeout(() => {
        this.router.navigate(['/host']);
      }, 2000);
    }
  }
}
