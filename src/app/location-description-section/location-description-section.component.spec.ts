import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDescriptionSectionComponent } from './location-description-section.component';

describe('LocationDescriptionSectionComponent', () => {
  let component: LocationDescriptionSectionComponent;
  let fixture: ComponentFixture<LocationDescriptionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDescriptionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDescriptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
