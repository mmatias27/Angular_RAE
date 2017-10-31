import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular facil',
      'Angular avanzado',
      'Encuantros con Angular',
      'Angula... la continuación'
    ];
   }

  buscar(clave: string) {
    return this.aLibros;
  }

  buscarAsync(clave: string) {
    return setTimeout (() =>  this.aLibros, 1000);
  }
}
