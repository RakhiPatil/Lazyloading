import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JijabaiComponent } from './jijabai.component';

describe('JijabaiComponent', () => {
  let component: JijabaiComponent;
  let fixture: ComponentFixture<JijabaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JijabaiComponent]
    });
    fixture = TestBed.createComponent(JijabaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
