import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeService } from '@application/services/employee.service';
import { CreateEmployeeUseCase } from '@application/use-case/employee/createEmployee.useCase';
import { DeleteEmployeeUseCase } from '@application/use-case/employee/deleteEmployee.useCase';
import { RetrieveEmployeeUseCase } from '@application/use-case/employee/retrieveEmployee.useCase';
import { UpdateEmployeeUseCase } from '@application/use-case/employee/updateEmployee.useCase';
import { EmployeeModel } from '@domain/models/employee/employee.model';
import { EmployeeRepositoryPort } from '@domain/ports/out/employeeRepositoryPort.interface';
import { EmployeeAdapter } from '@infrastructure/adapter/employee.adapter';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeImplementationService implements EmployeeRepositoryPort {
  private employeeService: EmployeeService;

  constructor(http: HttpClient) {
    const employeePort = new EmployeeAdapter(http);
    const createE: CreateEmployeeUseCase = new CreateEmployeeUseCase(
      employeePort
    );
    const updateE: UpdateEmployeeUseCase = new UpdateEmployeeUseCase(
      employeePort
    );
    const deleteE: DeleteEmployeeUseCase = new DeleteEmployeeUseCase(
      employeePort
    );
    const retrieveE: RetrieveEmployeeUseCase = new RetrieveEmployeeUseCase(
      employeePort
    );
    this.employeeService = new EmployeeService(
      createE,
      updateE,
      deleteE,
      retrieveE
    );
  }

  save(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.employeeService.createEmployee(employee);
  }
  findById(id: number): Observable<EmployeeModel> {
    return this.employeeService.getEmployee(id);
  }
  findAll(): Observable<EmployeeModel[]> {
    return this.employeeService.getAllEmployees();
  }
  update(id: number, employee: EmployeeModel): Observable<EmployeeModel> {
    return this.employeeService.updateEmployee(id, employee);
  }
  deleteById(id: number): Observable<boolean> {
    return this.employeeService.deleteEmployee(id);
  }
}
