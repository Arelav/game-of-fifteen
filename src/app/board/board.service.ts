import { Injectable } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Location } from './location';
import { Direction } from './direction.enum';
import * as _ from 'lodash';

@Injectable()
export class BoardService {
  private board: number[][];
  private reference: number[][];
  private emptyLocation: Location;

  constructor(private settingsService: SettingsService) {
    const size = settingsService.boardSize;
    this.emptyLocation = {col: size - 1, row: size - 1};

    this.board = this.fill(size);
    // Other option was iterate to check solution. I chose to compare two states.
    this.reference = _.cloneDeep(this.board);

    this.mixBoard(3, size);
  }

  private fill(size) {
    return Array.from(new Array(size),
      (x, i): number[] => Array.from(new Array(size),
        (y, j): number => i * size + j + 1));
  }

  private mixBoard(difficulty, size) {
    for (let i = 0; i < difficulty; i++) {
      const rand = Math.floor(Math.random() * size);

      // Randomize axis
      if (Math.floor(Math.random() * 2) === 0) {
        this.move(this.board[rand][this.emptyLocation.col]);
      } else {
        this.move(this.board[this.emptyLocation.row][rand]);
      }
    }
  }

  get tiles(): number[][] {
    return this.board;
  }

  private currentPosition(tile: number): Location {
    let result: Location = {col: -1, row: -1};
    this.tiles.forEach((rowData, row) => {
      const col = rowData.indexOf(tile);
      if (col !== -1) {
        result = {col, row};
      }
    });
    return result;
  }

  private checkDirection(current: Location): Direction {
    const {row, col} = current;
    if (col === this.emptyLocation.col) {
      if (row > this.emptyLocation.row) {
        return Direction.up;
      }
      if (row < this.emptyLocation.row) {
        return Direction.down;
      }
    }
    if (row === this.emptyLocation.row) {
      if (col > this.emptyLocation.col) {
        return Direction.left;
      }
      if (col < this.emptyLocation.col) {
        return Direction.right;
      }
    }
  }

  public move(tile) {
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

  private moveUp(current: Location) {
    this.makeMove(current, (delta, row, col) =>
      this.swap({row: row + delta, col}, {row: row + delta + 1, col}));
  }

  private moveDown(current: Location) {
    this.makeMove(current, (delta, row, col) =>
      this.swap({row: row - delta, col}, {row: row - delta - 1, col}));
  }

  private moveLeft(current: Location) {
    this.makeMove(current, (delta, row, col) =>
      this.swap({row, col: col + delta}, {row, col: col + delta + 1}));
  }

  private moveRight(current: Location) {
    this.makeMove(current, (delta, row, col) =>
      this.swap({row, col: col - delta}, {row, col: col - delta - 1}));
  }

  private distance(from: number, to: number) {
    return Math.abs(from - to);
  }

  private makeMove(current: Location, callback) {
    const {row, col} = this.emptyLocation;
    const distance = this.distance(current.col, col) + this.distance(current.row, row);

    // TODO: try use recursion for movement.
    for (let delta = 0; delta < distance; delta++) {
      callback(delta, row, col);
    }
    this.emptyLocation = current;
    // TODO: Change to class scope var
    const size = this.settingsService.boardSize;
    // Check only if right bottom tile is empty
    if (this.emptyLocation.col === size -1 && this.emptyLocation.row === size - 1) {
      console.log(this.checkSolution());
    }
  }

  private checkSolution(): boolean {
    let solved = false;
    solved = _.isEqual(this.board, this.reference);
    return solved;
  }

  private swap(next: Location, current: Location) {
    [
      this.tiles[next.row][next.col],
      this.tiles[current.row][current.col]
    ] = [
      this.tiles[current.row][current.col],
      this.tiles[next.row][next.col]
    ];
  }
}
