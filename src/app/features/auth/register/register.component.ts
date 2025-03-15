import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) { }

  onRegister(form: any): void {
    if (form.valid) {
      this.authService.register(form.value).subscribe(() => {
        alert('Registration successful!');
        this.router.navigate(['/inventory']);
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
