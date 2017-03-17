import { NgdaysPwaPage } from './app.po';

describe('ngdays-pwa App', () => {
  let page: NgdaysPwaPage;

  beforeEach(() => {
    page = new NgdaysPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
