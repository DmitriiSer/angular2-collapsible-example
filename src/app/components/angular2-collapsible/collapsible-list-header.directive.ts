//import { Directive, ElementRef } from '@angular/core';
import { Component, HostListener } from '@angular/core';

import { CollapsibleListEmitterService } from './collapsible-list-emitter.service';

/*@Directive({
    selector: 'collapsible-list-header'
})*/
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
    style = {
        display: 'block',
        cursor: 'pointer',
        minHeight: '3rem',
        lineHeight: '3rem',
        padding: '0 1rem',
        backgroundColor: '#fff',
        borderBottom: '1px solid #ddd'
        /*
        
        cursor: 'pointer',
        minHeight: '3rem',
        lineHeight: '3rem',
        padding: '0 1rem',
        backgroundColor: '#fff',
        borderBottom: '1px solid #ddd'
        */
        //'(click)': 'clickMe()',
        //'(mouseenter)': 'changeColor()',
        //'(mouseout)': 'changeColorOnOut()',
    }

    constructor(private emitter: CollapsibleListEmitterService) { }

    @HostListener('click', ['$event'])
    click(event) {
        console.debug('CollapsibleListHeader::click()');
        console.debug(event);
        this.emitter.next('Broadcast this to the parent please!');
    }

    /*
    constructor(el: ElementRef) {
        for (let styleName in el.nativeElement.style) {
            if (this.style[styleName] != null) {
                el.nativeElement.style[styleName] = this.style[styleName];
            }
        }
    }
    */
}