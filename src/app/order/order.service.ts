import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Observable } from 'rxjs/Observable';
import { Order, OrderItem } from './order.model';
import { HttpClient } from '@angular/common/http';
import { MEAT_API } from '../../app.api';

@Injectable()
export class OrderService {

    constructor(
        private shoppingCartService: ShoppingCartService,
        private http: HttpClient
    ) { }

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

    itemsVelue(): number {
        return this.shoppingCartService.total();
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order).map(order => order.id);
    }

    clear() {
        this.shoppingCartService.clear();
    }
}