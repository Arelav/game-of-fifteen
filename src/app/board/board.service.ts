import { Injectable } from '@angular/core';
import { SettingsService } from '../settings.service';

@Injectable()
export class BoardService {
  private initialTiles;

  constructor(private settingsService: SettingsService) {
    const size = settingsService.boardSize;

    this.initialTiles = Array.from(new Array(size),
      (x, i) => Array.from(new Array(size),
        (y, j) => i * size + j));
  }

  mixBoard(tiles) {
    // TODO: Implement mix method;
    return tiles;
  }

  get tiles() {
    // TODO: refactor to a stream
    return this.mixBoard(this.initialTiles);
  }


}
