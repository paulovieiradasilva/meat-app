import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";

import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { LeaveOrderGuard } from "./leave-order.guard";

const ROUTES: Routes = [
  { path: "", component: OrderComponent, canDeactivate: [LeaveOrderGuard] }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
  declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
  exports: []
})
export class OrderModule {}
