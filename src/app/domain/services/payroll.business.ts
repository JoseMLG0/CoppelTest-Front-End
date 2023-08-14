import { PayrollConstants } from '@domain/constants/payroll/payroll.constants';
import { DeliveriesIsLessThanZeroException } from '@domain/exception/payroll/deliveriesIsLessThanZeroException .exception';
import { EmployeeModel } from '@domain/models/employee/employee.model';

export class PayrollBusiness {

  static calculateMonthlySalary(
    employee: EmployeeModel,
    deliveriesMade: number
  ): number[] {
    if (deliveriesMade < 0) {
      throw new DeliveriesIsLessThanZeroException(deliveriesMade);
    }

    const baseSalaryPerMonth: number =
      employee.baseSalary *
      PayrollConstants.HOURS_PER_DAYS *
      PayrollConstants.DAYS_PER_WEEKS *
      PayrollConstants.WEEKS_PER_MONTH;
    const bonusSalary: number = this.calculateBonusSalary(employee, deliveriesMade);
    const grossSalary: number = baseSalaryPerMonth + bonusSalary;

    const isrWithholding: number = this.calculateISRWithholding(grossSalary);
    const pantryVoucher: number =
      grossSalary * PayrollConstants.PANTRY_VOUCHERS;

    return [
      baseSalaryPerMonth,
      bonusSalary,
      grossSalary,
      isrWithholding,
      pantryVoucher,
      grossSalary - isrWithholding + pantryVoucher,
    ];
  }

  private static calculateBonusSalary(
    employee: EmployeeModel,
    deliveriesMade: number
  ): number {
    let hourlyBonus: number = 0;
    let deliverBonus: number = 0;
    switch (employee.rol) {
      case 'Auxiliar':
        hourlyBonus = PayrollConstants.ASSISTANT_BONUS_FOR_HOUR;
        break;
      case 'Chofer':
        hourlyBonus = PayrollConstants.DRIVER_BONUS_FOR_HOUR;
        deliverBonus = PayrollConstants.BONUS_PER_DELIVERY * deliveriesMade;
        break;
      case 'Cargador':
        hourlyBonus = PayrollConstants.WAREHOUSE_LOADER_BONUS_FOR_HOUR;
        break;
    }

    return hourlyBonus + deliverBonus;
  }

  private static calculateISRWithholding(grossSalary: number): number {
    let withholding: number = grossSalary * PayrollConstants.ISR_WITHHOLDING;
    if (grossSalary > PayrollConstants.MONTHLY_SALARY_MIN_FOR_ADDITIONAL_ISR) {
      withholding +=
        grossSalary * PayrollConstants.ADDITIONAL_ISR_WITHHOLDING;
    }
    return withholding;
  }
}
