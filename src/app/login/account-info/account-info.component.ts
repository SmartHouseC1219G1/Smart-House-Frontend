import { AccountService } from '../../service/account.service';
import { User } from '../../model/user';
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordNotMatch: true
  };
}
@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  user: User;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.accountService.getUserByUsername().subscribe( result => {
      this.user = result;
    });
  }
  // @ts-ignore
  isAuth(): boolean {
    return this.auth.isAuth();
}
  cancel() {
    if (this.auth.isHost()){
      this.router.navigate(['/host']);
    }else {this.router.navigate(['']); }
  }


}
