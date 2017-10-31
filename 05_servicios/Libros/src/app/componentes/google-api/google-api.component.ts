import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Component({
  selector: 'app-google-api',
  templateUrl: './google-api.component.html',
  styleUrls: ['./google-api.component.css']
})
export class GoogleApiComponent implements OnInit {

    sClave: string;
    aLibros: Array<string>;
    aLibrosAsinc: any;

    constructor(private http: Http) { }

    ngOnInit() {
      this.sClave = '';
      this.aLibros = [];
    }

    buscar() {
      // ASincronica mediante RxJs
      // this.aLibros =
      this.http.get(URL + this.sClave).subscribe(
        (response) => {
          const data = response.json();
          data.items.forEach(element => {
            this.aLibros.push(element.volumeInfo.title);
          });
          // for (let i = 0; i < data.items.length; i++) {
          //   const bookTitle = data.items[i].volumeInfo.title;
          //   this.aLibros.push(bookTitle);
          // }
        }, // funcion OK
        (error) => { console.log(error);
        } // funcion error
      ); // Fin del observable
      // this.aLibrosAsinc = this.booksService.buscarAsync(this.sClave);
      // console.log(this.aLibrosAsinc);
      this.sClave = '';
    }
  }
