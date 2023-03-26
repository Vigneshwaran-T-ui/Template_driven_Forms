import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  public studentInfo!: FormGroup;

  public modalRef!: NgbModalRef;

  public submitted = false;
  public id = 0;

  public studentInfoDetails: any[] = [];

  public classOptions: any[] = [
    '1st Standard',
    '2st Standard',
    '3st Standard',
    '4st Standard',
    '5st Standard',
  ];

  public subOptions: any[] = [
    'Tamil',
    'English',
    'Hindi',
    'Maths',
    'Science',
    'Social Science',
    'Physical Education',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.studentInfoFormBuilder();
  }

  studentInfoFormBuilder() {
    this.studentInfo = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      rollNo: ['', [Validators.required]],
      class: ['', [Validators.required]],
      submitted: [false],
      studentSubMarks: this.formBuilder.array([]),
    });
  }

  get getStudentSubMarks() {
    return this.studentInfo.get('studentSubMarks') as FormArray;
  }

  addSubject() {
    this.studentInfo.get('submitted')?.patchValue(true);
    if (
      !this.studentInfo.get('firstName')?.errors &&
      !this.studentInfo.get('lastName')?.errors &&
      !this.studentInfo.get('rollNo')?.errors &&
      !this.studentInfo.get('class')?.errors
    ) {
      if (this.getStudentSubMarks?.valid) {
        this.getStudentSubMarks.push(
          this.formBuilder.group({
            subjectName: ['', [Validators.required]],
            subjectMark: ['', [Validators.required]]
          })
        );
      }
      
    }
  }

  createStudentInfo() {
    this.studentInfo.get('submitted')?.patchValue(true);
    if (this.studentInfo.valid && this.studentInfo.dirty) {
      this.studentInfoDetails.push(this.studentInfo.value);
      console.log('data is', this.studentInfoDetails);
      this.studentInfo.patchValue({
        firstName: [''],
        lastName: [''],
        rollNo: [''],
        class: [''],
        submitted: [false]
      });
      this.getStudentSubMarks.clear();
    }
  }

  removeSubject(id: any) {
    if (
      this.getStudentSubMarks.value[id].subjectName !== '' &&
      this.getStudentSubMarks.value[id].subjectMark !== ''
    ) {
      this.confirmationModal(id);
    } else {
      this.getStudentSubMarks.removeAt(id);
    }
  }

  confirmationModal(id: any) {
    this.modalRef = this.modalService.open(ConfirmationModalComponent, {
      backdrop: 'static',
    });
    this.modalRef.componentInstance.studentInfo = this.studentInfo;
    this.modalRef.componentInstance.getStudentSubMarks =
      this.getStudentSubMarks;
    this.modalRef.componentInstance.removeSubId = id;
  }
}
