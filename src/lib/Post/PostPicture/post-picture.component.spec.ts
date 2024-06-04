import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPictureComponent } from './post-picture.component';

describe('PostPictureComponent', () => {
  let component: PostPictureComponent;
  let fixture: ComponentFixture<PostPictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostPictureComponent]
    });
    fixture = TestBed.createComponent(PostPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
