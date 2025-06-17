import { Component } from '@angular/core';
import { MessageFormComponent } from './message-form/message-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessageFormComponent],
  template: `<app-message-form></app-message-form>`
})
export class AppComponent {}

