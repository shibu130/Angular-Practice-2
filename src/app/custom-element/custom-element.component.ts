import { Component, forwardRef, Optional, Self } from '@angular/core';
import { ControlConfig, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-custom-element',
  standalone: false,
  templateUrl: './custom-element.component.html',
  styleUrl: './custom-element.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomElementComponent),
      multi: true
    }
  ]
})
export class CustomElementComponent implements ControlValueAccessor{

  value: any = '';

  constructor(@Optional() @Self() private ngControl: NgControl){

    this.ngControl.valueAccessor = this;
    this.controlName = (this.ngControl.name as string) || null;
  }

  

  private onChange = (_: any) => {};
  private onTouched = () => {};

  controlName:string | null;

  writeValue(obj: any): void {
    this.value = obj ?? '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
