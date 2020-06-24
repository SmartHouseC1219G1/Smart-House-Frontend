import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AccountInfoComponent
      },
      {
        path: 'change-pass',
        component: ChangePassComponent
      },
      {
        path: 'change-info',
        component: ChangeInfoComponent
      }
    ]
  }
];


@NgModule({
  declarations: [ChangePassComponent, ChangeInfoComponent, AccountInfoComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
