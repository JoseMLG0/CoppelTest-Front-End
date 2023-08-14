import { PayrollModel } from "@domain/models/payroll/payroll.model";
import { UpdatePayroll } from "@domain/ports/in/payroll/updatePayroll.interface";
import { PayrollRepositoryPort } from "@domain/ports/out/payrollRepositoryPort.interface";
import { Observable } from "rxjs";

export class UpdatePayrollUseCase implements UpdatePayroll{

    constructor(private payrollRepositoryPort: PayrollRepositoryPort){
    }

    public updatePayroll(payrollId: number, payroll: PayrollModel, employeeId: number): Observable<PayrollModel>{
        return this.payrollRepositoryPort.update(payrollId, payroll, employeeId);
    }
}