export class EmployeeModel {
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
