import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '@domain/models/employee/employee.model';
import { PayrollModel } from '@domain/models/payroll/payroll.model';
import { EmployeeRepositoryPort } from '@domain/ports/out/employeeRepositoryPort.interface';
import { PayrollRepositoryPort } from '@domain/ports/out/payrollRepositoryPort.interface';
import { EmployeeDTO } from '@infrastructure/dto/employee.dto';
import { PayrollDTO } from '@infrastructure/dto/payroll.dto';
import { EmployeeMapper } from '@infrastructure/mappers/employee.mapper';
import { PayrollMapper } from '@infrastructure/mappers/payroll.mapper';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';

export class PayrollAdapter implements PayrollRepositoryPort {
  private apiUrl = `${environment.PROTOCOL}://${environment.HOST}:${environment.PORT}/employees`;
  private apiUrl2 = 'payroll';

  constructor(private http: HttpClient) {}


  save(payroll: PayrollModel, employeeId: number): Observable<PayrollModel> {
    const url = `${this.apiUrl}/${employeeId}/${this.apiUrl2}`;
    const payrollDTO: PayrollDTO = PayrollMapper.fromDomain(payroll);

    return this.http
      .post<PayrollDTO>(url, payrollDTO)
      .pipe(map(PayrollMapper.toDomain));
  }

  findById(id: number, employeeId: number): Observable<PayrollModel> {
    const url = `${this.apiUrl}/${employeeId}/${this.apiUrl2}/${id}`;

    return this.http.get<PayrollDTO>(url).pipe(map(PayrollMapper.toDomain));
  }

  findAllByEmployeeId(employeeId: number): Observable<PayrollModel[]> {
    const url = `${this.apiUrl}/${employeeId}/${this.apiUrl2}`;
    return this.http
      .get<PayrollDTO[]>(url)
      .pipe(map((payroll) => payroll.map(PayrollMapper.toDomain)));
  }

  update(id: number, payroll: PayrollModel, employeeId: number): Observable<PayrollModel> {
    const url = `${this.apiUrl}/${employeeId}/${this.apiUrl2}/${id}`;
    const payrollDTO: PayrollDTO = PayrollMapper.fromDomain(payroll);
    return this.http.put<PayrollModel>(url, payrollDTO);
  }

  deleteById(id: number, employeeId: number): Observable<boolean> {
    const url = `${this.apiUrl}/${employeeId}/${this.apiUrl2}/${id}`;
    return this.http.delete<boolean>(url);
  }
}
