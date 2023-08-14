import { EmployeeModel } from '@domain/models/employee/employee.model';
import { PayrollModel } from '@domain/models/payroll/payroll.model';
import { EmployeeDTO } from '@infrastructure/dto/employee.dto';
import { PayrollDTO } from '@infrastructure/dto/payroll.dto';
import { EmployeeMapper } from './employee.mapper';

export class PayrollMapper {
  

  static fromDomain(payroll: PayrollModel): PayrollDTO {
    return new PayrollDTO(
      payroll.id,
      payroll.date,
      payroll.deliveriesMade,
      payroll.baseSalary,
      payroll.bonus,
      payroll.isrWithholding,
      payroll.pantryVoucher,
      payroll.grossSalary,
      payroll.netSalary,
      EmployeeMapper.fromDomain(payroll.employee)
    );
  }

  static toDomain(payroll: PayrollDTO): PayrollModel {
    return new PayrollModel(
      payroll.id,
      payroll.date,
      payroll.deliveriesMade,
      payroll.baseSalary!,
      payroll.bonus!,
      payroll.isrWithholding!,
      payroll.pantryVoucher!,
      payroll.grossSalary!,
      payroll.netSalary!,
      EmployeeMapper.toDomain(payroll.employee)
    );
  }

  static toDomainComplete(payroll: PayrollDTO): PayrollModel {
    return new PayrollModel(
      payroll.id,
      payroll.date,
      payroll.deliveriesMade,
      payroll.baseSalary!,
      payroll.bonus!,
      payroll.isrWithholding!,
      payroll.pantryVoucher!,
      payroll.grossSalary!,
      payroll.netSalary!,
      EmployeeMapper.toDomain(payroll.employee)
    );
  }

}
