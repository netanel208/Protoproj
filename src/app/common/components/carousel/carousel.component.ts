import { Component, ContentChildren, NgModule, OnInit, QueryList } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    $('#carouselExample').on('slide.bs.carousel', this.carousel);
  }

  carousel(e: any){
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
  }
}