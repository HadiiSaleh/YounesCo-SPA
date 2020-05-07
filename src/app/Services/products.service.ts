import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Product } from '../AdminPanel/Interfaces/Product';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationResult } from '../AdminPanel/Interfaces/PaginationResult';
import { ProductFilter } from '../AdminPanel/Interfaces/ProductFilter';
import { OrderItem } from '../AdminPanel/Interfaces/OrderItem';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private getProductsUrl = environment.apiUrl + 'products/GetProducts';
  private getProductByIdUrl = environment.apiUrl + 'products/GetProductById';

  private orderItemsSource = new BehaviorSubject<OrderItem[]>([]);
  private orderItemsForSave: OrderItem[] = [];
  orderItems = this.orderItemsSource.asObservable();

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
      if (productParams.search) {
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

  getProductById(productId: number) {
    const colorImages = new Map<
      string,
      Array<{ imageUrl: string; default: boolean }>
    >();
    return this.http
      .get<Product>(this.getProductByIdUrl + '/' + productId)
      .pipe(
        map((response) => {
          if (response.colors != null && response.colors.length > 0) {
            response.colors.forEach((color) => {
              colorImages[color.colorName] = color.images;
              if (color.default) {
                response.defaultColor = color.colorName;
              }
            });
          }
          return { response, colorImages };
        })
      );
  }

  addProductToOrder(orderProduct: OrderItem, fromDetailsPage: boolean) {

    const products = JSON.parse(localStorage.getItem('order_items'));
    if (products) {
      this.orderItemsForSave = products;
    }
    const product = this.orderItemsForSave.find((data) => {
      return data.product.productId === orderProduct.product.productId;
    });
    if (product) {
      if (fromDetailsPage) {
        product.quantity = orderProduct.quantity;
        product.totalPrice = orderProduct.totalPrice;
      } else {
        product.quantity++;
        product.totalPrice = product.totalPrice + product.unitPrice;
      }
    } else {
      this.orderItemsForSave.push(orderProduct);
    }
    const productsToSave = JSON.stringify(this.orderItemsForSave);
    this.orderItemsSource.next(this.orderItemsForSave);
    localStorage.setItem('order_items', productsToSave);
  }

  updateOrderProducts(orderProduct: OrderItem[]) {
    this.orderItemsSource.next(orderProduct);
    this.orderItemsForSave = [];
  }

  removeProductFromOrderItems(orderItem: OrderItem) {
    const orderItems: OrderItem[] = JSON.parse(localStorage.getItem('order_items'));

    var item = orderItems.find(o => o.product.productId === orderItem.product.productId);
    if (item !== null) {
      orderItems.splice(orderItems.indexOf(item), 1);
      localStorage.setItem('order_items', JSON.stringify(orderItems));
      this.updateOrderProducts(orderItems);
    }
  }
}
