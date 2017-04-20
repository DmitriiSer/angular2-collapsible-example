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

  activeTab = 1;

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

  tableOptions = [
    'bordered', 'borderedHorizontally', 'borderedVertically',
    'striped',
    'stripedOddColor', 'stripedEvenColor',
    'highlight',
    'highlightColor',
    'activeColor',
    // 'select', 'selectMultipleRows',
    'centered',
    'noTextSelect'
  ];

  bordered = false;
  borderedHorizontally = false;
  borderedVertically = false;
  striped = false;
  stripedOddColor = '#f2f2f2';
  stripedEvenColor = 'transparent';
  highlight = false;
  highlightColor = '#e2e2e2';
  activeColor = '#d2d2d2';
  select = false;
  selectMultipleRows = false;
  centered = false;
  noTextSelect = false;

  constructor() { }

  changeCollapsibleType(): void {
    this.collapsibleTypeAccordion = !this.collapsibleTypeAccordion;
    if (this.collapsibleTypeAccordion) {
      this.collapsibleType = 'accordion';
    } else {
      this.collapsibleType = 'expandable';
    }
  }

  toggleOption(option: string, value: any): void {
    switch (option) {
      case 'bordered': this.bordered = value; break;
      case 'borderedHorizontally': this.borderedHorizontally = value; break;
      case 'borderedVertically': this.borderedVertically = value; break;
      case 'striped': this.striped = value; break;
      case 'stripedOddColor': this.stripedOddColor = value; break;
      case 'stripedEvenColor': this.stripedEvenColor = value; break;
      case 'highlight': this.highlight = value; break;
      case 'highlightColor': this.highlightColor = value; break;
      case 'activeColor': this.activeColor = value; break;
      case 'select': this.select = value; break;
      case 'selectMultipleRows': this.selectMultipleRows = value; break;
      case 'centered': this.centered = value; break;
      case 'noTextSelect': this.noTextSelect = value; break;
    }
  }

  typeOf(str: string): string {
    switch (str) {
      case 'stripedOddColor': return this.stripedOddColor;
      case 'stripedEvenColor': return this.stripedEvenColor;
      case 'highlightColor': return this.highlightColor;
      case 'activeColor': return this.activeColor;
      default:
        return 'boolean';
    }
  }

  inputDisabled(option: string): boolean {
    switch (option) {
      case 'stripedOddColor':
      case 'stripedEvenColor':
        return this.striped ? null : true;
      case 'highlightColor':
        return this.highlight ? null : true;
    }
  }
}
