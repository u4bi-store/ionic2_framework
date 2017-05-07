import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lists page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class Lists {

  items : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.items = [];

    for(let i = 10; i--;){
      
      let
          item = { name : i+'번', key : '키번호 : '+i };
      
      this.items.push(item);

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lists');
  }

  itemClick = (item) => console.log('클릭 : ', item);

}
