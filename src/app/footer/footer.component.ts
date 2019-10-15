import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<h1>&copy; zensar online shopping</h1>
  <h2>all copyrights are reserved</h2>`,
  styles: ['h1{font-weight:normal;text-align:center;}',
            'h2{color:brown;text-align:center;}'    ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
