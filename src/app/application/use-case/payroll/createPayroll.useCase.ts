import { EmployeeModel } from "@domain/models/employee/employee.model";
import { PayrollModel } from "@domain/models/payroll/payroll.model";
import { CreateEmployee } from "@domain/ports/in/employee/createEmployee.interface";
import { CreatePayroll } from "@domain/ports/in/payroll/createPayroll.interface";
import { EmployeeRepositoryPort } from "@domain/ports/out/employeeRepositoryPort.interface";
import { PayrollRepositoryPort } from "@domain/ports/out/payrollRepositoryPort.interface";
import { Observable } from "rxjs";

export class CreatePayrollUseCase implements CreatePayroll{

    constructor(private payrollRepositoryPort: PayrollRepositoryPort){
    }

    createPayroll(payroll: PayrollModel, employeeId: number): Observable<PayrollModel> {
        return this.payrollRepositoryPort.save(payroll,employeeId);
    }
}