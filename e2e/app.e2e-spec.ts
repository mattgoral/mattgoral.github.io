import { MattgoraldotcomPage } from './app.po';

describe('mattgoraldotcom App', function() {
  let page: MattgoraldotcomPage;

  beforeEach(() => {
    page = new MattgoraldotcomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
