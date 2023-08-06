import {Component, OnInit} from '@angular/core';
import {IMaison} from "../../shared/model/maison";
import {MaisonService} from "../../services/maison/maison.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-house-tutoring-details',
    templateUrl: './house-tutoring-details.component.html',
    styleUrls: ['./house-tutoring-details.component.css']
})
export class HouseTutoringDetailsComponent implements OnInit {

    public errMsg!: String;

    public maison: IMaison | undefined = <IMaison>{};

    public currentUserData: IMaison | undefined;

    constructor(private maisonService: MaisonService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const userID = Number(this.route.snapshot.paramMap.get("id"));

        this.maisonService.getAll().subscribe({
                next: maison => {
                    this.maison = maison.find(ms => ms.id == userID);
                    this.currentUserData = this.maison;
                },
                error: err => this.errMsg = err
            }
        );

        console.log("On Init..." + userID);
    }

}
