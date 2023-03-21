import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  public errorMessage: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.formBuilder();
    this.valueChangeHandler();
    this.employeeReactiveForm.get('experience')?.disable();
    this.employeeReactiveForm.get('period')?.disable();
  }

  formBuilder() {
    this.employeeReactiveForm = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")],),
      lastName: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
      address: new FormGroup({
        address: new FormControl('',[Validators.required]),
        zipCode: new FormControl('',[Validators.required]),
        city: new FormControl('',[Validators.required]),
        state: new FormControl('',[Validators.required]),
        country: new FormControl('',[Validators.required]),
      }),
      gender: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]),
      mNumber: new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(1)]),
      jStatus: new FormControl('',[Validators.required]),
      experience: new FormControl('', [Validators.required]),
      period: new FormControl('',[Validators.required]),
      submitted: new FormControl('false')
    })
  }

  onSubmit() {
    this.errorMessage = [];
    this.employeeReactiveForm.get('submitted')?.patchValue(true);
    if(this.employeeReactiveForm?.invalid){
      if(this.employeeReactiveForm.get('firstName')?.errors?.['required']) {
        this.errorMessage.push('*'+'First Name is required');
      }
      if(this.employeeReactiveForm.get('lastName')?.errors?.['required']) {
        this.errorMessage.push('*'+'Last Name is required');
      }
      if(this.employeeReactiveForm.get('address')?.get('address')?.errors?.['required']) {
        this.errorMessage.push('*'+'Address is required');
      }
      if(this.employeeReactiveForm.get('address')?.get('zipCode')?.errors?.['required']) {
        this.errorMessage.push('*'+'Zip Code is required');
      }
      if(this.employeeReactiveForm.get('address')?.get('city')?.errors?.['required']) {
        this.errorMessage.push('*'+'City is required');
      }
      if(this.employeeReactiveForm.get('address')?.get('state')?.errors?.['required']) {
        this.errorMessage.push('*'+'State is required');
      }
      if(this.employeeReactiveForm.get('address')?.get('country')?.errors?.['required']) {
        this.errorMessage.push('*'+'Country is required');
      }
      if(this.employeeReactiveForm.get('gender')?.errors?.['required']) {
        this.errorMessage.push('*'+'Gender is required');
      }
      if(this.employeeReactiveForm.get('dob')?.errors?.['required']) {
        this.errorMessage.push('*'+'Date of Birth is required');
      }
      if(this.employeeReactiveForm.get('age')?.errors?.['required']) {
        this.errorMessage.push('*'+'Age is required');
      }
      if(this.employeeReactiveForm.get('email')?.errors?.['required']) {
        this.errorMessage.push('*'+'Email is required');
      }
      if(this.employeeReactiveForm.get('email')?.errors?.['pattern']) {
        this.errorMessage.push('*'+'Invalid Email Format');
      }
      if(this.employeeReactiveForm.get('mNumber')?.errors?.['required']) {
        this.errorMessage.push('*'+'Mobile Number is required');
      }
      if(this.employeeReactiveForm.get('jStatus')?.errors?.['required']) {
        this.errorMessage.push('*'+'Job Status is required');
      }
      if(this.employeeReactiveForm.get('experience')?.errors?.['required'] || this.employeeReactiveForm.get('period')?.errors?.['required']) {
        this.errorMessage.push('*'+'If you in Work, Work Experience is Required.');
      }
    }
    console.log(this.employeeReactiveForm);
  }

  onBlur() {
    console.log(this.employeeReactiveForm.get("address")?.get("zipCode"))
    if (this.employeeReactiveForm.get("address")?.get("zipCode")?.value === 626001) {
      this.employeeReactiveForm.patchValue({
        address: {
          city: 'Virudhunagar',
          state: 'Tamilnadu',
          country: 'India'
        }
      })
    }
    else if (this.employeeReactiveForm.get("address")?.get("zipCode")?.value === null ||
             this.employeeReactiveForm.get("address")?.get("zipCode")?.value === '' ||
             this.employeeReactiveForm.get("address")?.get("zipCode")?.value === undefined ||
             this.employeeReactiveForm.get("address")?.get("zipCode")?.value?.length != '00000' ) {
      this.employeeReactiveForm.patchValue({
        address: {
          city: '',
          state: '',
          country: ''
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

  onReset() {
    this.employeeReactiveForm.setValue({
      firstName:'',
      lastName: '',
      address: {
        address:'',
        zipCode:'',
        city: '',
        state: '',
        country:'',
      },
      gender: '',
      dob: '',
      age: '',
      email: '',
      mNumber: '',
      jStatus: '',
      experience:'',
      period: '',
      submitted: ''
    })
    this.errorMessage = [];
  }
}
