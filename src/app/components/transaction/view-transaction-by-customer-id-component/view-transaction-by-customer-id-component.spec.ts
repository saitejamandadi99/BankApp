import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransactionByCustomerIdComponent } from './view-transaction-by-customer-id-component';

describe('ViewTransactionByCustomerIdComponent', () => {
  let component: ViewTransactionByCustomerIdComponent;
  let fixture: ComponentFixture<ViewTransactionByCustomerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransactionByCustomerIdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTransactionByCustomerIdComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
