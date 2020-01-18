import { MainComponent } from './Main/Main.component';
import { HomeoneComponent } from './Pages/Home/HomeOne/HomeOne.component';
import { HomeTwoComponent } from './Pages/Home/HomeTwo/HomeTwo.component';
import { HomeThreeComponent } from './Pages/Home/HomeThree/HomeThree.component';
import { CartComponent } from './Pages/Cart/Cart.component';
import { NotFoundComponent } from './Pages/NotFound/NotFound.component';
export var AppRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                component: HomeoneComponent
            },
            {
                path: 'home-two',
                component: HomeTwoComponent
            },
            {
                path: 'home-three',
                component: HomeThreeComponent
            },
            {
                path: 'products', loadChildren: function () {
                    return import('./Pages/Products/Products.module').then(function (m) { return m.ProductsModule; });
                }
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'not-found',
                component: NotFoundComponent
            },
            {
                path: 'session', loadChildren: function () {
                    return import('./Pages/Session/Session.module').then(function (m) { return m.SessionModule; });
                }
            },
            {
                path: 'checkout', loadChildren: function () {
                    return import('./Pages/Checkout/Checkout.module').then(function (m) { return m.CheckoutModule; });
                }
            },
            {
                path: '', loadChildren: function () {
                    return import('./Pages/About/About.module').then(function (m) { return m.AboutModule; });
                }
            },
            {
                path: 'blogs', loadChildren: function () {
                    return import('./Pages/Blogs/Blogs.module').then(function (m) { return m.BlogsModule; });
                }
            },
            {
                path: 'account', loadChildren: function () {
                    return import('./Pages/UserAccount/UserAccount.module').then(function (m) { return m.UserAccountModule; });
                }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
//# sourceMappingURL=app-routing.js.map