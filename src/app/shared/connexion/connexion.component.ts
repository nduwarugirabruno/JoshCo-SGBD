import {Component} from '@angular/core';
import {IAdmin} from "../model/admin";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GlobalVariables} from "../global-variables";
import {AdminService} from "../../services/admin/admin.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
    isPasswordVisible = false;
    form!: FormGroup;

    public user: IAdmin | undefined = <IAdmin>{};
    public userData: IAdmin | undefined;
    public errMsg!: String;

    //On verifie que chaque champ soit remplir
    constructor(private fb: FormBuilder, private param: GlobalVariables, private adminService: AdminService, private route: Router) {
        this.form = this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    //Les getters
    get login() {
        return this.form.get('login');
    }

    get password() {
        return this.form.get('password');
    }

    //Fonction pour la visibilite du mot de passe
    togglePasswordVisibility() {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    //soumission du formulaire
    submit() {
        this.errMsg = '';

        this.adminService.getAll().subscribe({
            next: users => {
                this.user = users.find(u => (u.login = this.form.value.login) && (u.password = this.form.value.password));
                this.userData = this.user;

                if (this.userData != null) {

                    if (this.userData.login == this.form.value.login) {
                        console.log("found", this.userData);

                        if (this.userData.password == this.form.value.password) {
                            console.log("Connexion reussie");
                            this.param.setAdminData(this.userData);
                            this.param.isConnected = true;

                            this.route.navigate(['admin']);//.then(r => this.param.refresh(r));
                        } else this.errMsg = "Login ou mot de passe incorrect";

                    } else this.errMsg = "Login ou mot de passe incorrect";

                } else this.errMsg = "Login ou mot de passe incorrect";

            },
            error: () => {
                this.errMsg = "Problème de connexion avec le serveur. Réessayer ultérieurement";
                console.log(this.errMsg);
            }
        });
        console.log('UserData: ', this.param.currentUserData);
    }


}
