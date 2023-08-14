import { EmployeeModel } from "@domain/models/employee/employee.model";
import { PayrollModel } from "@domain/models/payroll/payroll.model";
import { RetrieveEmployee } from "@domain/ports/in/employee/retrieveEmployee.interface";
import { RetrievePayroll } from "@domain/ports/in/payroll/retrievePayroll.interface";
import { PayrollRepositoryPort } from "@domain/ports/out/payrollRepositoryPort.interface";
import { Observable } from "rxjs";

export class RetrievePayrollUseCase implements RetrievePayroll{

    constructor(private payrollRepositoryPort: PayrollRepositoryPort){
    }

    public getPayroll(payrollId: number, employeeId: number): Observable<PayrollModel>{
        return this.payrollRepositoryPort.findById(payrollId, employeeId);
    }

    public getAllPayrollFromEmployee(employeeId: number): Observable<PayrollModel[]>{
        return this.payrollRepositoryPort.findAllByEmployeeId(employeeId);
    }


}