import { Component, Input } from '@angular/core';
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
export class ModifyEmployeeComponent {
  @Input() employeeId: string | null = null;

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

  confirmUpload() {
    const dataValues = this.employeeForm.getRawValue();
    const employee = new EmployeeModel(dataValues.id, dataValues.number, dataValues.name, dataValues.rol, 0, true, new Date());
    try {
      this.employeeImplementationService.save(employee).subscribe(res => {
        console.log(res)
        this.activeModal.close(true);
      }, err => {
        Swal.fire({
          title: 'Error!',
          text: 'No se pudo guardar la información!',
          icon: 'error',
          // confirmButtonText: 'Cool'
        })
      });
    } catch (error) {
      console.log(error)
    }
  }
}
