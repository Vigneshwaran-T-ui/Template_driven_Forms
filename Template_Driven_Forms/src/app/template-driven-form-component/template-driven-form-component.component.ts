import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {

  @ViewChild('employeeForm') employeeFormValue: any;

  public submitted = false;

  public submitFinished = true;

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
    this.setValidators();
    if(employeeForm?.dirty && employeeForm?.valid) {
      this.submitted = true;
      this.employees.push(employeeForm.form.value);
      this.clearFields();
      setTimeout(() => {
        this.clearValidators();
      }, 0);
    }
  }

  clearFields() {
    // this.employeeFormValue.reset();
    this. firstName = '';
    this.lastName = '';
    this.address = '';
    this.city = '';
    this.gender= '';
    this.designation= '';
    this.experience = '';
    this.period = '';
  }

  clearValidators(){
    this.employeeFormValue.form?.get('firstName').setErrors(false);
    this.employeeFormValue.form?.get('lastName').setErrors(false);
    this.employeeFormValue.form?.get('address').setErrors(false);
    this.employeeFormValue.form?.get('city').setErrors(false);
    this.employeeFormValue.form?.get('gender').setErrors(false);
    this.employeeFormValue.form?.get('designation').setErrors(false);
    this.employeeFormValue.form?.get('experience').setErrors(false);
    this.employeeFormValue.form?.get('period').setErrors(false);
  }

  setValidators(){
    if(this.employeeFormValue.form?.get('firstName').value === ''){
      this.employeeFormValue.form?.get('firstName').setErrors({required: true});
    }
    if(this.employeeFormValue.form?.get('lastName').value === ''){
      this.employeeFormValue.form?.get('lastName').setErrors({required: true});
    }
    if(this.employeeFormValue.form?.get('address').value === ''){
      this.employeeFormValue.form?.get('address').setErrors({required: true});
    }
    if(this.employeeFormValue.form?.get('city').value === ''){
      this.employeeFormValue.form?.get('city').setErrors({required: true});
    }
    if(this.employeeFormValue.form?.get('gender').value === ''){
      this.employeeFormValue.form?.get('gender').setErrors({required: true});
    }
    if(this.employeeFormValue.form?.get('designation').value === ''){
      this.employeeFormValue.form?.get('designation').setErrors({required: true});
    }
    if(this.employeeFormValue.form?.get('experience').value === ''){
      this.employeeFormValue.form?.get('experience').setErrors({required: true});
    }
    if(this.employeeFormValue.form?.get('period').value === ''){
      this.employeeFormValue.form?.get('period').setErrors({required: true});
    }
  }

  get f() {
    return this.employeeFormValue.controls;
  }
}
