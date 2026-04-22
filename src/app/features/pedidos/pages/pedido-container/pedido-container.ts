import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoFacade } from '../../facade/pedido.facade';
import { PedidoListComponent } from '../../components/pedido-list/pedido-list';

@Component({
  selector: 'app-pedido-container',
  standalone: true,
  imports: [CommonModule, PedidoListComponent],
  template: `
    <app-pedido-list
      [pedidos]="pedidos$ | async"
      (crear)="crear($event)">
    </app-pedido-list>
  `
})
export class PedidoContainer {

  get pedidos$() {
    return this.facade.pedidos$;
  }

  constructor(private facade: PedidoFacade) {
    this.cargar();
  }

  cargar() {
    this.facade.cargar();
  }

  crear(pedido: any) {
    console.log('Container recibe:', pedido); // debug
    this.facade.crear(pedido);
  }
}
