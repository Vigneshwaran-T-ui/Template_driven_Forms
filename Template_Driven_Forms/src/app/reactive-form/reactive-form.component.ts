import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public employeeReactiveForm!: FormGroup;

  public jobStatusOptions: any[] = [
    'Student',
    'Work'
  ];

  public periodOptions: any[] = [
    'Years',
    'Months'
  ];
  constructor() { }

  ngOnInit(): void {
    this.formBuilder();
    this.valueChangeHandler();
    this.employeeReactiveForm.get('experience')?.disable();
    this.employeeReactiveForm.get('period')?.disable();
  }

  formBuilder() {
    this.employeeReactiveForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        address: new FormControl(''),
        zipCode: new FormControl(),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
      }),
      gender: new FormControl(''),
      dob: new FormControl(''),
      age: new FormControl(),
      email: new FormControl(''),
      mNumber: new FormControl(),
      jStatus: new FormControl(''),
      experience: new FormControl(),
      period: new FormControl('')
    })
  }

  onSubmit(employeeReactiveForm: any) {
    console.log(employeeReactiveForm.value);
  }

  onBlur() {
    if (this.employeeReactiveForm.get("address")?.get("zipCode")?.value === 626001) {
      this.employeeReactiveForm.patchValue({
        address: {
          city: 'Virudhunagar',
          state: 'Tamilnadu',
          country: 'India'
        }
      })
    }
  }

  valueChangeHandler() {
    this.employeeReactiveForm.get("jStatus")?.valueChanges.subscribe((data) => {
      if(data === 'Student' || data === '') {
        this.employeeReactiveForm.get('experience')?.disable();
        this.employeeReactiveForm.get('period')?.disable();
      } else {
        this.employeeReactiveForm.get('experience')?.enable();
        this.employeeReactiveForm.get('period')?.enable();
      }
    })
  }

}
