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

  // constructor(@Optional() @Self() public ngControl: NgControl) {
  //   if (this.ngControl) {
  //     this.ngControl.valueAccessor = this;
  //   }
  // }

  

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
    // nothing to be done here
  }

  onInput(event:Event){
    let val = (event.target as HTMLInputElement).value
    this.value = val;
    this.onChange(this.value);
  }
}
