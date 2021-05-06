import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getLogoSource(): Promise<string> {
    return element(by.css('app-header img')).getAttribute("src");
  }
}
