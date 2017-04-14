import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO: add ./src for npm library
import { CollapsibleListComponent } from './collapsible-list.component';
import { CollapsibleListItem } from './collapsible-list-item.component';
import { CollapsibleListHeader } from './collapsible-list-header.component';
import { CollapsibleListBody } from './collapsible-list-body.component';
import { CollapsibleListEventService } from './collapsible-list-event.service';

// TODO: add ./src for npm library
export * from './collapsible-list.component';
export * from './collapsible-list-item.component';
export * from './collapsible-list-header.component';
export * from './collapsible-list-body.component';
export * from './collapsible-list-event.service';

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
        CollapsibleListEventService
      ]
    };
  }
}
