import { Component, OnInit } from '@angular/core';
// Vista solo válida en Angular 4

@Component({
  selector: 'app-lista4',
  templateUrl: './lista4.component.html',
  styleUrls: ['./lista4.component.css']
})
export class Lista4Component implements OnInit {
  aIdeas: Array<string>;
  sIdea: string;

  constructor() { }

  ngOnInit() {
    this.aIdeas = [];
  }

  btnAdd() {
    this.aIdeas.push(this.sIdea);
    this.sIdea = '';
  }
}
