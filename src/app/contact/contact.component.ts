import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  email: string;
  firstname: string;
  lastname: string;
  message: string;
  subject: string;
  send() {
    console.log(this.subject);
  }

}
