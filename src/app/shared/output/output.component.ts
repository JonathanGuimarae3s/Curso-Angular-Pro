import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "jon", idade: 20 },
    { nome: "jon", idade: 28},
    { nome: "jon", idade: 27},
  ]
  public getDados(index: number) {
this.enviarDados.emit(this.list[index]); //ennviando os dados para fora do component
  }
}
