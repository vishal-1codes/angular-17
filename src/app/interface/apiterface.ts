// export interface productIn{
//     products:dataList[],
//     total:number,
//     skip:number,
//     limit:number
// }

// export interface cartsIn{
//     carts:dataList[],
//     total:number,
//     skip:number,
//     limit:number
// }

interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
}


export interface Cart {
    id: number;
    products: Product[];
}

interface ShoppingCart {
    carts: Cart[];
    total: number;
    skip: number;
    limit: number;
}