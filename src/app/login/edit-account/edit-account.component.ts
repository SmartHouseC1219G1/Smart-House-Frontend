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
// interface EditAccount {
//   fullName: string;
//   email: string;
//   phone: string;
// }
export class EditAccountComponent implements OnInit {

  registerForm: FormGroup;
  account: User[] = [];

  constructor(private accountService: AccountService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: new FormControl('',
        [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^0(\d{9}|9\d{8})$/)])
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.getAccountById(id)
      .subscribe(result => {
        this.account = result;
        this.registerForm.patchValue(this.account);
        confirm('Edit User successfully !');
      }, error => {
        confirm('Edit User fail !');
      });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const value = this.registerForm.value;
      const data = { ...this.account, ...value};
      this.accountService.editAccount(data).subscribe(item => {this.router.navigate(['']); }, error => {alert('error'); });
      Toast.fire({
        icon: 'success',
        title: 'Edit User successfully'
      });
    }
  }



}
