import { EmployeeModel } from '@domain/models/employee/employee.model';
import { Observable } from 'rxjs';


// export abstract class CreateEmployee {
//   abstract createEmployee(employee: Employee): Observable<Employee>;
// }

export interface CreateEmployee {
  createEmployee(employee: EmployeeModel): Observable<EmployeeModel>;
}
