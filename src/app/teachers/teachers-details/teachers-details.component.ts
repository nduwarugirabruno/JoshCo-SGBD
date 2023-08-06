import {Component, OnInit} from '@angular/core';
import {IEnseignant} from "../../shared/model/enseignant";
import {ActivatedRoute} from "@angular/router";
import {EnseignantService} from "../../services/enseignant/enseignant.service";

@Component({
    selector: 'app-teachers-details',
    templateUrl: './teachers-details.component.html',
    styleUrls: ['./teachers-details.component.css']
})
export class TeachersDetailsComponent implements OnInit {

    public errMsg!: String;

    public enseignant: IEnseignant | undefined = <IEnseignant>{};

    public currentUserData: IEnseignant | undefined;

    constructor(private enseignantService: EnseignantService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const userID = Number(this.route.snapshot.paramMap.get("id"));

        this.enseignantService.getAll().subscribe({
                next: enseignant => {
                    this.enseignant = enseignant.find(ens => ens.id == userID);
                    this.currentUserData = this.enseignant;
                },
                error: err => this.errMsg = err
            }
        );

        console.log("On Init..." + userID);
    }

}
