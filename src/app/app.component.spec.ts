import { TestBed, async } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  CollapsibleListComponent,
  CollapsibleListItem,
  CollapsibleHeader,
  CollapsibleBody,
  CollapsibleTable,
  CollapsibleTableRow,
  CollapsibleTableRowDetail
} from './components/angular2-collapsible';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CollapsibleListComponent,
        CollapsibleListItem,
        CollapsibleHeader,
        CollapsibleBody,
        CollapsibleTable,
        CollapsibleTableRow,
        CollapsibleTableRowDetail
      ],
      imports: [BrowserAnimationsModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have non-empty title`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).not.toBeNull();
  }));

  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain(app.title);
  }));
});
