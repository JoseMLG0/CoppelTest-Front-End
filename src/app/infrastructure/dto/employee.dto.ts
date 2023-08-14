export interface EmployeeInt {
  id: number;
  number: string;
  name: string;
  rol: string;
  baseSalary: number;
  active: boolean;
  creationDate: Date;
}

export class EmployeeDTO implements EmployeeInt {
  constructor(
    readonly id: number,
    readonly number: string,
    readonly name: string,
    readonly rol: string,
    readonly baseSalary: number,
    readonly active: boolean,
    readonly creationDate: Date
  ) {}
}
