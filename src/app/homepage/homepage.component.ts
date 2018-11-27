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
        'Skills': 'Co-founded Placeholder Limited,School Of Doers',
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
        'Header': 'Business Consultancy',
        'Skills': 'Business Development, Strategy, Business Model definition and Creation',
        'imageUrl': '../assets/images/mobile.jpg',
        'explanation': 'Lorem Ipsum'
      },
      {
        'Header': 'Language Skills',
        'Skills': 'English, French, Creole, Yoruba, Hola in Spanish, and mini KSwahili',
        'imageUrl': '../assets/images/language.png'
      }
    ];
  }

}
