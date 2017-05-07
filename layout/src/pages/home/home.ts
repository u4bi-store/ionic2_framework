import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheets } from '../action-sheets/action-sheets';
import { Alert } from '../alert/alert';
import { Button } from '../button/button';
import { Checkbox } from '../checkbox/checkbox';
import { Chip } from '../chip/chip';
import { Badges } from '../badges/badges';
import { Card } from '../card/card';
import { Datetime } from '../datetime/datetime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  items : any;

  constructor(public navCtrl: NavController) {

      this.items = [
          {
              name : '액션시트',
              component : ActionSheets
          },
          {
              name : '경고팝업',
              component : Alert
          },
          {
              name : '버튼 스타일',
              component : Button
          },
          {
              name : '체크박스 스타일',
              component : Checkbox
          },
          {
              name : '칩 스타일',
              component : Chip
          },
          {
              name : '뱃지 스타일',
              component: Badges
          },
          {
              name : '카드 레이아웃',
              component: Card
          },
          {
              name : '데이트타임 포멧',
              component: Datetime
          }
      ];

  }

  click = (type) => this.navCtrl.push(type);

}
