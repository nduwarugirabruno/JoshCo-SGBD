import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ContratService} from "../../services/contrat/contrat.service";
import {IEnseignant} from "../../shared/model/enseignant";
import {IMaison} from "../../shared/model/maison";
import {EnseignantService} from "../../services/enseignant/enseignant.service";
import {MaisonService} from "../../services/maison/maison.service";

@Component({
    selector: 'app-add-contracts',
    templateUrl: './add-contracts.component.html',
    styleUrls: ['./add-contracts.component.css']
})
export class AddContractsComponent implements OnInit {

    isLoading = false;
    form!: FormGroup;
    listEnseignant!: IEnseignant[];
    listMaison!: IMaison[];
    private contract!: any;

    //On vérifie que chaque champ soit rempli
    constructor(private fb: FormBuilder, private contractService: ContratService, private enseignantService: EnseignantService,
                private maisonService: MaisonService, private route: Router) {

        this.form = this.fb.group({
            date: ['', Validators.required],
            montant: ['', Validators.required],
            matiere: ['', Validators.required],
            maison: ['', Validators.required],
            enseignant: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.enseignantService.getAll().subscribe({
            next: enseignants => {
                this.listEnseignant = enseignants;
                +
                    console.log('Enseignants: ', enseignants);
            },
            error: err => {
                console.log('Error: ', err);
            },
        });
        this.maisonService.getAll().subscribe({
            next: maisons => {
                this.listMaison = maisons;
                console.log('Maisons: ', maisons);
            },
            error: err => {
                console.log('Error: ', err);
            },
        });
    }


    //soumission du formulaire
    submit() {
        if (this.form.valid) {

            this.isLoading = true;
            this.contract = {
                date: this.form.value.date,
                id: 0,
                state: false,
                enseignant: this.listEnseignant.find(e => e.id == Number(this.form.value.enseignant)),
                maison: this.listMaison.find(m => m.id == Number(this.form.value.maison)),
                matiere: (((this.form.value.matiere).replace(';', ',')).replace(' ', '')).split(','),
                montant: Number(this.form.value.montant)
            }
            console.log('Contrat: ', this.contract);
            try {
                console.log('isLoading: ', this.isLoading);
                this.contractService.create(this.contract).subscribe({
                    next: data => {
                        console.log('Datas: ', data);
                        console.log("Contrat enregistré", this.form.value);
                        setTimeout(() => {
                            this.route.navigate(['/contract']);
                        }, 2000);
                    },
                    error: err => {
                        console.log('Erreur: ', err.error);
                        setTimeout(() => {
                            this.route.navigate(['/contract']);
                        }, 2000);
                    }
                });
            } catch (error: any) {
                alert(error)
            }
        }
    }
}
