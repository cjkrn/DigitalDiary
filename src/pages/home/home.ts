import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DairyService } from './../../providers/dairy-service/dairy-service';
import { Dairy } from '../../models/dairy.model';
import { AddDairyPage } from './../add-dairy/add-dairy';
import { ViewDairyPage } from '../view-dairy/view-dairy';

//import 'core-js/es7/reflect';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //private dairys: Promise<Dairy[]>;
  dairys: Promise<Dairy[]>;  
  private dairy: Dairy; 
  constructor(public navCtrl: NavController, 
              private dairyService: DairyService) {

  }

  ionViewWillEnter(){
    this.dairys =this.getAllDairy();
  }
  addDiary(){
    this.navCtrl.push(AddDairyPage);
  }

  getDairy(createDate: number){
    this.dairyService.getDairy(createDate).then((n) =>{
      this.dairy =n;
      this.navCtrl.push(ViewDairyPage, {dairy: this.dairy})
    });
  }

  getAllDairy(){
    return this.dairyService.getAllDairy();
  }
}
