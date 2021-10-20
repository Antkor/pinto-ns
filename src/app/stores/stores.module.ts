import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { StoresRoutingModule } from './stores-routing.module'
import { StoresComponent } from './stores.component'

@NgModule({
  imports: [NativeScriptCommonModule, StoresRoutingModule],
  declarations: [StoresComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class StoresModule {}
