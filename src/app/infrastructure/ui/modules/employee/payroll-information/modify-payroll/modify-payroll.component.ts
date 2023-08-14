import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeModel } from '@domain/models/employee/employee.model';
import { PayrollModel } from '@domain/models/payroll/payroll.model';
import { PayrollImplementationService } from '@infrastructure/repositories/payroll.repository';
import {
  NgbActiveModal,
  NgbCalendar,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-payroll',
  templateUrl: './modify-payroll.component.html',
  styleUrls: ['./modify-payroll.component.scss'],
})
export class ModifyPayrollComponent implements OnInit, AfterViewInit {
  @Input() employeeInfo!: EmployeeModel;
  public model: NgbDateStruct | undefined;
  public date: { year: number; month: number } | undefined;

  public payrollForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private payrollImplementationService: PayrollImplementationService,
  ) {
    this.payrollForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      number: [null, Validators.required],
      rol: [null, Validators.required],
      date: [null, Validators.required],
      deliveriesMade: [null, Validators.required],
      employee: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.payrollForm.patchValue({
      name: this.employeeInfo.name,
      number: this.employeeInfo.number,
      rol: this.employeeInfo.rol,
    });
  }

  ngAfterViewInit(): void {}

  confirmUpload() {
    const dataValues = this.payrollForm.getRawValue();
    const payroll = new PayrollModel(
      dataValues.id,
      dataValues.date,
      dataValues.deliveriesMade,
      0,
      0,
      0,
      0,
      0,
      0,
      this.employeeInfo
    );
    try {
      console.log(dataValues);
      console.log(payroll, this.employeeInfo.id);
      this.payrollImplementationService.save(payroll, this.employeeInfo.id).subscribe({
        complete: () => {  },
        error: (e) => { 
          Swal.fire({
            title: 'Error!',
            text: 'No se pudo guardar la información!',
            icon: 'error',
          })
        },  
        next: (v) => { 
          this.activeModal.close(true);
         },  
    });
    } catch (error) {
      console.log(error);
    }
  }
}
