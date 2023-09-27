import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public list: Array<{ nome: string, idade: number }> =
    [
      { 'nome': 'Jonathan Guimarães', 'idade': 1 },
      { 'nome': 'Jonathan Guimarães', 'idade': 1 },
      { 'nome': 'Jonathan Guimarães', 'idade': 1 },
    ]
  public name:string='';

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;

      }
    }, 2000)
  }
  public onClickAddList() {
    this.list.push({ 'nome': "kelly", 'idade': 11 })
  }

}
