import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFacade } from '../../facade/order.facade';
import { OrderListComponent } from '../../components/order-list/order-list';


@Component({
  selector: 'app-order-container',
  standalone: true,
  imports: [CommonModule, OrderListComponent],
  template: `
    <app-order-list
      [orders]="orders$ | async"
      (create)="create($event)"
      (update)="update($event)"
      (delete)="delete($event)">
    </app-order-list>
  `
})
export class OrderContainer {

  get orders$() {
    return this.facade.orders$;
  }

  constructor(private facade: OrderFacade) {
    this.load();
  }

  load() {
    this.facade.load();
  }

  create(order: any) {
    console.log('Container receives:', order); // debug
    this.facade.create(order);
  }

  update(event: {order: any, id: number}) {
    console.log('Container receives update:', event); // debug
    this.facade.update(event.order, event.id);
  }

  delete(id: number) {
    console.log('Container receives delete:', id); // debug
    this.facade.delete(id);
  }
}
