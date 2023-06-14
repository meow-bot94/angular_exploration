import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColouredTableComponent } from './coloured-table.component';

describe('ColouredTableComponent', () => {
  let component: ColouredTableComponent;
  let fixture: ComponentFixture<ColouredTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColouredTableComponent]
    });
    fixture = TestBed.createComponent(ColouredTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
