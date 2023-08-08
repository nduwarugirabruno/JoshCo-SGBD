import { Component } from '@angular/core';
import {IContrat} from "../../shared/model/contrat";
import {ContratService} from "../../services/contrat/contrat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-contract',
  templateUrl: './admin-contract.component.html',
  styleUrls: ['./admin-contract.component.css']
})
export class AdminContractComponent {

    listContrat!: IContrat[];
    public searchedContrat: IContrat[] = [];

    constructor(private contratService: ContratService, private route: Router) {
    }

    private _searchedContract = '';

    public get searchedContract(): string {
        return this._searchedContract;
    }

    public set searchedContract(filter: string) {
        this._searchedContract = filter;
        this.searchedContrat = this.searchedContract ? this.searchingContract(this.searchedContract) : this.listContrat;

    }

    ngOnInit(): void {
        this.contratService.getAll().subscribe({
            next: Contrats => {
                this.listContrat = Contrats;
                this.searchedContrat = Contrats;
                console.log('Contrats: ', Contrats);
            },
            error: err => {
                console.log('Error: ', err);
            },
        });
    }

    private searchingContract(critere: string): IContrat[] {
        critere = critere.toLocaleLowerCase();
        return this.listContrat.filter(
            (Contrat: IContrat) => (
                String(Contrat.montant).toLocaleLowerCase().indexOf(critere) != -1
                || Contrat.enseignant.names.toString().toLocaleLowerCase().indexOf(critere) != -1
                || Contrat.maison.noms.toString().toLocaleLowerCase().indexOf(critere) != -1
                || Contrat.maison.quartier.toString().toLocaleLowerCase().indexOf(critere) != -1
                || Contrat.maison.tel.toString().toLocaleLowerCase().indexOf(critere) != -1
                || Contrat.date.toString().toLocaleLowerCase().indexOf(critere) != -1
                || Contrat.matiere.toString().toLocaleLowerCase().indexOf(critere) != -1)
        );

    }

    delete(id: number) {
        try {
            this.contratService.delete(id).subscribe({
                next: response => {
                    console.log('Response: ', response);
                    setTimeout(() => {
                        this.route.navigate(['/admin']);
                    }, 2000);
                },
                error: err => {
                    console.log('Erreur: ', err.error);
                    setTimeout(() => {
                        this.route.navigate(['/admin']);
                    }, 2000);
                }
            });
        } catch (error: any) {
            alert(error)
        }
    }
}
