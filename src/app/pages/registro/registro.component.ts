import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuarios: any;
  id: any;

  constructor(private serviceAu:AuthService, private router:Router, private AR: ActivatedRoute,
    private fb: FormBuilder, private cookieService: CookieService,) { }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    apellido_p: ['', [Validators.required, Validators.minLength(4)]],
    apellido_m: ['', [Validators.required, Validators.minLength(4)]],
    edad: ['', [Validators.required]],
    sexo:['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email ]],/* Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$ ]") */
    password: ['', [Validators.required, Validators.minLength(8)]],
    conpassword: ['', [Validators.required, Validators.minLength(8)]],
    telefono: ['', [Validators.required, Validators.min(10)]],
    imagen: [''],

  });
  ngOnInit() {}
  
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;

  } 
  
  /* save() {
    console.log(this.miFormulario.value);
    this.serviceAu.create(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
        this.router.navigate(['login']);
        this.miFormulario.reset() 
    });
  } */


  save():any {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.serviceAu.create(this.miFormulario.value).subscribe((res:any) => { 
      if (res.status === 'Hay un error intentelo de nuevo') {
        Swal.fire("Registro exitoso");
        console.log(res);
        this.miFormulario.reset();
        return;
      }
      this.miFormulario.reset();
      this.router.navigate(['/', 'login'])
    })
   }



}
