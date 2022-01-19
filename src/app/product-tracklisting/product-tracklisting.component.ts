import { Component, OnInit } from "@angular/core";
import { Album } from "app/album";
import { ProductService } from "app/product.service";

@Component({
    selector: 'app-product-tracklisting',
    templateUrl: './product-tracklisting.html',
    styleUrls: './product-tracklisting.css'
})

export class ProductTracklisting implements OnInit {

    albumInfo: Album;

    constructor(private _productService: ProductService){}

    ngOnInit(): void {
        this._productService.getAlbum(1).subscribe(response=> this.albumInfo = response)
    }
}