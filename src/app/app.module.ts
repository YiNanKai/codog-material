import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// shared module
import {SharedModule} from './shared.module';

// root router
import {CdRoutingModule} from './cd-routing/cd-routing.module';
// all modules
import {CdToolbarModule} from './cd-toolbar/cd-toolbar.module';

import {CdToolMusicModule} from './cd-tool-music/cd-tool-music.module';

import {CdSidenavModule} from './cd-sidenav/cd-sidenav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,

    CdToolbarModule,
    CdToolMusicModule,
    CdRoutingModule,

    CdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
