import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotabComponent } from './infotab';

describe('InfotabComponent', () => {
  let component: InfotabComponent;
  let fixture: ComponentFixture<InfotabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfotabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfotabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
