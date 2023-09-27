import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';
//@input remete a entrada de dados
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = "Bem-vindo";
  constructor() { }
  ngOnInit(): void {

  }
  ngOnChanges() {
    // sempre é invocado qnd vem um dado de fora
    // alert('foi alterado')

  }
  ngOnDestroy(): void {
    console.log("MORREU");

  }
}

