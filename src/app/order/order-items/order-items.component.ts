import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increaseItem = new EventEmitter<CartItem>();
  @Output() decreaseItem = new EventEmitter<CartItem>();
  @Output() removeItem = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncrease(item: CartItem) {
    this.increaseItem.emit(item);
  }

  emitDecrease(item: CartItem) {
    this.decreaseItem.emit(item);
  }

  emitRemove(item: CartItem) {
    this.removeItem.emit(item);
  }

}
