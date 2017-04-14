import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Rx';

@Injectable()
export class CollapsibleListEventService {

    // Observable string sources
    private collapsibleHeaderClickedSource = new Subject<any>();

    // Observable string streams
    collapsibleHeaderClicked$ = this.collapsibleHeaderClickedSource.asObservable();

    // Service message commands
    collapsibleHeaderClick(message: string) {
        this.collapsibleHeaderClickedSource.next(message);
    }

    unsubscribe() {
        this.collapsibleHeaderClickedSource.unsubscribe();
    }
}