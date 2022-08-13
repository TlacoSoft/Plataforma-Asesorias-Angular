import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { observable } from 'rxjs';

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
