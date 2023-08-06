import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddContractsComponent} from "./add-contracts/add-contracts.component";
import {ContractsDetailsComponent} from "./contracts-details/contracts-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TeachersModule} from "../teachers/teachers.module";
import {RouterLink} from "@angular/router";


@NgModule({
    declarations: [
        AddContractsComponent,
        ContractsDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TeachersModule,
        RouterLink
    ],
    exports: [
        AddContractsComponent,
        ContractsDetailsComponent
    ]
})
export class ContratsModule {
}
