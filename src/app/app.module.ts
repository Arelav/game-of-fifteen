import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { TileComponent } from './tile/tile.component';
import { BoardService } from './board.service';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    TileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [BoardService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
