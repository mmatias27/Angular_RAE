import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  curso: string;

  constructor() { }

  ngOnInit() {
    this.curso = 'Angular 4';
  }

}
