import { EmployeeInt } from './employee.dto';

export class PayrollDTO {
  id: number;
  date: Date;
  deliveriesMade: number;
  baseSalary: number | undefined;
  bonus: number | undefined;
  isrWithholding: number | undefined;
  pantryVoucher: number | undefined;
  grossSalary: number | undefined;
  netSalary: number | undefined;
  employee: EmployeeInt;

  constructor(
    id: number,
    date: Date,
    deliveriesMade: number,
    baseSalary: number | undefined,
    bonus: number | undefined,
    isrWithholding: number | undefined,
    pantryVoucher: number | undefined,
    grossSalary: number | undefined,
    netSalary: number | undefined,
    employee: EmployeeInt
  ) {
    this.id = id;
    this.date = date;
    this.deliveriesMade = deliveriesMade;
    this.baseSalary = baseSalary;
    this.bonus = bonus;
    this.isrWithholding = isrWithholding;
    this.pantryVoucher = pantryVoucher;
    this.grossSalary = grossSalary;
    this.netSalary = netSalary;
    this.employee = employee;
  }
}