import { Injectable } from '@angular/core';
import { Effect, toPayload, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { ProductService } from '../providers';
import { ProductI, CustomProductEvent } from '../models';
import { ProductActions } from '../actions';

@Injectable() 

export class ProductEffects {
    constructor(
        private actions$: Actions,
        private fb: ProductService,
        private productActions: ProductActions
    ) {}

    @Effect({ dispatch: false }) fetchProducts$ = this.actions$
        .ofType(ProductActions.FETCH_PRODUCTS)
        .switchMap(() => this.fb.getAll()
                .map(products => this.productActions.fetchProductsSuccess(products))
        );
    
    @Effect() changedProduct$ = this.fb.getChanges()
        .map((change: CustomProductEvent) => {
            if(change.event === 'child_removed') {
                return this.productActions.deleteProductSucess(change.product);
            }else {
                return this.productActions.updateProductSucess(change.product);
            }
        });

    @Effect({ dispatch: false }) addProduct$ = this.actions$
        .ofType(ProductActions.ADD_PRODUCT)
        .map(toPayload)
        .switchMap( product => this.fb.add(product));
    
    @Effect({ dispatch: false }) deleteProduct$ = this.actions$
        .ofType(ProductActions.DELETE_PRODUCT)
        .map(toPayload)
        .switchMap( product => this.fb.remove(product));
}