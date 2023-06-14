import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColouredRowComponent } from './coloured-row.component';

describe('ColouredRowComponent', () => {
  let component: ColouredRowComponent;
  let fixture: ComponentFixture<ColouredRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColouredRowComponent]
    });
    fixture = TestBed.createComponent(ColouredRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
