import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
/* 페이지 임포트함*/

import { GithubUsers } from '../providers/github-users'; /* 정의된 프로바이더 임포트*/

import {UserDetailsPage } from '../pages/user-details/user-details'; /* 유저 디테일 임포트*/
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage /* 추가함*/
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage /* 추가함*/
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GithubUsers] 
  /* 임포트한 githubusers를 프로바이더스에 에드함 */
})
export class AppModule {}
