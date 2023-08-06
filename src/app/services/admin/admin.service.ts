import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {IAdmin} from "../../shared/model/admin";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private readonly API_URL = "http://localhost:8080/api/admin";
    // private readonly API_URL = "http://192.168.1.109:8080/api/admin";

    private readonly ENDPOINT_CREATE = "/create";

    private readonly ENDPOINT_UPDATE = "/update";

    private readonly ENDPOINT_DELETE = "/delete";

    private readonly ENDPOINT_READ = "/read";

    constructor(private httpClient: HttpClient) {
    }

    // Admin's operations
    create(admin: IAdmin): Observable<IAdmin> {
        tap(admin => console.log("Admin", admin))
        catchError(this.handleError);
        return this.httpClient.post<IAdmin>(this.API_URL + this.ENDPOINT_CREATE, admin);
    }

    update(id: number, admin: IAdmin): Observable<IAdmin> {
        tap(admin => console.log("Admin", admin))
        catchError(this.handleError);
        return this.httpClient.put<IAdmin>(this.API_URL + this.ENDPOINT_UPDATE + '/' + id, admin);
    }

    delete(id: number): Observable<IAdmin> {
        tap(admin => console.log("Admin", admin))
        catchError(this.handleError);
        return this.httpClient.delete<IAdmin>(this.API_URL + this.ENDPOINT_DELETE + '/' + id);
    }

    getAll(): Observable<IAdmin[]> {
        tap(admins => console.log("Admins", admins))
        catchError(this.handleError);
        return this.httpClient.get<IAdmin[]>(this.API_URL + this.ENDPOINT_READ);
    }

    getById(id: number): Observable<IAdmin> {
        tap(admin => console.log("Admin", admin))
        catchError(this.handleError);
        return this.httpClient.get<IAdmin>(this.API_URL + this.ENDPOINT_READ + '/' + id);
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
