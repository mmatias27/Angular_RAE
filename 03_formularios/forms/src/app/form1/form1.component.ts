import { Usuario, Impresora, Departamento } from './form1.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  user: Usuario;
  impresoraSelect: Impresora;
  aImpresoras: Array<Impresora>;
  dptoSelect: Departamento;
  aDepartamentos: Array<Departamento>;
  isColor: boolean;
  isClaro: boolean;

  constructor() { }

  ngOnInit() {
    this.user = {nombre: '', apellidos: '',  telefono: ''};
    this.aImpresoras = [
      {nombre: 'HP', codigo: '001'},
      {nombre: 'Brother', codigo: '002'},
      {nombre: 'Cannon', codigo: 3},
      {nombre: 'Lexmark', codigo: '004'}
    ];
    this.aDepartamentos = [
      {nombre: 'Marketing', codigo: 'MKT'},
      {nombre: 'Ventas', codigo: 'VNT'},
      {nombre: 'Finanzas', codigo: 'FNZ'},
      {nombre: 'Sistenas', codigo: 'SST'}
    ];
  }

  enviar() {}

  borrar() {}

  avisarPrint() {}

  avisarDepartamento() {}
}
