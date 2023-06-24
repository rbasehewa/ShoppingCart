import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableHeaderComponent } from './cart-table-header.component';

describe('CartTableHeaderComponent', () => {
  let component: CartTableHeaderComponent;
  let fixture: ComponentFixture<CartTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
