import { Injectable } from '@angular/core';

import { CollapsibleHeader } from './collapsible-header.component';
import { CollapsibleBody } from './collapsible-body.component';

@Injectable()
export class CollapsibleService {
    type: 'accordion' | 'expandable';

    headers: Array<CollapsibleHeader> = new Array<CollapsibleHeader>();
    bodies: Array<CollapsibleBody> = new Array<CollapsibleBody>();

    getType() {
        return this.type;
    }

    setType(type: 'accordion' | 'expandable') {
        this.type = type;
    }

    addListHeader(header: CollapsibleHeader): void {
        this.headers.push(header);
    }

    addListBody(body: CollapsibleBody): void {
        this.bodies.push(body);
    }

    collapseAll(): void {
        this.bodies.forEach((item) => {
            item.expanded = false;
            item.expandedState = item.expanded.toString();
        });
    }
}