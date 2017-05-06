import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheets } from '../action-sheets/action-sheets';
import { Alert } from '../alert/alert';
import { Button } from '../button/button';
import { Checkbox } from '../checkbox/checkbox';
import { Chip } from '../chip/chip';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  name : string;

  constructor(public navCtrl: NavController) {
      this.name = 'u4bi';
      
  }

  click(type){
    switch(type){
      case 0 :
          this.navCtrl.push(ActionSheets);
          break;
      case 1 :
          this.navCtrl.push(Alert);
          break;
      case 2 :
          this.navCtrl.push(Button);
          break;
      case 3 :
          this.navCtrl.push(Checkbox);
          break;
      case 4 :
          this.navCtrl.push(Chip);
          break;
      default : break;
    }
  }

}
