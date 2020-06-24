import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ChangePassComponent } from './change-pass/change-pass.component';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
       path: '',
       component: CreateAccountComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'edit-account',
        component: EditAccountComponent
      },
      {
        path: 'account-info',
        component: AccountInfoComponent
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      },
      {
        path: 'change-password',
        component: ChangePassComponent
      }
    ]
  }
  ];

@NgModule({
  declarations: [CreateAccountComponent, EditAccountComponent, AccountInfoComponent, SignInComponent, LayoutComponent, ChangePassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class LoginModule { }
