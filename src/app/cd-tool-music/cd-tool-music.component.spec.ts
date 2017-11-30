import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdToolMusicComponent } from './cd-tool-music.component';

describe('CdToolMusicComponent', () => {
  let component: CdToolMusicComponent;
  let fixture: ComponentFixture<CdToolMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdToolMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdToolMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
