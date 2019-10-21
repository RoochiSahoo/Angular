import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
message:string="welcome to greeting component"

textColor="text-color"//we have used from .css in class 
textBkColor="text-bkcolor"
greetingStyle=[this.textColor,this.textBkColor]

  constructor() { }

  ngOnInit() {
  }
 sayGreet(event){
   console.log(event)//used to debug
   this.message="good morning"+event.type+" "+event.target.value
 }
 toggleColor(event){
   console.log(event)
 
 }
}
