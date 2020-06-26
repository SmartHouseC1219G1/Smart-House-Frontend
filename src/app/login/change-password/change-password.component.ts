import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {PWChangeValidators} from './update-pass';
import {AccountService} from '../../service/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';

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
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  registerForm: FormGroup;
  account: User;
  oldPassword: string;
  newPassword: string;

  constructor(private accountService: AccountService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      oldPassword: new FormControl('',
        [Validators.required, Validators.minLength(6)]),
      newPassword: new FormControl('', [Validators.required]),
      rePassword: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const value = this.registerForm.value;
      this.accountService.changePass(this.oldPassword, this.newPassword).subscribe(item => {
        this.router.navigate(['']);
      }, error => {
        alert('error');
      });
      Toast.fire({
        icon: 'success',
        title: 'Edit User successfully'
      });
    }
  }

    onSuccess(){
    // console.log(this.loginForm.value);
    Toast.fire({
      icon: 'success',
      title: 'Change password successfully'
    });
  }

  onFail(){
    // console.log(this.loginForm.value);
    Toast.fire({
      icon: 'error',
      title: 'Change password fail'
    });
  }
}
