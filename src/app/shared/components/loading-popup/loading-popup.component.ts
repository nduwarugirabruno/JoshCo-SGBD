import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-loading-popup',
    templateUrl: './loading-popup.component.html',
    styleUrls: ['./loading-popup.component.css']
})
export class LoadingPopupComponent {

    @Input() message!: string;
}
