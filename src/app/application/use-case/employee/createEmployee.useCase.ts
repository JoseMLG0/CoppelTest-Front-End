import { EmployeeModel } from "@domain/models/employee/employee.model";
import { CreateEmployee } from "@domain/ports/in/employee/createEmployee.interface";
import { EmployeeRepositoryPort } from "@domain/ports/out/employeeRepositoryPort.interface";
import { Observable } from "rxjs";

export class CreateEmployeeUseCase implements CreateEmployee{

    constructor(private employeeRepositoryPort: EmployeeRepositoryPort){
    }

    public createEmployee(employee: EmployeeModel): Observable<EmployeeModel>{
        return this.employeeRepositoryPort.save(employee);
    }
}