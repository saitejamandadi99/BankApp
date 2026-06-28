import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransactionByIdComponent } from './view-transaction-by-id-component';

describe('ViewTransactionByIdComponent', () => {
  let component: ViewTransactionByIdComponent;
  let fixture: ComponentFixture<ViewTransactionByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransactionByIdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTransactionByIdComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
