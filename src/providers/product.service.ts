import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/take';

/* Models */
import { ProductI, CustomProductEvent } from '../models';

export const prodTrans = (prod) => {
    let prodT: ProductI = prod.val();
    prodT.$key = prod.$key;
    return prodT;
};

@Injectable()

export class ProductService {
    fb: FirebaseListObservable<ProductI[]>;
    fbEvents: Subject<CustomProductEvent>;
    constructor(private af: AngularFire) {
        this.fbEvents = new Subject<CustomProductEvent>();
        this.initFirebase();
    }

    initFirebase() {
        this.fb = this.af.database.list('/products');
        this.fb.$ref.ref.on('child_added', (x) => { this.fbEvents.next({ product: prodTrans(x), event: 'child_added'})});
        this.fb.$ref.ref.on('child_changed', (x) => { this.fbEvents.next({ product: prodTrans(x), event: 'child_changed'})});
        this.fb.$ref.ref.on('child_changed', (x) => { this.fbEvents.next({ product: prodTrans(x), event: 'child_changed'})});
    }

    add(product: ProductI){
       return this.fb.push(product);
    }

    update(product: ProductI) {
        return this.fb.update(product.$key, product);
    }

    remove(product: ProductI)  {
        return this.fb.remove(product.$key);
    }

    getAll() {
        return this.fb;
    }

    getChanges(): Observable<CustomProductEvent> {
        return this.fbEvents.asObservable();
    }
}