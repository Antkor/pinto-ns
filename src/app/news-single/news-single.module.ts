import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NewsRoutingModule } from '../news/news-routing.module'

import { NewsSingleRoutingModule } from './news-single-routing.module'
import { NewsSingleComponent } from './news-single.component'

@NgModule({
  imports: [NativeScriptCommonModule, NewsRoutingModule],
  declarations: [NewsSingleComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NewsSingleModule {}
