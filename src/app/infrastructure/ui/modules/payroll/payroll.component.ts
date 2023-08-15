import { Component } from '@angular/core';
import { PayrollDTO } from '@infrastructure/dto/payroll.dto';
import { EmployeeImplementationService } from '@infrastructure/repositories/employee.repository';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ModifyEmployeeComponent } from '../employee/modify-employee/modify-employee.component';
import { PayrollInformationComponent } from '../employee/payroll-information/payroll-information.component';
import { PayrollImplementationService } from '@infrastructure/repositories/payroll.repository';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent {
  public payrolls$!: Observable<PayrollDTO[]>;

  displayedColumns: string[] = [
    'id',
    'date',
    'deliveriesMade',
    'grossSalary',
    'netSalary',
    'employee',
    'action',
  ];

  constructor(
    private modalService: NgbModal,
    private payrollImplementationService: PayrollImplementationService
  ) {
    this.loadEmployees();
  }

  loadEmployees(){
    this.payrolls$ = this.payrollImplementationService.findAll();
  }



  // modifyEmployee(employee?: any) {
  //   const modalRef = this.modalService.open(ModifyEmployeeComponent, {
  //     size: 'lg',
  //     backdrop: 'static',
  //     keyboard: false,
  //   });
  //   modalRef.componentInstance.employee = employee;
  //   modalRef.closed.subscribe(res => {
  //     if(res) {
  //       Swal.fire({
  //         title: 'Registrado!',
  //         text: 'Empleado registrado',
  //         icon: 'success',
  //         // confirmButtonText: 'Cool'
  //       });
  //       this.loadEmployees();
  //     }
  //   })
  // }

  // payrollInformation(employeeId: number) {
  //   const modalRef = this.modalService.open(PayrollInformationComponent, {
  //     size: 'xl',
  //     backdrop: 'static',
  //     keyboard: false,
  //   });
  //   modalRef.componentInstance.employeeId = employeeId;
  // }
}
