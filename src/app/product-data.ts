import { Product } from './product';

export class ProductData {
     productList:Product[]=[
        {
            id:101,
            name:"tv",
            brand:"lg",
            price:1800
        },{
            id:102,
            name:"Mobile",
            brand:"Samsung",
            price:1800
        },{
            id:103,
            name:"refrigerator",
            brand:"whirlpool",
            price:1300
        },
        {
            id:103,
            name:"refrigerator",
            brand:"whirlpool",
            price:1300
        }
    ];
   
    getProductList():Product[]
    {
        return this.productList;
    }
} 
