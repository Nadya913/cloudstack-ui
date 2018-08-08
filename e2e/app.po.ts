import { browser, by, element } from 'protractor';

export class CloudstackUiPage {
  navigateTo() {
    return browser.get('/bwsw/master/login');
  }

  getLogo() {
    return element(by.css('.logo'));
  }
}
