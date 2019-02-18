import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Observable } from 'rxjs/Observable';
import { Order, OrderItem } from './order.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import { MEAT_API } from '../../app.api';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class OrderService {

    constructor(
        private shoppingCartService: ShoppingCartService,
        private http: Http
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
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
            .map(response => response.json()).catch(ErrorHandler.hasError)
    }

    clear() {
        this.shoppingCartService.clear();
    }
}