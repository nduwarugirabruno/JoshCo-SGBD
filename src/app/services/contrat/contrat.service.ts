import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IContrat} from "../../shared/model/contrat";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContratService {

    private readonly API_URL = "http://localhost:8080/api/contrat";
    // private readonly API_URL = "http://192.168.1.109:8080/api/contrat";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_UPDATE = "/update";

    private readonly ENDPOINT_DELETE = "/delete";

    private readonly ENDPOINT_READ = "/read";

    constructor(private httpClient: HttpClient) {
    }

    // Teacher's operations
    create(contrat: IContrat): Observable<IContrat> {
        tap(contrat => console.log("Contrat: ", contrat))
        catchError(this.handleError);
        return this.httpClient.post<IContrat>(this.API_URL + this.ENDPOINT_CREATE, contrat);
    }

    update(id: number, contrat: IContrat): Observable<IContrat> {
        tap(contrat => console.log("Contrat: ", contrat))
        catchError(this.handleError);
        return this.httpClient.put<IContrat>(this.API_URL + this.ENDPOINT_UPDATE + '/' + id, contrat);
    }

    delete(id: number): Observable<IContrat> {
        tap(contrat => console.log("Contrat: ", contrat))
        catchError(this.handleError);
        return this.httpClient.delete<IContrat>(this.API_URL + this.ENDPOINT_DELETE + '/' + id);
    }

    getAll(): Observable<IContrat[]> {
        tap(contrats => console.log("Contrats: ", contrats))
        catchError(this.handleError);
        return this.httpClient.get<IContrat[]>(this.API_URL + this.ENDPOINT_READ);
    }

    getById(id: number): Observable<IContrat> {
        tap(contrat => console.log("Contrat: ", contrat))
        catchError(this.handleError);
        return this.httpClient.get<IContrat>(this.API_URL + this.ENDPOINT_READ + '/' + id);
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
