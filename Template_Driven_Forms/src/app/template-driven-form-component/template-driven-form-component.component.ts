import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {

  public firstName: string = '';
  public lastName: string = '';
  public address: string = '';
  public city: string = '';
  public gender: string = '';
  public designation: string = '';
  public experience: string = '';

  public employees: any[] = [];

  public designationOptions: any[] = [
    'Junior Software Engineer',
    'Software Engineer',
    'Senior Software Engineer'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(employeeForm: any) {
    this.employees.push(employeeForm.form.value);
    this.clearFields();
  }

  clearFields() {
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.city = '';
    this.gender = '';
    this.designation = '';
    this.experience = '';
  }
}
