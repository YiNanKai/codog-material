import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdToolbarComponent } from './cd-toolbar.component';

describe('CdToolbarComponent', () => {
  let component: CdToolbarComponent;
  let fixture: ComponentFixture<CdToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
