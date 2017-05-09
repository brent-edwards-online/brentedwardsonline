import { BeolPage } from './app.po';

describe('beol App', () => {
  let page: BeolPage;

  beforeEach(() => {
    page = new BeolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
