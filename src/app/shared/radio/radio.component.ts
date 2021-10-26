import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() options: RadioOption[];

  value: any;
  onChange: any;

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value;
    this.onChange(this.value);
  }

   //Métodos da classe ControlValueAccessor - Clicando com o botão direito >> Go to Implementation
   //Método que é chamado pelas directivas quando for passado valor
    writeValue(obj: any): void {
      this.value = obj;
    }
    
    //Chamamos a função sempre que o valor interno do componente mudar
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    
    registerOnTouched(fn: any): void {}
   
    setDisabledState?(isDisabled: boolean): void {}

}
