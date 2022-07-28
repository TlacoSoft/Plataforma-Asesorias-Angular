import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  login(body: any) {
    return this.http.post('https://asesoriasnode.azurewebsites.net/users/login', body);
  }
}
