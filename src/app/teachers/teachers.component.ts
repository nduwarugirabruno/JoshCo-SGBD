import {Component, OnInit} from '@angular/core';
import {EnseignantService} from "../services/enseignant/enseignant.service";
import {IEnseignant} from "../shared/model/enseignant";

@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

    listEnseignant!: IEnseignant[];
    public searchedEnseignant: IEnseignant[] = [];

    constructor(private enseignantService: EnseignantService) {
    }

    private _searchedTeacher = '';

    public get searchedTeacher(): string {
        return this._searchedTeacher;
    }

    public set searchedTeacher(filter: string) {
        this._searchedTeacher = filter;
        this.searchedEnseignant = this.searchedTeacher ? this.searchingTeacher(this.searchedTeacher) : this.listEnseignant;

    }

    ngOnInit(): void {
        this.enseignantService.getAll().subscribe({
            next: enseignants => {
                this.listEnseignant = enseignants;
                this.searchedEnseignant = enseignants;
                console.log('Enseignants: ', enseignants);
            },
            error: err => {
                console.log('Error: ', err);
            },
        });
    }

    private searchingTeacher(critere: string): IEnseignant[] {
        critere = critere.toLocaleLowerCase();
        return this.listEnseignant.filter(
            (enseignant: IEnseignant) => (
                String(enseignant.tel).toLocaleLowerCase().indexOf(critere) != -1
                || enseignant.names.toLocaleLowerCase().indexOf(critere) != -1
                || enseignant.domicile.toLocaleLowerCase().indexOf(critere) != -1
                || enseignant.niveau.toLocaleLowerCase().indexOf(critere) != -1
                || enseignant.matiere.toString().toLocaleLowerCase().indexOf(critere) != -1)
        );

    }

}
