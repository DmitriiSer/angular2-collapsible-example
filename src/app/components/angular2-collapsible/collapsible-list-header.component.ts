import { Component, HostListener } from '@angular/core';

import { CollapsibleListEventService } from './collapsible-list-event.service';

@Component({
    selector: 'collapsible-list-header',
    template: `<ng-content></ng-content>`,
    styles: [`
        :host {
            display: block;
            cursor: pointer;
            min-height: 3rem;
            line-height: 3rem;
            padding: 0 1rem;
            background-color: #fff;
            border-bottom: 1px solid #ddd;
        }
    `]
})
export class CollapsibleListHeader {

    constructor(private eventService: CollapsibleListEventService) { }

    @HostListener('click', ['$event'])
    click(event) {
        this.eventService.collapsibleHeaderClick(event);
    }

}