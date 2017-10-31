import { BookshttpService } from '../../services/bookshttp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;
  aLibrosAsinc: any;

  constructor(private bookshttpService: BookshttpService) { }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  buscar() {

    this.bookshttpService.getBooks(this.sClave).subscribe(
      (response) => {this.aLibros = response; } ,
      (error) => {console.log(error); }
    )
    ;

    this.sClave = '';
  }
}
