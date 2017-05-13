import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  hiddenTile: number;

  constructor(public board: BoardService, public settings: SettingsService) { }

  ngOnInit() {
    console.log(this.board.tiles);
    this.hiddenTile = this.settings.boardSize ** 2;
  }

  tileClick(tile) {
    this.board.move(tile);
  }

}
