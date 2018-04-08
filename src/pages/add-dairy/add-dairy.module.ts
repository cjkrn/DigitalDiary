import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDairyPage } from './add-dairy';

@NgModule({
  declarations: [
    AddDairyPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDairyPage),
  ],
})
export class AddDairyPageModule {}
