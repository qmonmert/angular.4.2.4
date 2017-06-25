import { Angular.4.2.4Page } from './app.po';

describe('angular.4.2.4 App', () => {
  let page: Angular.4.2.4Page;

  beforeEach(() => {
    page = new Angular.4.2.4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
