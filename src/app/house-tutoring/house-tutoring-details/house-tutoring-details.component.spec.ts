import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HouseTutoringDetailsComponent} from './house-tutoring-details.component';

describe('HouseTutoringDetailsComponent', () => {
    let component: HouseTutoringDetailsComponent;
    let fixture: ComponentFixture<HouseTutoringDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HouseTutoringDetailsComponent]
        });
        fixture = TestBed.createComponent(HouseTutoringDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
