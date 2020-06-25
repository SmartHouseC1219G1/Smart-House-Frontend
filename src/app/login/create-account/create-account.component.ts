import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AccountService } from '../../service/account.service';
import Swal from 'sweetalert2';
import { User } from '../../model/user';
import { auth } from 'firebase';

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

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.password === v.confirmPassword
    ? null
    : {
        passwordNotMatch: true,
      };
}
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  registerForm: FormGroup;
  userList: User[] = [];

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      pwGroup: new FormGroup(
        {
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
          ]),
          confirmPassword: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
          ]),
        },
        comparePassword
      ),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^0(\d{9}|9\d{8})$/),
      ]),
    });
  }
  async onSubmit() {
    if (this.registerForm.valid) {
      const { value } = this.registerForm;
      const signUpForm = {
        name: value.name,
        username: value.username,
        email: value.email,
        password: value.pwGroup.password,
        phone: value.phone,
      };
      console.log(signUpForm);
      this.accountService.createAccount(signUpForm).subscribe(
        (data) => {
          this.popUpSuccess();
          const redirect = this.redirectTimeOut();
        }, (err) => {
          console.log(err);
          this.popUpFailed();
        }
      );
    } else {
      return;
    }
  }

  async onSubmitHost() {
    if (this.registerForm.valid) {
      const { value } = this.registerForm;
      const signUpForm = {
        name: value.name,
        username: value.username,
        email: value.email,
        password: value.pwGroup.password,
        phone: value.phone,
        role: 'host',
      };
      console.log(signUpForm);
      this.accountService.createAccount(signUpForm).subscribe(
        (data) => {
          this.popUpSuccess();
          const redirect = this.redirectTimeOut();
        }, (err) => {
          console.log(err);
          this.popUpFailed();
        }
      )
    } else {
      return;
    }
  }

  popUpFailed() {
    Swal.fire('Sign up failed', 'Something gone wrong', 'warning');
  }

  popUpSuccess() {
    let timerInterval;
    Swal.fire({
      title: 'Sign up success!',
      html: 'Redirecting',
      timer: 2000,
      icon: 'success',
      timerProgressBar: true,
      onBeforeOpen: () => {
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
        }, 1000);
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

  async redirectTimeOut() {
    return await setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
