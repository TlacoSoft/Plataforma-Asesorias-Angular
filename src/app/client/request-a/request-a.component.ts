import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { max } from 'rxjs';
import { AsesoriasService } from 'src/app/services/asesorias.service';


@Component({
  selector: 'app-request-a',
  templateUrl: './request-a.component.html',
  styleUrls: ['./request-a.component.scss']
})
export class RequestAComponent implements OnInit {

  profesores: any;
  usuarios: any;
  asesorias:any;
  id:any;

  constructor(private serAse:AsesoriasService,private router:Router, private AR:ActivatedRoute,
    private fb: FormBuilder) { }

    myFormulario: FormGroup = this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(4)]],
      alumno: ['', [Validators.required,]],
      hora: ['', [Validators.required]],
      encargado: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      modalidad: ['', [Validators.required]],
      estatus: ['', [Validators.required]],
    });

  ngOnInit(): void {
    this.getprof();
    this.getuser();
    /* console.log(this.usuarios);
    console.log(this.profesores); */
    
  }


  campoValido(campo: string) {
    return this.myFormulario.controls[campo].errors
      && this.myFormulario.controls[campo].touched;

  } 

  getprof(){
    this.serAse.getprof().subscribe((res:any)=>{
      console.log(res)
      this.profesores = res;
    });
  }

  getuser(){
    this.serAse.getuser().subscribe((data:any)=>{
      console.log(data)
      this.usuarios = data;
    });
  }
  
  guardar() {
    console.log(this.myFormulario.value);
    this.serAse.requesta(this.myFormulario.value).subscribe((data: any) => {
      console.log(data);
        this.router.navigate(['welcome']);
        this.myFormulario.reset()
    });
  } 
}