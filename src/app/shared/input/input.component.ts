import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() errorMessage: string;
  @Input() showTip: boolean = true;
  field: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

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
    this.field = this.model || this.control;
    if (this.field === undefined) {
      throw new Error('Esse componente precisa ser utilizando com a diretiva ngModel ou FormControlName');
    }
  }

}
