import { Component, OnDestroy, Input } from '@angular/core';

import { CollapsibleListEventService } from './collapsible-list-event.service';

@Component({
    selector: 'collapsible-list-item',
    template: `<ng-content></ng-content>`,
    providers: [CollapsibleListEventService]
})
export class CollapsibleListItem implements OnDestroy {

    @Input() expanded: boolean;

    constructor(private eventService: CollapsibleListEventService) {
        /*
        eventService.collapsibleHeaderClicked$.subscribe(
            event => {
                this.expanded = !this.expanded;
                console.debug('CollapsibleListItem::fired!');
            });
            */
    }

    // Makes sure we don't have a memory leak by destroying the
    // Subscription when our component is destroyed
    ngOnDestroy() {
        //this.eventService.unsubscribe();
    }

}