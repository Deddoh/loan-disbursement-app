import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedIn: Boolean = false;
_currentUser: any = {}
  constructor(
    private _router: Router,
    private http: HttpClient
  ) { }

  checkToken(){
    return this.loggedIn;
  }

  public login(endpoint:string, body: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');

    return this.http.post(
        'http://localhost:5000/' + endpoint, body,
        // { headers: this.getHeaders() }
    ).pipe(
        map((data:any) => {
            if (data['data']) {
                
                // changed token to Data
                localStorage.setItem('token', data['data']);
                this._currentUser = localStorage.getItem('token');
                this.loggedIn = true;

            } else {
                localStorage.removeItem('token');
                this._currentUser = null;
                this.loggedIn = false;
                this._router.navigate(['auth/login']);
            }
            return data;
        }));
}



}
