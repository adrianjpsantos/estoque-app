import { ClientesService } from './../services/clientes.service';
import { Cliente } from './../models/Cliente.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.page.html',
  styleUrls: ['./create-client.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CreateClientPage {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmaSenha: string = '';

  constructor(private clienteService: ClientesService, private route: Router) {}

  salvar() {
    if (this.senha == this.confirmaSenha && this.senha != '') {
      console.log(this.nome);
      const cliente: Cliente = {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
      };
      this.clienteService.create(cliente).subscribe((dados) => {
        alert(`Cliente Inserido: ${dados.id}`);
        this.route.navigateByUrl('/');
      });

    } else {
      alert('Senhas não conferem');
    }
  }
}
