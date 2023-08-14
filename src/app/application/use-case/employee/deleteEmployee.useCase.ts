import { DeleteEmployee } from "@domain/ports/in/employee/deleteEmployee.interface";
import { EmployeeRepositoryPort } from "@domain/ports/out/employeeRepositoryPort.interface";
import { Observable } from "rxjs";

export class DeleteEmployeeUseCase implements DeleteEmployee{

    constructor(private employeeRepositoryPort: EmployeeRepositoryPort){
    }

    public deleteEmployee(employeeId: number): Observable<boolean>{
        return this.employeeRepositoryPort.deleteById(employeeId);
    }
}