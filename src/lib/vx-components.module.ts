import {NgModule} from '@angular/core';
import {VxCheckboxModule} from './checkbox';
import {VxInputModule} from './input';
import {VxDropdownModule} from './dropdown';
import {VxAutocompleteModule} from './autocomplete';
import {VxTabsModule} from './tabs';
import {VxDialogModule} from './dialog';
import {VxRadioModule} from './radio';
import {VxToastModule} from './toast';
import {VxStepperModule} from './stepper/stepper.module';

const MODULES = [VxCheckboxModule, VxInputModule, VxDropdownModule, VxAutocompleteModule,
  VxTabsModule, VxDialogModule, VxRadioModule, VxToastModule, VxStepperModule];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class VxComponentsModule {
}
