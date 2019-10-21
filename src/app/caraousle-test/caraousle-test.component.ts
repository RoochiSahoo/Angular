import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caraousle-test',
  templateUrl: './caraousle-test.component.html',
  styleUrls: ['./caraousle-test.component.css']
})
export class CaraousleTestComponent implements OnInit {
images=[1,2,3].map(()=>`https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
