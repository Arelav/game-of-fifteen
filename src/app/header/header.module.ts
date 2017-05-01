import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'app/header/header.component';
import { MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
