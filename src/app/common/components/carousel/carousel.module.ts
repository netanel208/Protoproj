import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HoverFadeDirectiveModule } from "../../hover-fade.directive";
import { CarouselComponent } from "./carousel.component";
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselItemDirective } from "./carousel-item.directive";

@NgModule({
    declarations: [
        CarouselComponent,
        CarouselItemComponent,
        CarouselItemDirective
    ],
    imports: [
        HoverFadeDirectiveModule,
        NgbModule
    ],
    exports: [
        CarouselComponent,
        CarouselItemComponent,
        CarouselItemDirective
    ]
})
export class CarouselModule { }