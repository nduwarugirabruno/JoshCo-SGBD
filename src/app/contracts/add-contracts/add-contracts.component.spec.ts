import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddContractsComponent} from './add-contracts.component';

describe('AddContractsComponent', () => {
    let component: AddContractsComponent;
    let fixture: ComponentFixture<AddContractsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddContractsComponent]
        });
        fixture = TestBed.createComponent(AddContractsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
