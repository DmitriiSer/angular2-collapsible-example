import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is an example application that shows how to use angular2-collapsible component';

  loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  loremIpsumSmall = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  collapsibleType: string = 'accordion';
  collapsibleTypeAccordion: boolean = true;

  activeTab: boolean = true;

  listItems = [{
    desc: 'item 1',
    expanded: true
  }, {
    desc: 'item 2',
    expanded: false
  }, {
    desc: 'item 3'
  }];

  tableItems = {
    header: [
      { desc: 'First Name' },
      { desc: 'Last Name' },
      { desc: 'E-mail' }
    ],
    data: [
      ['Larry', 'Bishop', 'lbishop0@walmart.com'],
      ['Eugene', 'King', 'eking1@cam.ac.uk'],
      ['Kelly', 'Anderson', 'kanderson2@so-net.ne.jp'],
      ['Eugene', 'Grant', 'egrant3@senate.gov'],
      ['Shirley', 'Kennedy', 'skennedy4@istockphoto.com'],
      ['Shawn', 'Frazier', 'sfrazier5@shinystat.com'],
      ['Lawrence', 'Gutierrez', 'lgutierrez6@purevolume.com'],
      ['Craig', 'Howard', 'choward7@discuz.net'],
      ['Ronald', 'Torres', 'rtorres8@addthis.com'],
      ['Amanda', 'Wheeler', 'awheeler9@photobucket.com']
    ]
  };

  constructor() { }

  changeCollapsibleType(): void {
    this.collapsibleTypeAccordion = !this.collapsibleTypeAccordion;
    if (this.collapsibleTypeAccordion) {
      this.collapsibleType = 'accordion';
    } else {
      this.collapsibleType = 'expandable';
    }
  }
}
