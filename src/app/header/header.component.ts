import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public difficulty = '200';
  public title = '15 Game';
  constructor() { }

  ngOnInit() {
  }

}
