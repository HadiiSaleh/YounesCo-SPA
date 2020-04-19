import { MainAdminPanelComponent } from './Main/Main.component';
export var AdminPanelRoutes = [
    {
        path: 'admin-panel',
        redirectTo: 'admin-panel/invoices',
        pathMatch: 'full',
    },
    {
        path: "admin-panel",
        component: MainAdminPanelComponent,
        children: [
            {
                path: 'invoices', loadChildren: function () {
                    return import('./Invoices/Invoices.module').then(function (m) { return m.InvoicesModule; });
                }
            },
            {
                path: '', loadChildren: function () {
                    return import('./Products/Products.module').then(function (m) { return m.ProductsModule; });
                }
            },
            {
                path: 'account',
                loadChildren: function () {
                    return import('./AdminAccount/AdminAccount.module').then(function (m) { return m.AdminAccountModule; });
                }
            }
        ]
    }
];
//# sourceMappingURL=admin-panel-routing.js.map