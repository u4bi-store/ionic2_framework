import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Searchbar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})
export class Searchbar {
  
  items : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.init();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Searchbar');
  }

  init = () => {
    this.items = [
      '가나다라',
      '마바',
      '아야',
      '가',
      '나다라',
      '아사',
      '사차타',
      '카파타',
      '하사아'
    ];
  }

  getItems = (e) => {
    
    this.init();

    let
        data = e.target.value;

    if(data && data.trim() != '')
        this.items = this.items.filter((item) => (item.toLowerCase().indexOf(data.toLowerCase()) > -1));

  }
  
}
