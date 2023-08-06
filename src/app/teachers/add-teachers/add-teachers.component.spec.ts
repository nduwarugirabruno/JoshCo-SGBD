import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTeachersComponent} from './add-teachers.component';

describe('AddTeachersComponent', () => {
    let component: AddTeachersComponent;
    let fixture: ComponentFixture<AddTeachersComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddTeachersComponent]
        });
        fixture = TestBed.createComponent(AddTeachersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
