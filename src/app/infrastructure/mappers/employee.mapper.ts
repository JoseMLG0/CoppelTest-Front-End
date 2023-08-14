import { EmployeeModel } from '@domain/models/employee/employee.model';
import { EmployeeDTO } from '@infrastructure/dto/employee.dto';

export class EmployeeMapper {
  static toDomain(employee: EmployeeDTO): EmployeeModel {
    return new EmployeeModel(
      employee.id,
      employee.number,
      employee.name,
      employee.rol,
      employee.baseSalary,
      employee.active,
      employee.creationDate
    );
  }

  static fromDomain(employee: EmployeeModel): EmployeeDTO {
    return new EmployeeDTO(
        employee.id,
        employee.number,
        employee.name,
        employee.rol,
        employee.baseSalary,
        employee.active,
        employee.creationDate
    );
  }
}
