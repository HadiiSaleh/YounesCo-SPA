import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MainAdminPanelComponent } from './Main/Main.component';
import { CurrentUserResover } from '../_resolvers/current-user.resolver';

export const AdminPanelRoutes: Routes = [
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
            path: 'invoices', loadChildren: () =>
               import('./Invoices/Invoices.module').then(m => m.InvoicesModule)
         },
         {
            path: '', loadChildren: () =>
               import('./Products/Products.module').then(m => m.ProductsModule)
         },
         {
            path: 'account',
            loadChildren: () =>
               import('./AdminAccount/AdminAccount.module').then(m => m.AdminAccountModule)
         },
         {
            path: 'customers', loadChildren: () =>
               import('./customers/customers.module').then(m => m.CustomersModule)
         },
      ]
   }
]