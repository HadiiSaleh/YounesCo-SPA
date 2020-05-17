import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { ProductService } from 'src/app/Services/product.service';
import { ProductFilter } from '../../Interfaces/ProductFilter';
import { ToastOptions, ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsList: any;
  productsGrid: any;
  popUpDeleteUserResponse: any;
  showType = 'grid';
  displayedProductColumns: string[] = [
    'id',
    'image',
    'name',
    // 'brand',
    // 'category',
    // 'product_code',
    'discount_price',
    'price',
    'action',
  ];

  productsFilter: ProductFilter = {};

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public translate: TranslateService,
    private router: Router,
    private adminPanelService: AdminPanelServiceService,
    private productService: ProductService,
    private toasterService: ToastaService
  ) {}

  ngOnInit() {
    this.productService
      .getAllProducts()
      .subscribe((res) => this.getProductResponse(res));
  }

  //getProductResponse method is used to get the response of all products.
  public getProductResponse(response) {
    this.productsGrid = null;
    const products = response.result;
    this.productsGrid = products;
  }

  /**
   * productShowType method is used to select the show type of product.
   */
  productShowType(type) {
    this.showType = type;
    if (type === 'list') {
      document.getElementById('list').classList.add('active');
      document.getElementById('grid').classList.remove('active');
      this.productsList = new MatTableDataSource(this.productsGrid);
      setTimeout(() => {
        this.productsList.paginator = this.paginator;
        this.productsList.sort = this.sort;
      }, 0);
    } else {
      document.getElementById('grid').classList.add('active');
      document.getElementById('list').classList.remove('active');
    }
  }

  /**
   * onEditProduct method is used to open the edit page and edit the product.
   */
  onEditProduct(data) {
    this.router.navigate(['/admin-panel/product-edit', data.type, data.id]);
    this.adminPanelService.editProductData = data;
  }

  /*
   *deleteProduct method is used to open a delete dialog.
   */
  deleteProduct(product, i) {
    const toastOption: ToastOptions = {
      title: 'Product deleted succesfully',
      showClose: true,
      timeout: 5000,
      msg: product.name + ' was deleted succesfully',
      theme: 'material',
    };
    this.adminPanelService
      .deleteDialog('Are you sure you want to delete this product permanently?')
      .subscribe(
        (res) => {
          this.popUpDeleteUserResponse = res;
          this.toasterService.info(toastOption);
        },
        (err) => console.log(err),
        () => this.getDeleteResponse(this.popUpDeleteUserResponse, product, i)
      );
  }

  /**
   * getDeleteResponse method is used to delete a product from the product list.
   */
  getDeleteResponse(response: string, product, i) {
    if (response === 'yes') {
      if (this.showType === 'grid') {
        this.productService.deleteProduct(product.productId).subscribe(
          () => {
            this.productsGrid.splice(i, 1);
          },
          (error) => {}
        );
      } else if (this.showType === 'list') {
        this.productService.deleteProduct(product.productId).subscribe(() => {
          this.productsList.data.splice(i, 1);
          this.productsList = new MatTableDataSource(this.productsList.data);
          this.productsList.paginator = this.paginator;
        });
      }
    }
  }

  onPageChange(event) {
    this.loadProduct();
  }

  loadProduct() {
    this.productService
      .getAllProducts(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize,
        this.productsFilter
      )
      .subscribe((res) => this.getProductResponse(res));
  }
}
