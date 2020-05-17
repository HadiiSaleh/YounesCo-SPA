var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var MENUITEMS = [
    {
        state: 'admin-panel/invoices',
        name: 'Invoices',
        type: 'link',
        icon: 'recent_actors'
    },
    {
        state: 'admin-panel',
        name: 'Products',
        type: 'sub',
        icon: 'shopping_cart',
        children: [
            { state: 'products', name: 'Products', type: 'link' },
            { state: 'product-add', name: 'Product Add', type: 'link' }
        ]
    },
    {
        state: 'admin-panel/account/profile',
        name: 'Profile',
        type: 'link',
        icon: 'account_circle'
    },
    {
        state: '/home',
        name: 'Go To Site',
        type: 'link',
        icon: 'home'
    }
];
var AdminMenuItems = /** @class */ (function () {
    function AdminMenuItems() {
    }
    AdminMenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    AdminMenuItems = __decorate([
        Injectable()
    ], AdminMenuItems);
    return AdminMenuItems;
}());
export { AdminMenuItems };
//# sourceMappingURL=MenuItems.js.map