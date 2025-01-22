import { Injectable } from '@angular/core';

export interface ILoginResult {
  loginSuccessful: boolean; // Indicates whether the login was successful
}

@Injectable({
  providedIn: 'root' // Makes this service available throughout the app
})
export class LoginService {
  constructor() {}

  // Method to validate login credentials and return a Promise
  login(username: string, password: string): Promise<ILoginResult> {
    return new Promise((resolve) => {
      // Simulate login logic
      if (username === 'admin' && password === 'admin') {
        resolve({ loginSuccessful: true }); // Simulate successful login
      } else {
        resolve({ loginSuccessful: false }); // Simulate failed login
      }
    });
  }
}
