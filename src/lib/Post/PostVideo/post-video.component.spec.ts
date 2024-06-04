import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVideoComponent } from './post-video.component';

describe('PostVideoComponent', () => {
  let component: PostVideoComponent;
  let fixture: ComponentFixture<PostVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostVideoComponent]
    });
    fixture = TestBed.createComponent(PostVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
