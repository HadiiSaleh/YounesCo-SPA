import { Routes } from '@angular/router';

import { ProductsListComponent } from './ProductsList/ProductsList.component';
import { DetailPageComponent } from './DetailPage/DetailPage.component';
import { ProductsListResover } from 'src/app/_resolvers/products-list.resolver';
import { ProductsDetialsResover } from 'src/app/_resolvers/product-details.resolver';

export const ProductsRoutes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    resolve: {products: ProductsListResover}
  },
  {
    path: ':id',
    component: DetailPageComponent,
    resolve: {product: ProductsDetialsResover}
  },
  // {
  //   path: ':category',
	//   component: ProductsListComponent,
  // },
];
