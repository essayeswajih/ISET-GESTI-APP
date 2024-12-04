import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantAbsenceComponent } from './enseignant-absence.component';

describe('EnseignantAbsenceComponent', () => {
  let component: EnseignantAbsenceComponent;
  let fixture: ComponentFixture<EnseignantAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnseignantAbsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
