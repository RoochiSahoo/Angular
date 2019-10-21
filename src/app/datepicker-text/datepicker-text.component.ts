import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-text',
  templateUrl: './datepicker-text.component.html',
  styleUrls: ['./datepicker-text.component.css']
})
export class DatepickerTextComponent implements OnInit {
date:NgbDate
  constructor() { }

  ngOnInit() {
  }
onSelect(event)
{
  console.log(event)
  this.date=event
}
}
