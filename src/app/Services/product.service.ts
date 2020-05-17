import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { Product } from '../AdminPanel/Interfaces/Product';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationResult } from '../AdminPanel/Interfaces/PaginationResult';
import { ProductFilter } from '../AdminPanel/Interfaces/ProductFilter';
import { OrderItem } from '../AdminPanel/Interfaces/OrderItem';
import { ToastOptions } from 'ngx-toasta';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private getProductsUrl = environment.apiUrl + 'products/GetProducts';
  private getProductByIdUrl = environment.apiUrl + 'products/GetProductById';
  private createProductUrl = environment.apiUrl + 'products/CreateProduct';
  private deleteProductUrl = environment.apiUrl + 'products/DeleteProduct';
  private createImagesForProduct = environment.apiUrl + 'images/UploadProductImages';

  private orderItemsSource = new BehaviorSubject<OrderItem[]>([]);
  private orderItemsForSave: OrderItem[] = [];
  orderItems = this.orderItemsSource.asObservable();

  public uploadingImages = false;

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
      if (productParams.orderByPrice) {
        params = params.append('orderByPrice', productParams.orderByPrice);
      }

      if (productParams.colorsId !== null && productParams.colorsId !== undefined && productParams.colorsId.length > 0) {
        params = params.append('colorsId', productParams.colorsId.join(','));
        }
      if (productParams.categoriesId !== null && productParams.categoriesId !== undefined && productParams.categoriesId.length > 0) {
        params = params.append('categoriesId', productParams.categoriesId.join(','));
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
          if (response.color != null) {
            colorImages[response.color.colorName] = response.images;
            if (response.color.default) {
              response.defaultColor = response.color.colorName;
            }
            return { response, colorImages };
          }
        })
      );
  }

  deleteProduct(productId: number) {
    return this.http.delete(this.deleteProductUrl + '/' + productId);
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
    return of(null);
  }


  createProduct(product: any, images: File[]) {
    return this.http.post(this.createProductUrl, product).pipe(
      switchMap((resp: Product) => {

        this.uploadingImages = true;
        const colorId = resp.color.colorId;
        const productId = resp.productId;
        const image = new FormData();

        image.append('productId', `${productId}`);
        image.append('colorId', `${colorId}`);
        for (let index = 0; index < images.length; index++) {
          image.append('files', images[index]);
        }



        return this.http.post(`${this.createImagesForProduct}`, image)
        .pipe(map(
          () => {
            this.uploadingImages = false;
          }
        ));
    })
    );
  }
}
