import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesEmploisComponent } from './salles-emplois.component';

describe('SallesEmploisComponent', () => {
  let component: SallesEmploisComponent;
  let fixture: ComponentFixture<SallesEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SallesEmploisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallesEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
