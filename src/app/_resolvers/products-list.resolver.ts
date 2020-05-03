import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../AdminPanel/Interfaces/Product';
import { ProductsService } from '../Services/products.service';

@Injectable()
export class ProductsListResover implements Resolve<Product[]> {
  pageNumber = 1;
  pageSize = 12;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {
    return this.productsService
      .getAllProducts(this.pageNumber, this.pageSize, null)
      .pipe(
        catchError((error) => {
          console.log(error);
          //   this.toaster.error('Problem retriving your data');
          this.router.navigate(['/home']);
          return of(null);
        })
      );
  }
}
