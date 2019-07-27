import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdBlogComponent } from '../cd-blog/cd-blog.component';
const routes: Routes = [
    {
        path: 'html',
        component: CdBlogComponent
    },
    {
        path: 'css',
        component: CdBlogComponent
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
