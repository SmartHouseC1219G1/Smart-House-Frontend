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
// @ts-ignore
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
// @ts-ignore
// @ts-ignore
import {FacebookLoginProvider} from 'angularx-social-login';
import {JwtModule} from '@auth0/angular-jwt'
import { ca } from 'date-fns/locale';


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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    BrowserAnimationsModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    SocialLoginModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          try {
            let token = JSON.parse(window.localStorage.getItem("access_token")).token;
            return token;
          } catch {
            return "";
          }
        },
        whitelistedDomains: [],
        blacklistedRoutes: [],
      },
    }),
    
  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('336216127538880'),
        },
      ],
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
