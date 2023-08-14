import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PayrollService } from "@application/services/payroll.service";
import { CreatePayrollUseCase } from "@application/use-case/payroll/createPayroll.useCase";
import { DeletePayrollUseCase } from "@application/use-case/payroll/deletePayroll.useCase";
import { RetrievePayrollUseCase } from "@application/use-case/payroll/retrievePayroll.useCase";
import { UpdatePayrollUseCase } from "@application/use-case/payroll/updatePayroll.useCase";
import { PayrollModel } from "@domain/models/payroll/payroll.model";
import { PayrollRepositoryPort } from "@domain/ports/out/payrollRepositoryPort.interface";
import { PayrollAdapter } from "@infrastructure/adapter/payroll.adapter";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PayrollImplementationService implements PayrollRepositoryPort {
  private payrollService: PayrollService;

  constructor(http: HttpClient) {
    const payrollPort = new PayrollAdapter(http);
    const createE: CreatePayrollUseCase = new CreatePayrollUseCase(
      payrollPort
    );
    const updateE: UpdatePayrollUseCase = new UpdatePayrollUseCase(
      payrollPort
    );
    const deleteE: DeletePayrollUseCase = new DeletePayrollUseCase(
      payrollPort
    );
    const retrieveE: RetrievePayrollUseCase = new RetrievePayrollUseCase(
      payrollPort
    );
    this.payrollService = new PayrollService(
      createE,
      updateE,
      deleteE,
      retrieveE
    );
  }

  save(payroll: PayrollModel, employeeId: number): Observable<PayrollModel> {
    return this.payrollService.createPayroll(payroll, employeeId);
  }

  findById(id: number, employeeId: number): Observable<PayrollModel> {
    return this.payrollService.getPayroll(id, employeeId);
  }
  findAllByEmployeeId(employeeId: number): Observable<PayrollModel[]> {
    return this.payrollService.getAllPayrollFromEmployee(employeeId);
  }
  update(id: number, payroll: PayrollModel, employeeId: number): Observable<PayrollModel> {
    return this.payrollService.updatePayroll(id, payroll, employeeId);
  }
  deleteById(id: number, employeeId: number): Observable<boolean> {
    return this.payrollService.deletePayroll(id, employeeId);
  }
}
