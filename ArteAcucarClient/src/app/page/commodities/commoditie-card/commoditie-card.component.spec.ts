import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditieCardComponent } from './commoditie-card.component';

describe('CommoditieCardComponent', () => {
  let component: CommoditieCardComponent;
  let fixture: ComponentFixture<CommoditieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommoditieCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommoditieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
