import { GameOfFifteenPage } from './app.po';

describe('game-of-fifteen App', function() {
  let page: GameOfFifteenPage;

  beforeEach(() => {
    page = new GameOfFifteenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
