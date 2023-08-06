import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IAdmin} from "../../shared/model/admin";
import {Router} from "@angular/router";
import {AdminService} from "../../services/admin/admin.service";
import {GlobalVariables} from "../../shared/global-variables";

@Component({
    selector: 'app-add-admin',
    templateUrl: './add-admin.component.html',
    styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {

    @Output() visibilityEvent = new EventEmitter<boolean>();

    isLoading = false;
    form!: FormGroup;
    errMsg!: string;
    private admin!: IAdmin;

    //On vérifie que chaque champ soit rempli
    constructor(private fb: FormBuilder, private adminService: AdminService, private param: GlobalVariables, private route: Router) {

        this.form = this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required],
            yourpass: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        console.log('Admin: ', this.param.currentUserData);
    }


    //soumission du formulaire
    submit() {
        if (this.form.valid) {

            this.isLoading = true;
            if (this.param.currentUserData.password === this.form.value.yourpass) {
                this.admin = {
                    id: 0, login: this.form.value.login, password: this.form.value.password, state: false
                }
                console.log("Admin: ", this.param.currentUserData);
                try {
                    this.adminService.create(this.admin).subscribe({
                        next: data => {
                            console.log('Datas: ', data);
                            setTimeout(() => {
                                this.isLoading = false;
                                this.sendVisibility();
                            }, 2000);
                        },
                        error: err => {
                            console.log('Erreur: ', err.error);
                            setTimeout(() => {
                                this.isLoading = false;
                                this.sendVisibility();
                            }, 2000);
                        },
                    });
                } catch (error: any) {
                    alert(error)
                }

            } else this.errMsg = 'Mot de passe incorrect...';
        }
    }

    sendVisibility() {
        this.visibilityEvent.emit(true);
    }

    back() {
        this.sendVisibility();
    }
}
