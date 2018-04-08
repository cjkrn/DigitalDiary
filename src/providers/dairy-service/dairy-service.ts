import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Dairy } from '../../models/dairy.model';


@Injectable()
export class DairyService {
  private dairys: Dairy[]=[];
  private dairy: Dairy;
  
  // constructor(public http: HttpClient ) {
  //   console.log('Hello DairyServiceProvider Provider');
  // }
  constructor(public storage: Storage ) {} 
  
   saveDairy(dairy: Dairy ){
     dairy.createDate = Date.now();    
      this.dairys.push(dairy);
      this.storage.set('dairys', this.dairys);
   }

   getAllDairy(){
      return this.storage.get('dairys').then(
        (dairys) => 
        {
          this.dairys =dairys ==null? []: dairys;
          return [...this.dairys];
        } 
     )
  }

  getDairy(createDate: number){
    return this.storage.get('dairys').then((dairys) =>{
       this.dairy = [...dairys].find( r=> r.createDate === createDate);
       return this.dairy;
    });
  }
  deleteDairy(createDate: number){
    this.dairys =this.dairys.filter((dairy)=>{
        return dairy.createDate !== createDate
    });
    this.storage.set('dairys', this.dairys);
  }
}
