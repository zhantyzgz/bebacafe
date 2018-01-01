import { BebacafePage } from './app.po';

describe('bebacafe App', () => {
  let page: BebacafePage;

  beforeEach(() => {
    page = new BebacafePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
