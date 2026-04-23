import { Routes } from '@angular/router';
import { PedidoContainer } from './features/pedidos/pages/pedido-container/pedido-container';



export const routes: Routes = [
  {
    path: 'orders',
    component: PedidoContainer
  },
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  }
];
