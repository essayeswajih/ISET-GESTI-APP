import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantEmploisComponent } from './enseignant-emplois.component';

describe('EnseignantEmploisComponent', () => {
  let component: EnseignantEmploisComponent;
  let fixture: ComponentFixture<EnseignantEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnseignantEmploisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
