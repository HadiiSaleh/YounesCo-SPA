import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmbryoService } from '../../Services/Embryo.service';
import { Product } from 'src/app/AdminPanel/Interfaces/Product';
import { OrderItem } from 'src/app/AdminPanel/Interfaces/OrderItem';
import { ProductService } from 'src/app/Services/product.service';
import { ToastaService, ToastOptions } from 'ngx-toasta';

@Component({
  selector: 'embryo-ShopDetails',
  templateUrl: './ShopDetails.component.html',
  styleUrls: ['./ShopDetails.component.scss'],
})
export class ShopDetailsComponent implements OnInit {
  @Input() detailData: Product;
  @Input() colorImages: Map<
    string,
    Array<{ imageUrl: string; default: boolean }>
  >;
  @Input() currency: string;

  mainImgPath: string;
  totalPrice: any;
  type: any;
  colorsArray: string[];
  sizeArray: number[] = [36, 38, 40, 42, 44, 46, 48];
  quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  productReviews: any;
  productImages: any = [];
  quantity = 1;
  color: string;
  features: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public embryoService: EmbryoService,
    private productService: ProductService,
    private toastyService: ToastaService
  ) {}

  ngOnInit() {
    this.totalPrice = this.detailData.price;
    this.colorsArray = Object.keys(this.colorImages);
    if (this.detailData.features) {
      this.features = this.detailData.features.split(',');
    }
    this.color = this.detailData.defaultColor;
    this.changeColorImages(this.detailData.defaultColor);
  }

  ngOnChanges() {
    this.totalPrice = this.detailData.price;
    this.colorsArray = Object.keys(this.colorImages);
    this.color = this.detailData.defaultColor;
    this.changeColorImages(this.detailData.defaultColor);
  }

  changeColorImages(colorName: string) {
    this.color = colorName;
    this.productImages = this.colorImages[colorName];
    if (this.colorImages[colorName] && this.productImages.length > 0) {
      this.mainImgPath = this.colorImages[colorName].find((i) => i.default === true).imageUrl;
      this.detailData.imageUrl = this.mainImgPath;
    } else {
      this.mainImgPath = '../../../assets/images/product-fallback.jpg';
    }
  }

  checkValue() {
    if (this.quantity < 1) {
      this.quantity = 1;
    }
    this.totalPrice = this.detailData.price * this.quantity;
  }

  public getImagePath(imgPath: string, index: number) {
    document.querySelector('.border-active').classList.remove('border-active');
    this.mainImgPath = imgPath;
    document.getElementById(index + '_img').className += ' border-active';
  }

  // public reviewPopup(detailData) {
  //   let reviews: any = null;
  //   for (let review of this.productReviews) {
  //     reviews = review.user_rating;
  //   }

  //   this.embryoService.reviewPopup(detailData, reviews);
  // }

  public addToWishlist(value: any) {
    this.embryoService.addToWishlist(value);
  }

  public addToCart(value: any) {
    const toastOption: ToastOptions = {
      title: 'Adding Product To Cart',
      msg: 'Product added to cart',
      showClose: true,
      timeout: 1000,
      theme: 'material',
    };

    const orderItem: OrderItem = {};

    orderItem.product = this.detailData;
    orderItem.quantity = this.quantity;
    orderItem.totalPrice = this.totalPrice;
    orderItem.colorName = this.color;
    orderItem.unitPrice = this.detailData.price;
    this.productService.addProductToOrder(orderItem, true);
    this.toastyService.success(toastOption);
  }

  public buyNow(value: any) {
    this.embryoService.buyNow(value);
    this.router.navigate(['/checkout']);
  }
}
