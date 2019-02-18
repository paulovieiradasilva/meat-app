import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  priviousRate: number;

  @Output() rated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r;
    this.priviousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTempRate(r: number) {
    if (this.priviousRate === undefined) {
      this.priviousRate = this.rate;
    }
    this.rate = r;
  }

  clearTempRate() {
    if (this.priviousRate !== undefined) {
      this.rate = this.priviousRate;
      this.priviousRate = undefined;
    }
  }

}
