import { Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {



  constructor(public myData: DataService, private modalService: NgbModal ) { }

  ngOnInit() {
  }


  open(content) {
    this.modalService.open(content);
  }

}
