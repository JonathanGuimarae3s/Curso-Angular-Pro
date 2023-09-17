import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked {
  title = 'cursoAngular';
  valor: number = 1;
  public destruir: boolean = true;
  constructor() {

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
  ngDoCheck(): void {
    // sempre fica verificando se ha alguma alteração
    console.log("ngDoCheck");


  }



}




