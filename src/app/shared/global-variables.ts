import {Injectable} from "@angular/core";
import {IAdmin} from "./model/admin";

@Injectable()
export class GlobalVariables {

    isConnected!: Boolean;

    isLoading = false;

    currentUserData!: IAdmin;

    setAdminData(admin: IAdmin) {
        this.currentUserData = admin;
    }

}
