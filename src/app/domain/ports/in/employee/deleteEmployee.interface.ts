import { Observable } from 'rxjs';

// export abstract class DeleteEmployee {
//   abstract deleteEmployee(employeeId: number): Observable<boolean>;
// }

export interface DeleteEmployee {
  deleteEmployee(employeeId: number): Observable<boolean>;
}
