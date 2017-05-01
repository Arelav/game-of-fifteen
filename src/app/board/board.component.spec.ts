import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { SettingsService } from '../settings.service';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let settingsStub: SettingsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent],
      providers: [
        {provide: SettingsService, useValue: settingsStub}
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    settingsStub = {
      boardSize: 4
    };

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
