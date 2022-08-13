import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AsesoriasService {

  id: any;

  constructor(private http: HttpClient,
              private cookieS: CookieService) { }

  // Obtener todas las asesorías
  getAll() {
    this.id = this.cookieS.get('id');
    return this.http.get(`https://asesoriasnode.azurewebsites.net/asesorias/${this.id}`);
  }

  // Eliminar asesoría
  deleteA(idA:any) {
    return this.http.delete(`https://asesoriasnode.azurewebsites.net/asesorias/${idA}`)
  }
}
