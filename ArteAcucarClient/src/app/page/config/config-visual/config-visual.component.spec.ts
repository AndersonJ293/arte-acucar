import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigVisualComponent } from './config-visual.component';

describe('ConfigVisualComponent', () => {
  let component: ConfigVisualComponent;
  let fixture: ComponentFixture<ConfigVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
