import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserComponent } from './post-user.component';

describe('PostuserComponent', () => {
  let component: PostUserComponent;
  let fixture: ComponentFixture<PostUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostUserComponent]
    });
    fixture = TestBed.createComponent(PostUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
