import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangalComponent } from './mangal.component';

describe('MangalComponent', () => {
  let component: MangalComponent;
  let fixture: ComponentFixture<MangalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangalComponent]
    });
    fixture = TestBed.createComponent(MangalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
