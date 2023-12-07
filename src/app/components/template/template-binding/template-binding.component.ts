import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Jonathan Guimarães";
  public age = 21;
  public isDisabled = false;




  public sum (){
   return this.age++;
  }
  public sub (){
    return this.age--;
   }
}
