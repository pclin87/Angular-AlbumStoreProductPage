import { Component, OnInit } from "@angular/core";

import { Product } from "app/products";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductList implements OnInit {

    constructor(private _productService ){}

    ngOnInit(): void {
        
    }

}