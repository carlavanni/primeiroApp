import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  {
    path: 'thevampire-diaries',
    loadChildren: () => import('./series/thevampire-diaries/thevampire-diaries.module').then( m => m.ThevampireDiariesPageModule)
  },
  {
    path: 'ursinhos-carinhosos',
    loadChildren: () => import('./desenhos/ursinhos-carinhosos/ursinhos-carinhosos.module').then( m => m.UrsinhosCarinhososPageModule)
  },
  {
    path: 'georgeo-curioso',
    loadChildren: () => import('./desenhos/georgeo-curioso/georgeo-curioso.module').then( m => m.GeorgeoCuriosoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
