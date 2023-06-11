import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  
  hide = 'Меню'
  
  invisibility: boolean = true

  toggle() {
    this.invisibility = !this.invisibility
  }
}
