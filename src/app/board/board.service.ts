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

  checkDirection(current: Location): Direction {
    if (current.col === this.emptyLocation.col) {
      if (current.row > this.emptyLocation.row) {
        return Direction.up;
      }
      if (current.row < this.emptyLocation.row) {
        return Direction.down;
      }
    }
    if (current.row === this.emptyLocation.row) {
      if (current.col > this.emptyLocation.col) {
        return Direction.left;
      }
      if (current.col < this.emptyLocation.col) {
        return Direction.right;
      }
    }
  }

  move(tile) {
    const current = this.currentPosition(tile);
    const direction = this.checkDirection(current);
    switch (direction) {
      case Direction.up: {
        this.moveUp(current);
        break;
      }
      case Direction.down: {
        this.moveDown(current);
        break;
      }
      case Direction.left: {
        this.moveLeft(current);
        break;
      }
      case Direction.right: {
        this.moveRight(current);
        break;
      }
    }
  }

  moveUp(current: Location) {
    this.makeMovement(current, (delta, row, col) =>
      this.change({row: row + delta, col}, {row: row + delta + 1, col}));
  }

  moveDown(current: Location) {
    this.makeMovement(current, (delta, row, col) =>
      this.change({row: row - delta, col}, {row: row - delta - 1, col}));
  }

  moveLeft(current: Location) {
    this.makeMovement(current, (delta, row, col) =>
      this.change({row, col: col + delta}, {row, col: col + delta + 1}));
  }

  moveRight(current: Location) {
    this.makeMovement(current, (delta, row, col) =>
      this.change({row, col: col - delta}, {row, col: col - delta - 1}));
  }

  distance(from: number, to: number) {
    return Math.abs(from - to);
  }

  makeMovement(current: Location, callback) {
    const {row} = this.emptyLocation;
    const {col} = this.emptyLocation;
    const distance = this.distance(current.col, col) + this.distance(current.row, row);

    // TODO: try use recursion for movement.
    for (let delta = 0; delta < distance; delta++) {
      callback(delta, row, col);
    }
    this.emptyLocation = current;
  }

  change(next: Location, current: Location) {
    const temp = this.tiles[next.row][next.col];
    this.tiles[next.row][next.col] = this.tiles[current.row][current.col];
    this.tiles[current. row][current.col] = temp;
  }
}
