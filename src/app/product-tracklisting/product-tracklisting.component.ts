import { Component, OnInit } from "@angular/core";
import { Album } from "../album";
import { ProductService } from "../product.service";

@Component({
    selector: 'app-product-tracklisting',
    templateUrl: './product-tracklisting.html',
    styleUrls: ['./product-tracklisting.css']
})

export class ProductTracklistingComponent implements OnInit {

    albumInfo: Album;
    constructor(private _productService: ProductService) {}

    ngOnInit(){
        this._productService.getAlbum(1).subscribe(response => this.albumInfo = response)
    }
}