import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  subsections = [
    {
      title: 'motivation',
      img: './assets/motivation.jpg',
      description: 'ngGirls aims to introduce women to the world of technology and increase the diversity. Angular is a great technology to start with. We believe this is a win-win situation!'
    },
    {
      title: 'operation',
      img: './assets/operation.jpg',
      description: 'We plan various events and activities in which the participants build and deploy a web application with Angular. We offer guidance to help finding a job in front end development.'
    },
    {
      title: 'participation',
      img: './assets/participation.jpg',
      description: "If you're a committed, motivated woman who wants to step into the Web Development world - your place is with us! Want to help? Please get in touch!"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
