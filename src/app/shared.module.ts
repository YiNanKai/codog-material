import {NgModule} from '@angular/core';
import {MatSlideToggleModule,MatMenuModule,MatTooltipModule,MatButtonModule,MatSidenavModule, MatToolbarModule,MatIconModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
@NgModule({
    exports:[
        MatTooltipModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        FormsModule
    ]
})
export class SharedModule{}