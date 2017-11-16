import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSidenavComponent } from './cd-sidenav.component';

describe('CdSidenavComponent', () => {
  let component: CdSidenavComponent;
  let fixture: ComponentFixture<CdSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
