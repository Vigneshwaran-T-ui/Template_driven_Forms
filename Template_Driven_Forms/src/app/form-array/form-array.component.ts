import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  public studentInfo!: FormGroup;

  public classOptions: any[] = [
    '1st Standard',
    '2st Standard',
    '3st Standard',
    '4st Standard',
    '5st Standard',
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.studentInfoFormBuilder();
  }

  studentInfoFormBuilder() {
    this.studentInfo = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      rollNo: [''],
      class: [''],
      studentSubMarks: this.formBuilder.array([])
    })
  }

  get getStudentSubMarks() {
    return this.studentInfo.get("studentSubMarks") as FormArray
  }
  
  addSubject(){
    let subject = this.getStudentSubMarks;
    subject.push(this.formBuilder.group({
      subjectName: ['', [Validators.required]],
      subjectMark: ['', [Validators.required]]
    }));
  }

  createStudentInfo() {
    console.log('data is', this.studentInfo)
  }
}
