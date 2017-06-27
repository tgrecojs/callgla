import { Ng2CallglaPage } from './app.po';

describe('ng2-callgla App', function() {
  let page: Ng2CallglaPage;

  beforeEach(() => {
    page = new Ng2CallglaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
