import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDotsComponent } from './three-dots.component';

describe('ThreeDotsComponent', () => {
  let component: ThreeDotsComponent;
  let fixture: ComponentFixture<ThreeDotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeDotsComponent]
    });
    fixture = TestBed.createComponent(ThreeDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
