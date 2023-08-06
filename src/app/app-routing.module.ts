import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./shared/home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {HouseTutoringComponent} from "./house-tutoring/house-tutoring.component";
import {ContractsComponent} from "./contracts/contracts.component";
import {ConnexionGuard} from "./shared/guards/connexion/connexion.guard";
import {ConnexionComponent} from "./shared/connexion/connexion.component";
import {TeachersDetailsComponent} from "./teachers/teachers-details/teachers-details.component";
import {AddTeachersComponent} from "./teachers/add-teachers/add-teachers.component";
import {HouseTutoringDetailsComponent} from "./house-tutoring/house-tutoring-details/house-tutoring-details.component";
import {AddHouseTutoringComponent} from "./house-tutoring/add-house-tutoring/add-house-tutoring.component";
import {AddContractsComponent} from "./contracts/add-contracts/add-contracts.component";
import {ContractsDetailsComponent} from "./contracts/contracts-details/contracts-details.component";
import {AddAdminComponent} from "./admin/add-admin/add-admin.component";
import {ConnectedGuard} from "./shared/guards/connected/connected.guard";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'teachers', component: TeachersComponent},
    {path: 'teachers/:id', component: TeachersDetailsComponent},
    {path: 'add-teacher', component: AddTeachersComponent},
    {path: 'house-tutoring', component: HouseTutoringComponent},
    {path: 'house-tutoring/:id', component: HouseTutoringDetailsComponent},
    {path: 'add-house-tutoring', component: AddHouseTutoringComponent},
    {path: 'contract', component: ContractsComponent},
    {path: 'contract/:id', component: ContractsDetailsComponent},
    {path: 'add-contract', component: AddContractsComponent},
    {path: 'admin', component: AdminComponent, canActivate: [ConnexionGuard]},
    {path: 'add-admin', component: AddAdminComponent},
    {path: 'signin', component: ConnexionComponent, canActivate: [ConnectedGuard]},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
