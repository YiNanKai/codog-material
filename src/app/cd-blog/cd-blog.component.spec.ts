import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdBlogComponent } from './cd-blog.component';

describe('CdBlogComponent', () => {
  let component: CdBlogComponent;
  let fixture: ComponentFixture<CdBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
