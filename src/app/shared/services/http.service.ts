import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
urlString = "http://localhost:4300/";

  getUserLoans(endpoint: string){
    return this.http.get(this.urlString + endpoint )
  }
}
