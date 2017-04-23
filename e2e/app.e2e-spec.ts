import { NgrxProductsPage } from './app.po';

describe('ngrx-products App', () => {
  let page: NgrxProductsPage;

  beforeEach(() => {
    page = new NgrxProductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
