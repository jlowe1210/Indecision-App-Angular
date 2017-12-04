import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify([]));
    }else {
      this.data = JSON.parse(localStorage.getItem('data'));
    }
  }

  data = [];

  removeAll() {
    this.data.length = 0;
    this.updateData(this.data);
  }

  addOption(option: string) {
    this.data.push(option);
    this.updateData(this.data);
  }

  getRanOption() {
    const ranMun = Math.floor(Math.random() * this.data.length);
    return this.data[ranMun];
  }

  getData() {
    return this.data;
  }
  removeOption(id: number) {
   const option = this.data.findIndex((val, inx) => {
      return inx === id;
    });
    this.data.splice(option, 1);
    this.updateData(this.data);
  }


  updateData(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }
}
