import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { RightComponent } from './main/right/right.component';
import { MiddleComponent } from './main/middle/middle.component';
import { LeftComponent } from './main/left/left.component';
import { TopComponent } from './main/shared/top/top.component';
import { SideComponent } from './main/shared/side/side.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';


// used to create fake backend
import { fakeBackendProvider } from './helpers/fake_backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    MiddleComponent,
    LeftComponent,
    TopComponent,
    SideComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
     routing,
     FormsModule,
      HttpModule,
  ],
  providers: [AuthGuard,
        AuthenticationService,
        UserService,
        fakeBackendProvider,
         MockBackend,
         BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
