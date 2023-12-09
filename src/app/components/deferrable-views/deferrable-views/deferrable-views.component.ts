import { Component } from '@angular/core';
import { NewComponentComponent } from '../../new-component/new-component.component';
import { Observable, of, delay } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [NewComponentComponent, CommonModule],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {


  public isTrue = true;
  public loadingData: Observable<string[]> = of(['item 1', 'item 2', 'item 3']).pipe(delay(3000));
}
