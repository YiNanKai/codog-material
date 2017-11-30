import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';


import { CdToolMusicRoutingModule } from './cd-tool-music-routing.module';
import { CdToolMusicComponent } from './cd-tool-music.component';

@NgModule({
    imports: [
        CdToolMusicRoutingModule,
        HttpModule
    ],
    exports: [
        CdToolMusicComponent
    ],
    declarations: [
        CdToolMusicComponent
    ],
    providers: [
        
    ],
})
export class CdToolMusicModule { }
