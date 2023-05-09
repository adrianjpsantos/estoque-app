import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClientesService } from '../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/Cliente.model';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.page.html',
  styleUrls: ['./update-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UpdateClientePage implements OnInit {
  id: number = 0;
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmaSenha: string = '';

  constructor(private clienteService: ClientesService, private route: Router,private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.clienteService.getOne(this.id).subscribe(cliente =>{
      this.nome = cliente.nome as string;
      this.email = cliente.email as string;
    });
  }

  salvar() {
    if (this.senha == this.confirmaSenha && this.senha != '') {
      console.log(this.nome);
      const cliente: Cliente = {
        id: this.id,
        nome: this.nome,
        email: this.email,
        senha: this.senha,
      };
      this.clienteService.update(cliente).subscribe((dados) => {
        alert(`Cliente Editado: ${dados}`);
        this.route.navigateByUrl('/');
      });

    } else {
      alert('Senhas não conferem');
    }
  }

}
