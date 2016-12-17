import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home'; /* 홈페이지 임포트*/


@Component({
  templateUrl: 'app.html' /*앱페이지*/
})
export class MyApp { /* 마이앱 클래스*/
  rootPage = HomePage;  /*루트 페이지로 지정*/

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
