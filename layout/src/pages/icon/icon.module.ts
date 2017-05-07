import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Icon } from './icon';

@NgModule({
  declarations: [
    Icon,
  ],
  imports: [
    IonicPageModule.forChild(Icon),
  ],
  exports: [
    Icon
  ]
})
export class IconModule {}
