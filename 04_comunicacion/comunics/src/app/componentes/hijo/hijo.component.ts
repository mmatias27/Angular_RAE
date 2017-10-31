import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() name: string;
  @Output() evtBorrar = new EventEmitter<string>();
  // No se puede declarar y luego inicializar en  ngOnItit
  // Si podría inicializarse en el construcctor
  sNamePreferido: string;

  constructor() {
  }

  ngOnInit() {
    this.name = '';
    this.sNamePreferido = '';
  }

  btnBorrar() {
    this.name = '';
    this.evtBorrar.emit(this.sNamePreferido);
  }
}
