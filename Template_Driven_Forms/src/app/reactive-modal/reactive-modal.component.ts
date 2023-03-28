import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reactive-modal',
  templateUrl: './reactive-modal.component.html',
  styleUrls: ['./reactive-modal.component.css']
})
export class ReactiveModalComponent implements OnInit {

  @Input() employeeReactiveForm: any;
  @Output() editUserEvent = new EventEmitter();
  @Output() deleteUserEvent = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {}

  editUser(id: any) {
    this.editUserEvent.emit(id);
  }

  deleteUser(id: any) {
    this.deleteUserEvent.emit(id);
  }

}
