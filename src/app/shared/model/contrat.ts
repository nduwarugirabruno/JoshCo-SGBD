import {IEnseignant} from "./enseignant";
import {IMaison} from "./maison";

export interface IContrat {
    id: number,
    date: Date,
    montant: number,
    matiere: string[],
    state: boolean,
    enseignant: IEnseignant,
    maison: IMaison
}
