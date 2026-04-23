import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "../models/order";
import { ConfigService } from "../../../core/config.service";

@Injectable({ providedIn: 'root' })
export class OrderService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {}

  list() {
    const apiUrl = `${this.configService.getApiUrl()}${this.configService.getOrdersEndpoint()}`;
    return this.http.get<Order[]>(apiUrl);
  }

  create(order: Order) {
    const apiUrl = `${this.configService.getApiUrl()}${this.configService.getOrdersEndpoint()}`;
    return this.http.post<Order>(apiUrl, order);
  }

  update(order: Order, id: number) {
    const apiUrl = `${this.configService.getApiUrl()}${this.configService.getOrdersEndpoint()}/${id}`;
    return this.http.put<Order>(apiUrl, order);
  }

  delete(id: number) {
    const apiUrl = `${this.configService.getApiUrl()}${this.configService.getOrdersEndpoint()}/${id}`;
    return this.http.delete(apiUrl);
  }
}
