import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPayrollComponent } from './modify-payroll.component';

describe('ModifyPayrollComponent', () => {
  let component: ModifyPayrollComponent;
  let fixture: ComponentFixture<ModifyPayrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyPayrollComponent]
    });
    fixture = TestBed.createComponent(ModifyPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
