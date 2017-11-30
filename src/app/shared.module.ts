import {NgModule, ModuleWithProviders} from '@angular/core';
import {MatListModule, MatSlideToggleModule,MatMenuModule,MatTooltipModule,MatButtonModule,MatSidenavModule, MatToolbarModule,MatIconModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
@NgModule({
    exports:[
        MatSidenavModule,
        MatListModule,
        MatTooltipModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        FormsModule,
        PerfectScrollbarModule
    ]
})
export class SharedModule{
    static forRoot():ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers:[]
        }
    }
}