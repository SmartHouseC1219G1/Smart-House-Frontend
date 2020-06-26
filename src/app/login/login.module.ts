import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AuthGuard } from '../service/auth/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {  ReactiveFormsModule, FormsModule} from '@angular/forms';


// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'edit-account',
        component: EditAccountComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'account-info',
        component: AccountInfoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
  ];

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [CreateAccountComponent, SignInComponent, LayoutComponent, EditAccountComponent, ChangePasswordComponent, AccountInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  providers: []
})
export class LoginModule { }
