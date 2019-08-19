import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalRef:NgbModalRef;
  title = 'Messaging';
  constructor(private modalService:NgbModal){

  }
  openPopup(pop){
    this.modalRef=this.modalService.open(pop);
  }
}
