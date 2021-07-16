import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { GuestTopNavComponent } from './layout/guest/guest-top-nav/guest-top-nav.component';
import { GuestFooterComponent } from './layout/guest/guest-footer/guest-footer.component';
import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthorisedSideNavComponent } from './layout/authorised/authorised-side-nav/authorised-side-nav.component';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { DashboardModule } from './pages/user/dashboard/dashboard.module';
import { AuthorisedTopNavComponent } from './layout/authorised/authorised-top-nav/authorised-top-nav.component';
import { AuthorisedSideNavTogglerComponent } from './layout/authorised/authorised-side-nav-toggler/authorised-side-nav-toggler.component';
import { AuthGuard } from './shared/guard';


@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    GuestTopNavComponent,
    GuestFooterComponent,
    GuestLayoutComponent,
    LandingPageComponent,
    AuthorisedSideNavComponent,
    AuthorisedLayoutComponent,
    AuthorisedTopNavComponent,
    AuthorisedSideNavTogglerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
