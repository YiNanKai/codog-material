import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Menu}from './cd-menu';
@Component({
  selector: 'cd-sidenav',
  templateUrl: './cd-sidenav.component.html',
  styleUrls: ['./cd-sidenav.component.scss']
})
export class CdSidenavComponent implements OnInit {

  blogs:Menu[] = [
    {
      name:"HTML",
      iconClass:"fa fa-html5",
      routeLink:"/html"
    },
    {
      name:"CSS",
      iconClass:"fa fa-css3",
      routeLink:"/css"
    }
  ];

  tools:Menu[] = [
    {
      name:"Music",
      iconClass:"fa fa-music",
      routeLink:"/music"
    }
  ]
  abouts:Menu[]=[
    {
      name:"About Site",
      iconClass:"fa fa-chrome",
      routeLink:"/about-site"
    },
    {
      name:"About Me",
      iconClass:"fa fa-user",
      routeLink:"/about-me"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
