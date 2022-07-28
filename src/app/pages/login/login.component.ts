import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(private logService: AuthService,
              private formBuilder: FormBuilder,
              private cookieService: CookieService,
              private router: Router) { }

  email = '^[a-z0-9._$+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  ngOnInit(): void {
    
  }

  formLogin: FormGroup = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.pattern(this.email)]],
    password: ['', [Validators.required]]
  })
  
  
   login():any {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    } 
    this.logService.login(this.formLogin.value).subscribe((res:any) => {
      if (res.status === 'User not found') {
        Swal.fire("Usuario o contraseña incorrectos");
        return;
      }
      this.cookieService.set('token_access', 'fsdfsdfsdf4548', 4, '/')
      this.router.navigate(['/', 'home'])
    })
   }

   validarCampos(campo: string) {
    return this.formLogin.controls[campo].errors && this.formLogin.controls[campo].touched
   }
}
