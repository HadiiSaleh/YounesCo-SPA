import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/AdminPanel/Interfaces/Product';

@Component({
  selector: 'embryo-ProductGrid',
  templateUrl: './ProductGrid.component.html',
  styleUrls: ['./ProductGrid.component.scss'],
})
export class ProductGridComponent implements OnInit {
  @Input() products: Product[];

  @Input() currency: string;

  @Input() gridLength: any;

  @Input() gridThree = false;

  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  @Output() addToWishList: EventEmitter<any> = new EventEmitter();

  loaded = false;
  lg = 25;
  xl = 25;

  trackByObjectID(index, hit) {
    return hit.objectID;
  }

  constructor() {}

  ngOnInit() {
    if (this.gridThree) {
      this.lg = 33;
      this.xl = 33;
    }
  }

  public addToCartProduct(value: any) {
    this.addToCart.emit(value);
  }

  public onLoad() {
    this.loaded = true;
  }

  public productAddToWishlist(value: any, parentClass) {
    if (
      !document
        .getElementById(parentClass)
        .classList.contains('wishlist-active')
    ) {
      let element = (document.getElementById(parentClass).className +=
        ' wishlist-active');
    }
    this.addToWishList.emit(value);
  }

  public checkCartAlready(singleProduct) {
    let products = JSON.parse(localStorage.getItem('order_items')) || [];
    if (!products.some((item) => item.product.name === singleProduct.name)) {
      return true;
    }
  }
}
