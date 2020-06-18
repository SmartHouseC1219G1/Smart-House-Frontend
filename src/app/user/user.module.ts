import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
<<<<<<< HEAD
import { ResultSearchComponent } from './result-search/result-search.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
=======
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> 7497ab40faf27328e19a1acfcb525c58d72de18a


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
      }
    ]
  }
];
@NgModule({
<<<<<<< HEAD
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, ResultSearchComponent, RoomDetailComponent],
=======
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, HomePageComponent],
>>>>>>> 7497ab40faf27328e19a1acfcb525c58d72de18a
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class UserModule { }
