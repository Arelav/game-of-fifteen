import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  providers: [
    SettingsService,
    BoardService,
  ]
})
export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    console.log(this.boardService.board);
  }

}
