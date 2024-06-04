import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUsernameComponent } from './post-username.component';

describe('PostUsernameComponent', () => {
  let component: PostUsernameComponent;
  let fixture: ComponentFixture<PostUsernameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostUsernameComponent]
    });
    fixture = TestBed.createComponent(PostUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
