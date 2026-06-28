import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookComponent } from './passbook-component';

describe('PassbookComponent', () => {
  let component: PassbookComponent;
  let fixture: ComponentFixture<PassbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassbookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassbookComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
