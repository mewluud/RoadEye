import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form Submitted!', contactForm.value);
      // Handle form submission (e.g., send the form data to a backend server)
    }
  }
}
