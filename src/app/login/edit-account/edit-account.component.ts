import { User } from '../../model/user';
import { AccountService } from '../../service/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordNotMatch: true
  };
}
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
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  registerForm: FormGroup;
  account: User;
  user1: User;

  constructor(private accountService: AccountService,
              private router: Router,
              private route: ActivatedRoute,
              private routes: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: new FormControl('',
        [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^0(\d{9}|9\d{8})$/)])
    });
    this.accountService.getUserByUsername()
      .subscribe( result =>
      {this.user1 = result ;
       this.registerForm.patchValue(this.user1);
    }, error => {console.log(' get fail'); });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const value = this.registerForm.value;
      const data = {
        ...this.account,
        ...value};
      this.accountService.editAccount(data).subscribe(item => {this.router.navigate(['']); }, error => {alert('error'); });
      Toast.fire({
        icon: 'success',
        title: 'Edit User successfully'
      });
    }
  }



}
