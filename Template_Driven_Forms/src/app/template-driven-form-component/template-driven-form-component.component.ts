import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {

  @ViewChild('employeeForm') employeeFormValue: any;

  public submitted = false;
  
  public firstName: string = '';
  public lastName: string = '';
  public address: string = '';
  public city: string = '';
  public gender: string = '';
  public designation: string = '';
  public experience: string = '';
  public period: string = '';

  public employees: any[] = [];

  public designationOptions: any[] = [
    'Junior Software Engineer',
    'Software Engineer',
    'Senior Software Engineer'
  ]

  public periodOptions: any[] = [
    'Years',
    'Months'
  ]

  constructor() { }

  ngOnInit(): void {}

  onSubmit(employeeForm: any) {
    if(employeeForm?.dirty && employeeForm?.valid) {
      this.submitted = true;
      this.employees.push(employeeForm.form.value);
      this.clearFields(employeeForm);
    }
  }

  clearFields(employeeForm: any) {
    employeeForm.reset();
    // this. firstName = '';
    // this.lastName = '';
    // this.address = '';
    // this.city = '';
    // this.gender= '';
    // this.designation= '';
    // this.experience = '';
    // this.period = '';
  }

  get f() {
    return this.employeeFormValue.controls;
  }
}
