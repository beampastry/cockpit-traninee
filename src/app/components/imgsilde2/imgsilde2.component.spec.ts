import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgsilde2Component } from './imgsilde2.component';

describe('Imgsilde2Component', () => {
  let component: Imgsilde2Component;
  let fixture: ComponentFixture<Imgsilde2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Imgsilde2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Imgsilde2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
