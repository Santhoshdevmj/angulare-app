import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  name = '';
  email = '';
  post = '';
  submittedMessages: { name: string; email: string; post: string }[] = [];

  onSubmit() {
    if (this.name && this.email && this.post) {
      this.submittedMessages.push({ name: this.name, email: this.email, post: this.post });
      this.name = '';
      this.email = '';
      this.post = '';
    }
  }
}
