import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {

    constructor(private shoppingCartService: ShoppingCartService) { }

    cartItems(): CartItem[] {
        return this.shoppingCartService.items;
    }

    increase(item: CartItem) {
        this.shoppingCartService.increase(item);
    }

    decrease(item: CartItem) {
        this.shoppingCartService.decrease(item);
    }

    remove(item: CartItem) {
        this.shoppingCartService.removeItem(item);
    }
}