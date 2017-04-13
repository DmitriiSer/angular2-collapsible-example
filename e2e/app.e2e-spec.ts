import { Angular2CollapsibleExamplePage } from './app.po';

describe('angular2-collapsible-example App', () => {
  let page: Angular2CollapsibleExamplePage;

  beforeEach(() => {
    page = new Angular2CollapsibleExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
