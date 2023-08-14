import { CreatePayrollUseCase } from '@application/use-case/payroll/createEmployee.useCase';
import { DeletePayrollUseCase } from '@application/use-case/payroll/deleteEmployee.useCase';
import { RetrievePayrollUseCase } from '@application/use-case/payroll/retrieveEmployee.useCase';
import { UpdatePayrollUseCase } from '@application/use-case/payroll/updateEmployee.useCase';
import { EmployeeModel } from '@domain/models/employee/employee.model';
import { PayrollModel } from '@domain/models/payroll/payroll.model';
import { CreatePayroll } from '@domain/ports/in/payroll/createPayroll.interface';
import { DeletePayroll } from '@domain/ports/in/payroll/deletePayroll.interface';
import { RetrievePayroll } from '@domain/ports/in/payroll/retrievePayroll.interface';
import { UpdatePayroll } from '@domain/ports/in/payroll/updatePayroll.interface';
import { Observable } from 'rxjs';

export class PayrollService implements CreatePayroll, UpdatePayroll, DeletePayroll, RetrievePayroll{
  constructor(
    private createPayrollUseCase: CreatePayrollUseCase,
    private updatePayrollUseCase: UpdatePayrollUseCase,
    private deletePayrollUseCase: DeletePayrollUseCase,
    private retrievePayrollUseCase: RetrievePayrollUseCase
  ) {}

  public createPayroll(
    payroll: PayrollModel,
    employeeId: number
  ): Observable<PayrollModel> {
    return this.createPayrollUseCase.createPayroll(payroll, employeeId);
  }

  public updatePayroll(
    payrollId: number,
    payroll: PayrollModel, employeeId: number
  ): Observable<PayrollModel> {
    return this.updatePayrollUseCase.updatePayroll(payrollId, payroll, employeeId);
  }

  public deletePayroll(id: number, employeeId: number): Observable<boolean> {
    return this.deletePayrollUseCase.deletePayroll(id, employeeId);
  }

  public getPayroll(id: number, employeeId: number): Observable<PayrollModel> {
    return this.retrievePayrollUseCase.getPayroll(id, employeeId);
  }

  public getAllPayrollFromEmployee(
    employeeId: number
  ): Observable<PayrollModel[]> {
    return this.retrievePayrollUseCase.getAllPayrollFromEmployee(employeeId);
  }
}
