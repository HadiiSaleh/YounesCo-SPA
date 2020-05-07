import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { OrderItem } from 'src/app/AdminPanel/Interfaces/OrderItem';
import { ProductsService } from 'src/app/Services/products.service';
import { Product } from 'src/app/AdminPanel/Interfaces/Product';

@Component({
  selector: 'embryo-HeaderCart',
  templateUrl: './HeaderCart.component.html',
  styleUrls: ['./HeaderCart.component.scss'],
})
export class HeaderCartComponent implements OnInit {
  @Input() currency: string;

  cartProducts: OrderItem[];
  count: number;
  mobWidth: any;
  mobScreenSize = 767;

  @Output() removeProductData: EventEmitter<any> = new EventEmitter();

  hiddenBadge = true;

  constructor(private productService: ProductsService) {
    this.mobWidth = window.screen.width;
  }

  ngOnInit() {
    this.productService.orderItems.subscribe((data) => {
      this.cartProducts = data;
      this.count = this.cartProducts.length;
    });
  }

  public confirmationPopup(orderItem: OrderItem) {
    this.removeProductData.emit(orderItem);
  }
}
