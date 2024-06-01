import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMPostHeaderComponent } from './post-header.component';

describe('PostuserComponent', () => {
  let component: SMPostHeaderComponent;
  let fixture: ComponentFixture<SMPostHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SMPostHeaderComponent]
    });
    fixture = TestBed.createComponent(SMPostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
