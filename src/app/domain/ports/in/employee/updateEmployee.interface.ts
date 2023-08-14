import { EmployeeModel } from '@domain/models/employee/employee.model';
import { Observable } from 'rxjs';

export interface UpdateEmployee {
    updateEmployee(employeeId: number, employee: EmployeeModel): Observable<EmployeeModel>;
}