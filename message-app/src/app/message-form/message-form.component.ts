import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  name = '';
  email = '';
  post = '';
  submittedMessages: { name: string; email: string; post: string }[] = [];

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.name && this.email && this.post) {
      const message = {
        name: this.name,
        email: this.email,
        post: this.post
      };

      this.http.post('http://3.6.205.240:3000/messages', message).subscribe({
        next: () => {
          console.log('Message sent to backend');
          this.submittedMessages.push(message); // Optional: For frontend display
          this.name = '';
          this.email = '';
          this.post = '';
        },
        error: (err) => {
          console.error('Error submitting message:', err);
        }
      });
    }
  }
}
