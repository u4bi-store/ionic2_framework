import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service';

/*
  Generated class for the Profiles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {

   profiles: any;
   repos: any;
   github_user = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private GithubService : GithubService){}

  ionViewDidLoad() {
    console.log('ProfilesPage 페이지 로드');
  }

  onSubmit(){
    this.getProfile(this.github_user);
    this.github_user = '';
  }

  reset(){
    this.profiles = '';
    this.github_user = '';
    
  }

  showRepos(github_user){
    this.getRepos(github_user);
  }

  getProfile(username){
    this.GithubService.getProfile(username).subscribe(response =>{
      this.profiles = response;
      console.log(this.profiles);
    });
  }

  getRepos(username){
    this.GithubService.getRepos(username).subscribe(response =>{
      this.repos = response;
      console.log(this.repos);
    });
  }
}
