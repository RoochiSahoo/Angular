import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-text',
  templateUrl: './pipe-text.component.html',
  styleUrls: ['./pipe-text.component.css']
})
export class PipeTextComponent implements OnInit {
  name="ruchita sahu"
  date=new Date(1997/12/22)

  constructor() { }

  ngOnInit() {
  }

}
