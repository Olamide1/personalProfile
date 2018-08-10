import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  details: any = [];
  constructor() { }

  ngOnInit() {
    this.details = [
      {
        'Header': 'Management Skills',
        'Skills': 'Co-founded Connarts NG, Managed and Cordinated Software Teams',
        'imageUrl': '../assets/images/management.jpg',
        'explanation': 'Lorem Ipsum'
      },
      {
        'Header' : 'Web Developer Skills',
        'Skills' : 'Javascript, Angular , NodeJS ,'
         + 'Vue , PHP, MSSQL',
        'imageUrl': '../assets/images/code-photo.jpg',
        'explanation': 'Lorem Ipsum'
      },
      {
        'Header': 'Mobile Dev. Skills',
        'Skills': 'Ionic Framework, Xamarin',
        'imageUrl': '../assets/images/mobile.jpg',
        'explanation': 'Lorem Ipsum'
      },
      {
        'Header': 'Language Skills',
        'Skills': 'English, French, Creole, Yoruba',
        'imageUrl': '../assets/images/language.png'
      }
    ];
  }

}
