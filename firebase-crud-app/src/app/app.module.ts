import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2'; /* 앵귤러파이어모듈 임포트*/
  
export const firebaseConfig = { /* 파이어베이스 셋업*/
  apiKey: "AIzaSyDnXo3gy2cLF-WS7AByVaWhARgu_gPaj7A",
  authDomain: "u4bi-crud-app.firebaseapp.com",
  databaseURL: "https://u4bi-crud-app.firebaseio.com",
  storageBucket: "u4bi-crud-app.appspot.com",
  messagingSenderId: "328438803411"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig) /* 정의된 셋업대로 모듈에 추가함*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
