import { Component } from '@angular/core';

@Component({
    selector: 'app-product-description',
    template: `<div class="row description">
    <div class="col-sm-2">
      <img src="assets/opacity-zero.jpg" alt="product image" />
    </div>
    <div class="col-sm-6">
      <p class="album-name">Opacity Zero</p>
      <p class="band-name">The Prependers</p>
      <p class="album-release-date">September 25, 2014</p>
    </div>
  </div>`
})

export class ProductDescriptionComponent {

}