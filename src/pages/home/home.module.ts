import { CustomComoponentModule } from './components/custom.module'
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage),CustomComoponentModule],
})
export class HomePageModule { }
