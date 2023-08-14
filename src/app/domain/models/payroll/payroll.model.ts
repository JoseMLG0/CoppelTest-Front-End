import { PayrollBusiness } from "@domain/services/payroll.business";
import { EmployeeModel } from "../employee/employee.model";

export class PayrollModel {
  constructor(
    readonly id: number,
    readonly date: Date,
    readonly deliveriesMade: number,
    public baseSalary: number,
    public bonus: number,
    public isrWithholding: number,
    public pantryVoucher: number,
    public grossSalary: number,
    public netSalary: number,
    public employee: EmployeeModel
  ) {
    
  }


  private calculateAnotherFields() {
    const amounts: number[] = PayrollBusiness.calculateMonthlySalary(
      this.employee,
      this.deliveriesMade
    );
    this.baseSalary = amounts[0];
    this.bonus = amounts[1];
    this.grossSalary = amounts[2];
    this.isrWithholding = amounts[3];
    this.pantryVoucher = amounts[4];
    this.netSalary = amounts[5];
  }

}
