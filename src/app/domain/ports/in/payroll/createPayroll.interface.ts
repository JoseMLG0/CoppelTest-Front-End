import { Observable } from 'rxjs';
import { PayrollModel } from '@domain/models/payroll/payroll.model';
import { EmployeeModel } from '@domain/models/employee/employee.model';

// export abstract class CreateEmployee {
//   abstract createEmployee(employee: Employee): Observable<Employee>;
// }

export interface CreatePayroll {
  createPayroll(payroll: PayrollModel, employeeId: number): Observable<PayrollModel>;
}
