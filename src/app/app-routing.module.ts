import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { ppid } from 'process';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPagePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./user-info/user-info.module').then(m => m.UserInfoPageModule)
  },
  {
    path:'signup',
    loadChildren: () => import('./sign-up/sign-up.module').then(m=>m.SignUpModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
