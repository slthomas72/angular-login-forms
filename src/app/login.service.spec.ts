import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    // Set up the testing module
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService); // Inject the LoginService
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Ensure the service is created
  });

  // Test successful login scenario
  it('should resolve to true for correct credentials', async () => {
    const result = await service.login('admin', 'admin'); // Wait for the Promise to resolve
    expect(result.loginSuccessful).toBeTrue(); // Check success
  });

  // Test failed login scenario
  it('should resolve to false for incorrect credentials', async () => {
    const result = await service.login('wrong', 'wrong'); // Wait for the Promise to resolve
    expect(result.loginSuccessful).toBeFalse(); // Check failure
  });
});
