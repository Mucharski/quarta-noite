import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  URL = 'http://localhost:3001/produtos';

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URL);
  }

  listById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.URL}/${id}`);
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.URL}`, produto);
  }

  atualizar(produto: Produto, id: number): Observable<Produto> {
    return this.http.put<Produto>(`${this.URL}/${id}`, produto);
  }

  excluir(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.URL}/${id}`);
  }
}
