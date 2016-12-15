import { Component, ViewChild } from '@angular/core'; /* 모듈추가*/
import { Platform , MenuController, Nav} from 'ionic-angular'; /* 메뉴컨트롤러, 네비 모듈 추가*/
import { StatusBar, Splashscreen } from 'ionic-native';

/*mport { TabsPage } from '../pages/tabs/tabs';*/

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
/* 컴포넌트를 임포트함*/
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = UsersPage;
  pages: Array<{title: string, component: any}>;

  /* 생성자 정의해줌 */
  constructor(public platform: Platform,  public menu: MenuController) {
    this.initializeApp(); /* 이닛*/
    
    /* 페이지 컴포넌트 주소들 pages란 배열에 넣음*/
    this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Repos', component: ReposPage },
      { title: 'Organisations', component: OrganisationsPage }
    ];
  }
    
  initializeApp(){ /* 이닛 초기화할거 모아놓음*/
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    }); 
  }
    
  openPage(page){ /* 페이지 오픈 함수 뷰단에서 호출할꺼임*/
    this.menu.close(); /* 메뉴 닫아줌*/
    this.nav.setRoot(page.component); /* 네비 루트 지정함*/
  }
}
