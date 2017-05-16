import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board/board.service';
import { AppEvent } from '../board/app-events.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public difficulty = 50;
  public title = '15 Game';
  public startStopCaption = 'Start game';
  private nextEvent = AppEvent.start;
  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.changeDifficulty(this.difficulty);
  }

  public startStop() {
    this.boardService.sendEvent(this.nextEvent);

    if (AppEvent[this.nextEvent] === 'start') {
      this.nextEvent = AppEvent.restart;
      this.startStopCaption = 'Restart game';
    }
  }

  public changeDifficulty($event) {
    console.log($event);
    this.boardService.changeDifficulty($event.value);
  }

}
