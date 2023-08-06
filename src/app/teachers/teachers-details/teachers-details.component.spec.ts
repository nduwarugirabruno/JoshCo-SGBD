import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeachersDetailsComponent} from './teachers-details.component';

describe('TeachersDetailsComponent', () => {
    let component: TeachersDetailsComponent;
    let fixture: ComponentFixture<TeachersDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TeachersDetailsComponent]
        });
        fixture = TestBed.createComponent(TeachersDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
