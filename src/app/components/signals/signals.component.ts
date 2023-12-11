import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public teste = signal("Jonathan Guimaraes");
  public update() {
    return this.teste.set("Joanthan")
  }
  public update2V() {
    this.teste.update(() => {
      return "Jonahtanoo"

    })
  }
}
