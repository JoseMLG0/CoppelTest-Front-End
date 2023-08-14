import { Observable } from 'rxjs';

// export abstract class DeleteEmployee {
//   abstract deleteEmployee(employeeId: number): Observable<boolean>;
// }

export interface DeletePayroll {
  deletePayroll(payrollId: number, employeeId: number): Observable<boolean>;
}
