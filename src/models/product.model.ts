export interface ProductI {
    name: string;
    price: number;
    key?: string;
}

export interface CustomProductEvent {
    product: ProductI;
    event: string;
}