import {Component, OnInit} from '@angular/core';
import {GlobalVariables} from "../shared/global-variables";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    public visibility = false;
    public adminName!: string;
    protected settingView!: number;

    constructor(private param: GlobalVariables) {
    }

    ngOnInit(): void {
        this.adminName = this.param.currentUserData.login;
        console.log('Admin: ', this.param.currentUserData);
    }

    toggleVisibility() {
        this.visibility = !this.visibility;
    }

    toggleSettings(number: number) {
        this.settingView = number;
    }
}
