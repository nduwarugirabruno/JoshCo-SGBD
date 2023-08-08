import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddAdminComponent} from './add-admin/add-admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TeachersModule} from "../teachers/teachers.module";
import { AdminTeacherComponent } from './admin-teacher/admin-teacher.component';
import { AdminHouseTutoringComponent } from './admin-house-tutoring/admin-house-tutoring.component';
import { AdminContractComponent } from './admin-contract/admin-contract.component';


@NgModule({
    declarations: [
        AddAdminComponent,
        AdminTeacherComponent,
        AdminHouseTutoringComponent,
        AdminContractComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TeachersModule,
        FormsModule
    ],
    exports: [
        AddAdminComponent,
        AdminTeacherComponent,
        AdminHouseTutoringComponent,
        AdminContractComponent
    ]

})
export class AdminModule {
}
