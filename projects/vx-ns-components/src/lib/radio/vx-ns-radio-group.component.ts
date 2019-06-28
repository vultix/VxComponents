import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  forwardRef,
  Optional,
  QueryList,
  Self
} from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import {
  AbstractVxRadioButtonComponent,
  AbstractVxRadioGroupComponent,
  ErrorStateMatcher,
  VX_RADIO_GROUP_TOKEN
} from 'vx-components-base';
import { VxNsRadioButtonComponent } from './vx-ns-radio-button.component';

@Component({
  selector: 'StackLayout[vx-ns-radio-group]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: VX_RADIO_GROUP_TOKEN,
      useExisting: forwardRef(() => VxNsRadioGroupComponent)
    }
  ],
  // VX_RADIO_GROUP_INPUTS
  inputs: ['id', 'value', 'disabled', 'required', 'name'],
  // VX_RADIO_GROUP_OUTPUTS
  outputs: ['focusedChange', 'valueChange'],
  host: {
    '[class.vx-ns-radio-group]': 'true',
    '[class.vx-ns-error]': 'errorState',
    '[class.vx-ns-disabled]': 'disabled'
  }
})
export class VxNsRadioGroupComponent<T> extends AbstractVxRadioGroupComponent<T> {
  @ContentChildren(VxNsRadioButtonComponent) buttons!: QueryList<AbstractVxRadioButtonComponent<T>>;

  constructor(
    cdr: ChangeDetectorRef,
    errorStateMatcher: ErrorStateMatcher,
    @Optional() @Self() ngControl: NgControl,
    @Optional() parentForm: NgForm,
    @Optional() parentFormGroup: FormGroupDirective
  ) {
    super(cdr, errorStateMatcher, ngControl, parentForm, parentFormGroup);

  }
}
