import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable()
export class BoardService {
  board: number[];

  constructor(private settingsService: SettingsService) {
    this.board = Array.from(new Array(settingsService.boardSize ** 2), (x, i) => i);
  }

}
