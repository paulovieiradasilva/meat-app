import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

import { OrderComponent } from "./order.component";

@Injectable()
export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
  canDeactivate(
    component: OrderComponent,
    activetedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!component.isOrderCompleted()) {
      return window.confirm("Deseja desistir da compra?");
    } else {
      return true;
    }
  }
}
