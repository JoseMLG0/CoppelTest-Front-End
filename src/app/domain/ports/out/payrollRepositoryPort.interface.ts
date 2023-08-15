import { Observable } from 'rxjs';

import { PayrollModel } from '@domain/models/payroll/payroll.model';

export interface PayrollRepositoryPort {
  save(payroll: PayrollModel, employeeId: number): Observable<PayrollModel>;
  findById(id: number, employeeId: number): Observable<PayrollModel>;
  findAllByEmployeeId(employeeId: number): Observable<PayrollModel[]>;
  update(id: number, payroll: PayrollModel, employeeId: number): Observable<PayrollModel>;
  deleteById(id: number, employeeId: number): Observable<boolean>;
  findAll(): Observable<PayrollModel[]>;
}
