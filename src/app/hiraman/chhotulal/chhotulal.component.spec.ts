import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChhotulalComponent } from './chhotulal.component';

describe('ChhotulalComponent', () => {
  let component: ChhotulalComponent;
  let fixture: ComponentFixture<ChhotulalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChhotulalComponent]
    });
    fixture = TestBed.createComponent(ChhotulalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
