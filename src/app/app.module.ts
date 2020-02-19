import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
//import * as firebase from 'firebase';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyB_m9BoC9eUS565Lc9nBLmU70h3LDEKcqY",
  authDomain: "orel-e7509.firebaseapp.com",
  databaseURL: "https://orel-e7509.firebaseio.com",
  //projectId: "orel-e7509",
  storageBucket: "orel-e7509.appspot.com",
  messagingSenderId: "459377143124",
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
