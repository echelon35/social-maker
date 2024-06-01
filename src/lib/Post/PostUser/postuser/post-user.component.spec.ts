import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMPostUserComponent } from './post-user.component';

describe('PostuserComponent', () => {
  let component: SMPostUserComponent;
  let fixture: ComponentFixture<SMPostUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SMPostUserComponent]
    });
    fixture = TestBed.createComponent(SMPostUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
