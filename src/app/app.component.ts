import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
            <app-switch></app-switch>
            <router-outlet></router-outlet>
            <app-footer></app-footer>`
})
export class AppComponent {

}
