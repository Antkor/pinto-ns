import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { AuthenticationGuard } from './common/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('~/app/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule), 
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'news-single',
    loadChildren: () => import('~/app/news-single/news-single.module').then((m) => m.NewsSingleModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'news',
    loadChildren: () => import('~/app/news/news.module').then((m) => m.NewsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'stores',
    loadChildren: () => import('~/app/stores/stores.module').then((m) => m.StoresModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('~/app/about/about.module').then((m) => m.AboutModule),
    canActivate: [AuthenticationGuard]
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
