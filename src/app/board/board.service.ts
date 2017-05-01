import { Injectable } from '@angular/core';
import { SettingsService } from '../settings.service';

@Injectable()
export class BoardService {
  private generatedTiles: number[];

  constructor(private settingsService: SettingsService) {
    this.generatedTiles = Array.from(new Array(settingsService.boardSize ** 2), (x, i) => i);
  }

  mixBoard(tiles) {
    // TODO: Implement mix method;
    return tiles;
  }

  get tiles() {
    // TODO: refactor to stream
    return this.mixBoard(this.generatedTiles);
  }

}
