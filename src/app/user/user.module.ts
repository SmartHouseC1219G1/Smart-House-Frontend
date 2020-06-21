import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { ResultSearchComponent } from './result-search/result-search.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'search-room',
        component: ResultSearchComponent
      },
      {
        path: 'room-detail/:id',
        component: RoomDetailComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      }
    ]
  }
];
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HeaderComponent, FooterComponent, HomePageComponent, LayoutComponent, ResultSearchComponent, RoomDetailComponent, ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule
  ]
})
export class UserModule { }
