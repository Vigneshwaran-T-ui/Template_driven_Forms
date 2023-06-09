import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveModalComponent } from './reactive-modal/reactive-modal.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponentComponent,
    EmployeesListComponent,
    ReactiveFormComponent,
    ReactiveModalComponent,
    FormArrayComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
