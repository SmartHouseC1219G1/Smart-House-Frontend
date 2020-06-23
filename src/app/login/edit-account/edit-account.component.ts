import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../service/account.service';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordNotMatch: true
  };
}

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {


  registerForm: FormGroup;
  account: Account[] = [];

  constructor(private accountService: AccountService,
              private route: ActivatedRoute,
              private routes: Router) { }

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

    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.getAccountById(id)
      .subscribe(result => {
        this.account = result;
        this.registerForm.patchValue(this.account);
        confirm('Edit Account successfully !');
      }, error => {
        // confirm('Edit Account fail !');
      });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {value} = this.registerForm;
      const data = {
        ...this.account,
        ...value
      };
      this.accountService.editAccount(data)
        .subscribe(result => {
          this.routes.navigate(['']);
        }, error => {
          console.log(error);
        });
    }
  }

}
