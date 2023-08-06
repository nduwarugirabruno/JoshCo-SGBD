import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTeachersComponent} from "./add-teachers/add-teachers.component";
import {TeachersDetailsComponent} from "./teachers-details/teachers-details.component";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoadingPopupComponent} from "../shared/components/loading-popup/loading-popup.component";


@NgModule({
    declarations: [
        AddTeachersComponent,
        TeachersDetailsComponent,
        LoadingPopupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterLink,
    ],
    exports: [
        AddTeachersComponent,
        TeachersDetailsComponent,
        LoadingPopupComponent
    ]
})
export class TeachersModule {
}
