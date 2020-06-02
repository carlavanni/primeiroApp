import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeorgeoCuriosoPageRoutingModule } from './georgeo-curioso-routing.module';

import { GeorgeoCuriosoPage } from './georgeo-curioso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeorgeoCuriosoPageRoutingModule
  ],
  declarations: [GeorgeoCuriosoPage]
})
export class GeorgeoCuriosoPageModule {}
