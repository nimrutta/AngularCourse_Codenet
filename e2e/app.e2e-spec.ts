import { BasicsAssignment1Page } from './app.po';

describe('basics-assignment1 App', () => {
  let page: BasicsAssignment1Page;

  beforeEach(() => {
    page = new BasicsAssignment1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
