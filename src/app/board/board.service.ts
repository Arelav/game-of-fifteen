import { Injectable } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Location } from './location';
import { Direction } from './direction.enum';

@Injectable()
export class BoardService {
  private board: number[][];
  private emptyLocation: Location = {col: 0, row: 0};

  constructor(private settingsService: SettingsService) {
    const size = settingsService.boardSize;

    this.board = Array.from(new Array(size),
      (x, i): number[] => Array.from(new Array(size),
        (y, j): number => i * size + j));

    this.mixBoard(this.board);
  }

  mixBoard(tiles): number[][] {
    // TODO: Implement mix method;
    return tiles;
  }

  get tiles(): number[][] {
    return this.board;
  }

  currentPosition(tile): Location {
    let result: Location = {col: -1, row: -1};
    this.tiles.forEach((rowData, row) => {
      const col = rowData.indexOf(tile);
      if (col !== -1) {
        result = {col, row};
      }
    });
    return result;
  }

  checkDirection(tileLocation: Location): Direction {
    if (tileLocation.col === this.emptyLocation.col) {
      if (tileLocation.row > this.emptyLocation.row) {
        return Direction.up;
      }
      if (tileLocation.row < this.emptyLocation.row) {
        return Direction.down;
      }
    }
    if (tileLocation.row === this.emptyLocation.row) {
      if (tileLocation.col > this.emptyLocation.col) {
        return Direction.left;
      }
      if (tileLocation.col < this.emptyLocation.col) {
        return Direction.right;
      }
    }
  }

  move(tile) {
    const direction = this.checkDirection(this.currentPosition(tile));
    console.log(Direction[direction]);
  }
}
