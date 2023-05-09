import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.page.html',
  styleUrls: ['./create-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CreateProdutoPage {
  titulo = '';
  descricao = '';
  preco = '';
  nome_image = '';

  constructor(
    private produtosServices: ProdutosService,
    private route: Router
  ) {}

  salvar() {
    if (this.titulo != '' && this.descricao != '' && this.preco != '' && this.nome_image != '')
    {
      const produto: Produto = {
        titulo: this.titulo,
        descricao: this.descricao,
        preco: this.preco,
        nome_image: this.nome_image,
      };

      this.produtosServices.create(produto).subscribe(dados =>{
        console.log(`Produto Inserido: ${dados.id}`);
        this.route.navigateByUrl('/produtos');
      })
    }
  }
}
