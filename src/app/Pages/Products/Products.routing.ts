import { Routes } from '@angular/router';

import { ProductsListComponent } from './ProductsList/ProductsList.component';
import { DetailPageComponent } from './DetailPage/DetailPage.component';
import { ProductsListResover } from 'src/app/_resolvers/products-list.resolver';

export const ProductsRoutes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    resolve: {products: ProductsListResover}
  },
  {
    path: ':id',
    component: DetailPageComponent,
  },
  // {
  //   path: ':category',
	//   component: ProductsListComponent,
  // },
];
