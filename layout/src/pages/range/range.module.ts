import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ranges } from './range';

@NgModule({
  declarations: [
    Ranges,
  ],
  imports: [
    IonicPageModule.forChild(Ranges),
  ],
  exports: [
    Ranges
  ]
})
export class RangeModule {}
