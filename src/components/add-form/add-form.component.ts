import { Component, Output, EventEmitter } from '@angular/core';

import { ProductI } from '../../models';

@Component({
    selector: 'add-form',
    templateUrl: 'add-form.component.html'
})

export class AddFormComponent {
    @Output() action = new EventEmitter();
    newProduct: ProductI = { name: '', price: 0 };

    add() {
        this.action.emit(this.newProduct);
        this.newProduct = { name: '', price: 0 };
    }
}