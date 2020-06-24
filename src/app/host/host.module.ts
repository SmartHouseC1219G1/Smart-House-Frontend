import { UploadService } from './../service/upload.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ListApartmentComponent } from './list-apartment/list-apartment.component';
// @ts-ignore
import {MatListModule} from '@angular/material/list';
// @ts-ignore
import {MatIconModule} from '@angular/material/icon';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import {ChangePasswordComponent} from '../login/change-password/change-password.component';

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
        path: 'add-apartment',
        component: AddApartmentComponent
      },
      {
        path: 'apartment',
        component: ListApartmentComponent
      },
      {
        path: 'apartment/:id',
        component: ApartmentDetailComponent
      }
    ]
  }
];



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [LayoutComponent, HomePageComponent, FooterComponent, HeaderComponent, AddApartmentComponent, ListApartmentComponent, ApartmentDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MatListModule,
    MatIconModule,
  ]
})
export class HostModule { }
