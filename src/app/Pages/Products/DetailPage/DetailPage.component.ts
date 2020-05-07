import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmbryoService } from '../../../Services/Embryo.service';
import { Product } from 'src/app/AdminPanel/Interfaces/Product';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-DetailPage',
  templateUrl: './DetailPage.component.html',
  styleUrls: ['./DetailPage.component.scss'],
})
export class DetailPageComponent implements OnInit {
  id: any;
  type: any;
  apiResponse: any;
  singleProductData: any;
  productsList: any;

  product: Product;
  colorImages: Map<string, Array<{ imageUrl: string; default: boolean }>>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public embryoService: EmbryoService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.product = data.product.response;
        this.colorImages = data.product.colorImages;
        this.titleService.setTitle(this.product.name);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // public getData() {
  //   this.embryoService
  //     .getProducts()
  //     .valueChanges()
  //     .subscribe((res) => this.checkResponse(res));
  // }

  // public checkResponse(response) {
  //   this.productsList = null;
  //   this.productsList = response[this.type];
  //   for (let data of this.productsList) {
  //     if (data.id == this.id) {
  //       this.singleProductData = data;
  //       break;
  //     }
  //   }
  // }

  public addToCart(value) {
    this.embryoService.addToCart(value);
  }

  public addToWishList(value) {
    this.embryoService.addToWishlist(value);
  }
}
