import { Component, OnInit } from '@angular/core';
import { AsesoriasService } from 'src/app/services/asesorias.service';

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

}
