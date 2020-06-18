import { Routes, RouterModule } from '@angular/router';
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

const firebaseConfig = {
  apiKey: 'AIzaSyB3F4HWEz67XdAe7KnSrYq-0cNede-zm4g',
  authDomain: 'smart-house-c1219g1.firebaseapp.com',
  databaseURL: 'https://smart-house-c1219g1.firebaseio.com',
  projectId: 'smart-house-c1219g1',
  storageBucket: 'smart-house-c1219g1.appspot.com',
  messagingSenderId: '532758713299',
  appId: '1:532758713299:web:2002072a0b063f89485526',
  measurementId: 'G-TSSXVLZ3RJ'
};

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
      }
    ]
  }
];



@NgModule({
  declarations: [LayoutComponent, HomePageComponent, FooterComponent, HeaderComponent, AddApartmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDropzoneModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ]
})
export class HostModule { }
