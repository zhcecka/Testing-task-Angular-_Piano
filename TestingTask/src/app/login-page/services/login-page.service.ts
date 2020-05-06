import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt/';
import { LOGIN_API } from '../../../constants/env-constants';
import { TOKEN_KEY } from '../../../constants/other-constants';

@Injectable()
export class LoginService {

    constructor(
        public http: HttpClient,
        ) { }

    public sendUser(user) {
        return this.http.post(
            LOGIN_API,
            JSON.stringify(user),
            {
                headers: this.createHttpHeaders(),
            });
    }

    public addUser(user) {
        return this.http.put(
            LOGIN_API,
            JSON.stringify(user),
            {
                headers: this.createHttpHeaders(),
            });
    }

    public forgotPassword(email: string){
        return this.http.get(
            LOGIN_API,
            {
                params: {
                    email
                }
            }
            );
    }

    public isAuthenticated(): boolean {
        const jwtHelper = new JwtHelperService();
        const token = localStorage.getItem(TOKEN_KEY);

        return !jwtHelper.isTokenExpired(token);
    }

    private createHttpHeaders(){
        return new HttpHeaders({
            'Content-Type': 'application/json',
        });
    }

}
