import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/produto.model';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:3001/produtos";

  listarProdutos(){
    
    return this.http.get<Produto[]>(this.URL);
  }

  //buscarPorId()

  //incluir()

  //atualizar()

  //excluir()
}
