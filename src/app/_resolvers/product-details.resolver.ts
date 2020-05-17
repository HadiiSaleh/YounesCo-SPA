import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../AdminPanel/Interfaces/Product';
import { ProductService } from '../Services/product.service';
import { ToastOptions, ToastaService } from 'ngx-toasta';

@Injectable({
  providedIn: 'root',
})
export class ProductsDetialsResover implements Resolve<Product> {

  constructor(
    private productsService: ProductService,
    private router: Router,
    private toastyService: ToastaService,
  ) {}



  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    return this.productsService
      .getProductById(route.params.id)
      .pipe(
        catchError(error => {
          this.router.navigate(['/products']).then(() => {
            this.toastyService.error({
              title: 'Error',
              msg: error,
              showClose: true,
              timeout: 3000,
              theme: 'material',
            });
          });
          return of(null);
        })
      );
  }
}
