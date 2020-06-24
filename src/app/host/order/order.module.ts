import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListRentedComponent } from './list-rented/list-rented.component';
import { ListNotRentedComponent } from './list-not-rented/list-not-rented.component';
import { ListRentingComponent } from './list-renting/list-renting.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
    path: '',
    component: ListNotRentedComponent
    },
      {
        path: 'renting',
        component: ListRentingComponent
      },
      {
        path: 'rented',
        component: ListRentedComponent
      }
    ]
  }
];

@NgModule({
  declarations: [NavBarComponent, ListRentedComponent, ListNotRentedComponent, ListRentingComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
