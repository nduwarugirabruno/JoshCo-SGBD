import {Component, OnInit} from '@angular/core';
import {MaisonService} from "../services/maison/maison.service";
import {IMaison} from "../shared/model/maison";

@Component({
    selector: 'app-house-tutoring',
    templateUrl: './house-tutoring.component.html',
    styleUrls: ['./house-tutoring.component.css']
})
export class HouseTutoringComponent implements OnInit {

    listMaison!: IMaison[];
    public searchedMaison: IMaison[] = [];

    constructor(private maisonService: MaisonService) {
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
}
