import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CdSidenavComponent } from './cd-sidenav.component'
import { SharedModule } from '../shared.module'
import { CdBlogComponent } from '../cd-blog/cd-blog.component'
import { CdSidenavRoutingModule } from './cd-sidenav-routing.module'

// import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//     suppressScrollX: true
//   };
@NgModule({
  imports: [SharedModule, CommonModule, CdSidenavRoutingModule],
  exports: [CdSidenavComponent],
  declarations: [CdSidenavComponent, CdBlogComponent]
  // providers: [
  //     {
  //       provide: PERFECT_SCROLLBAR_CONFIG,
  //       useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  //     }
  //   ]
})
export class CdSidenavModule {}
