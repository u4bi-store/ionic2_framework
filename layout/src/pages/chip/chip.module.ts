import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chip } from './chip';

@NgModule({
  declarations: [
    Chip,
  ],
  imports: [
    IonicPageModule.forChild(Chip),
  ],
  exports: [
    Chip
  ]
})
export class ChipModule {}
