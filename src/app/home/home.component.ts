import { Component, OnInit } from '@angular/core';

const LISTA_DE_PESSOAS = [
  {
    id: 1,
    nome: "Paulo",
    cpf: "123456789",
    foto: "/assets/paulo.webp"
  },
  {
    id: 2,
    nome: "Ana",
    cpf: "98754333",
    foto: "/assets/ana.jfif"
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaDePessoas = LISTA_DE_PESSOAS;

  constructor() { }

  ngOnInit(): void {
  }

}
