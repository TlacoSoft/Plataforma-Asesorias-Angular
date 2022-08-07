import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsesoriasService {

  constructor(private http: HttpClient) { }

  // Obtener todas las asesorías
  getAll() {
    return this.http.get("https://asesoriasnode.azurewebsites.net/asesorias/get");
  }
}
