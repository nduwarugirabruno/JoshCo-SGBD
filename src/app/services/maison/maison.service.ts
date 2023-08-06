import {Injectable} from '@angular/core';
import {catchError, Observable, tap, throwError} from "rxjs";
import {IMaison} from "../../shared/model/maison";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class MaisonService {

    private readonly API_URL = "http://localhost:8080/api/maison";
    // private readonly API_URL = "http://192.168.1.109:8080/api/Maison";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_UPDATE = "/update";

    private readonly ENDPOINT_DELETE = "/delete";

    private readonly ENDPOINT_READ = "/read";

    constructor(private httpClient: HttpClient) {
    }

    // Maison's operations
    create(Maison: IMaison): Observable<IMaison> {
        tap(maison => console.log("Maison: ", maison))
        catchError(this.handleError);
        return this.httpClient.post<IMaison>(this.API_URL + this.ENDPOINT_CREATE, Maison);
    }

    update(id: number, Maison: IMaison): Observable<IMaison> {
        tap(maison => console.log("Maison: ", maison))
        catchError(this.handleError);
        return this.httpClient.put<IMaison>(this.API_URL + this.ENDPOINT_UPDATE + '/' + id, Maison);
    }

    delete(id: number): Observable<IMaison> {
        tap(maison => console.log("Maison: ", maison))
        catchError(this.handleError);
        return this.httpClient.delete<IMaison>(this.API_URL + this.ENDPOINT_DELETE + '/' + id);
    }

    getAll(): Observable<IMaison[]> {
        tap(maisons => console.log("Maisons", maisons))
        catchError(this.handleError);
        return this.httpClient.get<IMaison[]>(this.API_URL + this.ENDPOINT_READ);
    }

    getById(id: number): Observable<IMaison> {
        tap(maison => console.log("Maison: ", maison))
        catchError(this.handleError);
        return this.httpClient.get<IMaison>(this.API_URL + this.ENDPOINT_READ + '/' + id);
    }

    getByNoms(noms: string): Observable<IMaison[]> {
        tap(maison => console.log("Maisons: ", maison))
        catchError(this.handleError);
        return this.httpClient.get<IMaison[]>(this.API_URL + this.ENDPOINT_READ + '/noms/' + noms);
    }

    getByQuartier(quartier: string): Observable<IMaison[]> {
        tap(maison => console.log("Maisons: ", maison))
        catchError(this.handleError);
        return this.httpClient.get<IMaison[]>(this.API_URL + this.ENDPOINT_READ + '/quartier/' + quartier);
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
