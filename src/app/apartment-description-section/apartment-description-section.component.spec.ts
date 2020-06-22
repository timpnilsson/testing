import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentDescriptionSectionComponent } from './apartment-description-section.component';

describe('ApartmentDescriptionSectionComponent', () => {
  let component: ApartmentDescriptionSectionComponent;
  let fixture: ComponentFixture<ApartmentDescriptionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentDescriptionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentDescriptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
