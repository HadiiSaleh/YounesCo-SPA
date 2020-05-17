import { ProductsListComponent } from './ProductsList/ProductsList.component';
import { DetailPageComponent } from './DetailPage/DetailPage.component';
export var ProductsRoutes = [
    {
        path: '',
        component: ProductsListComponent
    },
    {
        path: ':type/:id',
        component: DetailPageComponent
    },
    {
        path: ':type',
        component: ProductsListComponent
    }
];
//# sourceMappingURL=Products.routing.js.map