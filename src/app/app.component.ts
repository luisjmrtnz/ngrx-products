import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { ProductI, AppStateI } from '../models';
import { ProductActions } from '../actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Observable<ProductI[]>;

  constructor(
    private store: Store<AppStateI>,
    private productActions: ProductActions){}

  ngOnInit() {
    this.products = this.store.select(state => state.products);
  }

  onAdd(x: ProductI) {
    this.store.dispatch(this.productActions.addProduct(x));
  }

  onRemove(x: ProductI) {
    this.store.dispatch(this.productActions.deleteProduct(x));
  }
}
