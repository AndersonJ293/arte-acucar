import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingEditComponent } from './pricing-edit.component';

describe('PricingEditComponent', () => {
  let component: PricingEditComponent;
  let fixture: ComponentFixture<PricingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
