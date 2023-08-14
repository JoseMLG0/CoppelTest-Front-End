import { EmployeeModel } from '@domain/models/employee/employee.model';
import { Observable } from 'rxjs';


export interface EmployeeRepositoryPort {
  save(employee: EmployeeModel): Observable<EmployeeModel>;
  findById(id: number): Observable<EmployeeModel>;
  findAll(): Observable<EmployeeModel[]>;
  update(id: number, employee: EmployeeModel): Observable<EmployeeModel>;
  deleteById(id: number): Observable<boolean>;
}
