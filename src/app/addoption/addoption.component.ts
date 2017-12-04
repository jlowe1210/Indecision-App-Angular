import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-addoption',
  templateUrl: './addoption.component.html',
  styleUrls: ['./addoption.component.css']
})
export class AddoptionComponent implements OnInit {
  @ViewChild('f') myform: NgForm;

  constructor(private myData: DataService ) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    const option = form.value.option.trim();
    if (option) {
    this.myData.addOption(option);
    }
    console.log(this.myData.data);
    form.resetForm();
  }
}
