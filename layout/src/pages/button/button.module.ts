import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Button } from './button';

@NgModule({
  declarations: [
    Button,
  ],
  imports: [
    IonicPageModule.forChild(Button),
  ],
  exports: [
    Button
  ]
})
export class ButtonModule {}
