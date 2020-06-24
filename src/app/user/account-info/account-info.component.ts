import { Component, OnInit } from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../../service/account.service';

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
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.getAccountById(id).subscribe(
      next => (this.user = next),
      error => {
        console.log(error);
        this.user = null;
      }
    );
  }

}
