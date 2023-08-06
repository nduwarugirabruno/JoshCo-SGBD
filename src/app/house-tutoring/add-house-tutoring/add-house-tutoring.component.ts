import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MaisonService} from "../../services/maison/maison.service";
import {Router} from "@angular/router";
import {IMaison} from "../../shared/model/maison";

@Component({
    selector: 'app-add-house-tutoring',
    templateUrl: './add-house-tutoring.component.html',
    styleUrls: ['./add-house-tutoring.component.css']
})
export class AddHouseTutoringComponent {

    isLoading = false;
    form!: FormGroup;
    private maison!: IMaison;

    //On vérifie que chaque champ soit rempli
    constructor(private fb: FormBuilder, private maisonService: MaisonService, private route: Router) {
        this.form = this.fb.group({
            noms: ['', Validators.required],
            tel: ['', Validators.required],
            quartier: ['', Validators.required],
        });
    }


    //soumission du formulaire
    submit() {
        if (this.form.valid) {

            this.isLoading = true;
            this.form.value.tel = Number(this.form.value.tel);

            this.maison = {
                noms: this.form.value.noms, quartier: this.form.value.quartier,
                tel: this.form.value.tel, state: false, id: 0
            }
            try {
                console.log('isLoading: ', this.isLoading);
                this.maisonService.create(this.maison).subscribe({
                    next: data => {
                        console.log('Datas: ', data);
                        console.log("Maison enregistrée", this.form.value);
                        setTimeout(() => {
                            this.route.navigate(['/house-tutoring']);
                        }, 2000);
                    },
                    error: err => {
                        console.log('Erreur: ', err.error);
                        setTimeout(() => {
                            this.route.navigate(['/house-tutoring']);
                        }, 2000);
                    }
                });
            } catch (error: any) {
                alert(error.error);
            }
        }
    }
}
