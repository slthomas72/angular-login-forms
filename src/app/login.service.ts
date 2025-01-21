import { Injectable } from '@angular/core'; // Import Angular's Injectable decorator
import { Observable, of } from 'rxjs'; // Import Observable to simulate asynchronous behavior

@Injectable({
  providedIn: 'root' // Makes this service available throughout the app
})
export class LoginService {
  constructor() {} // Constructor doesn't need any dependencies for this example

  // Method to simulate login logic
  login(username: string, password: string): Observable<boolean> {
    // Mock logic: Returns true if both username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
      return of(true); // Simulate a successful login
    }
    return of(false); // Simulate a failed login
  }
}
