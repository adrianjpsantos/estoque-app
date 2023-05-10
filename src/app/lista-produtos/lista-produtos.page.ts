import { ProdutosService } from './../services/produtos.service';
import { Produto } from './../models/Produto.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class ListaProdutosPage {
  constructor(private produtosService: ProdutosService) {
    this.buscarProdutos();
  }
  listaProdutos: Produto[] = [];

  buscarProdutos() {
    this.produtosService.getAll().subscribe((dados) => {
      this.listaProdutos = dados as Produto[];
    });
  }

  deletarProduto(id: any) {
    this.produtosService.delete(id).subscribe((dados) => {
      alert(`Deletado : ${dados.titulo}`);
    });
  }
}
