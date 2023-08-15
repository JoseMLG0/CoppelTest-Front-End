import { PayrollModel } from '@domain/models/payroll/payroll.model';
import { Observable } from 'rxjs';

export interface RetrievePayroll {
  getPayroll(payrollId: number, employeeId: number): Observable<PayrollModel>;
  getAllPayrollFromEmployee(employeeId: number): Observable<PayrollModel[]>;
  getall(): Observable<PayrollModel[]>;
}
