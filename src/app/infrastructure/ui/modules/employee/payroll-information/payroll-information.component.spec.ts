import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollInformationComponent } from './payroll-information.component';

describe('PayrollInformationComponent', () => {
  let component: PayrollInformationComponent;
  let fixture: ComponentFixture<PayrollInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollInformationComponent]
    });
    fixture = TestBed.createComponent(PayrollInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
