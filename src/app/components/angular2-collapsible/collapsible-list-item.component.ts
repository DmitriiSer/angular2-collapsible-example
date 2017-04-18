import {
    Component,
    AfterContentInit,
    Input,
    ContentChildren, QueryList    
} from '@angular/core';

import { CollapsibleBody } from './collapsible-body.component';

import { CollapsibleService } from './collapsible.service';
import { CollapsibleEventService } from './collapsible-event.service';

@Component({
    selector: 'collapsible-list-item',
    template: `
        <ng-content select="collapsible-header"></ng-content>
        <ng-content select="collapsible-body"></ng-content>
    `,
    providers: [CollapsibleEventService]
})
export class CollapsibleListItem implements AfterContentInit {

    @ContentChildren(CollapsibleBody) contentListBodies: QueryList<CollapsibleBody>;

    constructor(private collapsibleService: CollapsibleService) { }

    ngAfterContentInit() {
        // store list bodies in 'CollapsibleService'
        this.contentListBodies.forEach((item) => {
            this.collapsibleService.addListBody(item);
        });
    }

}