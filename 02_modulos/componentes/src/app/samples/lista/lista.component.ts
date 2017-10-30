import { Component, OnInit } from '@angular/core';
const VACIO = '';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  aIdeas: Array<string>;
  sIdea: string;

  constructor() { }

  ngOnInit() {
    this.aIdeas = [];
  }

  btnAdd() {
    this.aIdeas.push(this.sIdea);
    this.sIdea = VACIO;
  }
}
