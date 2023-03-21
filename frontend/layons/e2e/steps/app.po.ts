import { browser, by, element, until } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));

export class AppPage {
  public navigateTo() {
    return browser.get('http://localhost:4200');
  }

  public enterSearchInput(text: string) {
    return element(by.css('input[aria-label="search"]')).sendKeys(text);
  }

  public getSearchResultItems() {
    const condition = until.elementsLocated(
      by.css('.search-results .search-result-item')
    );

    return browser.wait(condition, 5000);
  }
}
