import { Component, OnInit } from '@angular/core';
import { AsesoriasService } from 'src/app/services/asesorias.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-misasesorias',
  templateUrl: './misasesorias.component.html',
  styleUrls: ['./misasesorias.component.scss']
})
export class MisasesoriasComponent implements OnInit {

  asesorias: any;

  constructor(private asesoriasS: AsesoriasService) { }

  ngOnInit(): void {
    this.getAll();
  }

  // Get All asesorias
  getAll() {
    this.asesoriasS.getAll().subscribe(res => {
      this.asesorias = res;
    })
  }

  // Delete asesoria
  deleteAsesoria(idA: any) {
    Swal.fire({
      title: '¿Estás seguro de querer eliminar esta asesoría?',
      text: "No podrás revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.asesoriasS.deleteA(idA).subscribe(res => {
          if (res) {
            Swal.fire(
              '¡Eliminado!',
              'La asesoría ha sido cancelada.',
              'success'
            )
          this.getAll();
          }
        });
      }
    })
    
    
  }

}
