import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmploisComponent } from './admin-emplois.component';

describe('AdminEmploisComponent', () => {
  let component: AdminEmploisComponent;
  let fixture: ComponentFixture<AdminEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEmploisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
