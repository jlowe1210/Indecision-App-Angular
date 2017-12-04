import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DataService} from './data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public decisions = [];
  closeResult: string;

  constructor(private myData: DataService, private modalService: NgbModal ) {
  }
  ngOnInit() {
    this.decisions = this.myData.getData();
  }
}

