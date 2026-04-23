import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PedidoService } from "../services/pedido.service";
import { Order } from "../models/order";

@Injectable({ providedIn: 'root' })
export class PedidoFacade {

  pedidos$ = new BehaviorSubject<Order[]>([]);

  constructor(private service: PedidoService) {}

  cargar() {
    this.service.listar().subscribe(data => this.pedidos$.next(data));
  }

  crear(pedido: Order) {
    this.service.crear(pedido).subscribe(() => this.cargar());
  }

  editar(pedido: Order, id: number) {
    this.service.editar(pedido, id).subscribe(() => this.cargar());
  }

  eliminar(id: number) {
    this.service.eliminar(id).subscribe(() => this.cargar());
  }
}