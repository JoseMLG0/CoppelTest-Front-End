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
import * as moment from 'moment';
import { PayrollBusiness } from '@domain/services/payroll.business';

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
  public payrollResume = {
    base: 0,
    bono: 0,
    isr: 0,
    vales: 0,
    subtotal: 0,
    total: 0
  };

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
      date: [moment(new Date()).format('yyyy-MM'), Validators.required],
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

    this.payrollForm.get('deliveriesMade')?.valueChanges.subscribe(m => {
      const result =PayrollBusiness.calculateMonthlySalary(this.employeeInfo, m);
      this.payrollResume.base = result[0];
      this.payrollResume.bono = result[1];
      this.payrollResume.subtotal = result[2];
      this.payrollResume.isr = result[3];
      this.payrollResume.vales = result[4];
      this.payrollResume.total = result[5];
    });
  }

  ngAfterViewInit(): void {}

  confirmUpload() {
    const dataValues = this.payrollForm.getRawValue();
    const getDateFormat = dataValues.date.split('-');
    const localDate = new Date(Number(getDateFormat[0]), Number(getDateFormat[1]), 0);

    const payroll = new PayrollModel(
      dataValues.id,
      localDate,
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
