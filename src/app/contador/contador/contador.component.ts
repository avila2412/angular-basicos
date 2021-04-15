import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template: 
    `
    <h1>{{titulo}}</h1>
    <h3>La base es :<strong>{{base}}</strong></h3>
    <button (click)= "acumular(base)" >+5</button>
    <span>
    {{numero}}
    </span>
    <button (click)="acumular(-base)" >-5</button>
    `
   // styleUrls: ['./app.component.css']
  })
export class ContadorComponent{
    titulo = 'Contador App';
  numero :number=10;
  base   :number=5;
  acumular(valor:number){
    this.numero+=valor;
  }
  
}