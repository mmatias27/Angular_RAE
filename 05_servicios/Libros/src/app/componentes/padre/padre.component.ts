import { BooksService } from './../../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;
  aLibrosAsinc: any;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  buscar() {
    // Sincronica
    // this.aLibros = this.booksService.buscar(this.sClave);
    // ASincronica
    this.aLibrosAsinc = this.booksService.buscarAsync(this.sClave);
    console.log(this.aLibrosAsinc);
    this.sClave = '';
  }
}
