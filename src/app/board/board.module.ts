import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';
import { SettingsService } from '../settings.service';
import { MoveService } from './move.service';
import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
  ],
  exports: [BoardComponent],
  declarations: [TileComponent, BoardComponent],
  providers: [
    SettingsService,
    BoardService,
    MoveService,
  ]
})
export class BoardModule { }
