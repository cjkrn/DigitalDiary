import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DairyService } from '../providers/dairy-service/dairy-service';
import { IonicStorageModule } from '@ionic/storage';
import { AddDairyPage } from './../pages/add-dairy/add-dairy';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewDairyPage } from '../pages/view-dairy/view-dairy';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    AddDairyPage,
    ViewDairyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp), 
    IonicStorageModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    AddDairyPage, 
    ViewDairyPage
  ],
  providers: [
    StatusBar,
    HttpClientModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DairyService
  ]
})
export class AppModule {}
