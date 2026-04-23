import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../models/order';

@Component({
  standalone: true,
  selector: 'app-pedido-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './pedido-list.html',
  styleUrls: ['./pedido-list.css'],
})
export class PedidoListComponent {
  @Input() pedidos: Order[] | null = [];
  @Output() crear = new EventEmitter<Order>();
  @Output() editar = new EventEmitter<{pedido: Order, id: number}>();
  @Output() eliminar = new EventEmitter<number>();

  nuevo: Order = {
    id: 0,
    name: '',
    total: 0
  };

  editando: boolean = false;
  editandoId: number = 0;

  crearPedido() {
    if (this.editando) {
      this.editar.emit({ pedido: this.nuevo, id: this.editandoId });
      this.cancelarEdicion();
    } else {
      this.crear.emit(this.nuevo);
      this.nuevo = { id: 0, name: '', total: 0 };
    }
  }

  editarPedido(pedido: Order, id: number) {
    this.editando = true;
    this.editandoId = id;
    this.nuevo = { ...pedido };
  }

  cancelarEdicion() {
    this.editando = false;
    this.editandoId = 0;
    this.nuevo = { id: 0, name: '', total: 0 };
  }

  eliminarPedido(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este pedido?')) {
      this.eliminar.emit(id);
    }
  }
}
