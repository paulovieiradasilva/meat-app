import { Component, OnInit } from "@angular/core";
import { RadioOption } from "app/shared/radio/radio-option.model";
import { OrderService } from "./order.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { tap } from "rxjs/operators";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  //
  orderForm: FormGroup;
  delivery: number = 8;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;
  orderId: string;

  paymentOptions: RadioOption[] = [
    { label: "Dinheior", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REF" }
  ];

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.orderForm = new FormGroup(
      {
        name: new FormControl("", {
          validators: [Validators.required, Validators.minLength(5)]
        }),
        email: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.emailPattern)
        ]),
        emailConfirmation: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.emailPattern)
        ]),
        address: this.formBuilder.control("", [
          Validators.required,
          Validators.minLength(5)
        ]),
        number: this.formBuilder.control("", [
          Validators.required,
          Validators.pattern(this.numberPattern)
        ]),
        optional: this.formBuilder.control("", []),
        paymentOption: this.formBuilder.control("", [Validators.required])
      },
      { validators: [OrderComponent.equalsTo], updateOn: "blur" }
    );
  }

  // tslint:disable-next-line:member-ordering
  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get("email");
    const emailConfirmation = group.get("emailConfirmation");

    // tslint:disable-next-line:no-unused-expression
    return !email || !emailConfirmation
      ? undefined
      : email.value !== emailConfirmation.value
      ? { emailsNotMatch: true }
      : undefined;
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increase(item: CartItem) {
    this.orderService.increase(item);
  }

  decrease(item: CartItem) {
    this.orderService.decrease(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  itemsVelue(): number {
    return this.orderService.itemsVelue();
  }

  isOrderCompleted(): boolean {
    return this.orderId !== undefined;
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );
    this.orderService
      .checkOrder(order)
      .pipe(
        tap((id: string) => {
          this.orderId = id;
        })
      )
      .subscribe((orderId: string) => {
        this.router.navigate(["/order-summary"]);
        this.orderService.clear();
      });
  }
}
