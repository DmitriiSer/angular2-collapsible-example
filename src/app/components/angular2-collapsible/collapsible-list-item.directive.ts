import {
    Directive,
    OnDestroy,
    ElementRef, Input
} from '@angular/core';

import { CollapsibleListEmitterService } from './collapsible-list-emitter.service';

@Directive({
    selector: 'collapsible-list-item'
})
export class CollapsibleListItem implements OnDestroy {
    style = {
        //display: 'block',        
        //'(click)': 'clickMe()',
        //'(mouseenter)': 'changeColor()',
        //'(mouseout)': 'changeColorOnOut()',
    }
    private subscription;

    @Input() expanded: boolean;

    constructor(private emitter: CollapsibleListEmitterService) {
        this.subscription = this.emitter
            .subscribe(
            msg => {
                console.debug('CollapsibleListItem received');
            },
            error => { },
            complete => { });
    }

    // Makes sure we don't have a memory leak by destroying the
    // Subscription when our component is destroyed
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    /*constructor(el: ElementRef) {
        for (let styleName in el.nativeElement.style) {
            if (this.style[styleName] != null) {
                el.nativeElement.style[styleName] = this.style[styleName];
            }
        }
    }*/

}