import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { DashboardComponent } from './dashboard.component';
import { ProfileDetailsComponent } from "./profile-details/profile-details.component";
import { HeaderComponent } from './header/header.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectComponent } from './project/project.component';
import { CarouselComponent } from 'src/app/common/components/carousel/carousel.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CarouselModule } from 'src/app/common/index';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileDetailsComponent,
    HeaderComponent,
    ProjectsListComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // CarouselModule,
    // IvyCarouselModule,
    // SlickCarouselModule,
    // NgbModule
  ]
})
export class DashboardModule { }