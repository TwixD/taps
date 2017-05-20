import { TapsPage } from './app.po';

describe('taps App', function() {
  let page: TapsPage;

  beforeEach(() => {
    page = new TapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
