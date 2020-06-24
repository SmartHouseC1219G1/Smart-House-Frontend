import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultSearchComponent } from './result-search/result-search.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExploreComponent } from './explore/explore.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { AccountInfoComponent } from './account-info/account-info.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'search-room',
        component: ResultSearchComponent,
      },
      {
        path: 'apartment/:id',
        component: RoomDetailComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'explore',
        component: ExploreComponent,
      },
      {
        path: 'booking-history',
        component: BookingHistoryComponent
      },
      {
        path: 'change-info',
        component: ChangeInfoComponent
      },
      {
        path: 'change-pass',
        component: ChangePassComponent
      },
      {
        path: 'account-info',
        component: AccountInfoComponent
      }
    ],
  },
];
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LayoutComponent,
    ResultSearchComponent,
    RoomDetailComponent,
    ContactUsComponent,
    ExploreComponent,
    BookingHistoryComponent,
    ChangeInfoComponent,
    ChangePassComponent,
    AccountInfoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
})
export class UserModule {}
