import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celulares } from '../models/celulares';
import { Computadores } from '../models/computadores';
import { Consoles } from '../models/consoles';
import { Jogos } from '../models/jogos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlComputadores = "http://localhost:3000/computadores";
  urlConsoles = "http://localhost:3000/consoles";
  urlCelulares = "http://localhost:3000/celulares";
  urlJogos = "http://localhost:3000/jogos"

  constructor(private httpClient: HttpClient) { }

  getProdutosComputadores(): Observable<Computadores[]> {
    
    return this.httpClient.get<Computadores[]>(this.urlComputadores)
  
  };

  getProdutosConsoles(): Observable<Consoles[]> {
    
    return this.httpClient.get<Consoles[]>(this.urlConsoles)
  
  };

  getProdutosCelulares(): Observable<Celulares[]> {
    
    return this.httpClient.get<Celulares[]>(this.urlCelulares)
  
  };

  getProdutosJogos(): Observable<Jogos[]> {
    
    return this.httpClient.get<Jogos[]>(this.urlJogos)
  
  }


}
