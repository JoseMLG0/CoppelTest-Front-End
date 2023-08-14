import { PayrollModel } from '@domain/models/payroll/payroll.model';
import { Observable } from 'rxjs';


export interface UpdatePayroll {
    updatePayroll(payrollId: number, payroll: PayrollModel, employeeId: number): Observable<PayrollModel>;
}