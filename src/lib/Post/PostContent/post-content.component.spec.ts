import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMPostContentComponent } from './post-content.component';

describe('SMPostContentComponent', () => {
  let component: SMPostContentComponent;
  let fixture: ComponentFixture<SMPostContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SMPostContentComponent]
    });
    fixture = TestBed.createComponent(SMPostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
