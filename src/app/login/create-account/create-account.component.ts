import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../service/account.service';
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

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordNotMatch: true
  };
}
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  registerForm: FormGroup;
  accountList: Account[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('',
        [Validators.required, Validators.minLength(6)]),
      pwGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, comparePassword)
      ,
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^0(\d{9}|9\d{8})$/)])
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      Toast.fire({
        icon: 'success',
        title: 'Create Account successfully'
      });
      // const {value} = this.registerForm;
      // this.accountService.createAccount(value)
      //   .subscribe(result => {
      //     this.accountList.push(result);
      //     confirm('Add account successfully !');
      //     this.registerForm.reset({
      //       username: '',
      //       password: '',
      //       email: '',
      //       phone: '',
      //     });
      //   }, error => {
      //     confirm('Add account fail !');
      //   });
    }
  }
}

