import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShevabaiComponent } from './shevabai.component';

describe('ShevabaiComponent', () => {
  let component: ShevabaiComponent;
  let fixture: ComponentFixture<ShevabaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShevabaiComponent]
    });
    fixture = TestBed.createComponent(ShevabaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
