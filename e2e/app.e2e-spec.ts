import { CharactersDCPage } from './app.po';

describe('characters-dc App', () => {
  let page: CharactersDCPage;

  beforeEach(() => {
    page = new CharactersDCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
