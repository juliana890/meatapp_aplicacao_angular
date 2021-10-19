import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  constructor() { }

  input: any;

  @Input() label: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel;

  ngOnInit() {
  }

  //Esse método será chamado quando o conteúdo for definido
  ngAfterContentInit(){
    this.input = this.model;

    if(this.input === undefined){
      throw new Error("Esse componente precisa ser usado com uma diretiva ngModel");   
    }
  }

  hasSuccess() : boolean{
      return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError() : boolean{
      return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
