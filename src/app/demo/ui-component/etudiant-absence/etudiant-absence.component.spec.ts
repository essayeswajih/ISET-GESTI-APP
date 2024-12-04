import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantAbsenceComponent } from './etudiant-absence.component';

describe('EtudiantAbsenceComponent', () => {
  let component: EtudiantAbsenceComponent;
  let fixture: ComponentFixture<EtudiantAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantAbsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
