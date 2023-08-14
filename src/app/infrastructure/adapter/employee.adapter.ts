import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '@domain/models/employee/employee.model';
import { EmployeeRepositoryPort } from '@domain/ports/out/employeeRepositoryPort.interface';
import { EmployeeDTO } from '@infrastructure/dto/employee.dto';
import { EmployeeMapper } from '@infrastructure/mappers/employee.mapper';
import { Observable, map } from 'rxjs';

export class EmployeeAdapter implements EmployeeRepositoryPort {
  private apiUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) {}

  save(employee: EmployeeModel): Observable<EmployeeModel> {
    const employeeDto: EmployeeDTO = EmployeeMapper.fromDomain(employee);

    return this.http
      .post<EmployeeDTO>(this.apiUrl, employeeDto)
      .pipe(map(EmployeeMapper.toDomain));
  }

  findById(id: number): Observable<EmployeeModel> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<EmployeeDTO>(url).pipe(map(EmployeeMapper.toDomain));
  }

  findAll(): Observable<EmployeeModel[]> {
    return this.http
      .get<EmployeeDTO[]>(this.apiUrl)
      .pipe(map((employee) => employee.map(EmployeeMapper.toDomain)));
  }

  update(id: number, employee: EmployeeModel): Observable<EmployeeModel> {
    const employeeDto: EmployeeDTO = EmployeeMapper.fromDomain(employee);
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<EmployeeModel>(url, employeeDto);
  }

  deleteById(id: number): Observable<boolean> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<boolean>(url);
  }
}
