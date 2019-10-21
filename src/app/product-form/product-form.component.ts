import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
product:Product={productId:0,name:"tv",brand:"lg",price:1000}


  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.product)
  }
}
