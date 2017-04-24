import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { ProductI } from '../models';

@Injectable() 

export class ProductActions {
    static ADD_PRODUCT = 'ADD_PRODUCT';
    addProduct(product: ProductI): Action {
        return {
            type: ProductActions.ADD_PRODUCT,
            payload: product
        };
    }

    static FETCH_PRODUCTS = 'FETCH_PRODUCT';
    fetchProducts(): Action {
        return {
            type: ProductActions.FETCH_PRODUCTS
        };
    }

    static UPDATE_PRODUCT = 'UPDATE_PRODUCT';
    updateProduct(product: ProductI): Action {
        return {
            type: ProductActions.UPDATE_PRODUCT,
            payload: product
        };
    }
    
    static DELETE_PRODUCT = 'DELETE_PRODUCT';
    deleteProduct(product: ProductI): Action {
        return {
            type: ProductActions.DELETE_PRODUCT,
            payload: product
        };
    }

    static FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
    fetchProductsSuccess(products: ProductI[] ): Action {
        return {
            type: ProductActions.FETCH_PRODUCTS_SUCCESS,
            payload: products
        };
    }

    static UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
    updateProductSucess(product: ProductI): Action {
        return {
            type: ProductActions.UPDATE_PRODUCT_SUCCESS,
            payload: product
        };
    }

    static DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
    deleteProductSucess(product: ProductI): Action {
        return {
            type: ProductActions.DELETE_PRODUCT_SUCCESS,
            payload: product
        };
    }
}