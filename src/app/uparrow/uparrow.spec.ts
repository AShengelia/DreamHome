import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UparrowComponent } from './uparrow';

describe('UparrowComponent', () => {
  let component: UparrowComponent;
  let fixture: ComponentFixture<UparrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UparrowComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UparrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
