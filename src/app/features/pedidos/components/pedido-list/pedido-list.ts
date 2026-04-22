import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../../models/pedido';

@Component({
  standalone: true,
  selector: 'app-pedido-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './pedido-list.html',
  styleUrls: ['./pedido-list.css'],
})
export class PedidoListComponent {
  @Input() pedidos: Pedido[] | null = [];
  @Output() crear = new EventEmitter<Pedido>();

nuevo: Pedido = {
  nombre: '',
  total: 0
};

crearPedido() {
  this.crear.emit(this.nuevo);
  this.nuevo = { nombre: '', total: 0 };
}
}
