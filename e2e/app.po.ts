import { browser, by, element } from 'protractor';

export class Angular.4.2.4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
