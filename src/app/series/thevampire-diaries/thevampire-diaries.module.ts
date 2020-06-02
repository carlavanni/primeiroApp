import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThevampireDiariesPageRoutingModule } from './thevampire-diaries-routing.module';

import { ThevampireDiariesPage } from './thevampire-diaries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThevampireDiariesPageRoutingModule
  ],
  declarations: [ThevampireDiariesPage]
})
export class ThevampireDiariesPageModule {}
