import { Component } from '@angular/core';
import {IEnseignant} from "../../shared/model/enseignant";
import {EnseignantService} from "../../services/enseignant/enseignant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})
export class AdminTeacherComponent {

    listEnseignant!: IEnseignant[];
    public searchedEnseignant: IEnseignant[] = [];

    constructor(private enseignantService: EnseignantService, private route: Router) {
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

    delete(id: number) {
        try {
            this.enseignantService.delete(id).subscribe({
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
