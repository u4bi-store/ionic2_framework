import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user'; /* 유저모델 임포트*/
import { GithubUsers } from '../../providers/github-users'; /* 프로바이더 임포트*/

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  user: User;
  login : string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) { /* 받아냄*/  /* 깃헙유저스 생성자에 주입*/
    /* https://ionicframework.com/docs/v2/api/navigation/NavParams/ */
    
    this.login = navParams.get('login'); /* this.login 내 파람값 login 주입*/
    
    githubUsers.loadDetails(this.login).subscribe(user => {  /* 로드함*/
      this.user = user;
      console.log(user)
    })
  }

  ionViewDidLoad() {
    console.log('Hello UserDetailsPage Page');
  }

}
