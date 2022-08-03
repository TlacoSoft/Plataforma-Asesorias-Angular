import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }
  URL = 'https://asesoriasnode.azurewebsites.net/users';


  login(body: any) {
    return this.http.post('https://asesoriasnode.azurewebsites.net/users/login', body);
  }
  requesta(form:any){
    return this.http.post('',form);
  }
  create(form: any){
    return this.http.post(`${this.URL}/create`,form);
  }
}
