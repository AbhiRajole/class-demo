import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  
  welcome : string;
  games : any
  constructor(){
      this.welcome = "Display List using ngFor in Angular 2"

      this.games = [{
          game : "Deus Ex: Mankind Divided",
          platform: " Xbox One, PS4, PC",
          release : "August 23"
      },
      {
          game : "Hue",
          platform: " Xbox One, PS4, Vita, PC",
          release : "August 23"
      },
      {
          game : "The Huntsman: Winter's Curse",
          platform: "PS4",
          release : "August 23"
      },
      {
          game : "The Huntsman: Winter's Curse",
          platform: "PS4",
          release : "August 23"
      }]
  };
  }
  


