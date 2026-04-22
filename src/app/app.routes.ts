import { Routes } from '@angular/router';
import { PedidoContainer } from './features/pedidos/pages/pedido-container/pedido-container';



export const routes: Routes = [
  {
    path: 'pedidos',
    component: PedidoContainer
  },
  {
    path: '',
    redirectTo: 'pedidos',
    pathMatch: 'full'
  }
];
