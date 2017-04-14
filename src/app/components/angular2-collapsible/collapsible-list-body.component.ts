import { Component, OnDestroy, HostBinding } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { CollapsibleListEventService } from './collapsible-list-event.service';

@Component({
    selector: 'collapsible-list-body',
    template: `<ng-content></ng-content>`,
    styles: [`
        :host {
            display: block;
            border-bottom: 1px solid #ddd;
            box-sizing: border-box;
            padding: 2rem;
        }

        .side-nav :host {
            padding: 0;
        }

        .side-nav :host,
        .side-nav.fixed :host {
            border: 0;
            background-color: #fff;
        }

    `],
    animations: [
        trigger('collapsibleListItemState', [
            state('*', style({
                height: 0,
                paddingTop: 0,
                paddingBottom: 0
            })),
            state('true', style({
            })),
            transition('* => true', animate('0.4s ease')),
            transition('* => false', animate('0.4s ease'))
        ])
    ]
})
export class CollapsibleListBody implements OnDestroy {
    @HostBinding("@collapsibleListItemState")
    expandedState: string;
    expanded: boolean;

    constructor(private eventService: CollapsibleListEventService) {
        eventService.collapsibleHeaderClicked$.subscribe(
            event => {
                this.expanded = !this.expanded;
                this.expandedState = this.expanded.toString();
            });
    }

    // Makes sure we don't have a memory leak by destroying the
    // Subscription when our component is destroyed
    ngOnDestroy() {
        this.eventService.unsubscribe();
    }
}