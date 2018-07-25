import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDescComponent } from './slider-desc.component';

describe('SliderDescComponent', () => {
  let component: SliderDescComponent;
  let fixture: ComponentFixture<SliderDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
