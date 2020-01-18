(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Products-Products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/Products/AddProduct/AddProduct.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPanel/Products/AddProduct/AddProduct.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n   <div class=\"product-detail-page section-gap\" *ngFor=\"let detailData of data\">\r\n      <div class=\"container\">\r\n         <div fxLayout='row wrap' fxLayoutAlign=\"center center\" class=\"col-gap\">\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=90 fxFlex.lg=\"80\" fxFlex.xl=\"90\">\r\n               <div fxLayout='row wrap' class=\"col-gap position-relative\">\r\n                  <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=50 fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                     <div fxLayout='row wrap'>\r\n                        <div fxFlex.xs=\"15\" fxFlex.sm=\"15\" fxFlex.md=\"15\" fxFlex.lg=\"15\" fxFlex.xl=\"15\">\r\n                           <div class=\"product-detail-image-gallery pr-4\">\r\n                              <mat-grid-list cols=\"1\" rowHeight=\"1:1\" gutterSize=\"20px\">\r\n                                 <mat-grid-tile *ngFor=\"let img of detailData.image_gallery; let i=index\">\r\n                                    <div class=\"product-image-gallery-item add-icon\">\r\n                                       <a id=\"{{i}}_img\" class=\"p-link\" [ngClass]=\"{ 'border-active': i === 0 }\" href=\"javascript:void(0)\" (mouseenter)=\"getImagePath(img, i)\">\r\n                                       <img [src]=\"img\" alt=\"\" width=\"100\" height=\"100\">\r\n                                       </a>\r\n                                       <button class=\"add-btn\" md-mini-fab type=\"button\">\r\n                                          <label for=\"fileToUpload\">\r\n                                             <mat-icon>add</mat-icon>\r\n                                          </label>\r\n                                       </button>\r\n                                       <!-- add-btn -->\r\n                                       <input mat id=\"fileToUpload\" type=\"file\" accept=\"image/*\" style=\"display:none;\">\r\n                                    </div>\r\n                                 </mat-grid-tile>\r\n                              </mat-grid-list>\r\n                           </div>\r\n                           <!-- product-detail-image-gallery -->\r\n                        </div>\r\n                        <div fxFlex.xs=\"85\" fxFlex.sm=\"85\" fxFlex.md=\"85\" fxFlex.lg=\"85\" fxFlex.xl=\"85\" class=\"relative\" *ngIf=\"mainImgPath\">\r\n                           <embryo-ImgZoom \r\n                              [imgSrc]=\"mainImgPath\" \r\n                              imgStyle=\"width:auto; height:auto;\" \r\n                              resultStyle=\"background-repeat: no-repeat; z-index: 2; position:absolute;\r\n                              -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n                              box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); top: 0;left: 100%;\"\r\n                              lensStyle=\"width:100px; height:100px\"\r\n                              containerStyle=\"\">\r\n                           </embryo-ImgZoom>\r\n                        </div>\r\n                        <!-- relative -->\r\n                     </div>\r\n                  </div>\r\n                  <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=50 fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                     <div class=\"product-detail-content ml-3\">\r\n                        <a class=\"primary-color font-medium\" href=\"javascript:void(0)\" routerLink=\"/admin-panel/products\">Back to Product</a>\r\n                        <h3 class=\"add-text\"><input matInput formControlName=\"name\" type=\"text\" value=\"Add product Name\"></h3>\r\n                        <div class=\"product-detail-price\">\r\n                           <h4 class=\"accent-color add-text\"><input matInput  formControlName=\"price\" type=\"text\" value=\"Add Price\"></h4>\r\n                        </div>\r\n                        <ul class=\"no-style mb-4\">\r\n                           <li class=\"add-text\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                              <span class=\"font-medium\"> Availablity </span>: \r\n                              <input class=\"ml-2\" matInput  formControlName=\"availablity\" type=\"text\">\r\n                           </li>\r\n                           <li class=\"add-text\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                              <span class=\"font-medium\">Product Code </span>: \r\n                              <input class=\"ml-2\" matInput formControlName=\"product_code\" type=\"text\">\r\n                           </li>\r\n                           <li class=\"add-text\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                              <span class=\"font-medium\">Tags</span>: \r\n                              <input class=\"ml-2\" matInput formControlName=\"tags\" type=\"text\">\r\n                           </li>\r\n                        </ul>\r\n                        <div class=\"short-des\">\r\n                           <p class=\"add-text\"><textarea matInput formControlName=\"description\" value=\"Add Description\"></textarea></p>\r\n                        </div>\r\n                        <div class=\"bullets-points add-text\">\r\n                           <div class=\"font-medium\">Featured points :</div>\r\n                           <p><input matInput formControlName=\"features\" type=\"text\" value=\"Add features\"></p>\r\n                        </div>\r\n                        <div class=\"mb-3 select-group\">\r\n                           <ng-container *ngIf=\"detailData.type == 'men' || detailData.type == 'women'\">\r\n                              <div class=\"add-text add-check mb-3\">\r\n                                 <div class=\"font-medium mb-2\">Color Varients :</div>\r\n                                 <ng-container *ngFor=\"let color of colorsArray\">\r\n                                    <mat-checkbox class=\"mr-3\">{{color}}</mat-checkbox>\r\n                                 </ng-container>\r\n                              </div>\r\n                              <div class=\"add-text add-check mb-3\">\r\n                                 <div class=\"font-medium mb-2\">Size Varients :</div>\r\n                                 <ng-container *ngFor = \"let size of sizeArray\">\r\n                                    <mat-checkbox class=\"mr-3\">{{size}}</mat-checkbox>\r\n                                 </ng-container>\r\n                              </div>\r\n                           </ng-container>\r\n                           <mat-form-field class=\"add-text edit-check mb-3\">\r\n                              <div class=\"font-medium mb-2\">Total Products :</div>\r\n                              <ng-container>\r\n                                 <input type=\"number\" matInput value=\"5\"> \r\n                              </ng-container>\r\n                           </mat-form-field>\r\n                        </div>\r\n                        <div class=\"mb-5 detail-btns\">\r\n                           <button mat-raised-button color=\"accent\" class=\"button-lg mr-3\">Create</button>\r\n                           <button class=\"button-lg\" mat-raised-button>Discard</button>\r\n                        </div>\r\n                        <div fxLayoutAlign=\"start center\">\r\n                           <div class=\"mr-3\"> <span>Share Now</span></div>\r\n                           <div class=\"detail-product-share\">\r\n                              <embryo-SocialShare></embryo-SocialShare>\r\n                           </div>\r\n                           <!-- detail-product-share -->\r\n                        </div>\r\n                     </div>\r\n                     <!-- product-detail-content -->\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- product-detail-page -->\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/Products/EditProduct/EditProduct.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPanel/Products/EditProduct/EditProduct.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n   <div class=\"product-detail-page section-gap\" *ngIf=\"editProductDetail\">\r\n      <div class=\"container\">\r\n         <div fxLayout='row wrap' fxLayoutAlign=\"center center\" class=\"col-gap\">\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=90 fxFlex.lg=\"80\" fxFlex.xl=\"90\">\r\n               <div fxLayout='row wrap' class=\"col-gap position-relative\">\r\n                  <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=50 fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                     <div fxLayout='row wrap'>\r\n                        <div fxFlex.xs=\"15\" fxFlex.sm=\"15\" fxFlex.md=\"15\" fxFlex.lg=\"15\" fxFlex.xl=\"15\">\r\n                           <div class=\"product-detail-image-gallery pr-4\">\r\n                              <mat-grid-list cols=\"1\" rowHeight=\"1:1\" gutterSize=\"20px\">\r\n                                 <mat-grid-tile *ngFor=\"let img of editProductDetail?.image_gallery; let i=index\">\r\n                                    <div class=\"product-image-gallery-item edit-icon\">\r\n                                       <a id=\"{{i}}_img\" class=\"p-link\" [ngClass]=\"{ 'border-active': i === 0 }\" href=\"javascript:void(0)\" (mouseenter)=\"getImagePath(img, i)\">\r\n                                         <img [src]=\"img\" alt=\"\">\r\n                                       </a>\r\n                                       <button class=\"edit-btn\" md-mini-fab type=\"button\">\r\n                                          <label for=\"fileToUpload\"><mat-icon>edit</mat-icon></label>\r\n                                       </button>\r\n                                       <input mat id=\"fileToUpload\" type=\"file\"  accept=\"image/*\" style=\"display:none;\">\r\n                                    </div>\r\n                                 </mat-grid-tile>\r\n                              </mat-grid-list>\r\n                           </div>\r\n                           <!-- product-detail-image-gallery -->\r\n                        </div>\r\n                        <div fxFlex.xs=\"85\" fxFlex.sm=\"85\" fxFlex.md=\"85\" fxFlex.lg=\"85\" fxFlex.xl=\"85\" class=\"relative\" *ngIf=\"mainImgPath\">\r\n                           <embryo-ImgZoom \r\n                              [imgSrc]=\"mainImgPath\" \r\n                                imgStyle=\"width:auto; height:auto;\" \r\n                                resultStyle=\"background-repeat: no-repeat; z-index: 2; position:absolute;\r\n                                               -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n                                                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); top: 0;left: 100%;\"\r\n                                lensStyle=\"width:100px; height:100px\"\r\n                                containerStyle=\"\">\r\n                           </embryo-ImgZoom>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=50 fxFlex.lg=\"50\" fxFlex.xl=\"50\">\r\n                     <div class=\"product-detail-content ml-3\">\r\n                        <a class=\"primary-color font-medium\" href=\"javascript:void(0)\" routerLink=\"/admin-panel/products\">Back to Product</a>\r\n                        <h3 class=\"edit-text\"><input matInput formControlName=\"name\" type=\"text\"></h3>\r\n                        <div class=\"product-detail-price\">\r\n                           <h4 class=\"accent-color edit-text\"><input matInput  formControlName=\"price\" type=\"text\"></h4>\r\n                        </div>\r\n                        <!-- product-detail-price -->\r\n                        <ul class=\"no-style mb-4\">\r\n                           <li class=\"edit-text\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                              <span class=\"font-medium\"> Availablity </span>: \r\n                              <input class=\"ml-2\" matInput  formControlName=\"availablity\" type=\"text\">\r\n                           </li>\r\n                           <li class=\"edit-text\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                              <span class=\"font-medium\">Product Code </span>: \r\n                              <input class=\"ml-2\" matInput formControlName=\"product_code\" type=\"text\">\r\n                           </li>\r\n                           <li class=\"edit-text\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n                              <span class=\"font-medium\">Tags</span>: \r\n                              <input class=\"ml-2\" matInput formControlName=\"tags\" type=\"text\">\r\n                           </li>\r\n                        </ul>\r\n                        <div class=\"short-des\">\r\n                           <p class=\"edit-text\"><textarea matInput formControlName=\"description\"></textarea></p>\r\n                        </div>\r\n                        <!-- short-des -->\r\n                        <div class=\"bullets-points edit-text\">\r\n                           <div class=\"font-medium\">Featured points :</div>\r\n                           <p><input matInput formControlName=\"features\" type=\"text\"></p>\r\n                        </div>\r\n                        <!-- bullets-points -->\r\n                        <div class=\"mb-3 select-group\">\r\n                           <ng-container *ngIf=\"editProductDetail.type == 'men' || editProductDetail.type == 'women'\">\r\n                              <div class=\"edit-text edit-check mb-3\">\r\n                                 <div class=\"font-medium mb-2\">Color Varients :</div>\r\n                                 <ng-container *ngFor=\"let color of colorsArray\">\r\n                                 <mat-checkbox class=\"mr-3\">{{color}}</mat-checkbox>\r\n                                 </ng-container>\r\n                              </div>\r\n                              <div class=\"edit-text edit-check mb-3\">\r\n                                 <div class=\"font-medium mb-2\">Size Varients :</div>\r\n                                 <ng-container *ngFor = \"let size of sizeArray\">\r\n                                 <mat-checkbox class=\"mr-3\">{{size}}</mat-checkbox>\r\n                                 </ng-container>\r\n                              </div>\r\n                           </ng-container>\r\n                           <mat-form-field class=\"edit-text edit-check mb-3\">\r\n                              <div class=\"font-medium mb-2\">Total Products :</div>\r\n                              <ng-container>\r\n                                 <input type=\"number\" matInput value=\"5\"> \r\n                              </ng-container>\r\n                           </mat-form-field>\r\n                        </div>\r\n                        <div class=\"mb-5 detail-btns\">\r\n                           <button mat-raised-button color=\"accent\" class=\"button-lg mr-3\">Save</button>\r\n                           <button class=\"button-lg\" mat-raised-button>Discard</button>\r\n                        </div>\r\n                        <!-- detail-btns -->\r\n                        <div fxLayoutAlign=\"start center\">\r\n                           <div class=\"mr-3\"> <span>Share Now</span></div>\r\n                           <div class=\"detail-product-share\">\r\n                           <embryo-SocialShare></embryo-SocialShare>\r\n                         </div>\r\n                        </div>\r\n                     </div>\r\n                     <!-- product-detail-content -->\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- product-detail-page -->\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/Products/Products/Products.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AdminPanel/Products/Products/Products.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"py-4 pb-3\">\r\n   <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"30\" fxFlex.lg=\"30\" fxFlex.xl=\"30\">\r\n         <div class=\"pr-3\">\r\n            <div class=\"dash-title\">Search</div>\r\n         </div>\r\n      </div>\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"70\" fxFlex.lg=\"70\" fxFlex.xl=\"70\">\r\n         <div fxLayout=\"row wrap\">\r\n            <div class=\"form-group pr-3\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"calc(100% - 300px)\" fxFlex.lg=\"calc(100% - 300px)\" fxFlex.xl=\"calc(100% - 300px)\">\r\n               <mat-form-field class=\"w-100\" floatLabel=\"never\">\r\n                  <input matInput placeholder=\"Search Products\">\r\n               </mat-form-field>\r\n            </div>\r\n            <!-- form-group -->\r\n            <div class=\"contact-btn\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"300px\" fxFlex.lg=\"300px\" fxFlex.xl=\"300px\"> \r\n               <button class=\"mr-2 mb-2\" mat-raised-button color=\"primary\">Search</button>\r\n               <button mat-raised-button color=\"primary\" [routerLink]=\"['/admin-panel/product-add']\" >Add Product<mat-icon class=\"ml-2\">add</mat-icon></button>\r\n            </div>\r\n            <!-- contact-btn -->\r\n         </div>\r\n      </div>\r\n   </div>\t\t\t\r\n</mat-card>\t\r\n<div class=\"m-3\" fxLayoutAlign=\"space-between center\">\r\n   <div class=\"title\">\r\n      <h5 class=\"mb-0\">{{'Product' | translate }} {{showType | translate}}</h5>\r\n   </div>\r\n   <!-- title -->\r\n   <div class=\"product-icon\">\r\n      <button id=\"grid\" class=\"active\" mat-icon-button (click)=\"productShowType('grid')\">\r\n         <mat-icon>apps</mat-icon>\r\n      </button>\r\n      <button id=\"list\" mat-icon-button (click)=\"productShowType('list')\">\r\n         <mat-icon>list</mat-icon>\r\n      </button>\r\n   </div>\r\n   <!-- product-icon -->\r\n</div>\r\n<div class=\"filter-wrap mx-3\" fxLayout=\"row wrap\" fxLayoutGap=\"15px\">\r\n   <div>\r\n      <mat-form-field>\r\n         <mat-label>Type</mat-label>\r\n         <mat-select>\r\n            <mat-option value=\"Men\">Men</mat-option>\r\n            <mat-option value=\"Women\">Women</mat-option>\r\n            <mat-option value=\"Gadgets\">Gadgets</mat-option>\r\n         </mat-select>\r\n      </mat-form-field>\r\n   </div>\r\n   <div>\r\n      <mat-form-field>\r\n         <mat-label>Recent</mat-label>\r\n         <mat-select>\r\n            <mat-option value=\"This Week\">This Week</mat-option>\r\n            <mat-option value=\"This Month\">This Month</mat-option>\r\n            <mat-option value=\"Past Month\">Past Month</mat-option>\r\n         </mat-select>\r\n      </mat-form-field>\r\n   </div>\r\n   <div>\r\n      <mat-form-field>\r\n         <mat-label>No of Items</mat-label>\r\n         <mat-select>\r\n            <mat-option value=\"10\">10</mat-option>\r\n            <mat-option value=\"20\">20</mat-option>\r\n            <mat-option value=\"30\">30</mat-option>\r\n         </mat-select>\r\n      </mat-form-field>\r\n   </div>\r\n</div>\r\n<ng-container *ngIf=\"productsGrid && productsGrid.length >= 0; else elseBlock\">\r\n   <ng-container *ngIf=\"showType == 'list';else gridtype\">\r\n      <div fxLayout=\"row wrap\">\r\n         <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n            <div class=\"product-list\">\r\n               <mat-card class=\"pt-0\">\r\n                  <div class=\"overflow-hidden\">\r\n                     <div class=\"table-responsive-x product-list-table\">         \r\n                        <table class=\"w-100 table-scroll-wrap\" mat-table [dataSource]=\"productsList\" matSort>\r\n                           <ng-container matColumnDef=\"id\">\r\n                              <th class=\"text-nowrap px-3\" mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>\r\n                              <td class=\"text-nowrap px-3\" mat-cell *matCellDef=\"let element\">{{element.id}}</td>\r\n                           </ng-container>\r\n                            <ng-container matColumnDef=\"image\">\r\n                              <th class=\"text-nowrap px-3\" mat-header-cell *matHeaderCellDef>Image</th>\r\n                              <td class=\"text-nowrap team-images-wrap py-3 px-3\" mat-cell *matCellDef=\"let element\">\r\n                                 <img class=\"img-circle inline-block\" src=\"{{element.image}}\" width=\"30\" height=\"30\">  \r\n                              </td>\r\n                           </ng-container> \r\n                           <ng-container matColumnDef=\"name\">\r\n                              <th class=\"text-nowrap px-3\" mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n                              <td class=\"text-nowrap product-name\" mat-cell *matCellDef=\"let element\"><span>{{element.name}}</span></td>\r\n                           </ng-container>\r\n                           <ng-container matColumnDef=\"brand\">\r\n                              <th class=\"text-nowrap px-3\" mat-header-cell *matHeaderCellDef mat-sort-header>Brand</th>\r\n                              <td class=\"text-nowrap px-3\" mat-cell *matCellDef=\"let element\">{{element.brand}}</td>\r\n                           </ng-container>\r\n                           <ng-container matColumnDef=\"category\">\r\n                              <th class=\"text-nowrap px-3\" mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>\r\n                              <td class=\"text-nowrap px-3\" mat-cell *matCellDef=\"let element\">{{element.category}}</td>\r\n                           </ng-container>\r\n                            <ng-container matColumnDef=\"product_code\">\r\n                              <th class=\"text-nowrap px-3\" mat-header-cell *matHeaderCellDef mat-sort-header>Product Code</th>\r\n                              <td class=\"text-nowrap px-3\" mat-cell *matCellDef=\"let element\">{{element.product_code}}\r\n                              </td>\r\n                           </ng-container>\r\n                           <ng-container matColumnDef=\"discount_price\">\r\n                              <th class=\"text-nowrap px-3\" mat-header-cell *matHeaderCellDef mat-sort-header>Discount Price</th>\r\n                              <td class=\"text-nowrap px-3\" mat-cell *matCellDef=\"let element\">${{element.discount_price}}</td>\r\n                           </ng-container>\r\n                           <ng-container matColumnDef=\"price\">\r\n                              <th class=\"text-nowrap px-3\" mat-header-cell *matHeaderCellDef mat-sort-header>Price</th>\r\n                              <td class=\"text-nowrap px3\" mat-cell *matCellDef=\"let element\">{{element.price|currency}}</td>\r\n                           </ng-container>\r\n                           <ng-container matColumnDef=\"action\">\r\n                              <th class=\"px-3 text-nowrap\" mat-header-cell *matHeaderCellDef> Action </th>\r\n                              <td class=\"px-3 text-nowrap\" mat-cell *matCellDef=\"let element;let i = index;\">\r\n                                 <button mat-icon-button (click) =\"onEditProduct(element)\" color=\"primary\">\r\n                                    <i class=\"material-icons\">edit</i>\r\n                                 </button> \r\n                                 <button color=\"warn\" mat-icon-button (click)=\"deleteProduct(i)\">\r\n                                    <mat-icon class=\"\">delete</mat-icon>\r\n                                 </button>\r\n                              </td>\r\n                           </ng-container>     \r\n                           <tr mat-header-row *matHeaderRowDef=\"displayedProductColumns\"></tr>\r\n                           <tr mat-row *matRowDef=\"let row; columns: displayedProductColumns\"></tr>\r\n                        </table>  \r\n                     </div>\r\n                  </div>   \r\n                  <!-- product-list-tabel-->\r\n                  <mat-paginator [pageSizeOptions]=\"[15, 30, 45, 60]\"></mat-paginator>\r\n               </mat-card>\r\n            </div>\r\n            <!-- product-list-->\r\n         </div> \r\n      </div>\r\n   </ng-container>\r\n   <ng-template #gridtype>\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" *ngIf=\"productsGrid && productsGrid.length>0\">\r\n         <div fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" *ngFor=\"let product of productsGrid; let i=index;\">\r\n            <mat-card class=\"product-card\">\r\n               <a class=\"p-link\">\r\n                  <img width=\"626\" height=\"800\" mat-card-image [src] =\"product?.image\" alt=\"Photo of a Shiba Inu\">\r\n               </a>\r\n               <div class=\"wishlist-icon\">\r\n                  <a (click)=\"deleteProduct(i)\"><mat-icon> delete </mat-icon></a>\r\n               </div>\r\n               <!-- wishlist-icon-->\r\n               <mat-card-content class=\"product-content relative\">\r\n                  <h5><a class=\"title-link\">{{product?.name}}</a> </h5>\r\n                  <p class=\"category-wrap mb-2\">{{product?.category}}</p>\r\n                  <div class=\"product-price\">\r\n                     <div fxFlex fxLayoutAlign=\"space-between\">\r\n                        <h6 class=\"accent-color\">{{product?.price | currency}}</h6>\r\n                     </div>\r\n                  </div>\r\n                  <!--product-price-->\r\n                  <div class=\"m-icon\">\r\n                     <button mat-fab (click)=\"onEditProduct(product)\"><i class=\"material-icons\">edit</i></button>\r\n                  </div>\r\n                  <!-- m-icon -->\r\n               </mat-card-content>\r\n               <!-- product-content -->\r\n            </mat-card>\r\n         </div>\r\n      </div>\r\n   </ng-template>\r\n</ng-container>\r\n<ng-template #elseBlock>\r\n   <h5 class=\"ml-5\">No product found</h5>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/AdminPanel/Products/AddProduct/AddProduct.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/AdminPanel/Products/AddProduct/AddProduct.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvUHJvZHVjdHMvQWRkUHJvZHVjdC9BZGRQcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/AdminPanel/Products/AddProduct/AddProduct.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/AdminPanel/Products/AddProduct/AddProduct.component.ts ***!
  \************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.colorsArray = ["Red", "Blue", "Yellow", "Green"];
        this.sizeArray = [36, 38, 40, 42, 44, 46, 48];
        this.quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this["data"] = [
            {
                "image": "https://via.placeholder.com/625x800",
                "image_gallery": [
                    "https://via.placeholder.com/625x800",
                    "https://via.placeholder.com/625x800",
                    "https://via.placeholder.com/625x800",
                    "https://via.placeholder.com/625x800",
                    "https://via.placeholder.com/625x800"
                ]
            }
        ];
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.mainImgPath = this.data[0].image;
        this.form = this.formBuilder.group({
            name: [],
            price: [],
            availablity: [],
            product_code: [],
            description: [],
            tags: [],
            features: []
        });
    };
    /**
     * getImagePath is used to change the image path on click event.
     */
    AddProductComponent.prototype.getImagePath = function (imgPath, index) {
        document.querySelector('.border-active').classList.remove('border-active');
        this.mainImgPath = imgPath;
        document.getElementById(index + '_img').className += " border-active";
    };
    AddProductComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! raw-loader!./AddProduct.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/Products/AddProduct/AddProduct.component.html"),
            styles: [__webpack_require__(/*! ./AddProduct.component.scss */ "./src/app/AdminPanel/Products/AddProduct/AddProduct.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/AdminPanel/Products/EditProduct/EditProduct.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/AdminPanel/Products/EditProduct/EditProduct.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvUHJvZHVjdHMvRWRpdFByb2R1Y3QvRWRpdFByb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/AdminPanel/Products/EditProduct/EditProduct.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/AdminPanel/Products/EditProduct/EditProduct.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/AdminPanelService.service */ "./src/app/AdminPanel/Service/AdminPanelService.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(adminPanelService, formBuilder, route, router) {
        this.adminPanelService = adminPanelService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.colorsArray = ["Red", "Blue", "Yellow", "Green"];
        this.sizeArray = [36, 38, 40, 42, 44, 46, 48];
        this.quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.adminPanelService.editProductData) {
            this.editProductDetail = this.adminPanelService.editProductData;
            setTimeout(function () {
                _this.mainImgPath = _this.editProductDetail.image;
            }, 0);
        }
        this.route.params.subscribe(function (res) {
            _this.productId = res.id;
            _this.productType = res.type;
            _this.getEditProductDetail();
        });
        this.form = this.formBuilder.group({
            name: [],
            price: [],
            availablity: [],
            product_code: [],
            description: [],
            tags: [],
            features: []
        });
        this.getProductData();
    };
    /**
    * getImagePath is used to change the image path on click event.
    */
    EditProductComponent.prototype.getImagePath = function (imgPath, index) {
        document.querySelector('.border-active').classList.remove('border-active');
        this.mainImgPath = imgPath;
        document.getElementById(index + '_img').className += " border-active";
    };
    //getEditProductDetail method is used to get the edit product.
    EditProductComponent.prototype.getEditProductDetail = function () {
        var _this = this;
        this.productId = (this.productId) ? this.productId : 1;
        this.productId = (this.productId) ? this.productId : 'Business';
        this.adminPanelService.getProducts().valueChanges().
            subscribe(function (res) { _this.getProductEditResponse(res); });
    };
    //getProductEditResponse method is used to according to the response edit poroduct data show.
    EditProductComponent.prototype.getProductEditResponse = function (response) {
        var products = ((response.men.concat(response.women)).concat(response.gadgets)).concat(response.accessories);
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var data = products_1[_i];
            if (data.id == this.productId && data.type == this.productType) {
                this.editProductDetail = data;
                this.mainImgPath = this.editProductDetail.image;
                this.getProductData();
                break;
            }
        }
    };
    //getProductData method is used to get the product data.
    EditProductComponent.prototype.getProductData = function () {
        if (this.editProductDetail) {
            this.form.patchValue({
                name: this.editProductDetail.name,
                price: this.editProductDetail.price,
                availablity: this.editProductDetail.availablity,
                product_code: this.editProductDetail.product_code,
                description: this.editProductDetail.description,
                tags: this.editProductDetail.tags,
                features: this.editProductDetail.features
            });
        }
    };
    EditProductComponent.ctorParameters = function () { return [
        { type: _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! raw-loader!./EditProduct.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/Products/EditProduct/EditProduct.component.html"),
            styles: [__webpack_require__(/*! ./EditProduct.component.scss */ "./src/app/AdminPanel/Products/EditProduct/EditProduct.component.scss")]
        }),
        __metadata("design:paramtypes", [_Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_1__["AdminPanelServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/AdminPanel/Products/Products.module.ts":
/*!********************************************************!*\
  !*** ./src/app/AdminPanel/Products/Products.module.ts ***!
  \********************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _EditProduct_EditProduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditProduct/EditProduct.component */ "./src/app/AdminPanel/Products/EditProduct/EditProduct.component.ts");
/* harmony import */ var _AddProduct_AddProduct_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddProduct/AddProduct.component */ "./src/app/AdminPanel/Products/AddProduct/AddProduct.component.ts");
/* harmony import */ var _Global_Global_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Global/Global.module */ "./src/app/Global/Global.module.ts");
/* harmony import */ var _Products_Products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Products/Products.component */ "./src/app/AdminPanel/Products/Products/Products.component.ts");
/* harmony import */ var _Products_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Products.routing */ "./src/app/AdminPanel/Products/Products.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Products_Products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _EditProduct_EditProduct_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"], _AddProduct_AddProduct_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Products_routing__WEBPACK_IMPORTED_MODULE_11__["ProductsRoutes"]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _Global_Global_module__WEBPACK_IMPORTED_MODULE_9__["GlobalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/AdminPanel/Products/Products.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/AdminPanel/Products/Products.routing.ts ***!
  \*********************************************************/
/*! exports provided: ProductsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutes", function() { return ProductsRoutes; });
/* harmony import */ var _Products_Products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products/Products.component */ "./src/app/AdminPanel/Products/Products/Products.component.ts");
/* harmony import */ var _EditProduct_EditProduct_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProduct/EditProduct.component */ "./src/app/AdminPanel/Products/EditProduct/EditProduct.component.ts");
/* harmony import */ var _AddProduct_AddProduct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProduct/AddProduct.component */ "./src/app/AdminPanel/Products/AddProduct/AddProduct.component.ts");



var ProductsRoutes = [
    {
        path: '',
        redirectTo: 'ProductsComponent',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'product-edit',
                component: _EditProduct_EditProduct_component__WEBPACK_IMPORTED_MODULE_1__["EditProductComponent"]
            },
            {
                path: 'product-edit/:type/:id',
                component: _EditProduct_EditProduct_component__WEBPACK_IMPORTED_MODULE_1__["EditProductComponent"]
            },
            {
                path: 'product-add',
                component: _AddProduct_AddProduct_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"]
            },
            {
                path: 'products',
                component: _Products_Products_component__WEBPACK_IMPORTED_MODULE_0__["ProductsComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/AdminPanel/Products/Products/Products.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/AdminPanel/Products/Products/Products.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluUGFuZWwvUHJvZHVjdHMvUHJvZHVjdHMvUHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/AdminPanel/Products/Products/Products.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/AdminPanel/Products/Products/Products.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Service/AdminPanelService.service */ "./src/app/AdminPanel/Service/AdminPanelService.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(translate, router, adminPanelService) {
        this.translate = translate;
        this.router = router;
        this.adminPanelService = adminPanelService;
        this.showType = 'grid';
        this.displayedProductColumns = ['id', 'image', 'name', 'brand', 'category', 'product_code', 'discount_price', 'price', 'action'];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminPanelService.getProducts().valueChanges().subscribe(function (res) { return _this.getProductResponse(res); });
    };
    //getProductResponse method is used to get the response of all products.
    ProductsComponent.prototype.getProductResponse = function (response) {
        this.productsGrid = null;
        var products = ((response.men.concat(response.women)).concat(response.gadgets)).concat(response.accessories);
        this.productsGrid = products;
    };
    /**
      * productShowType method is used to select the show type of product.
      */
    ProductsComponent.prototype.productShowType = function (type) {
        var _this = this;
        this.showType = type;
        if (type == 'list') {
            document.getElementById('list').classList.add("active");
            document.getElementById('grid').classList.remove('active');
            this.productsList = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.productsGrid);
            setTimeout(function () {
                _this.productsList.paginator = _this.paginator;
                _this.productsList.sort = _this.sort;
            }, 0);
        }
        else {
            document.getElementById('grid').classList.add("active");
            document.getElementById('list').classList.remove('active');
        }
    };
    /**
      * onEditProduct method is used to open the edit page and edit the product.
      */
    ProductsComponent.prototype.onEditProduct = function (data) {
        this.router.navigate(['/admin-panel/product-edit', data.type, data.id]);
        this.adminPanelService.editProductData = data;
    };
    /*
     *deleteProduct method is used to open a delete dialog.
     */
    ProductsComponent.prototype.deleteProduct = function (i) {
        var _this = this;
        this.adminPanelService.deleteDialog("Are you sure you want to delete this product permanently?").
            subscribe(function (res) { _this.popUpDeleteUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getDeleteResponse(_this.popUpDeleteUserResponse, i); });
    };
    /**
      * getDeleteResponse method is used to delete a product from the product list.
      */
    ProductsComponent.prototype.getDeleteResponse = function (response, i) {
        if (response == "yes") {
            if (this.showType == 'grid') {
                this.productsGrid.splice(i, 1);
            }
            else if (this.showType == 'list') {
                this.productsList.data.splice(i, 1);
                this.productsList = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.productsList.data);
                this.productsList.paginator = this.paginator;
            }
        }
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_4__["AdminPanelServiceService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ProductsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ProductsComponent.prototype, "sort", void 0);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./Products.component.html */ "./node_modules/raw-loader/index.js!./src/app/AdminPanel/Products/Products/Products.component.html"),
            styles: [__webpack_require__(/*! ./Products.component.scss */ "./src/app/AdminPanel/Products/Products/Products.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _Service_AdminPanelService_service__WEBPACK_IMPORTED_MODULE_4__["AdminPanelServiceService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Products-Products-module.js.map