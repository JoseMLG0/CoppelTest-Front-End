import { EmployeeModel } from "@domain/models/employee/employee.model";
import { CreateEmployee } from "@domain/ports/in/employee/createEmployee.interface";
import { RetrieveEmployee } from "@domain/ports/in/employee/retrieveEmployee.interface";
import { EmployeeRepositoryPort } from "@domain/ports/out/employeeRepositoryPort.interface";
import { Observable } from "rxjs";

export class RetrieveEmployeeUseCase implements RetrieveEmployee{

    constructor(private employeeRepositoryPort: EmployeeRepositoryPort){
    }

    public getEmployee(employeeId: number): Observable<EmployeeModel>{
        return this.employeeRepositoryPort.findById(employeeId);
    }

    public getAllEmployees(): Observable<EmployeeModel[]>{
        return this.employeeRepositoryPort.findAll();
    }


}