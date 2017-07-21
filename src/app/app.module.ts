import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RightComponent } from './right/right.component';
import { MiddleComponent } from './middle/middle.component';
import { LeftComponent } from './left/left.component';
import { TopComponent } from './shared/top/top.component';
import { SideComponent } from './shared/side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    MiddleComponent,
    LeftComponent,
    TopComponent,
    SideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
