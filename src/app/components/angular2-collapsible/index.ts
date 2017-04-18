import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO: add ./src for npm library
import { CollapsibleListComponent } from './collapsible-list.component';
import { CollapsibleListItem } from './collapsible-list-item.component';
import { CollapsibleHeader } from './collapsible-header.component';
import { CollapsibleBody } from './collapsible-body.component';
import { CollapsibleTable } from './collapsible-table.component';
import { CollapsibleTableRow } from './collapsible-table-row.component';
import { CollapsibleTableRowDetail } from './collapsible-table-row-detail.component';
import { CollapsibleService } from './collapsible.service';
import { CollapsibleEventService } from './collapsible-event.service';
import { CollapsibleAnimations } from './collapsible-animations.service';

// TODO: add ./src for npm library
export * from './collapsible-list.component';
export * from './collapsible-list-item.component';
export * from './collapsible-header.component';
export * from './collapsible-body.component';
export * from './collapsible-table.component';
export * from './collapsible-table-row.component';
export * from './collapsible-table-row-detail.component';
export * from './collapsible.service';
export * from './collapsible-event.service';
export * from './collapsible-animations.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapsibleListComponent,
    CollapsibleListItem,
    CollapsibleHeader,
    CollapsibleBody,
    CollapsibleTable,
    CollapsibleTableRow,
    CollapsibleTableRowDetail
  ],
  exports: [
    CollapsibleListComponent,
    CollapsibleListItem,
    CollapsibleHeader,
    CollapsibleBody,
    CollapsibleTable,
    CollapsibleTableRow,
    CollapsibleTableRowDetail
  ]
})
export class CollapsibleListModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CollapsibleListModule,
      providers: [
        CollapsibleService,
        CollapsibleEventService,
        CollapsibleAnimations
      ]
    };
  }
}
