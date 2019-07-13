import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro/livro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  livros : any;
  error: any;
  constructor(private livroService: LivroService) {
    this.getLivros();
  }

  ngOnInit() {
  }

  getLivros() {
      this.livroService.getLivros().subscribe(
        success => this.livros =  success,
        error => this.error = error
      );
  }

  publicarLivro(titulo : String, autor: String, ano_escolar: String, valor : any) {
      this.livroService.addLivro(titulo, autor, ano_escolar, parseFloat(valor)).subscribe(
        success => {alert("Livro publicado com sucesso"); this.getLivros()},
        error => this.error = error
      );
  }

  comprar(id_livro : any) {
    this.livroService.comprar(parseInt(id_livro)).subscribe(
      success => {alert("Livro comprado com sucesso"); this.getLivros()},
      error => this.error = error
    );
}

}
