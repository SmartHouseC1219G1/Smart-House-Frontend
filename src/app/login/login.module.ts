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
       component: CreateAccountComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
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
