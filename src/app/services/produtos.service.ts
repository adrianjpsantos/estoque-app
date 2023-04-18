import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = 'http://localhost:3000/produtos';
  constructor(private http: HttpClient) {}

  create(produto: Produto){;
    return this.http.post(this.url,produto)
  }

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id: number){
    this.http.get(this.url + '/' + id);
    return this.http.get(`${this.url}/${id}`);
  }

  update(produto:Produto){
    return this.http.put(`${this.url}/${produto.id}`,produto);
  }

  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
