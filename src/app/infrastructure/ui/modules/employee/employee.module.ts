import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayrollInformationComponent } from './payroll-information/payroll-information.component';
import {MatMenuModule} from '@angular/material/menu';
import { ModifyPayrollComponent } from './payroll-information/modify-payroll/modify-payroll.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    EmployeeComponent,
    ModifyEmployeeComponent,
    PayrollInformationComponent,
    ModifyPayrollComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,MatSortModule, MatPaginatorModule, MatSnackBarModule
  ],
  providers: [],
  exports: [EmployeeComponent]
})
export class EmployeeModule { }
