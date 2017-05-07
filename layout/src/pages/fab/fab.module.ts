import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Fab } from './fab';

@NgModule({
  declarations: [
    Fab,
  ],
  imports: [
    IonicPageModule.forChild(Fab),
  ],
  exports: [
    Fab
  ]
})
export class FabModule {}
