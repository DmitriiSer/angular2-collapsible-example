import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO: add ./src for npm library
import { CollapsibleListComponent } from './collapsible-list.component';
import { CollapsibleListItem } from './collapsible-list-item.directive';
import { CollapsibleListHeader } from './collapsible-list-header.directive';
import { CollapsibleListBody } from './collapsible-list-body.directive';
import { CollapsibleListEmitterService } from './collapsible-list-emitter.service';

// TODO: add ./src for npm library
export * from './collapsible-list.component';
export * from './collapsible-list-item.directive';
export * from './collapsible-list-header.directive';
export * from './collapsible-list-body.directive';
export * from './collapsible-list-emitter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapsibleListComponent,
    CollapsibleListItem,
    CollapsibleListHeader,
    CollapsibleListBody
  ],
  exports: [
    CollapsibleListComponent,
    CollapsibleListItem,
    CollapsibleListHeader,
    CollapsibleListBody
  ]
})
export class CollapsibleListModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CollapsibleListModule,
      providers: [
        CollapsibleListEmitterService
      ]
    };
  }
}
