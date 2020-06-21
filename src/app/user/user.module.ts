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
import { ExploreComponent } from './explore/explore.component';

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
        path: 'room-detail',
        component: RoomDetailComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'explore',
        component: ExploreComponent
      }
    ]
  }
];
@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomePageComponent, LayoutComponent, ResultSearchComponent, RoomDetailComponent, ContactUsComponent, ExploreComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class UserModule { }
