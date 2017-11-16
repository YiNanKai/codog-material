import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';


const routes:Routes = [

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
        useHash: true
    })
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class CdRoutingModule { }
