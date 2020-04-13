import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', redirectTo: 'countdown', pathMatch: 'full' },
  {
    path: 'countdown',
    loadChildren: () => import('./pages/countdown/countdown.module').then( m => m.CountdownPageModule)
  },
  {
    path: 'create-event',
    loadChildren: () => import('./pages/create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
