import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home', /* 셀렉터 지정*/
  templateUrl: 'home.html' /* 템플릿 url 지정*/
})
export class HomePage { /* 홈페이지 클래스*/

  constructor(public navCtrl: NavController) {
    
  }

}
