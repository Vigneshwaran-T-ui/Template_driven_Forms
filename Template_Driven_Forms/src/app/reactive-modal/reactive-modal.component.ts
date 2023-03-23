import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reactive-modal',
  templateUrl: './reactive-modal.component.html',
  styleUrls: ['./reactive-modal.component.css']
})
export class ReactiveModalComponent implements OnInit {

  @Input() employeeReactiveForm: any;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.log(this.employeeReactiveForm)
  }

}
