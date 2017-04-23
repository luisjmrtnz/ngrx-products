import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent {
    @Input() products;
    @Output() action = new EventEmitter();
}