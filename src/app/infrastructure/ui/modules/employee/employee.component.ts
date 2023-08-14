import { Component } from '@angular/core';
import { EmployeeDTO, EmployeeInt } from '@infrastructure/dto/employee.dto';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayrollInformationComponent } from './payroll-information/payroll-information.component';
import { EmployeeImplementationService } from '@infrastructure/repositories/employee.repository';
import { Observable, interval, shareReplay, switchMap } from 'rxjs';
import Swal from 'sweetalert2';

const ELEMENT_DATA: EmployeeInt[] = [
  {
    id: 1,
    name: 'Jose',
    number: '12342',
    rol: 'Chofer',
    baseSalary: 1,
    active: true,
    creationDate: new Date(),
  },
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  public employees$!: Observable<EmployeeDTO[]>;

  displayedColumns: string[] = [
    'id',
    'name',
    'number',
    'rol',
    'creationDate',
    'action',
  ];
  dataSource = ELEMENT_DATA;

  constructor(
    private modalService: NgbModal,
    private employeeImplementationService: EmployeeImplementationService
  ) {
    this.loadEmployees();
  }

  loadEmployees(){
    this.employees$ = this.employeeImplementationService.findAll();
  }



  modifyEmployee(employee?: any) {
    const modalRef = this.modalService.open(ModifyEmployeeComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.employee = employee;
    modalRef.closed.subscribe(res => {
      if(res) {
        Swal.fire({
          title: 'Registrado!',
          text: 'Empleado registrado',
          icon: 'success',
          // confirmButtonText: 'Cool'
        });
        this.loadEmployees();
      }
    })
  }

  payrollInformation(employeeId: number) {
    const modalRef = this.modalService.open(PayrollInformationComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.employeeId = employeeId;
  }
}
