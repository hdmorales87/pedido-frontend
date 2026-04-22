import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoListComponent } from './pedido-list';

describe('PedidoListComponent', () => {
  let component: PedidoListComponent;
  let fixture: ComponentFixture<PedidoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
