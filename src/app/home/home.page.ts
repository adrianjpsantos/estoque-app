import { ClientesService } from './../services/clientes.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Cliente } from '../models/Cliente.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, RouterLink],
})
export class HomePage {
  constructor(private clientesService: ClientesService) {
    this.buscarClientes();
  }

  listaClientes : Cliente[] = []

  buscarClientes(){
    this.clientesService.getAll().subscribe(dados =>{
      this.listaClientes = dados;
    });
  }

  deletarCliente(id :any){
    this.clientesService.delete(id).subscribe(dados =>{
      alert("Fulano Deletedo");
    });
  }
}
