import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home', /* 셀렉터 지정 scss*/
  templateUrl: 'home.html' /* 템플릿 url 지정*/
})
export class HomePage { /* 홈페이지 클래스*/
  name1 = ''; /* name 1, 2 초기화*/
  name2 = '';
  
  get score() { /* 리턴*/
    const letters = (this.name1 + this.name2); /* 두 값을 더해 초기화*/
    let sum = 0; /* sum 정의 */
    for(let i = 0; i < letters.length; i++){ /* 랭쓰까지 포문을 돌리고*/
      sum += letters.charCodeAt(i); /* 더해줌*/
    }
    return sum % 101; /* 리턴 %101*/
  }
}
