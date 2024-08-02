import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello Namaste {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
