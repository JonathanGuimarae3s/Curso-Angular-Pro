import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-new-component></app-new-component>
  <app-title *ngI;f="destruir" title="Ola Mundo"></app-title>
  <div>
    <button (click)="destruirComponent()">Destruir</button>
  </div>
  <router-outlet></router-outlet>

  {{ valor }} <button (click)="adicionar()">Adicionar</button>
  <hr />
  <app-title title="Data binding"></app-title>
  <app-data-binding> </app-data-binding>
  <app-title title="Diretivas estruturais"></app-title>
  <app-diretivas-estruturais></app-diretivas-estruturais>

  <app-diretivas-atributos></app-diretivas-atributos> -->
  <app-input [contador]=teste></app-input>
  <button (click)="addValue()">add</button>



<ng-template [ngIf]="getDados">

<h1>{{getDados.nome}}</h1>
<h1>{{getDados.idade}}</h1>


</ng-template>

  <app-output (enviarDados)="setDados($event)"></app-output>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked {
  public getDados: {
    nome: string, idade: number
  } | undefined;
  public teste = 0
  title = 'cursoAngular';
  valor: number = 1;
  public destruir: boolean = true;
  constructor() {

  }
  public setDados(event: {
    nome: string, idade: number
  }) {
    this.getDados = event;
  }

  public destruirComponent() {
    this.destruir = false;
  }
  ngOnInit(): void {
    setTimeout(() => {

      console.log(1)
    }, 5000)
  }
  public adicionar(): number {
    return this.valor += 1;
  }


  ngAfterContentChecked(): void {
    // é invocado quando há uma alteraçao no conteudo
    console.log("AfterContentChecked");

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");

  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");

  }
  ngAfterViewInit(): void {
    // invocado quando tem alguma alteração concreta na view
    console.log("ngAfterViewInit");

  }
  addValue() {
    this.teste += 1;
  }
  ngDoCheck(): void {
    // sempre fica verificando se ha alguma alteração
    console.log("ngDoCheck");


  }



}




