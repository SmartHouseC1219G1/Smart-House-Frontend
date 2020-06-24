import { AuthGuard } from '../service/auth/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {ReactiveFormsModule} from '@angular/forms';


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
        component: ChangePassComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
  ];

@NgModule({
  declarations: [CreateAccountComponent, SignInComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  providers: []
})
export class LoginModule { }
