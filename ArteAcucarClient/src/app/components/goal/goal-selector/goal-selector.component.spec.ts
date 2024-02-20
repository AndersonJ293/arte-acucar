import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSelectorComponent } from './goal-selector.component';

describe('GoalSelectorComponent', () => {
  let component: GoalSelectorComponent;
  let fixture: ComponentFixture<GoalSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
