import { DairyService } from './../../providers/dairy-service/dairy-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dairy } from '../../models/dairy.model';

@IonicPage()
@Component({
  selector: 'page-view-dairy',
  templateUrl: 'view-dairy.html',
})
export class ViewDairyPage {

  dairy: Dairy;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private dairyService: DairyService) {
      this.dairy= this.navParams.get('dairy');
  }

  deleteDairy(createDate: number){
    this.dairyService.deleteDairy(createDate);
    this.navCtrl.pop();
  }
}
