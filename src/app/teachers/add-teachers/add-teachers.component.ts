import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EnseignantService} from "../../services/enseignant/enseignant.service";
import {Router} from "@angular/router";
import {IEnseignant} from "../../shared/model/enseignant";

@Component({
    selector: 'app-add-teachers',
    templateUrl: './add-teachers.component.html',
    styleUrls: ['./add-teachers.component.css']
})
export class AddTeachersComponent {

    isLoading = false;

    form!: FormGroup;

    private enseignant!: IEnseignant;

    //On vérifie que chaque champ soit rempli
    constructor(private fb: FormBuilder, private enseignantService: EnseignantService, private route: Router) {
        this.form = this.fb.group({
            names: ['', Validators.required],
            age: ['', Validators.required],
            tel: ['', Validators.required],
            domicile: ['', Validators.required],
            niveau: ['', Validators.required],
            matiere: ['', Validators.required]
        });
    }


    //soumission du formulaire
    submit() {
        if (this.form.valid) {

            this.isLoading = true;
            this.form.value.age = Number(this.form.value.age);
            this.form.value.tel = Number(this.form.value.tel);

            this.enseignant = {
                names: this.form.value.names, age: this.form.value.age, tel: this.form.value.tel,
                domicile: this.form.value.domicile, niveau: this.form.value.niveau, state: false,
                matiere: (((this.form.value.matiere).replace(';', ',')).replace(' ', '')).split(','), id: 0
            }
            try {
                console.log('isLoading: ', this.isLoading);
                this.enseignantService.create(this.enseignant).subscribe({
                    next: data => {
                        console.log('Datas: ', data);
                        console.log("Entreprise enregistrée", this.form.value);
                        setTimeout(() => {
                            this.route.navigate(['/teachers']);
                        }, 2000);
                    },
                    error: err => {
                        console.log('Erreur: ', err.error);
                        setTimeout(() => {
                            this.route.navigate(['/teachers']);
                        }, 2000);
                    }
                });
            } catch (error: any) {
                alert(error)
            }
        }
    }
}
