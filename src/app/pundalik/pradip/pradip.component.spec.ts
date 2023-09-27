import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PradipComponent } from './pradip.component';

describe('PradipComponent', () => {
  let component: PradipComponent;
  let fixture: ComponentFixture<PradipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PradipComponent]
    });
    fixture = TestBed.createComponent(PradipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
