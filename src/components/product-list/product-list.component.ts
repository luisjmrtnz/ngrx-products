import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponent {
    @Input() products;
    @Output() action = new EventEmitter();
}