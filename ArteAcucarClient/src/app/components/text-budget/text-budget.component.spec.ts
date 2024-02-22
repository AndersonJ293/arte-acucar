import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBudgetComponent } from './text-budget.component';

describe('TextBudgetComponent', () => {
  let component: TextBudgetComponent;
  let fixture: ComponentFixture<TextBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
