import { EmployeeModel } from "@domain/models/employee/employee.model";
import { UpdateEmployee } from "@domain/ports/in/employee/updateEmployee.interface";
import { EmployeeRepositoryPort } from "@domain/ports/out/employeeRepositoryPort.interface";
import { Observable } from "rxjs";

export class UpdateEmployeeUseCase implements UpdateEmployee{

    constructor(private employeeRepositoryPort: EmployeeRepositoryPort){
    }

    public updateEmployee(employeeId: number, employee: EmployeeModel): Observable<EmployeeModel>{
        return this.employeeRepositoryPort.update(employeeId, employee);
    }
}