import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro/livro.service';

@Component({
  selector: 'app-meus-livros',
  templateUrl: './meus-livros.component.html',
  styleUrls: ['./meus-livros.component.css']
})
export class MeusLivrosComponent implements OnInit {

  livros : any;
  error: any;
  constructor(private livroService: LivroService) {
    this.getLivros();
  }

  ngOnInit() {
  }

  getLivros() {
      this.livroService.meusLivros().subscribe(
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

}
