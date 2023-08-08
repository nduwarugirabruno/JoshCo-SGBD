import { Component } from '@angular/core';
import {IMaison} from "../../shared/model/maison";
import {MaisonService} from "../../services/maison/maison.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-house-tutoring',
  templateUrl: './admin-house-tutoring.component.html',
  styleUrls: ['./admin-house-tutoring.component.css']
})
export class AdminHouseTutoringComponent {

    listMaison!: IMaison[];
    public searchedMaison: IMaison[] = [];

    constructor(private maisonService: MaisonService, private route: Router) {
    }

    private _searchedHouse = '';

    public get searchedHouse(): string {
        return this._searchedHouse;
    }

    public set searchedHouse(filter: string) {
        this._searchedHouse = filter;
        this.searchedMaison = this.searchedHouse ? this.searchingHouse(this.searchedHouse) : this.listMaison;

    }

    ngOnInit(): void {
        this.maisonService.getAll().subscribe({
            next: maisons => {
                this.listMaison = maisons;
                this.searchedMaison = maisons;
                console.log('Maisons: ', maisons);
            },
            error: err => {
                console.log('Error: ', err);
            },
        });
    }

    private searchingHouse(critere: string): IMaison[] {
        critere = critere.toLocaleLowerCase();
        return this.listMaison.filter(
            (Maison: IMaison) => (
                String(Maison.tel).toLocaleLowerCase().indexOf(critere) != -1
                || Maison.noms.toLocaleLowerCase().indexOf(critere) != -1
                || Maison.quartier.toLocaleLowerCase().indexOf(critere) != -1
            ),
        );

    }

    delete(id: number) {
        try {
            this.maisonService.delete(id).subscribe({
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
