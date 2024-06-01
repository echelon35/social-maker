import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMPostComponent } from './post.component';

describe('PostComponent', () => {
  let component: SMPostComponent;
  let fixture: ComponentFixture<SMPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SMPostComponent]
    });
    fixture = TestBed.createComponent(SMPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
