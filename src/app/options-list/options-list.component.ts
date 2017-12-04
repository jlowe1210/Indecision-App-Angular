import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.css']
})
export class OptionsListComponent implements OnInit {
  @Input() Options;

  constructor(private myData: DataService) { }

  ngOnInit() {
  }

  onRemoveAll() {
    this.myData.removeAll();
  }


}
