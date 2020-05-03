import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../AdminPanel/Interfaces/Product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationResult } from '../AdminPanel/Interfaces/PaginationResult';
import { ProductFilter } from '../AdminPanel/Interfaces/ProductFilter';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private getProductsUrl = environment.apiUrl + 'products/GetProducts';
  private getProductByIdUrl = '../../assets/test/products.json';

  constructor(private http: HttpClient) {}

  getAllProducts(
    page?,
    itemsPerPage?,
    productParams?: ProductFilter
  ): Observable<PaginationResult<Product[]>> {
    let params = new HttpParams();
    const productPaged = new PaginationResult<Product[]>();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (productParams != null) {
      if (productParams.minPrice) {
        params = params.append('minPrice', '' + productParams.minPrice);
      }
      if (productParams.maxPrice) {
        params = params.append('maxPrice', '' + productParams.maxPrice);
      }
      if (productParams.categoryId) {
        params = params.append('categoryId', '' + productParams.categoryId);
      }
      if (productParams.colorId) {
        params = params.append('colorId', '' + productParams.colorId);
      }
      if (productParams.orderByPrice) {
        params = params.append('orderByPrice', productParams.orderByPrice);
      }
      if(productParams.search) {
        params = params.append('search', productParams.search);
      }
    }

    return this.http
      .get<Product[]>(this.getProductsUrl, { observe: 'response', params })
      .pipe(
        map((response) => {
          productPaged.result = response.body;
          if (response.headers.get('Pagination') != null) {
            productPaged.pagination = JSON.parse(
              response.headers.get('Pagination')
            );
          }
          return productPaged;
        })
      );
  }

  getProductById(id: number) {
    return this.http.get(this.getProductByIdUrl).pipe(
      map((response: Product[]) => {
        const product = response.filter((p) => p.productId === id);
        return product;
      })
    );
  }
}
