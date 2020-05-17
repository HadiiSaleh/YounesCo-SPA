import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../AdminPanel/Interfaces/Product';
import { ProductService } from '../Services/product.service';
import { ToastOptions, ToastaService } from 'ngx-toasta';
import { PaginationResult } from '../AdminPanel/Interfaces/PaginationResult';

@Injectable({
  providedIn: 'root',
})
export class ProductsListResover implements Resolve<PaginationResult<Product[]>> {
  pageNumber = 1;
  pageSize = 12;

  constructor(
    private productsService: ProductService,
    private router: Router,
    private toastyService: ToastaService,
  ) {}



  resolve(route: ActivatedRouteSnapshot): Observable<PaginationResult<Product[]>> {
    return this.productsService
    .getAllProducts(this.pageNumber, this.pageSize, null)
      .pipe(
        catchError(error => {
          console.log(error);
          this.router.navigate(['/home']).then(() => {
            this.toastyService.error({
              title: 'Error',
              msg: error,
              showClose: true,
              timeout: 10000,
              theme: 'material',
            });
          });
          return of(null);
        })
      );
  }
}
