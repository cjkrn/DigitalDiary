import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DairyService } from '../..//providers/dairy-service/dairy-service';
import { Dairy } from '../../models/dairy.model';
import { FormGroup, Validators, FormControl} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-add-dairy',
  templateUrl: 'add-dairy.html',
})
export class AddDairyPage {

formGroup: FormGroup;
dairy: Dairy;
date: Date= new Date();
title:string ='';
content:string='';

  constructor(public navCtrl: NavController,
    private DairyService: DairyService) 
    {
      this.formGroup= new FormGroup({
        title: new FormControl(),
        content: new FormControl(),
        date: new FormControl(),
      })
    }
saveDairy(dairy: Dairy ) {
  this.DairyService.saveDairy(dairy);
  this.navCtrl.pop();
}

}
