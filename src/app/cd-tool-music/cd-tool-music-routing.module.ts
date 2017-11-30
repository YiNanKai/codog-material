import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdToolMusicComponent } from './cd-tool-music.component';
const routes: Routes = [
    {
        path: 'music',
        component: CdToolMusicComponent
    },
    {
        path: '',
        redirectTo: "music",
        pathMatch: "full"
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CdToolMusicRoutingModule {

}