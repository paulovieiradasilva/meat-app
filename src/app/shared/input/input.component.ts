import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() errorMessage: string;
  field: any;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  hasSuccess(): boolean {
    return this.field.valid && (this.field.dirty || this.field.touched);
  }

  hasError(): boolean {
    return !this.field.valid && (this.field.dirty || this.field.touched);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.field = this.model;
  }

}
