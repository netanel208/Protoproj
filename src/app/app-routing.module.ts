import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { AuthGuard } from "./shared/guard";

const routes: Routes = [
  {
    path: '',
    component: AuthorisedLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
      { path: 'dashboard', loadChildren: () => import('./pages/user/dashboard/dashboard.module').then(m => m.DashboardModule)},
    ],
    // canActivate: [AuthGuard],
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: 'home', component: LandingPageComponent, pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
