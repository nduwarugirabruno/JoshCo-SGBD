import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HouseTutoringComponent} from './house-tutoring.component';

describe('HouseTutoringComponent', () => {
    let component: HouseTutoringComponent;
    let fixture: ComponentFixture<HouseTutoringComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HouseTutoringComponent]
        });
        fixture = TestBed.createComponent(HouseTutoringComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
