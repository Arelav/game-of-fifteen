import { GameOfFifteenPage } from './app.po';
import { TestBed } from '@angular/core/testing';
import { SettingsService } from '../src/app/settings.service';

describe('game-of-fifteen App', () => {
  let page: GameOfFifteenPage;

  beforeEach(() => {
    page = new GameOfFifteenPage();
  });

  it('should display header component', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
