import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModifyPayrollComponent } from './modify-payroll/modify-payroll.component';
import { PayrollImplementationService } from '@infrastructure/repositories/payroll.repository';
import { PayrollDTO } from '@infrastructure/dto/payroll.dto';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PayrollModel } from '@domain/models/payroll/payroll.model';
import { EmployeeImplementationService } from '@infrastructure/repositories/employee.repository';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payroll-information',
  templateUrl: './payroll-information.component.html',
  styleUrls: ['./payroll-information.component.scss'],
})
export class PayrollInformationComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() employeeId: number | null = null;

  employeeInfo: any;

  dataSource: MatTableDataSource<PayrollModel> = new MatTableDataSource<PayrollModel>();

  displayedColumns: string[] = [
    'id',
    'date',
    'baseSalary',
    'deliveriesMade',
    'bonus',
    'isrWithholding',
    'pantryVoucher',
    'grossSalary',
    'netSalary',
  ];

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private payrollImplementationService: PayrollImplementationService,
    private employeeImplementationService: EmployeeImplementationService,
  ) {}

  ngOnInit(): void {
    this.loadPayrolls();
    this.loadEmployee();
  }

  ngAfterViewInit() {
    
  }

  loadEmployee() {
    if (!!this.employeeId) {
      this.employeeImplementationService.findById(
        this.employeeId
      ).subscribe(d => {
        this.employeeInfo = d;
        console.log(this.employeeInfo);
  
      });
    }
  }

  loadPayrolls() {
    if (!!this.employeeId) {
      this.payrollImplementationService.findAllByEmployeeId(
        this.employeeId
      ).subscribe(d => {
        this.dataSource = new MatTableDataSource(d);
        this.dataSource.paginator = this.paginator;

        this.paginator.pageSize = 5;
        this.dataSource.paginator?.firstPage(); // Opcional, para volver a la primera página
        this.dataSource._updateChangeSubscription(); // Actualiza la suscripción de cambios
  
      });
    }
  }

  modifyPayroll() {
    const modalRef = this.modalService.open(ModifyPayrollComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.employeeInfo = this.employeeInfo;
    modalRef.closed.subscribe(res => {
      if(res) {
        Swal.fire({
          title: 'Registrado!',
          text: 'Nomina registrada',
          icon: 'success',
        })
        this.loadPayrolls();
      }
    })
  }
}
