import { Directive, ElementRef, Input } from '@angular/core';
import { View } from 'tns-core-modules/ui/core/view';
import { AbstractVxAttachMenuDirective } from 'vx-components-base';
import { VxNsMenuComponent } from './vx-ns-menu.component';

@Directive({
  selector: '[vxNsAttachMenu]'
})
export class VxNsAttachMenuDirective extends AbstractVxAttachMenuDirective<View> {
  protected menu!: VxNsMenuComponent<any>;
  protected directiveName = 'vxNsAttachMenu';

  constructor(el: ElementRef<View>) {
    super(el);
  }

  @Input() set vxNsAttachMenu(menu: VxNsMenuComponent<any>) {
    this.menu = menu;
  }

}
