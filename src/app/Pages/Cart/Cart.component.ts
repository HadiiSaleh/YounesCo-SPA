import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ChangeDetectorRef } from '@angular/core';

import { EmbryoService } from '../../Services/Embryo.service';
import { ProductsService } from 'src/app/Services/products.service';
import { OrderItem } from 'src/app/AdminPanel/Interfaces/OrderItem';

@Component({
  selector: 'embryo-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewChecked {
  orderItems: OrderItem[];
  quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  popupResponse: any;

  constructor(
    public embryoService: EmbryoService,
    private router: Router,
    private loadingBar: LoadingBarService,
    private cdRef: ChangeDetectorRef,
    private productService: ProductsService
  ) {}

  ngOnInit() {
     this.productService.orderItems.subscribe(data => {
        this.orderItems = data;
     });
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  public removeProduct(value: any) {
    const message = 'Are you sure you want to delete this product?';
    this.embryoService.confirmationPopup(message).subscribe(
      (res) => {
        this.popupResponse = res;
      },
      (err) => console.log(err),
      () => this.getPopupResponse(this.popupResponse, value)
    );
  }

  public getPopupResponse(response, value) {
    if (response) {
      this.productService.removeProductFromOrderItems(value);
    }
  }

  public calculateProductSinglePrice(orderItem: OrderItem, value: any) {
    let price = 0;
    orderItem.quantity = value;
    price = orderItem.unitPrice * value;
    return price;
  }

  public calculateTotalPrice() {
    let subtotal = 0;
    if (
      this.orderItems &&
      this.orderItems.length > 0
    ) {
      for (let orderItem of this.orderItems) {
        subtotal += orderItem.unitPrice * orderItem.quantity;
      }
      return subtotal;
    }
    return subtotal;
  }

  public getTotalPrice() {
    let total = 0;
    if (
      this.orderItems &&
      this.orderItems.length > 0
    ) {
      for (let orderItem of this.orderItems) {
        total += orderItem.unitPrice * orderItem.quantity;
      }
      total += this.embryoService.shipping + this.embryoService.tax;
      return total;
    }

    return total;
  }

  public updateLocalCartProduct() {
    this.embryoService.updateAllLocalCartProduct(
      this.embryoService.localStorageCartProducts
    );
    this.router.navigate(['/checkout']);
  }

  public getQuantityValue(product: OrderItem) {
    if (product.quantity) {
      return product.quantity;
    } else {
      return 1;
    }
  }
}
