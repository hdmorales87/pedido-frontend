import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PedidoService } from "../services/pedido.service";
import { Pedido } from "../models/pedido";

@Injectable({ providedIn: 'root' })
export class PedidoFacade {

  pedidos$ = new BehaviorSubject<Pedido[]>([]);

  constructor(private service: PedidoService) {}

  cargar() {
    this.service.listar().subscribe(data => this.pedidos$.next(data));
  }

  crear(pedido: Pedido) {
    this.service.crear(pedido).subscribe(() => this.cargar());
  }
}