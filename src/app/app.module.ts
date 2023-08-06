import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {GlobalVariables} from "./shared/global-variables";
import {MatIconModule} from "@angular/material/icon";
import {NavBarComponent} from './shared/nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './shared/home/home.component';
import {TeachersComponent} from './teachers/teachers.component';
import {ContractsComponent} from './contracts/contracts.component';
import {HouseTutoringComponent} from './house-tutoring/house-tutoring.component';
import {AdminModule} from "./admin/admin.module";
import {ConnexionComponent} from './shared/connexion/connexion.component';
import {ContratsModule} from "./contracts/contrats.module";
import {HouseTutoringModule} from "./house-tutoring/house-tutoring.module";
import {TeachersModule} from "./teachers/teachers.module";
import {LoadingPopupComponent} from './shared/components/loading-popup/loading-popup.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        TeachersComponent,
        ContractsComponent,
        HouseTutoringComponent,
        AdminComponent,
        ConnexionComponent
    ],
    imports: [
        MatIconModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        AdminModule,
        ContratsModule,
        HouseTutoringModule,
        TeachersModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgOptimizedImage,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [GlobalVariables],
    exports: [
        LoadingPopupComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
