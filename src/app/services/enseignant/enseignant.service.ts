import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IEnseignant} from "../../shared/model/enseignant";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EnseignantService {

    private readonly API_URL = "http://localhost:8080/api/enseignant";
    // private readonly API_URL = "http://192.168.1.109:8080/api/enseignant";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_UPDATE = "/update";

    private readonly ENDPOINT_DELETE = "/delete";

    private readonly ENDPOINT_READ = "/read";

    constructor(private httpClient: HttpClient) {
    }

    // Teacher's operations
    create(enseignant: IEnseignant): Observable<IEnseignant> {
        tap(enseignant => console.log("Enseignant: ", enseignant))
        catchError(this.handleError);
        return this.httpClient.post<IEnseignant>(this.API_URL + this.ENDPOINT_CREATE, enseignant);
    }

    update(id: number, enseignant: IEnseignant): Observable<IEnseignant> {
        tap(enseignant => console.log("Enseignant: ", enseignant))
        catchError(this.handleError);
        return this.httpClient.put<IEnseignant>(this.API_URL + this.ENDPOINT_UPDATE + '/' + id, enseignant);
    }

    delete(id: number): Observable<IEnseignant> {
        tap(enseignant => console.log("Enseignant: ", enseignant))
        catchError(this.handleError);
        return this.httpClient.delete<IEnseignant>(this.API_URL + this.ENDPOINT_DELETE + '/' + id);
    }

    getAll(): Observable<IEnseignant[]> {
        tap(enseignants => console.log("Enseignants: ", enseignants))
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant[]>(this.API_URL + this.ENDPOINT_READ);
    }

    getById(id: number): Observable<IEnseignant> {
        tap(enseignant => console.log("Enseignant: ", enseignant))
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant>(this.API_URL + this.ENDPOINT_READ + '/' + id);
    }

    getByNames(names: string): Observable<IEnseignant[]> {
        tap(enseignant => console.log("Enseignants: ", enseignant))
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant[]>(this.API_URL + this.ENDPOINT_READ + '/names/' + names);
    }

    getByAge(age: string): Observable<IEnseignant[]> {
        tap(enseignant => console.log("Enseignants: ", enseignant))
        catchError(this.handleError);
        return this.httpClient.get<IEnseignant[]>(this.API_URL + this.ENDPOINT_READ + '/age/' + age);
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error("An error has occured", error.error.message);
        } else {
            console.error(
                `Back error code: ${error.status}`,
                `Error body: ${error.error}`
            );
        }
        return throwError('Try again later please');
    }


}
