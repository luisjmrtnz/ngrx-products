import { Component, OnInit } from '@angular/core';

import { ProductService } from '../providers';
import { ProductI } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: ProductI[];

  constructor(private ps: ProductService){}

  ngOnInit() {
    this.ps.getAll().subscribe(products => this.products = products);
  }

  onAdd(p: ProductI) {
    this.ps.add(p).catch(a => console.log(a));
  }
}
