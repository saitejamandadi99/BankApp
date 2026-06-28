import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountComponent } from './edit-account-component';

describe('EditAccountComponent', () => {
  let component: EditAccountComponent;
  let fixture: ComponentFixture<EditAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditAccountComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
