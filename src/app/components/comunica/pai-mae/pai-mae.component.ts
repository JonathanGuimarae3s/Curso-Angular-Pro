import { Component, signal } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pai-mae',
  standalone: true,
  imports: [InputComponent, CommonModule, OutputComponent],
  templateUrl: './pai-mae.component.html',
  styleUrl: './pai-mae.component.scss'
})
export class PaiMaeComponent {
public outputName = signal('Output : sem valor');









}
