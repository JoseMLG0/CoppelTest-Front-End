
import { CreateEmployeeUseCase } from "@application/use-case/employee/createEmployee.useCase";
import { DeleteEmployeeUseCase } from "@application/use-case/employee/deleteEmployee.useCase";
import { RetrieveEmployeeUseCase } from "@application/use-case/employee/retrieveEmployee.useCase";
import { UpdateEmployeeUseCase } from "@application/use-case/employee/updateEmployee.useCase";
import { EmployeeModel } from "@domain/models/employee/employee.model";
import { CreateEmployee } from "@domain/ports/in/employee/createEmployee.interface";
import { DeleteEmployee } from "@domain/ports/in/employee/deleteEmployee.interface";
import { RetrieveEmployee } from "@domain/ports/in/employee/retrieveEmployee.interface";
import { UpdateEmployee } from "@domain/ports/in/employee/updateEmployee.interface";
import { Observable } from "rxjs";

export class EmployeeService implements CreateEmployee, UpdateEmployee, RetrieveEmployee, DeleteEmployee {
    
    constructor(private createEmployeeUseCase: CreateEmployeeUseCase, private updateEmployeeUseCase: UpdateEmployeeUseCase, private deleteEmployeeUseCase: DeleteEmployeeUseCase, private retrieveEmployeeUseCase:RetrieveEmployeeUseCase){

    }

    public createEmployee(employee: EmployeeModel): Observable<EmployeeModel>  {
        return this.createEmployeeUseCase.createEmployee(employee);
    }

    public deleteEmployee(id: number): Observable<boolean> {
        return this.deleteEmployeeUseCase.deleteEmployee(id);
    }

    public getEmployee(id: number): Observable<EmployeeModel> {
        return this.retrieveEmployeeUseCase.getEmployee(id);
    }

    public getAllEmployees(): Observable<EmployeeModel[]> {
        return this.retrieveEmployeeUseCase.getAllEmployees();
    }

    public updateEmployee(id: number, employee: EmployeeModel): Observable<EmployeeModel> {
        return this.updateEmployeeUseCase.updateEmployee(id, employee);
    }
}