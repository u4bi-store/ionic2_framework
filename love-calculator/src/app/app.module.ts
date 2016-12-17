import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component'; /* 마이앱 임포트*/
import { HomePage } from '../pages/home/home'; /* 홈페이지 모듈 임포트*/

@NgModule({
  declarations: [
    MyApp,
    HomePage /* 추가*/
  ],
  imports: [
    IonicModule.forRoot(MyApp) /* 마이앱 클래스 루트지정*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage /* 추가*/
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
