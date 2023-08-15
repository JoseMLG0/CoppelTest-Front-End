import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeModule } from '@infrastructure/ui/modules/employee/employee.module';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmployeeService } from '@application/services/employee.service';
import { CreateEmployeeUseCase } from '@application/use-case/employee/createEmployee.useCase';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeImplementationService } from '@infrastructure/repositories/employee.repository';
import { PayrollImplementationService } from '@infrastructure/repositories/payroll.repository';
import { PayrollModule } from '@infrastructure/ui/modules/payroll/payroll.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EmployeeModule,
    PayrollModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule
  ],
  providers: [
    EmployeeImplementationService,
    PayrollImplementationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
