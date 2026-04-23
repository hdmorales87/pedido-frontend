import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { OrderService } from "../services/order.service";
import { Order } from "../models/order";

@Injectable({ providedIn: 'root' })
export class OrderFacade {

  orders$ = new BehaviorSubject<Order[]>([]);

  constructor(private service: OrderService) {}

  load() {
    this.service.list().subscribe(data => this.orders$.next(data));
  }

  create(order: Order) {
    this.service.create(order).subscribe(() => this.load());
  }

  update(order: Order, id: number) {
    this.service.update(order, id).subscribe(() => this.load());
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.load());
  }
}
