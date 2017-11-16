import { NgModule } from '@angular/core';

import { CdSidenavComponent } from './cd-sidenav.component';
import { SharedModule } from '../shared.module';

import {CdSidenavRoutingModule} from './cd-sidenav-routing.module';
@NgModule({
    imports: [
        SharedModule,
        CdSidenavRoutingModule
    ],
    exports: [CdSidenavComponent],
    declarations: [CdSidenavComponent]
})
export class CdSidenavModule { }
