import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdSidenavComponent } from './cd-sidenav.component';

const routes: Routes = [
    {
        path: 'menu1',
        component: CdSidenavComponent
    },
    {
        path: '',
        redirectTo: "menu1",
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
export class CdSidenavRoutingModule {

}