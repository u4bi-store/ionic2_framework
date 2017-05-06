import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertController } from './alert-controller';

@NgModule({
  declarations: [
    AlertController,
  ],
  imports: [
    IonicPageModule.forChild(AlertController),
  ],
  exports: [
    AlertController
  ]
})
export class AlertControllerModule {}
