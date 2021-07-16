import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-footer',
  templateUrl: './guest-footer.component.html',
  styleUrls: ['./guest-footer.component.scss']
})
export class GuestFooterComponent implements OnInit {

  constructor() {
    console.log("Guest footer component is called");
   }

  ngOnInit() {
  }

}
