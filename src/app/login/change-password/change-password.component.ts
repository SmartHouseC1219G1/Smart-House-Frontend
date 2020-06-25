import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {AccountService} from '../../service/account.service';
import {Router} from '@angular/router';

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

  constructor(private accountService: AccountService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      oldPassword: new FormControl('',
        [Validators.required, Validators.minLength(6)]),
      newPassword: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const value = this.registerForm.value;
      // const data = {
      //   ...this.account,
      //   ...value};
      // tslint:disable-next-line:max-line-length
      this.accountService.changePassword(value.oldPassword, value.newPassword).subscribe(item => {this.router.navigate(['']); }, error => {alert('error'); });
      Toast.fire({
        icon: 'success',
        title: 'Edit User successfully'
      });
    }
  }

  onFail(){
    Toast.fire({
      icon: 'error',
      title: 'Change password fail'
    });
  }
}
