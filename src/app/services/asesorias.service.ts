import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class AsesoriasService {

  constructor(private http: HttpClient) { }

  // Obtener todas las asesorías
  getAll() {
    return this.http.get("https://asesoriasnode.azurewebsites.net/asesorias/get");
  }

  //Obtener profesores
  getprof(){
    return this.http.get("https://asesoriasnode.azurewebsites.net/profesoress/get");
  }

  getuser(){
    return this.http.get("https://asesoriasnode.azurewebsites.net/users/get")
  }
//agregar una asesoria
  requesta(form: any){
    return this.http.post('https://asesoriasnode.azurewebsites.net/asesorias/create',form);
  }

}
