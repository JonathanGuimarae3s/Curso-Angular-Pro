import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from "./components/template/template-binding/template-binding.component";
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateFlowComponent } from './components/template/template-flow/template-flow.component';
import { DeferrableViewsComponent } from './components/deferrable-views/deferrable-views/deferrable-views.component';
import { SignalsComponent } from './components/signals/signals.component';
import { PaiMaeComponent } from './components/comunica/pai-mae/pai-mae.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Curso Angular </h1>
    <!-- <app-template-binding/>
    <app-template-variables/>
    <app-template-flow> -->

    <!-- <app-deferrable-views/> -->

    <app-signals/>
    <app-pai-mae/>

  `,
  imports: [CommonModule, RouterOutlet, NewComponentComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateFlowComponent, DeferrableViewsComponent, SignalsComponent, PaiMaeComponent]
})
export class AppComponent {

}
