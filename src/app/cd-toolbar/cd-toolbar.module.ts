import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { CdToolbarComponent } from './cd-toolbar.component';
import {SharedModule} from '../shared.module';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [CdToolbarComponent],
  exports:[CdToolbarComponent]
})
export class CdToolbarModule { }
