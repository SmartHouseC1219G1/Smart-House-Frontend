import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  }
];
@NgModule({
  declarations: [LayoutComponent],
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild(routes)
    ]
})
export class UserModule { }
