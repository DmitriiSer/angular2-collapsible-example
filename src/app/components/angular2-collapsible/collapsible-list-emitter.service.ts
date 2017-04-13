import { Injectable } from '@angular/core';

import { Subject, Subscription } from 'rxjs/Rx';

@Injectable()
export class CollapsibleListEmitterService {

  private events = new Subject();

  subscribe(next, error, complete): Subscription {
    return this.events.subscribe(next, error, complete);
  }
  
  next(event) {
    this.events.next(event);
  }
}
