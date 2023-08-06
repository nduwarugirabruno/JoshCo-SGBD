import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddHouseTutoringComponent} from "./add-house-tutoring/add-house-tutoring.component";
import {HouseTutoringDetailsComponent} from "./house-tutoring-details/house-tutoring-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TeachersModule} from "../teachers/teachers.module";
import {RouterLink} from "@angular/router";


@NgModule({
    declarations: [
        AddHouseTutoringComponent,
        HouseTutoringDetailsComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TeachersModule,
        RouterLink
    ],
    exports: [
        AddHouseTutoringComponent,
        HouseTutoringDetailsComponent,
    ]
})
export class HouseTutoringModule {
}
