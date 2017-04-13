//import { Directive, ElementRef, Input } from '@angular/core';
import { Component } from '@angular/core';

import { trigger, state, style, animate } from '@angular/animations';

/*@Directive({
    selector: 'collapsible-list-body'
})*/
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

    `]
})
export class CollapsibleListBody {
    style = {
        /*
        display: 'block',
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

    constructor() {

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