import { EmployeeModel } from '@domain/models/employee/employee.model';
import { Observable } from 'rxjs';


export interface RetrieveEmployee {
  getEmployee(employeeId: number): Observable<EmployeeModel>;
  getAllEmployees(): Observable<EmployeeModel[]>;
}
