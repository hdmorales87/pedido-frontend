import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoContainer } from './pedido-container';

describe('PedidoContainer', () => {
  let component: PedidoContainer;
  let fixture: ComponentFixture<PedidoContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
