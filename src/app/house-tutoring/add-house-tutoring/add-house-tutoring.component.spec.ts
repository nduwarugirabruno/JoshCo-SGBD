import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddHouseTutoringComponent} from './add-house-tutoring.component';

describe('AddHouseTutoringComponent', () => {
    let component: AddHouseTutoringComponent;
    let fixture: ComponentFixture<AddHouseTutoringComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddHouseTutoringComponent]
        });
        fixture = TestBed.createComponent(AddHouseTutoringComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
