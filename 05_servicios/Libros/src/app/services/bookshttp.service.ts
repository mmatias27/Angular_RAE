import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Injectable()
export class BookshttpService {

  aLibros: Array<string>;

  constructor(private http: Http) {
    this.aLibros = [];
   }

  buscar(clave: string) {

    this.http.get(URL + clave).subscribe(
      (response) => {
        const data = response.json();
        data.items.forEach(element => {
          this.aLibros.push(element.volumeInfo.title);
        });
        console.log(this.aLibros);
        // }
      }, // funcion OK
      (error) => { console.log(error);
      } // funcion error
    ); // Fin del observable

  }


  // Devolvemos un observable que manipulamos con el operador map
  getBooks(title: string) {
        return this.http.get(URL + title).map(
          response => this.extractTitles(response));
      }

       // Devolvemos un observable que manipulamos con el operador map
      private extractTitles(response: Response) {
        return response.json().items.map(book => book.volumeInfo.title);
      }
}
