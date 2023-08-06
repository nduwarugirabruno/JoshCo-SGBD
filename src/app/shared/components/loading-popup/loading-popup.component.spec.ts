import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadingPopupComponent} from './loading-popup.component';

describe('LoadingPopupComponent', () => {
    let component: LoadingPopupComponent;
    let fixture: ComponentFixture<LoadingPopupComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoadingPopupComponent]
        });
        fixture = TestBed.createComponent(LoadingPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
