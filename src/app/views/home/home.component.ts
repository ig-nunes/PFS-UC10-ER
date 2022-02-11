import { Component, OnInit } from '@angular/core';
import { Celulares } from 'src/app/models/celulares';
import { Computadores } from 'src/app/models/computadores';
import { Consoles } from 'src/app/models/consoles';
import { Jogos } from 'src/app/models/jogos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  listaComputadores = [] as Computadores[];
  listaConsoles = [] as Consoles[];
  listaCelulares = [] as Celulares[];
  listaJogos = [] as Jogos[];

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos() {
    this.produtoService.getProdutosComputadores().subscribe( (computadoresRecebidos: Computadores[]) => {
      this.listaComputadores = computadoresRecebidos;
      console.log(this.listaComputadores);
    } ),

    this.produtoService.getProdutosConsoles().subscribe( (consolesRecebidos: Consoles[]) => {
      this.listaConsoles = consolesRecebidos;
      console.log(this.listaConsoles);
    } ),

    this.produtoService.getProdutosCelulares().subscribe( (celularesRecebidos: Celulares[]) => {
      this.listaCelulares = celularesRecebidos;
      console.log(this.listaCelulares);
    } ),

    this.produtoService.getProdutosJogos().subscribe( (jogosRecebidos: Jogos[]) => {
      this.listaJogos = jogosRecebidos;
      console.log(this.listaJogos);
    } )
  }

}
