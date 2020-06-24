import { FacebookUser } from '../../model/social-user';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  }
});
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',
        [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    });
  }

  // auth
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then((res: FacebookUser) => console.log(res))
    // save auth token to session storage
    // add new user -> backend with username = email + id
    // if user exist
    .catch(err => console.log(err));
  }

  signOut(): void {
    this.authService.signOut();
  }
}
