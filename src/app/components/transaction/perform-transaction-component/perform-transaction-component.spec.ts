import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformTransactionComponent } from './perform-transaction-component';

describe('PerformTransactionComponent', () => {
  let component: PerformTransactionComponent;
  let fixture: ComponentFixture<PerformTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformTransactionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerformTransactionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
