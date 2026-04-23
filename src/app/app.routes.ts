import { Routes } from '@angular/router';
import { OrderContainer } from './features/orders/pages/order-container/order-container';



export const routes: Routes = [
  {
    path: 'orders',
    component: OrderContainer
  },
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  }
];
