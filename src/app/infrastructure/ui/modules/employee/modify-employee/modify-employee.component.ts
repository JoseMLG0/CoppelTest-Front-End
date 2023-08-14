import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EmployeeImplementationService } from '@infrastructure/repositories/employee.repository';
import { EmployeeModel } from '@domain/models/employee/employee.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.scss'],
})
export class ModifyEmployeeComponent implements OnInit, AfterViewInit {
  @Input() employee: any = null;

  public employeeForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private employeeImplementationService: EmployeeImplementationService
  ) {
    this.employeeForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      number: [null, Validators.required],
      rol: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    if (!!this.employee) {
      this.employeeForm.patchValue({
        id: this.employee.id,
        name: this.employee.name,
        number: this.employee.number,
        rol: this.employee.rol,
      });
    }
  }

  ngAfterViewInit(): void {}

  confirmUpload() {
    if (this.employeeForm.invalid) {
      Swal.fire({
        title: 'Advertencia!',
        text: 'Verifique que la informacion introducida es correcta',
        icon: 'warning',
      });
      return;
    }
    const dataValues = this.employeeForm.getRawValue();
    const employee = new EmployeeModel(
      dataValues.id,
      dataValues.number,
      dataValues.name,
      dataValues.rol,
      this.employee?.baseSalary,
      true,
      this.employee?.creationDate
    );
    if (!!this.employee) {
      try {
        this.employeeImplementationService
          .update(employee.id, employee)
          .subscribe(
            (res) => {
              console.log(res);
              this.activeModal.close(true);
            },
            (err) => {
              Swal.fire({
                title: 'Error!',
                text: 'No se pudo guardar la información, verifique el el ID introducido sea el correcto o no este en uso',
                icon: 'error',
                // confirmButtonText: 'Cool'
              });
            }
          );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        this.employeeImplementationService.save(employee).subscribe(
          (res) => {
            console.log(res);
            this.activeModal.close(true);
          },
          (err) => {
            Swal.fire({
              title: 'Error!',
              text: 'No se pudo guardar la información, verifique el el ID introducido sea el correcto o no este en uso',
              icon: 'error',
              // confirmButtonText: 'Cool'
            });
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
}
