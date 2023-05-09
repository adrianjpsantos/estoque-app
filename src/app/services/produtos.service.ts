import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Produto } from '../models/Produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  url = 'http://localhost:3000/produtos';
  constructor(private http: HttpClient) {}

  create(produto: Produto) :Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url).pipe(
      map((retorno) => retorno),
      catchError((erro) => {
        if (erro['status'] === 404)
          return this.exibirErro(`Erro: ${erro.status}, Nada Encontrado`);
        else return this.exibirErro(erro);
      })
    );
  }

  getOne(id: number) : Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/${id}`);
  }

  update(produto: Produto) : Observable<Produto> {
    return this.http.put<Produto>(`${this.url}/${produto.id}`, produto);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  exibirErro(erro: any): Observable<any> {
    alert(erro);
    console.log(erro);
    return EMPTY;
  }
}
