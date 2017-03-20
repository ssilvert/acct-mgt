import { AcctMgtPage } from './app.po';

describe('acct-mgt App', () => {
  let page: AcctMgtPage;

  beforeEach(() => {
    page = new AcctMgtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
