import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  boardSize: number ;

  constructor() {
    this.boardSize = 4; // TODO: Make it configurable
  }

}
