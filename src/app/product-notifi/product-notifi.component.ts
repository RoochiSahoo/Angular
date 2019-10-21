import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-notifi',
  templateUrl: './product-notifi.component.html',
  styleUrls: ['./product-notifi.component.css']
})
export class ProductNotifiComponent implements OnInit {
  @Input("parentData")
product:Product
@Output()
notify=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  sendNotification()
  {
    this.notify.emit("you will be notified when product becomes prime")
  }
}
