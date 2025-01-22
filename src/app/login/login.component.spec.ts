import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import { LoginService } from '../login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: any;
  let mockRouter: any;

  beforeEach(async () => {
    // Mock dependencies
    mockLoginService = {
      login: jasmine.createSpy('login').and.returnValue(Promise.resolve({ loginSuccessful: true })),
    };
    mockRouter = {
      navigate: jasmine.createSpy('navigate'), // Mock navigate method
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent], // Declare the component being tested
      imports: [ReactiveFormsModule], // Import Reactive Forms
      providers: [
        { provide: LoginService, useValue: mockLoginService }, // Provide the mock LoginService
        { provide: Router, useValue: mockRouter }, // Provide the mock Router
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent); // Create the test instance
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy(); // Test that the component is created
  });

  it('should call loginService.login on valid form submission', async () => {
    component.loginForm.setValue({ username: 'admin', password: 'admin' }); // Set valid form values
    await component.onSubmit(); // Simulate form submission
    expect(mockLoginService.login).toHaveBeenCalledWith('admin', 'admin'); // Test that the login method was called
  });

  it('should navigate to /dashboard on successful login', async () => {
    component.loginForm.setValue({ username: 'admin', password: 'admin' }); // Set valid form values
    await component.onSubmit(); // Simulate form submission
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']); // Test that navigation occurs
  });

  it('should set loginFailed to true on failed login', async () => {
    mockLoginService.login.and.returnValue(Promise.resolve({ loginSuccessful: false })); // Mock a failed login
    component.loginForm.setValue({ username: 'wrong', password: 'wrong' }); // Set invalid form values
    await component.onSubmit(); // Simulate form submission
    expect(component.loginFailed).toBeTrue(); // Test that loginFailed is true
  });
});
