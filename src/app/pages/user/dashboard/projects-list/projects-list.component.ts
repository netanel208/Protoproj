import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public items = [
    "//via.placeholder.com/600x400?text=2",
    "//via.placeholder.com/600x400?text=3",
    "//via.placeholder.com/600x400?text=4",
    "//via.placeholder.com/600x400?text=5",
    "//via.placeholder.com/600x400?text=6",
    "//via.placeholder.com/600x400?text=7",
    "//via.placeholder.com/600x400?text=8"
  ]

  constructor() {
    
   }

  ngOnInit(): void {
    // $('#carouselExample').on('slide.bs.carousel', this.carousel);
    $('.slick-container').slick({
      dots: true,
      // infinite: false,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

  carousel(e: any){
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
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