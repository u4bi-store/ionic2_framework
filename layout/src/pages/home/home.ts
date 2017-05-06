import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheets } from '../action-sheets/action-sheets';
import { Alert } from '../alert/alert';

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
      default : break;
    }
  }

}
