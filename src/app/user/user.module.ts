import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


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
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, HomePageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class UserModule { }
