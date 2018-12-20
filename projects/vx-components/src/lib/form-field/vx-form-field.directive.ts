import {ChangeDetectorRef, Directive, ElementRef, Optional, Self} from '@angular/core';
import {AbstractVxFormFieldDirective} from 'vx-components-base';
import {FormGroupDirective, NgControl, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from 'vx-components-base';

@Directive({
  selector: '[vxFormField]',
  exportAs: 'vxFormField',
  host: {
    '(blur)': '_setHasFocus(false)',
    '(focus)': '_setHasFocus(true)',
    '(input)': '_onChange()',
    '[placeholder]': 'placeholder',
    '[class.vx-form-field-input]': 'true'
  }
})
export class VxFormFieldDirective extends AbstractVxFormFieldDirective<HTMLInputElement> {

  constructor(
    elementRef: ElementRef<HTMLInputElement>,
    cdr: ChangeDetectorRef,
    errorStateMatcher: ErrorStateMatcher,
    @Optional() @Self() ngControl: NgControl,
    @Optional() parentForm: NgForm,
    @Optional() parentFormGroup: FormGroupDirective,
  ) {
    super(elementRef, cdr, errorStateMatcher, ngControl, parentForm, parentFormGroup);
  }

  protected getNativeValue(): string {
    return this.elementRef.nativeElement.value;
  }

  protected setNativeValue(val: string): void {
    this.elementRef.nativeElement.value = val;
  }

  _onChange(): void {
    this._dirtyCheckNativeValue();
  }

  focus(): void {
    this.elementRef.nativeElement.focus();
  }
}
