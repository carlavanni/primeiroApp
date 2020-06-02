import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeorgeoCuriosoPage } from './georgeo-curioso.page';

const routes: Routes = [
  {
    path: '',
    component: GeorgeoCuriosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeorgeoCuriosoPageRoutingModule {}
