import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.page.html',
  styleUrls: ['./update-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class UpdateProdutoPage implements OnInit {
  id: number = 0;
  titulo = '';
  descricao = '';
  preco = '';
  nome_image = '';

  constructor(
    private produtosServices: ProdutosService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.produtosServices.getOne(this.id).subscribe((produto) => {
      this.titulo = produto.titulo as string;
      this.descricao = produto.descricao as string;
      this.preco = produto.preco as string;
      this.nome_image = produto.nome_image as string;
    });
  }

  salvar() {
    if (
      this.titulo != '' &&
      this.descricao != '' &&
      this.preco != '' &&
      this.nome_image != ''
    ) {
      const produto: Produto = {
        id: this.id,
        titulo: this.titulo,
        descricao: this.descricao,
        preco: this.preco,
        nome_image: this.nome_image,
      };

      this.produtosServices.update(produto).subscribe((dados) => {
        alert(`Produto Modificado: ${dados.id}`);
        this.route.navigateByUrl('/produtos');
      });
    }
  }
}
