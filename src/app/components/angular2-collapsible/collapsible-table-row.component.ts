import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

import { CollapsibleTableRowDetail } from './collapsible-table-row-detail.component';
import { CollapsibleService } from './collapsible.service';
import { CollapsibleAnimations } from './collapsible-animations.service';

@Component({
    selector: 'collapsible-table-row',
    template: `<ng-content></ng-content>`,
    styles: [`
        :host {
            display: table-row;
            cursor: pointer;
        }
    `],
    animations: CollapsibleAnimations.collapsibleTableRowAnimations('collapsibleTableRowState')
})
export class CollapsibleTableRow implements OnInit {
    @Input() detail: CollapsibleTableRowDetail;

    @HostBinding("@collapsibleTableRowState")
    activeState: string;

    constructor(private collapsibleService: CollapsibleService) { }

    ngOnInit() { }

    @HostListener('mousedown')
    mousedown(event) {
        this.activeState = 'active';
        //console.debug(`mousedown, activeState = ${this.activeState}`);
    }

    @HostListener('mouseup')
    mouseup() {
        this.activeState = 'inactive';
        //console.debug(`mouseup, activeState = ${this.activeState}`);
    }

    @HostListener('click')
    click() {
        if (this.detail != null) {
            this.detail.subject.next();
        }
    }

}