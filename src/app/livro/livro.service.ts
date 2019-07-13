import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LivroService {

  private apiRoot = 'http://localhost:81/';

  constructor(private http: HttpClient) { }


  getLivros() {
    return this.http.get(this.apiRoot.concat('livros/'));
  }

  addLivro(titulo : String, autor: String, ano_escolar: String, valor : number) {
    return this.http.post(
      this.apiRoot.concat('livros/'),
      { titulo, autor, ano_escolar, valor }
    );
  }


  comprar(livro_id : number) {
    return this.http.post(
      this.apiRoot.concat(`livros/comprar/`),
      {livro_id}
    );
  }

  minhasCompras() {
    return this.http.get(this.apiRoot.concat('minhas-compras/'));
  }

  meusLivros() {
    return this.http.get(this.apiRoot.concat('meus-livros/'));
  }


  deleteLivro(id: number) {
    return this.http.delete(this.apiRoot.concat(`livros/${id}/`));
  }
}