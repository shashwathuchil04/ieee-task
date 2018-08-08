import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomComoponent } from './custom'
@NgModule({
  declarations: [CustomComoponent],
  imports: [IonicPageModule.forChild(CustomComoponent)],
    exports: [
        CustomComoponent
    ]
})
export class CustomComoponentModule { }
