import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription, timer } from 'rxjs';

import { EmbryoService } from '../../../Services/Embryo.service';
import { Title } from '@angular/platform-browser';
import { CategoryService } from 'src/app/Services/category.service';
import { Category } from 'src/app/AdminPanel/Interfaces/Category';
import { ToastaService } from 'ngx-toasta';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from 'src/app/AdminPanel/Interfaces/Product';
import { Pagination } from 'src/app/AdminPanel/Interfaces/pagination';
import { PaginateOptions } from 'ngx-paginate';
import { ProductFilter } from 'src/app/AdminPanel/Interfaces/ProductFilter';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-ProductsList',
  templateUrl: './ProductsList.component.html',
  styleUrls: ['./ProductsList.component.scss'],
})
export class ProductsListComponent implements OnInit {

  categories: Category[];
  pips = true;
  products: Product[];
  tooltips = true;
  pageTitle: string;
  subPageTitle: string;

  config: any = {
    behaviour: 'drag',
    connect: true,
    start: [2, 250],
    // margin: 1,
    // range: {
    //   min: 0,
    //   max: 20
    // },
    pips: {
      mode: 'count',
      density: 2,
      values: 5,
      stepped: true
    }
  };

  paginatorOptions: PaginateOptions = {
    spanPages : 2,
    previousPage: true,
    nextPage: true,
    firstPage: true,
    lastPage: true,
    titles: {
      firstPage: 'First',
      previousPage: 'Previous',
      lastPage: 'Last',
      nextPage: 'Next',
      pageSize: 'Items per page'
    },
    // pageSizes: [{
    //   value: 5,
    //   display: '5'
    // }, {
    //   value: 10,
    //   display: '10'
    // }, {
    //   value: 15,
    //   display: '15'
    // }]
  };

  public subscribers: any = {};


  pagination: Pagination;
  productsFilter: ProductFilter = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public embryoService: EmbryoService,
    private titleService: Title,
    private categoriesService: CategoryService,
    private productService: ProductsService,
    private toastyService: ToastaService,
  ) {  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.products = data.products.result;
      this.pagination = data.products.pagination;
    }, error => {
      // this.toastyService.error(error);
      console.log('test', error);
    });


      this.categoriesService.getAllCategories().subscribe((data) => {
        this.categories = data;
        this.getPageTitle();
      }, error => {
        console.log(error);
        // this.toastyService.error('An Error accure while retriving your categories');
      });
  }

  public getPageTitle() {
    this.pageTitle = null;
    this.subPageTitle = null;

    this.pageTitle = 'Products';
    this.titleService.setTitle('Products');
  }

  public addToCart(value) {
    this.embryoService.addToCart(value);
  }

  public addToWishList(value) {
    this.embryoService.addToWishlist(value);
  }


  onSearchChange(searchValue: string) {
    this.productsFilter.search = searchValue;
    this.loadProduct(2000);
  }

  onPricesChange(event){
    this.productsFilter.minPrice = event[0];
    this.productsFilter.maxPrice = event[1];
    this.loadProduct();
  }

  orderByPrice(event) {
    this.productsFilter.orderByPrice = event.value;
    this.loadProduct();
  }


  itemsPerPage(event) {
    this.pagination.pageSize = event.value;
    this.loadProduct();
  }

  pageChanged(event: Pagination) {
    this.pagination.currentPage = event.currentPage;
    this.loadProduct();
  }

  loadProduct(d: number = 0) {
    this.productService.getAllProducts(this.pagination.currentPage, this.pagination.pageSize, this.productsFilter)
    .pipe(delay(d))
    .subscribe((data) => {
      this.products = data.result;
    }, error => {
      // this.toastyService.error(error);
      console.log(error);
    });
  }

}
