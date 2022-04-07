import { CadastroService } from 'src/services/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListProductComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(private cadastro: CadastroService) {}

  ngOnInit(): void {
    this.cadastro.listarProdutos().subscribe((produtos) => {
      console.log(produtos);
      this.produtos = produtos;
    });
  }
}
