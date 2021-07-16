import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  userImg: string = '';
  profile = {
    first_name: "Netanel",
    last_name: "Davidov",
    job_name: "Full-Stack Developer",
    description: "HTML5, CSS, JavaScript, Angular, NodeJS"
  };

  constructor() {
    console.log("profile-details component is called");
  }

  ngOnInit(): void {
    //this.userImg = "assets/iconfinder_8_3898372.png";
  }

}
