import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
})
export class ConfirmationModalComponent implements OnInit {
  @Input() studentInfo: any;
  @Input() getStudentSubMarks: any;
  @Input() removeSubId: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  yesDelete() {
    if (
      this.getStudentSubMarks.value[this.removeSubId].subjectName !== '' &&
      this.getStudentSubMarks.value[this.removeSubId].subjectMark !== ''
    ) {
      this.activeModal.close();
      this.getStudentSubMarks.removeAt(this.removeSubId);
    }
  }
}
