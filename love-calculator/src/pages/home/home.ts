import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home', /* 셀렉터 지정 scss*/
  templateUrl: 'home.html' /* 템플릿 url 지정*/
})
export class HomePage { /* 홈페이지 클래스*/
  name1 = ''; /* name 1, 2 초기화*/
  name2 = '';
  
  get score() {
    return 77;
  }
}
