import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-request-a',
  templateUrl: './request-a.component.html',
  styleUrls: ['./request-a.component.scss']
})
export class RequestAComponent implements OnInit {

  asesorias:any;
  id:any;

  constructor(private serviceAut:AuthService,private router:Router, private AR:ActivatedRoute,
    private fb: FormBuilder) { }

    myFormulario: FormGroup = this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(4)]],
      alumno: ['', [Validators.required, Validators.minLength(7)]],
      hora: ['', [Validators.required]],
      encargado: ['', [Validators.required, Validators.minLength(7)]],
      fecha: ['', [Validators.required]],
      modalidad: ['', [Validators.required]],

    });

  ngOnInit(): void {
  }

  campoValido(campo: string) {
    return this.myFormulario.controls[campo].errors
      && this.myFormulario.controls[campo].touched;

  } 
  
  save() {
    console.log(this.myFormulario.value);
    this.serviceAut.requesta(this.myFormulario.value).subscribe((data: any) => {
      console.log(data);
        this.router.navigate(['reques-a']);
        this.myFormulario.reset()
    });
  }

}