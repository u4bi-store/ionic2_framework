import { Component } from '@angular/core';

import { RedditsPage } from '../reddits/reddits';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = RedditsPage;
  tab2Root: any = SettingsPage;
  tab3Root: any = AboutPage; /* 탭스*/

  constructor() {

  }
}
