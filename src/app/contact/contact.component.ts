import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  disName:boolean = true;
  disAge:boolean = true;
  disEmail:boolean = true;
  disPassword:boolean = true;
  display():void{
    this.disName =false;
  }
  displayAge():void{
    this.disAge =false;
  }
  displayEmail():void{
    this.disEmail =false;
  }
  displayPass():void{
    this.disPassword =false;
  }
}
