import {NgModule} from '@angular/core';
import {VxCheckboxModule} from './checkbox';
import {VxInputModule} from './input';
import {VxMenuModule} from './menu';
import {VxAutocompleteModule} from './autocomplete';
import {VxTabsModule} from './tabs';
import {VxDialogModule} from './dialog';
import {VxRadioModule} from './radio';
import {VxToastModule} from './toast';
import {VxStepperModule} from './stepper';
import {VxSpinnerModule} from './spinner';

const MODULES = [VxCheckboxModule, VxInputModule, VxMenuModule, VxAutocompleteModule,
  VxTabsModule, VxDialogModule, VxRadioModule, VxToastModule, VxStepperModule, VxSpinnerModule];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class VxComponentsModule {
}
