import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../tile/tile.component';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';
import { SettingsService } from '../settings.service';
import { MoveService } from './move.service';
import { MdButtonModule, MdDialogModule } from '@angular/material';
import { WinDialogComponent } from './win-dialog/win-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
  ],
  exports: [BoardComponent],
  declarations: [
    TileComponent,
    BoardComponent,
    WinDialogComponent,
  ],
  entryComponents: [
    WinDialogComponent,
  ],
  providers: [
    SettingsService,
    BoardService,
    MoveService,
  ]
})
export class BoardModule { }
