import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "../models/order";
import { ConfigService } from "../../../core/config.service";

@Injectable({ providedIn: 'root' })
export class PedidoService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {}

  listar() {
    const apiUrl = `${this.configService.getApiUrl()}${this.configService.getPedidosEndpoint()}`;
    return this.http.get<Order[]>(apiUrl);
  }

  crear(pedido: Order) {
    const apiUrl = `${this.configService.getApiUrl()}${this.configService.getPedidosEndpoint()}`;
    return this.http.post<Order>(apiUrl, pedido);
  }

  editar(pedido: Order, id: number) {
    const apiUrl = `${this.configService.getApiUrl()}${this.configService.getPedidosEndpoint()}/${id}`;
    return this.http.put<Order>(apiUrl, pedido);
  }

  eliminar(id: number) {
    const apiUrl = `${this.configService.getApiUrl()}${this.configService.getPedidosEndpoint()}/${id}`;
    return this.http.delete(apiUrl);
  }
}
