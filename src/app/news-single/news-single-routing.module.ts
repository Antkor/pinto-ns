import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { NewsSingleComponent } from './news-single.component'

const routes: Routes = [{ path: '', component: NewsSingleComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class NewsSingleRoutingModule {}
