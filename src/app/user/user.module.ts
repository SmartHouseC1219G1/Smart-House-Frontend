import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { ResultSearchComponent } from './result-search/result-search.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';


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
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, ResultSearchComponent, RoomDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class UserModule { }
