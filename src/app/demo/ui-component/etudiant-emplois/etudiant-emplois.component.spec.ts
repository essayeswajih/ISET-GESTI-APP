import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantEmploisComponent } from './etudiant-emplois.component';

describe('EtudiantEmploisComponent', () => {
  let component: EtudiantEmploisComponent;
  let fixture: ComponentFixture<EtudiantEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantEmploisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
