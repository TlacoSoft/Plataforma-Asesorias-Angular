import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }
  URL = 'https://asesoriasnode.azurewebsites.net/users';


  login(body: any) {
    return this.http.post(`${this.URL}/login`, body);
  }
 
  create(form: any){
    return this.http.post(`${this.URL}/create`,form);
  }
}
