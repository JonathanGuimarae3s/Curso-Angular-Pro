import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of,delay } from 'rxjs';

@Component({
  selector: 'app-template-flow',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './template-flow.component.html',
  styleUrl: './template-flow.component.scss'
})
export class TemplateFlowComponent {
  public isTrue = true;


  public loadingData: Observable<string[]> = of(['item 1', 'item 2', 'item 3']).pipe(delay(3000));
}
