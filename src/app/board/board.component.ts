import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';
import { SettingsService } from '../settings.service';
import { MdDialog } from '@angular/material';
import { WinDialogComponent } from './win-dialog/win-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  hiddenTile: number;

  constructor(public board: BoardService, public settings: SettingsService,
              public dialog: MdDialog) { }

  ngOnInit() {
    console.log(this.board.tiles);

    // Let Angular to know what tile we need to hide inside template
    this.hiddenTile = this.settings.boardSize ** 2;
  }

  tileClick(tile) {
    this.board.move(tile);
  }

  showDialog() {
    const dialogRef = this.dialog.open(WinDialogComponent);
    dialogRef.afterClosed()
      .subscribe(() => {
        // TODO: implement restart
      });
  }

}
