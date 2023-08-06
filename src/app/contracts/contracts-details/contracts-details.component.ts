import {Component, OnInit} from '@angular/core';
import {IContrat} from "../../shared/model/contrat";
import {ActivatedRoute} from "@angular/router";
import {ContratService} from "../../services/contrat/contrat.service";

@Component({
    selector: 'app-contracts-details',
    templateUrl: './contracts-details.component.html',
    styleUrls: ['./contracts-details.component.css']
})
export class ContractsDetailsComponent implements OnInit {

    public errMsg!: String;

    public contrat: IContrat | undefined = <IContrat>{};

    public currentUserData: IContrat | undefined;

    constructor(private contratService: ContratService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const userID = Number(this.route.snapshot.paramMap.get("id"));

        this.contratService.getAll().subscribe({
                next: contrat => {
                    this.contrat = contrat.find(ens => ens.id == userID);
                    this.currentUserData = this.contrat;
                },
                error: err => this.errMsg = err
            }
        );

        console.log("On Init..." + userID);
    }

}
