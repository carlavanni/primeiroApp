import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgatePageRoutingModule } from './resgate-routing.module';

import { ResgatePage } from './resgate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgatePageRoutingModule
  ],
  declarations: [ResgatePage]
})
export class ResgatePageModule {}
