import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro/livro.service';

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.component.html',
  styleUrls: ['./minhas-compras.component.css']
})
export class MinhasComprasComponent implements OnInit {

  livros : any;
  error: any;
  constructor(private livroService: LivroService) {
    this.getLivros();
  }

  ngOnInit() {
  }

  getLivros() {
      this.livroService.minhasCompras().subscribe(
        success => this.livros =  success,
        error => this.error = error
      );
  }

}
