import { Observable } from "rxjs";
import { PayrollRepositoryPort } from "@domain/ports/out/payrollRepositoryPort.interface";
import { DeletePayroll } from "@domain/ports/in/payroll/deletePayroll.interface";

export class DeletePayrollUseCase implements DeletePayroll{

    constructor(private payrollRepositoryPort: PayrollRepositoryPort){
    }

    public deletePayroll(payrollId: number,employeeId: number): Observable<boolean>{
        return this.payrollRepositoryPort.deleteById(payrollId, employeeId);
    }
}