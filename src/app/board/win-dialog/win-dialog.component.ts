import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-win-dialog',
  templateUrl: './win-dialog.component.html',
  styleUrls: ['./win-dialog.component.scss']
})
export class WinDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<void>) { }

  ngOnInit() {
  }

}
