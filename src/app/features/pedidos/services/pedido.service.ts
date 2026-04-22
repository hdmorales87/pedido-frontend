import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pedido } from "../models/pedido";

@Injectable({ providedIn: 'root' })
export class PedidoService {

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Pedido[]>('http://localhost:8080/pedidos');
  }

  crear(pedido: Pedido) {
    return this.http.post<Pedido>('http://localhost:8080/pedidos', pedido);
  }
}
