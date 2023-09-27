import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public heightPx: string = '20px';
  public backgroundColor: string = 'red';
  ngOnInit(): void {
    setInterval(() => {
      this.valor ? this.valor = false : this.valor = true
      if (this.heightPx == '20px') {
        this.heightPx = '50px';
        this.backgroundColor = 'blue';

      } else {

        this.backgroundColor = 'red';
        this.heightPx = '20px';

      }
    }, 3000)
  }

}
