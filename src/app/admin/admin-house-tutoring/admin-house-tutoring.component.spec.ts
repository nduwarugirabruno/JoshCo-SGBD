import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHouseTutoringComponent } from './admin-house-tutoring.component';

describe('AdminHouseTutoringComponent', () => {
  let component: AdminHouseTutoringComponent;
  let fixture: ComponentFixture<AdminHouseTutoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHouseTutoringComponent]
    });
    fixture = TestBed.createComponent(AdminHouseTutoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
