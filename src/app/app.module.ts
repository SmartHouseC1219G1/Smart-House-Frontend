import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './change-password/change-password.component';

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

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    BrowserAnimationsModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
