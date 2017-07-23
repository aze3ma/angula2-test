import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { MainComponent } from './main/main.component';
import { RightComponent } from './main/right/right.component';
import { MiddleComponent } from './main/middle/middle.component';
import { LeftComponent } from './main/left/left.component';
import { TopComponent } from './main/shared/top/top.component';
import { SideComponent } from './main/shared/side/side.component';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: MainComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
