import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMakerLibComponent } from './social-maker-lib.component';

describe('SocialMakerLibComponent', () => {
  let component: SocialMakerLibComponent;
  let fixture: ComponentFixture<SocialMakerLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMakerLibComponent]
    });
    fixture = TestBed.createComponent(SocialMakerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
