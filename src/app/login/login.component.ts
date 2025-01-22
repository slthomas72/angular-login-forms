import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'; // Import the LoginService

@Component({
  selector: 'app-login', // Defines the tag name for this component
  templateUrl: './login.component.html', // Links to the HTML template for this component
  styleUrls: ['./login.component.css'] // Links to the CSS file for this component
})
export class LoginComponent {
  loginForm: FormGroup; // This variable will hold the form and its fields
  loginFailed: boolean = false; // Boolean flag to track login failures

  // The constructor sets up dependencies needed for this component
  constructor(
    private fb: FormBuilder, // Dependency to create reactive forms
    private loginService: LoginService, // Dependency to handle login logic
    private router: Router // Dependency to navigate between pages
  ) {
    // Initialize the form with two fields: username and password
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], // Username is required
      password: ['', [Validators.required]] // Password is required
    });
  }

  // This method is triggered when the user submits the form
  onSubmit() {
    // Check if the form is valid
    if (this.loginForm.valid) {
      // Extract the username and password from the form
      const { username, password } = this.loginForm.value;

      // Call the login method and handle the Promise
      this.loginService.login(username, password).then((result) => {
        if (result.loginSuccessful) {
          console.log('Login successful!'); // Log a success message
          this.loginFailed = false; // Reset the login failure flag
          this.router.navigate(['/dashboard']); // Redirect to the dashboard page
        } else {
          console.error('Login failed.'); // Log a failure message
          this.loginFailed = true; // Set the login failure flag to true
        }
      });
    }
  }
}
