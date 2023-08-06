import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddAdminComponent} from './add-admin/add-admin.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TeachersModule} from "../teachers/teachers.module";


@NgModule({
    declarations: [
        AddAdminComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TeachersModule
    ],
    exports: [
        AddAdminComponent
    ]

})
export class AdminModule {
}
