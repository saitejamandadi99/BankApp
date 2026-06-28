import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransactionByAccountIdComponent } from './view-transaction-by-account-id-component';

describe('ViewTransactionByAccountIdComponent', () => {
  let component: ViewTransactionByAccountIdComponent;
  let fixture: ComponentFixture<ViewTransactionByAccountIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransactionByAccountIdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTransactionByAccountIdComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
